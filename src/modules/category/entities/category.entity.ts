import { HydratedDocument } from "mongoose";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { ICategory } from "src/shared/interfaces/category.interface";

const transformCategory = (doc: any, ret: any) => {
    ret.id = ret._id;

    delete ret._id;
    delete ret.__v;
    delete ret.password;
};

export type CategoryDocument = HydratedDocument<Category>;

@Schema({
    timestamps: true,
    collection: "categories",
    toJSON: { transform: transformCategory },
    toObject: { transform: transformCategory },
})
export class Category implements ICategory {
    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    slug: string;
}

const CategorySchema = SchemaFactory.createForClass(Category);

export { CategorySchema };
