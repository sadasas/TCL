import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const uri = process.env.NEXT_PUBLIC_GRAPHQL_URI;
export async function getDataQueryServer(query, accessToken) {
  if (accessToken) {
    const client = new ApolloClient({
      link: new HttpLink({
        uri: uri,
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
}
