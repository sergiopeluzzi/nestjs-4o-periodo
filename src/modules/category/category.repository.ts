import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category } from "./entities/category.entity";
import {
    ICategory,
    ICategoryAll,
} from "src/shared/interfaces/category.interface";

@Injectable()
export class CategoryRepository {
    constructor(
        @InjectModel("Category")
        private readonly categoryModel: Model<Category>,
    ) {}

    create(createCategory: ICategory): Promise<Category> {
        return this.categoryModel.create(createCategory);
    }

    async findAll(): Promise<ICategoryAll> {
        const categories: Category[] = await this.categoryModel.find().exec();
        const count: number = await this.categoryModel.countDocuments().exec();

        const retorno = {
            categories: categories,
            count: count,
        };

        return retorno;
    }

    findOne(id: string): Promise<Category> {
        return this.categoryModel.findById(id).exec();
    }

    update(id: string, updateCategory: Partial<ICategory>): Promise<Category> {
        return this.categoryModel
            .findByIdAndUpdate(id, updateCategory, { new: true })
            .exec();
    }

    remove(id: string): Promise<Category> {
        return this.categoryModel.findByIdAndRemove(id).exec();
    }
}
