import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Comment } from "./entities/comment.entity";
import { IComment, ICommentAll } from "src/shared/interfaces/comment.interface";

@Injectable()
export class CommentRepository {
    constructor(
        @InjectModel("Comment") private readonly commentModel: Model<Comment>,
    ) {}

    create(createComment: IComment): Promise<Comment> {
        return this.commentModel.create(createComment);
    }

    async findAll(): Promise<ICommentAll> {
        const comments: Comment[] = await this.commentModel
            .find()
            .populate("author", "name -_id")
            .exec();
        const count: number = await this.commentModel.countDocuments().exec();

        const retorno = {
            comments: comments,
            count: count,
        };

        return retorno;
    }

    findOne(id: string): Promise<Comment> {
        return this.commentModel.findById(id).exec();
    }

    update(id: string, updateComment: Partial<IComment>): Promise<Comment> {
        return this.commentModel
            .findByIdAndUpdate(id, updateComment, { new: true })
            .exec();
    }

    remove(id: string): Promise<Comment> {
        return this.commentModel.findByIdAndRemove(id).exec();
    }
}
