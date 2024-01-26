import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLevelCategory {
  Corses,
  Services,
  Books,
  Products,
}

export class HhData{
  @prop()
    count: number;
    
  @prop()
  juniorsalary: number;
  
  @prop()
  middleSalary: number;
  
  @prop()
  seniorSalary: number; 
}

export class TopPageAdvantage{
    title: string;
    description: string;
  }

export interface TopPageModel extends Base{}
export class TopPageModel extends TimeStamps{
  @prop({enum: TopLevelCategory})
  firstCategory: TopLevelCategory;
  
  @prop()
  secondCategory: string;
  
  @prop({unique: true})
  alias: string
  
  @prop()
  title: string;
  
  @prop()
  category: string;
  
  @prop({type: ()=> HhData})
  hh?: HhData;

  @prop({type: ()=>[TopPageAdvantage]})
  advantages: TopPageAdvantage[];
  
  @prop()
  seoText: string;
  
  @prop()
  tagsTitle: string;
  
  @prop({type: ()=> [String]})
  tags: string[];
}