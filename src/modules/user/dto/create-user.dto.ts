import { IsHash, IsNotEmpty, IsString } from "class-validator";
import { IUser } from "src/shared/interfaces/user.interface";

export class CreateUserDto implements IUser {
    @IsString({ message: "O nome deve ser uma string" })
    @IsNotEmpty({ message: "O nome não pode ser vazio" })
    nome: string;

    @IsString({ message: "O telefone deve ser uma string" })
    @IsNotEmpty({ message: "O telefone não pode ser vazio" })
    telefone: string;

    @IsString({ message: "O email deve ser uma string" })
    @IsNotEmpty({ message: "O email não pode ser vazio" })
    email: string;

    @IsString({ message: "A senha deve ser uma string" })
    @IsNotEmpty({ message: "A senha não pode ser vazio" })
    @IsHash("sha256", { message: "A senha deve ser um hash SHA256" })
    senha: string;
}
