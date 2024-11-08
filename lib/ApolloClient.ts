import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  const CMS_URL = new URL('/api/graphql', process.env.NEXT_PUBLIC_CMS_URL).toString()
  
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: CMS_URL,
      credentials: "include",
      fetchOptions: { cache: "no-store" },
    }),
  });
});