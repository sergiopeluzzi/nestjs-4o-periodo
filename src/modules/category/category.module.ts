import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { CategorySchema } from "./entities/category.entity";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { CategoryRepository } from "./category.repository";

@Module({
    imports: [
        DatabaseModule.forFeature([
            { name: "Category", schema: CategorySchema },
        ]),
    ],
    controllers: [CategoryController],
    providers: [CategoryService, CategoryRepository],
})
export class CategoryModule {}
