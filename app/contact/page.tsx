"use client";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import {
  Calling02Icon,
  Location04Icon,
  MailAtSign02Icon,
} from "hugeicons-react";
import { useState } from "react";

export default function ContactPage() {
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
    <div className="flex gap-4">
      <div className="flex flex-col basis-1/3 gap-12">
        <div className="flex justify-start gap-4 items-center">
          <Location04Icon size={48} />
          <div className="flex-col flex items-start w-fit">
            <p className="text-2xl font-semibold">Come meet us</p>
            <p>Lane 1, Attenberg Avenue, London</p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <MailAtSign02Icon size={48} />
          <div className="flex-col flex items-start w-fit">
            <p className="text-2xl font-semibold">Chat with us</p>
            <p>support@organisation.co.in</p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <Calling02Icon size={48} />
          <div className="flex-col flex items-start w-fit">
            <p className="text-2xl font-semibold">Talk to us</p>
            <p>+91 9988998899</p>
          </div>
        </div>
      </div>
      <div className="grow p-4 rounded-lg border">
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
          key={version}
        >
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              type="text"
              isClearable
              label="Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              type="email"
              isClearable
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Textarea
              required
              onChange={(e) => setMessage(e.target.value)}
              labelPlacement="outside"
              placeholder="Enter your message"
              rows={5}
              className="!resize-none"
            />
          </div>
          <Button type="submit" className="w-fit self-end">
            Send us a message
          </Button>
        </form>
      </div>
    </div>
  );
}
