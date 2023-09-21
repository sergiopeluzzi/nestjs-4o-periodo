import { IsNotEmpty, IsString } from "class-validator";
import { ICategory } from "src/shared/interfaces/category.interface";

export class CreateCategoryDto implements ICategory {
    @IsString({ message: "A descrição deve ser uma string" })
    @IsNotEmpty({ message: "A descrição não pode ser vazio" })
    description: string;

    @IsString({ message: "O slug deve ser uma string" })
    @IsNotEmpty({ message: "O slug não pode ser vazio" })
    slug: string;
}
