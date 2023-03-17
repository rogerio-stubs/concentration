import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { RequestCreateCategory } from '../contract/RequestCreateCategory';
import { ResponseCategory } from '../contract/ResponseCategory';
import { CreateCategoryService } from '../services/createCategory.service';
import { DeleteCategoryByIdService } from '../services/deleteCategoryById.service';
import { FindCategoryByIdService } from '../services/findCategoryById.service';
import { ListCategoryByUserIdService } from '../services/listCategoryByUserId.service';

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly createCategoryService: CreateCategoryService,
    private readonly listCategoriesByUserService: ListCategoryByUserIdService,
    private readonly findCategoryByIDService: FindCategoryByIdService,
    private readonly deleteCategoryByIdService: DeleteCategoryByIdService,
  ) {}

  @Post()
  create(@Body() data: RequestCreateCategory): Promise<ResponseCategory> {
    return this.createCategoryService.execute(data);
  }

  @Get()
  list(): Promise<ResponseCategory[]> {
    return this.listCategoriesByUserService.execute();
  }

  @Get('/:id')
  findById(id: string): Promise<ResponseCategory> {
    return this.findCategoryByIDService.execute(id);
  }

  @Delete('/:id')
  delete(id: string): Promise<void> {
    return this.deleteCategoryByIdService.execute(id);
  }
}
