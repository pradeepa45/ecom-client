import { title } from "@/components/primitives";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className={title()}>About us</h1>
      <p className="lg:max-w-lg mx-auto">
        We are a trailblazing company in the dynamic and ever-evolving industry.
        At Laras, we believe in providing our customers an impeccable
        experience.
      </p>
      <div className="my-4">
        <Image
          src="https://res.cloudinary.com/p-seelam/image/upload/v1730902312/office-1_qbgkwq.jpg"
          alt="about"
          className="w-full h-auto rounded-lg"
          width={800}
          height={400}
        />
      </div>
      <h1 className={title()}>Our mission</h1>
      <p className="lg:max-w-lg mx-auto">
        We are a trailblazing company in the dynamic and ever-evolving industry.
        At Laras, we believe in providing our customers an impeccable
        experience.
      </p>
    </div>
  );
}
