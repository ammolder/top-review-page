import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { ConfigService } from '@nestjs/config';
import { TopPageService } from './top-page.service';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { PAGE_NOT_FOUND_ERROR } from './top-page.constans';
import { IdValidationPipe } from 'src/pipes/add-validation.pipe';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('top-page')
export class TopPageController {
	constructor(private readonly topPageService: TopPageService){}

	@UseGuards(JwtAuthGuard)
	@Post('create')
	async create(@Body() dto: CreateTopPageDto) { 
		return this.topPageService.create(dto);
	}
	
	@UseGuards(JwtAuthGuard)
	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string) {
		const page = await this.topPageService.findById(id)
		if (!page) throw new NotFoundException(PAGE_NOT_FOUND_ERROR)
		return page
	}

	@Get('byAlias/:alias')
	async getByAlias(@Param('alias' ) alias: string) {
		const page = await this.topPageService.findByAlias(alias)
		if (!page) throw new NotFoundException(PAGE_NOT_FOUND_ERROR)
		return page
	}
	

	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	async patch(@Param('id', IdValidationPipe) id: string, @Body() dto: TopPageModel) { 
		const updatePage = await this.topPageService.updateById(id, dto);
		if (!updatePage) throw new NotFoundException(PAGE_NOT_FOUND_ERROR);
		return updatePage
	}
	
	@UsePipes(new ValidationPipe)
	@HttpCode(200)
	@Post('find')
	async find(@Body() dto: FindTopPageDto) {
		return this.topPageService.findByCategory(dto.firstCategory )
	}

	@Get('textSearch/:text')
	async textSearch(@Param('text') text: string) {
		return this.topPageService.findByText(text)
	}
	
	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('text', IdValidationPipe) id: string) {
		const deletePage = await this.topPageService.deleteById(id)
		if(!deletePage) throw new NotFoundException(PAGE_NOT_FOUND_ERROR)
	}
}
