export interface IComment {
    content: string;
    likes?: number;
    dislikes?: number;
    authorId: string;
    postId: string;
}

export interface ICommentAll {
    comments: IComment[];
    count: number;
}
