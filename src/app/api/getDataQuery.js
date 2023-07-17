import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export async function getDataQueryServer(query, accessToken) {
  try {
    if (accessToken) {
      const client = new ApolloClient({
        link: new HttpLink({
          uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }),
        cache: new InMemoryCache(),
        queryDeduplication: false,
        defaultOptions: {
          watchQuery: {
            fetchPolicy: "cache-and-network",
          },
        },
      });

      const { data } = await client.query({
        query: query,
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
