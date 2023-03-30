import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RequestCreateCategory } from '../contract/RequestCreateCategory';
import { RequestUpdateCategory } from '../contract/RequestUpdateCategory';
import { ResponseCategory } from '../contract/ResponseCategory';
import { CreateCategoryService } from '../services/createCategory.service';
import { DeleteCategoryByIdService } from '../services/deleteCategoryById.service';
import { FindCategoryByIdService } from '../services/findCategoryById.service';
import { ListCategoryByUserIdService } from '../services/listCategoryByUserId.service';
import { UpdateCategoryByIdService } from '../services/updateCategoryById.service';

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly createCategoryService: CreateCategoryService,
    private readonly listCategoriesByUserService: ListCategoryByUserIdService,
    private readonly updateCategoryByIdService: UpdateCategoryByIdService,
    private readonly findCategoryByIDService: FindCategoryByIdService,
    private readonly deleteCategoryByIdService: DeleteCategoryByIdService,
  ) {}

  @Post()
  create(@Body() data: RequestCreateCategory): Promise<ResponseCategory> {
    return this.createCategoryService.execute(data);
  }

  @Put('/:id/')
  update(
    @Param('id') id: string,
    @Body() data: RequestUpdateCategory,
  ): Promise<ResponseCategory> {
    return this.updateCategoryByIdService.execute(id, data);
  }

  @Get()
  list(): Promise<ResponseCategory[]> {
    return this.listCategoriesByUserService.execute();
  }

  @Get('/:id')
  findById(@Param('id') id: string): Promise<ResponseCategory> {
    return this.findCategoryByIDService.execute(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: string): Promise<void> {
    return this.deleteCategoryByIdService.execute(id);
  }
}
