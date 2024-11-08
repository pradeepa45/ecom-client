import { SVGProps } from "react";
import { Cart } from "./product"

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  message: string;
  rating: number;
}

export interface User {
  id: string;
  name: string;
  isCustomer: boolean;
  isAdmin: boolean;
  email: string;
  cart: Cart
}

