import { GraphQLClient } from "graphql-request";
import { getSession } from "next-auth/react";

/**
 * @param Context passed into getServerSideProps
 * You should always use this function for making request queries for authentication purposes
 * @returns {Promise<any>} Returns a graphql client for queries
 **/
const serverSideClient = async (
  Context: any,
  query: any,
  variables?: any
): Promise<any> => {
  const session = await getSession(Context);
  const host = process.env.host;
  if (session?.token) {
    const client = new GraphQLClient(`${host}/api/graphql`);
    client.setHeader("Authorization", `Bearer ${session?.token}`);
    return client.request(query, variables);
  } else return null;
};
export default serverSideClient;
