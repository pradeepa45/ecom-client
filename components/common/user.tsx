"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User as Avtar,
} from "@nextui-org/react";

import { User } from "@/types";
import Link from "next/link";

export default function UserAvatar({ user }: { user: User }) {
  const handleLogout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/logout`);
  };

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <Avtar
            as="button"
            avatarProps={{
              isBordered: true,
              src: process.env.NEXT_PUBLIC_USER_PROFILE_PLACEHOLDER ?? "",
            }}
            className="transition-transform"
            description={user.email}
            name={user.name}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p>Signed in as</p>
            <p className="font-bold">{user.email}</p>
          </DropdownItem>
          <DropdownItem key="cart" as={Link} href="/dashboard">
            Cart
          </DropdownItem>
          <DropdownItem key="orders">
            <Link href="/dashboard/orders">Your orders</Link>
          </DropdownItem>
          <DropdownItem key="settings">
            <Link href="/dashboard/settings">Profile</Link>
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            <Link href="/api/auth/logout">Log Out</Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
