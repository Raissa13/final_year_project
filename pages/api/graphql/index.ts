import { createProxyMiddleware } from "http-proxy-middleware";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";
import nextConnect from "next-connect";
import isNullOrUndefined from "../../../src/utils/isNullOrUndefined";

const apiRoute = nextConnect({
  /* ... */
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
// Middleware for checking login
apiRoute.use(async (req, res, next) => {
  const session = await getSession({ req });
  if (session) {
    const newHeaders = {
      ...req.headers,
      // authorization: `Bearer ${session.token}`,
      "x-hasura-admin-secret":process.env.HASURA_SECRET
    };
    req.headers = newHeaders;
    return next();
  }

  const { authorization } = req.headers;

  if (!isNullOrUndefined(authorization)) {
    return next();
  }

  return res.status(401).send({ status: "Failed", req });
});

// the graphql proxy
apiRoute.use(
  createProxyMiddleware({
    target: process.env.HASURA_URL as string, //the data server
    changeOrigin: true,
    pathRewrite: {
      "^/api/graphql": "", // remove base path
    },
  }) as () => {}
);

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
