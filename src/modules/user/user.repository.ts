import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./entities/user.entity";
import { IUser, IUserAll } from "src/shared/interfaces/user.interface";

@Injectable()
export class UserRepository {
    constructor(@InjectModel("User") private readonly userModel: Model<User>) {}

    create(createUser: IUser): Promise<User> {
        return this.userModel.create(createUser);
    }

    async findAll(): Promise<IUserAll> {
        const users: User[] = await this.userModel
            .find()
            .populate("posts")
            .exec();
        const quantidade: number = await this.userModel.countDocuments().exec();

        const retorno = {
            users: users,
            quantidade: quantidade,
        };

        return retorno;
    }

    findOne(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    update(id: string, updateUser: Partial<IUser>): Promise<User> {
        return this.userModel
            .findByIdAndUpdate(id, updateUser, { new: true })
            .exec();
    }

    remove(id: string): Promise<User> {
        return this.userModel.findByIdAndRemove(id).exec();
    }
}
