import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IPost, IPostAll } from "src/shared/interfaces/post.interface";
import { Post } from "./entities/post.entity";

@Injectable()
export class PostRepository {
    constructor(@InjectModel("Post") private readonly postModel: Model<Post>) {}

    create(createPost: IPost): Promise<Post> {
        return this.postModel.create(createPost);
    }

    async findAll(filter?: any): Promise<IPostAll> {
        const posts: Post[] = await this.postModel
            .find(filter)
            .populate("author", "name -_id")
            .populate("categories", "description slug -_id")
            .exec();
        const count: number = await this.postModel
            .countDocuments(filter)
            .exec();

        const retorno = {
            posts: posts,
            count: count,
        };

        return retorno;
    }

    findOne(id: string): Promise<Post> {
        return this.postModel.findById(id).exec();
    }

    update(id: string, updatePost: Partial<IPost>): Promise<Post> {
        return this.postModel
            .findByIdAndUpdate(id, updatePost, { new: true })
            .exec();
    }

    remove(id: string): Promise<Post> {
        return this.postModel.findByIdAndRemove(id).exec();
    }
}
