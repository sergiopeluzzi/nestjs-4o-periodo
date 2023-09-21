import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IComment } from "src/shared/interfaces/comment.interface";

export class CreateCommentDto implements IComment {
    @IsString({ message: "O name deve ser uma string" })
    @IsNotEmpty({ message: "O name não pode ser vazio" })
    content: string;

    @IsNumber({}, { message: "O likes deve ser um número" })
    likes?: number;

    @IsNumber({}, { message: "O dislikes deve ser um número" })
    dislikes?: number;

    @IsString({ message: "O id do autor deve ser uma string" })
    @IsNotEmpty({ message: "O id do autor não pode ser vazio" })
    authorId: string;

    @IsString({ message: "O id do post deve ser uma string" })
    @IsNotEmpty({ message: "O id do post não pode ser vazio" })
    postId: string;
}
