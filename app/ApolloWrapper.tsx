"use client";
// ^ this file needs the "use client" pragma

import { HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

// have a function to create a client for you
function makeClient() {
  const CMS_URL = new URL(
    "/api/graphql",
    process.env.NEXT_PUBLIC_CMS_URL,
  ).toString();

  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: CMS_URL,
    fetchOptions: { cache: "no-store" },
    // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
    credentials: "same-origin",
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
