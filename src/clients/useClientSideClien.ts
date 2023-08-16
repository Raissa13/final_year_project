import { GraphQLClient } from "graphql-request";

/**
 * You should always use this hook/function for making request queries for authentication purposes
 **/
const useClientSide = (byPassAuth?: boolean) => {
  const client = new GraphQLClient(
    byPassAuth ? "/api/graphql/register" : "/api/graphql"
  );
  return client;
};
export default useClientSide;
