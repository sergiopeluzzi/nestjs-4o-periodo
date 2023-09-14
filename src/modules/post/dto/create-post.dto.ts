import { IsNotEmpty, IsString, IsArray, IsObject } from "class-validator";
import { IPost } from "src/shared/interfaces/post.interface";
import { IUser } from "src/shared/interfaces/user.interface";

export class CreatePostDto implements IPost {
    @IsString({ message: "O título deve ser uma string" })
    @IsNotEmpty({ message: "O título não pode ser vazio" })
    title: string;

    @IsString({ message: "O conteúdo deve ser uma string" })
    @IsNotEmpty({ message: "O conteúdo não pode ser vazio" })
    content: string;

    @IsArray({ message: "As categorias devem ser um array", each: true })
    @IsNotEmpty({ message: "As categorias não podem ser vazias" })
    categories: string[];

    @IsNotEmpty({ message: "O autor não pode ser vazio" })
    @IsObject({ message: "O autor deve ser um objeto", each: true })
    autor: IUser;
}
