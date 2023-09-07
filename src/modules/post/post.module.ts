import { Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { PostRepository } from "./post.repository";
import { DatabaseModule } from "src/database/database.module";
import { PostSchema } from "./entities/post.entity";

@Module({
    imports: [
        DatabaseModule.forFeature([{ name: "Post", schema: PostSchema }]),
    ],
    controllers: [PostController],
    providers: [PostService, PostRepository],
})
export class PostModule {}
