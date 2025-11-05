export interface Product {
  [x: string]: any;
  id: number;
  name: string;
  price: number;
  description: string;
  image?: string;
}