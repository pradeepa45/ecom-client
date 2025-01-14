import { User } from ".";

export interface CloudinaryImage {
  id: string;
  imageUrl: string;
  image: {
    publicUrl: string;
  };
  altText: string;
}

export interface Product {
  status: string;
  name: string;
  slug: string;
  id: string;
  description: string;
  colors: ProductColor[];
  lengths: ProductLength[];
  image: CloudinaryImage[];
}

export interface ProductLength {
  name: string;
  id: string;
  value: number;
}

export interface ProductColor {
  name: string;
  id: string;
  slug: string;
}

export interface CartItem {
  id: string;
  quantity: number;
  product: Product;
  length: ProductLength;
  color: ProductColor;
  requestedPrice: number;
  cart: Cart;
}

export interface Cart {
  id: string;
  itemsCount: number;
  items: CartItem[];
}

export interface OrderItem {
  id: string;
  quantity: string;
  product: Product;
  length: ProductLength;
  color: ProductColor;
  price: string;
  order: Order;
}

export interface Order {
  id: string;
  user: User;
  itemsCount: number;
  items: OrderItem[];
  totalAmount: string;
  status: "paid" | "shipped" | "created" | "delivered" | "cancelled";
  createdAt: string;
}
