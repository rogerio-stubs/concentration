import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoriesController } from './controller/categories.controller';
import { CreateCategoryService } from './services/createCategory.service';
import { DeleteCategoryByIdService } from './services/deleteCategoryById.service';
import { FindCategoryByIdService } from './services/findCategoryById.service';
import { ListCategoryByUserIdService } from './services/listCategoryByUserId.service';
import { UpdateCategoryByIdService } from './services/updateCategoryById.service';

@Module({
  controllers: [CategoriesController],
  providers: [
    PrismaService,
    CreateCategoryService,
    ListCategoryByUserIdService,
    FindCategoryByIdService,
    DeleteCategoryByIdService,
    UpdateCategoryByIdService,
  ],
})
export class CategoriesModule {}
