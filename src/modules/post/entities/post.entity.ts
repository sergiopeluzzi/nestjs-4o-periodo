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

    @Prop({
        required: true,
        type: [{ type: MongooseSchema.Types.ObjectId, ref: "Category" }],
    })
    categoriesIds: string[];

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: "User" })
    authorId: string;
}

const PostSchema = SchemaFactory.createForClass(Post);

PostSchema.virtual("author", {
    ref: "User",
    localField: "authorId",
    foreignField: "_id",
    justOne: true,
});

PostSchema.virtual("categories", {
    ref: "Category",
    localField: "categoriesIds",
    foreignField: "_id",
    justOne: false,
});

export { PostSchema };
