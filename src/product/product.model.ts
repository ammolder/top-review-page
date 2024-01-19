import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

class PriductCharacteristic {
  @prop()
  name: string
  
  @prop()
  value: string
}

export interface ProductModel extends Base{ }
export class ProductModel extends TimeStamps {

  @prop()
  image: string;
  
  @prop()
  title: string;
  
  @prop()
  price: number;
  
  @prop()
  oldPrice: number;
  
  @prop()
  credit: number;
  
  @prop()
  calculateRating: number;
  
  @prop()
  description: string;
  
  @prop()
  advantages: string;
  
  @prop()
  disAdvantages: string;
  
  @prop({ type: () => [String]}) //Щоб позначити Mongoose який тим, просто викликаєму функцію, яка повертає цей тип
  catigories: string[];

  @prop({ type: () => [String]})
  tags: string;

  @prop({ type: () => [PriductCharacteristic], _id: false})
  characteristics: PriductCharacteristic[]
}
