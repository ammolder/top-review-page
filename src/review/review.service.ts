import { Injectable } from '@nestjs/common';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { ReviewModel } from './review.model';
import { CreateReviewDto } from './dto/create-review.dto';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
 
class Leak {

}

const leaks = []

@Injectable()
export class ReviewService {
	constructor(@InjectModel(ReviewModel) private readonly reviewModel: ModelType<ReviewModel>) { }
		
		async create(dto: CreateReviewDto): Promise<DocumentType<ReviewModel>>{
			return this.reviewModel.create(dto);
		}
	
	async findByProductId(productId: string): Promise<DocumentType<ReviewModel>[]> {
		leaks.push(new Leak())
		return this.reviewModel.find
			({ productId: new Types.ObjectId(productId) }).exec();
	}
	
	async delete(id: string): Promise<DocumentType<ReviewModel> | null> {
		return this.reviewModel.findByIdAndDelete(id).exec();
	}

	async deleteByProductId(productId: string){
		return this.reviewModel.deleteMany({productId: new Types.ObjectId(productId)}).exec()
	}
}
