import clsx from "clsx";
import { StarIcon } from "hugeicons-react";

export default function Rating({ rating = 1 }) {
  return [1, 2, 3, 4, 5].map((star, index) => (
    <StarIcon
      key={star}
      className={clsx(
        "text-yellow-400",
        index + 1 <= rating && "fill-yellow-400"
      )}
    />
  ));
}
