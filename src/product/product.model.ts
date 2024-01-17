export class ProductModel {
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculateRating: number;
  description: string;
  advantage: string;
  advantages: string;
  disAdvantages: string;
  catigories: string[];
  tags: string;
  characteristics: {
    [key: string]: string;
  };
}
