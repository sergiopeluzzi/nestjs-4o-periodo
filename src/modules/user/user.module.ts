import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { UserSchema } from "./entities/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserRepository } from "./user.repository";

@Module({
    imports: [
        DatabaseModule.forFeature([{ name: "User", schema: UserSchema }]),
    ],
    controllers: [UserController],
    providers: [UserService, UserRepository],
    exports: [UserService, UserRepository],
})
export class UserModule {}
