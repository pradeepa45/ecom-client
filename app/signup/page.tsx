"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";

import { useForm } from "@/hooks/useForm";

export default function SignupPage() {
  async function handelSignup({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    } else {
      alert("Signup successful");
    }
  }
  const { values, handleChange, handleSubmit, loading } = useForm({
    initialValues: { name: "", email: "", password: "" },
    onSubmit: handelSignup,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:max-w-lg lg:mx-auto mx-4 flex flex-col gap-4 border rounded-lg shadow-md p-4 mb-12"
    >
      <Input
        type="text"
        label="Enter your name"
        placeholder="Name"
        name="name"
        value={values.name}
        required
        onChange={handleChange}
      />
      <Input
        type="email"
        label="Enter your email"
        placeholder="Email"
        name="email"
        required
        value={values.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        label="Enter your password"
        placeholder="Password"
        name="password"
        value={values.password}
        required
        onChange={handleChange}
      />
      <div className="flex items-center justify-between">
        <Link href="/login" className="text-sm underline hover:underline-none">
          Have an account already?
        </Link>
        <Link
          href="/forgot-password"
          className="text-sm underline hover:underline-none"
        >
          Forgot password?
        </Link>
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Signing up..." : "Sign Up"}
      </Button>
    </form>
  );
}
