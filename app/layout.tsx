import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";

import { Providers } from "./providers";
import { ApolloWrapper } from "./ApolloWrapper";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Footer from "@/components/semantic/footer";
import Navbar from "@/components/semantic/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <ApolloWrapper>
        <body
          className={clsx(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col">
              <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
              </Suspense>
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
              </main>
            </div>
            <Footer />
          </Providers>
        </body>
      </ApolloWrapper>
    </html>
  );
}
