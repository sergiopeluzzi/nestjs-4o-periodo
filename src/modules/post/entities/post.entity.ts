import { HydratedDocument, Schema as MongooseSchema } from "mongoose";
import { IPost } from "../../../shared/interfaces/post.interface";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { IUser } from "src/shared/interfaces/user.interface";

export type PostDocument = HydratedDocument<Post>;

@Schema({
    timestamps: true,
    collection: "posts",
    virtuals: true,
})
export class Post implements IPost {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    categories: string[];

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: "User" })
    autor: IUser;
}

const PostSchema = SchemaFactory.createForClass(Post);

export { PostSchema };
