"use client";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { useState } from "react";

export default function ContactForm({}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [version, setVersion] = useState(0);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      alert("Thank you for your message!");
      setVersion(1);
    } else {
      alert("There was an error submitting your message.");
    }
  }

  return (
    <form key={version} className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          isClearable
          label="Name"
          name="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          isClearable
          required
          label="Email"
          placeholder="Enter your email address"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Textarea
          required
          className="!resize-none"
          labelPlacement="outside"
          placeholder="Enter your message"
          rows={5}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button className="w-fit self-end" type="submit">
        Send us a message
      </Button>
    </form>
  );
}
