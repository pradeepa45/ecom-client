export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Business",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Products",
      href: "/products/all",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact"
    }
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Products",
      href: "/products/all",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: process.env.NEXT_PUBLIC_CMS_URL,
    login: "/login",
    signup: "/signup",
    logout: '/logout'
  },
};
