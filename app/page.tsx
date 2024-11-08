import {
  Calling02Icon,
  HealtcareIcon,
  Location04Icon,
  RepeatIcon,
  ScissorIcon,
  Time04Icon,
} from "hugeicons-react";
import Link from "next/link";

import ProductListing from "@/components/common/products/list";
import fetchFromCMS from "./get";
import { getTestimonials } from "@/queries/testimonials";
import { Testimonial } from "@/types";
import TestimonialCard from "@/components/common/testimonials/card";

const HairSalonLanding = async () => {
  const { testimonials } = await fetchFromCMS(getTestimonials, {
    variables: {
      take: 3,
    },
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black/40" />
        <div className="h-full flex items-center justify-center text-center relative">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl font-bold text-white mb-6">
              Transform Your Look with Expert Hair Styling
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Experience the art of hair transformation at our luxury salon
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 rounded-lg shadow-sm border">
                <div className="flex justify-center mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  {service.name}
                </h3>
                <ul className="opacity-50 mb-6 space-y-2 flex flex-col items-center">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-violet-500">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Popular Products
          </h2>
          <ProductListing />
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Client Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial: Testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
            <div className="flex flex-col items-center text-center">
              <Location04Icon className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="opacity-50">
                123 Style Street
                <br />
                New York, NY 10001
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Time04Icon className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="opacity-50">
                Mon-Sat: 9am - 8pm
                <br />
                Sun: 10am - 6pm
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Calling02Icon className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="opacity-50">
                (555) 123-4567
                <br />
                hello@hairsalon.com
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="mx-auto py-2 px-4 rounded-lg border block w-fit shadow-sm"
          >
            Send us a message
          </Link>
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    name: "Custom Lace Wigs",
    icon: <ScissorIcon className="w-8 h-8 text-gray-800" />,
    features: [
      "Premium human hair options",
      "Custom lace frontals & full lace",
      "Hand-tied & ventilated",
      "Custom color and highlights",
      "Perfect size & fit guarantee",
      "Natural hairline customization",
    ],
    price: "From $800",
  },
  {
    name: "Hair Systems & Integration",
    icon: <RepeatIcon className="w-8 h-8 text-gray-800" />,
    features: [
      "Non-surgical hair replacement",
      "Custom hair integration systems",
      "Seamless blend with natural hair",
      "Multiple attachment methods",
      "Regular maintenance included",
      "Natural density matching",
    ],
    price: "From $1200",
  },
  {
    name: "Maintenance & Styling",
    icon: <HealtcareIcon className="w-8 h-8 text-gray-800" />,
    features: [
      "Professional installation",
      "Deep cleaning & conditioning",
      "Color touch-ups",
      "Style customization",
      "Repair & maintenance",
      "Wig modification services",
    ],
    price: "From $150",
  },
];

const testimonials = [
  {
    text: "Best salon experience I've ever had. The attention to detail is remarkable.",
    name: "Sarah Johnson",
  },
  {
    text: "Transformed my hair completely. Couldn't be happier with the results!",
    name: "Michael Chen",
  },
  {
    text: "Professional, friendly, and incredibly skilled. Highly recommend!",
    name: "Emma Davis",
  },
];

export default HairSalonLanding;
