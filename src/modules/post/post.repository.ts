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

    async findAll(): Promise<IPostAll> {
        const posts: Post[] = await this.postModel
            .find()
            .populate("autor")
            .exec();
        const quantidade: number = await this.postModel.countDocuments().exec();

        const retorno = {
            posts: posts,
            quantidade: quantidade,
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
