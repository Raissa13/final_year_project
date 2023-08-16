import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt, { JwtPayload } from "jsonwebtoken";
import { getUserInfo } from "../../../src/utils/authHelpers";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        // console.log(credentials);

        const { userTag , password } = credentials as {
          userTag: string;
          password:string
        };
        // perform you login logic
        // find out user from db

        const userInfo = await getUserInfo(userTag);
        if (userInfo.length === 0) {
          throw new Error("There is no account with that userTag");
        }

         
          if(userInfo[0].Password !== password ) {
            throw new Error("Wrong password contact admin");
          }


        return {
          userTag: userTag,
          name: userInfo[0].FirstName + " " + userInfo[0].LastName,
          id: userInfo[0].Id,
          role: userInfo[0].Role.Name,
          info: userInfo[0].Info,
          roleId: userInfo[0].RoleId,

        };
      },
    }),
  ],
  jwt: {
    secret: process.env.SECRET,
    encode: async ({ secret, token }) => {
      // console.log("secreti", secret);
      // console.log("token encoding", token);

      const jwtClaims: Record<string, unknown> = {
        ...token,
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
        "https://hasura.io/jwt/claims": token?.role
          ? {
              "x-hasura-allowed-roles": [token?.role],
              "x-hasura-default-role": token?.role,
              "x-hasura-role": token?.role,
            }
          : undefined,
      };

      const encodedToken = jwt.sign(jwtClaims, secret, {
        algorithm: "HS256",
      });
      return Promise.resolve(encodedToken);
    },
    decode: async ({ secret, token }) => {
      if (token === undefined) return Promise.resolve(null);
      const decoded: JwtPayload = <JwtPayload>(
        jwt.verify(token as string, secret)
      );
      return Promise.resolve(decoded);
    },
  },
  pages: {
    signIn: "/auth/signin",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    jwt(params) {
      // update token
      if (params.user?.userTag) {
        params.token.userTag = params.user.userTag;
        params.token.name = params.user.name;
        params.token.id = params.user.id;
        params.token.info = params.user.info;
        params.token.role = params.user.role;
        params.token.roleId = params.user.roleId;

      }
      return params.token;
    },
    session({ session, token }) {
      const secret = process.env.SECRET as string;
      // console.log(session);

      const encodedToken = jwt.sign(token, secret, { algorithm: "HS256" });

      session.token = encodedToken;
      session.userTag = token.userTag;
      session.role = token.role;
      session.name = token.name;
      session.id = token.id;
      session.info = token.info;
      session.roleId = token.roleId;

      return session;
    },
  },
};

export default NextAuth(authOptions);
