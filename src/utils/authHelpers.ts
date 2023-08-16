import { GraphQLClient } from "graphql-request";
import { GetUserLoginDocument, GetUserLoginQuery } from "../generated/graphql";
const adminToken = process.env.HASURA_SECRET;
const client = new GraphQLClient(process.env.HASURA_URL as string);
client.setHeader("x-hasura-admin-secret", adminToken as string);

interface userInfo {
  userTag: string;
  lastName: string;
  firstName: string;
  country: string;
  phoneNumber: string;
  dob: string;
}

export async function getUserInfo(userTag: string) {
  const data: GetUserLoginQuery = await client.request(GetUserLoginDocument, {
    userTag: userTag,
  });
  return data.User;
}
