import {
	Body,
	Controller,
	Delete,
	Param,
	Post,
	Get,
	HttpException,
	HttpStatus,
	UsePipes,
	ValidationPipe,
	UseGuards
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import { REVIEW_NOT_FOUND } from './review.constants';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UserEmail } from '../decorators/user-email.decorator';
import { IdValidationPipe } from 'src/pipes/add-validation.pipe';

@Controller('review')
export class ReviewController {
	constructor(private readonly ReviewService: ReviewService){}

	@UsePipes(new ValidationPipe())
	@Post('create')
	async create(@Body() dto: CreateReviewDto) { 
		return this.ReviewService.create(dto)
	}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId', IdValidationPipe) productId: string) {
		return this.ReviewService.findByProductId(productId);
	} 

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('id', IdValidationPipe) id: string, @UserEmail() email: string) {
 	// console.log('email :', email);
		const deleteDoc = await this.ReviewService.delete(id);
		if (!deleteDoc) {
			throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND)
		}
	} 
}
