import { Review } from './review.data';

export type Product = {
  code:string,
  name:string,
  category:string
  slug:string,
  description:string,
  photo:string,
  price:string,
  stock:Number,
  reviews:Number,
  reviewsList:Review[],
}
