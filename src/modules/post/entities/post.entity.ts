import { HydratedDocument } from "mongoose";
import { IPost } from "../../../shared/interfaces/post.interface";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

export type PostDocument = HydratedDocument<Post>;

@Schema({
    timestamps: true,
    collection: "posts",
})
export class Post implements IPost {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    categories: string[];
}

const PostSchema = SchemaFactory.createForClass(Post);

export { PostSchema };
