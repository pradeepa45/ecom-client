import Rating from "../products/rating";

import { Testimonial } from "@/types";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <Rating rating={testimonial.rating} />
      </div>
      <p className="opacity-50 mb-4">{testimonial.message}</p>
      <p className="font-semibold">{testimonial.name}</p>
    </div>
  );
}
