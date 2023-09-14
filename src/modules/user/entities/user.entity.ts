import { HydratedDocument } from "mongoose";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { IUser } from "src/shared/interfaces/user.interface";

const transformUser = (doc: any, ret: any) => {
    ret.id = ret._id;

    delete ret._id;
    delete ret.__v;
    delete ret.senha;
};

export type UserDocument = HydratedDocument<User>;

@Schema({
    timestamps: true,
    collection: "users",
    virtuals: true,
    toJSON: { virtuals: true, transform: transformUser },
    toObject: { virtuals: true, transform: transformUser },
})
export class User implements IUser {
    @Prop({ required: true })
    nome: string;

    @Prop({ required: true })
    telefone: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    senha: string;
}

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual("posts", {
    ref: "Post",
    localField: "_id",
    foreignField: "autor",
    justOne: false,
});

export { UserSchema };
