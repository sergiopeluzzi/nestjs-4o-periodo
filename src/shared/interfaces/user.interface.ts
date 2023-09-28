export interface IUser {
    id?: string;
    name: string;
    phone: string;
    email: string;
    password: string;
}

export interface IUserAll {
    users: IUser[];
    count: number;
}
