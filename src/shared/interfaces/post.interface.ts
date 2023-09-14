import { IUser } from "./user.interface";

export interface IPost {
    title: string;
    content: string;
    categories: string[];
    autor: IUser;
}

export interface IPostAll {
    posts: IPost[];
    quantidade: number;
}
