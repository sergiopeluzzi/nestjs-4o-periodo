import { HydratedDocument } from "mongoose";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { IUser } from "src/shared/interfaces/user.interface";

const transformUser = (doc: any, ret: any) => {
    ret.id = ret._id;

    delete ret._id;
    delete ret.__v;
    delete ret.password;
};

export type UserDocument = HydratedDocument<User>;

@Schema({
    timestamps: true,
    collection: "users",
    toJSON: { transform: transformUser },
    toObject: { transform: transformUser },
})
export class User implements IUser {
    id?: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;
}

const UserSchema = SchemaFactory.createForClass(User);

export { UserSchema };
