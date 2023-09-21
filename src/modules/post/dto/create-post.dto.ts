import { IsNotEmpty, IsString, IsArray } from "class-validator";
import { IPost } from "src/shared/interfaces/post.interface";

export class CreatePostDto implements IPost {
    @IsString({ message: "O título deve ser uma string" })
    @IsNotEmpty({ message: "O título não pode ser vazio" })
    title: string;

    @IsString({ message: "O conteúdo deve ser uma string" })
    @IsNotEmpty({ message: "O conteúdo não pode ser vazio" })
    content: string;

    @IsArray({ message: "As categorias devem ser um array", each: false })
    @IsNotEmpty({ message: "As categorias não podem ser vazias" })
    categoriesIds: string[];

    @IsNotEmpty({ message: "O author não pode ser vazio" })
    @IsString({ message: "O author deve ser uma string" })
    authorId: string;
}
