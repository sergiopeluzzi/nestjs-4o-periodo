import { Injectable } from "@nestjs/common";
import { CategoryRepository } from "./category.repository";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Injectable()
export class CategoryService {
    constructor(private readonly categoryRepository: CategoryRepository) {}

    create(createCategoryDto: CreateCategoryDto) {
        return this.categoryRepository.create(createCategoryDto);
    }

    findAll() {
        return this.categoryRepository.findAll();
    }

    findOne(id: string) {
        return this.categoryRepository.findOne(id);
    }

    update(id: string, updateCategoryDto: UpdateCategoryDto) {
        return this.categoryRepository.update(id, updateCategoryDto);
    }

    remove(id: string) {
        return this.categoryRepository.remove(id);
    }
}
