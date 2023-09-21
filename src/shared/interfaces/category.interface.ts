export interface ICategory {
    description: string;
    slug: string;
}

export interface ICategoryAll {
    categories: ICategory[];
    count: number;
}
