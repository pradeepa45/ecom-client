import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  uri: `${process.env.NEXT_PUBLIC_CMS_URL}`,
  cache: new InMemoryCache(),
  credentials: "include",
});

export default client;
