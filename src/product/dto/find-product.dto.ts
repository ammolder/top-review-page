import { IsNumber, isString } from 'class-validator';

export class FindProductDto {
	@IsNumber()
	category: string;

	@IsNumber()
	limit: number
}