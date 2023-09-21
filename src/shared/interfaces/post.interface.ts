export interface IPost {
    title: string;
    content: string;
    categoriesIds: string[];
    authorId: string;
}

export interface IPostAll {
    posts: IPost[];
    count: number;
}
