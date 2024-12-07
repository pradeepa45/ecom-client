"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";

import { useForm } from "@/hooks/useForm";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function LoginPage() {
  async function handleLogin({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`;
    } else {
      alert("Login unsuccessful");
    }
  }

  const { values, handleChange, handleSubmit, loading } = useForm({
    initialValues: { email: "", password: "" },
    onSubmit: handleLogin,
  });

  return (
    <Card className="flex flex-col p-4 mb-12 mx-auto w-fit">
      <CardHeader>
        <h2 className="text-center text-2xl">Login to your account</h2>
      </CardHeader>
      <CardBody className="block lg:min-w-96">
        <form
          className="flex flex-col gap-4 rounded-lg self-center"
          onSubmit={handleSubmit}
        >
          <Input
            label="Enter your email"
            name="email"
            placeholder="Email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          <Input
            label="Enter your password"
            name="password"
            placeholder="Password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
          <div className="flex items-center justify-between">
            <Link
              className="text-sm underline hover:underline-none"
              href="/signup"
            >
              Create a new account
            </Link>
            <Link
              className="text-sm underline hover:underline-none"
              href="/forgot-password"
            >
              Forgot password?
            </Link>
          </div>
          <Button disabled={loading} isLoading={loading} type="submit">
            {loading ? "Logging in..." : "Log In"}
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
