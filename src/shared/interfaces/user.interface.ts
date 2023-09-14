export interface IUser {
    nome: string;
    telefone: string;
    email: string;
    senha: string;
}

export interface IUserAll {
    users: IUser[];
    quantidade: number;
}
