export interface IUser {
    name: string;
    phone: string;
    email: string;
    password: string;
}

export interface IUserAll {
    users: IUser[];
    count: number;
}
