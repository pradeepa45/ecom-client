"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "@/hooks/useForm";

export default function LoginPage() {
  const router = useRouter();

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
      router.push("/dashboard");
    } else {
      alert("Login unsuccessful");
    }
  }

  const { values, handleChange, handleSubmit, loading } = useForm({
    initialValues: { email: "", password: "" },
    onSubmit: handleLogin,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:max-w-lg lg:mx-auto mx-4 flex flex-col gap-4 border rounded-lg shadow-md p-4 mb-12"
    >
      <Input
        type="email"
        label="Enter your email"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        label="Enter your password"
        placeholder="Password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <div className="flex items-center justify-between">
        <Link href="/signup" className="text-sm underline hover:underline-none">
          Create a new account
        </Link>
        <Link
          href="/forgot-password"
          className="text-sm underline hover:underline-none"
        >
          Forgot password?
        </Link>
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Log In"}
      </Button>
    </form>
  );
}
