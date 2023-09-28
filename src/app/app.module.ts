import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "../database/database.module";
import { ConfigModule } from "@nestjs/config";
import { PostModule } from "src/modules/post/post.module";
import { UserModule } from "src/modules/user/user.module";
import { CategoryModule } from "src/modules/category/category.module";
import { AuthModule } from "src/modules/auth/auth.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        DatabaseModule.forRoot(),
        PostModule,
        UserModule,
        CategoryModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
