import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { CommentSchema } from "./entities/comment.entity";
import { CommentController } from "./comment.controller";
import { CommentService } from "./comment.service";
import { CommentRepository } from "./comment.repository";

@Module({
    imports: [
        DatabaseModule.forFeature([{ name: "Comment", schema: CommentSchema }]),
    ],
    controllers: [CommentController],
    providers: [CommentService, CommentRepository],
})
export class CommentModule {}
