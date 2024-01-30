import { ApolloLink, HttpLink } from "@apollo/client";
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";

import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

import { getAccessToken } from "app/api/getAccessToken";

const uri = process.env.NEXT_PUBLIC_GRAPHQL_URI;

const httpLink = new HttpLink({ uri: uri });

const authLink = new ApolloLink(async (operation, forward) => {
  const token = await getAccessToken();
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });

  return forward(operation);
});
export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: authLink.concat(httpLink),
  });
});
