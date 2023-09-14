export interface IPost {
    title: string;
    content: string;
    categories: string[];
    autorId: string;
}

export interface IPostAll {
    posts: IPost[];
    quantidade: number;
}
