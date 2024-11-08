import { cookies } from "next/headers";
import { CMS_URL } from "./api/auth/signup/route";

export const authenticatedUser = `
  query User {
    authenticatedItem {
      ... on User {
        id
        name
        email
        isAdmin
        isCustomer
        cart {
          id
        }
      }
    }
  }
`;

export async function getUserInfo() {
  const cookieStore = cookies();
  const tokenName = process.env.NEXT_PUBLIC_COOKIE_NAME ?? "sessionToken";
  const token = cookieStore.get(tokenName);

  if (!token) {
    return { error: "Unauthorized", status: 401 };
  }

  const res = await fetch(`${CMS_URL}/api/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    },
    credentials: "include",
    cache: "no-store",
    body: JSON.stringify({
      query: authenticatedUser,
    }),
  });

  if (!res.ok) {
    console.error(`Error: ${res.status} - ${res.statusText}`);
    const errorText = await res.text();
    console.error(errorText);
    return {
      error: "Failed to fetch user data",
      status: res.status,
    };
  }

  const { data } = await res.json();
  const { authenticatedItem } = data;

  return { authenticatedItem };
}
