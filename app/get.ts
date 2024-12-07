export default async function fetchFromCMS(query: string, variables?: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    cache: "no-store",
    credentials: "include",
  });

  if (!res.ok) {
    console.error(`Error: ${res.status} - ${res.statusText}`);
  }

  const { data } = await res.json();

  return data;
}
