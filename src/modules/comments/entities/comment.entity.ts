import { HydratedDocument, Schema as MongooseSchema } from "mongoose";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { IComment } from "src/shared/interfaces/comment.interface";

const transformComment = (doc: any, ret: any) => {
    ret.id = ret._id;

    delete ret._id;
    delete ret.__v;
    delete ret.password;
};

export type CommentDocument = HydratedDocument<Comment>;

@Schema({
    timestamps: true,
    collection: "comments",
    virtuals: true,
    toJSON: { transform: transformComment },
    toObject: { transform: transformComment },
})
export class Comment implements IComment {
    @Prop({ required: true })
    content: string;

    @Prop({ required: true, default: 0 })
    likes?: number;

    @Prop({ required: true, default: 0 })
    dislikes?: number;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: "User" })
    authorId: string;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: "Post" })
    postId: string;
}

const CommentSchema = SchemaFactory.createForClass(Comment);

CommentSchema.virtual("author", {
    ref: "User",
    localField: "authorId",
    foreignField: "_id",
    justOne: true,
});

CommentSchema.virtual("post", {
    ref: "Post",
    localField: "postId",
    foreignField: "_id",
    justOne: true,
});

export { CommentSchema };
