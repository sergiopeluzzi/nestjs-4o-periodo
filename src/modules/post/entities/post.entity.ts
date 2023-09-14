import { HydratedDocument, Schema as MongooseSchema } from "mongoose";
import { IPost } from "../../../shared/interfaces/post.interface";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

const transformPost = (doc: any, ret: any) => {
    ret.id = ret._id;

    delete ret._id;
    delete ret.__v;
};

export type PostDocument = HydratedDocument<Post>;

@Schema({
    timestamps: true,
    collection: "posts",
    virtuals: true,
    toJSON: { virtuals: true, transform: transformPost },
    toObject: { virtuals: true, transform: transformPost },
})
export class Post implements IPost {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    categories: string[];

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: "User" })
    autorId: string;
}

const PostSchema = SchemaFactory.createForClass(Post);

PostSchema.virtual("autor", {
    ref: "User",
    localField: "autorId",
    foreignField: "_id",
    justOne: true,
});

export { PostSchema };
