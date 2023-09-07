export interface IPost {
    title: string;
    content: string;
    categories: string[];
}

export interface IPostAll {
    posts: IPost[];
    quantidade: number;
}
