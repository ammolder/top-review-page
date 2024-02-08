import { TopLevelCategory } from '../top-page.model';
import { IsEnum, IsObject } from 'class-validator';

export class FindTopPageDto {
	@IsEnum(TopLevelCategory)
	firstCategory: TopLevelCategory
}