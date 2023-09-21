import { Injectable } from "@nestjs/common";
import { CommentRepository } from "./comment.repository";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";

@Injectable()
export class CommentService {
    constructor(private readonly commentRepository: CommentRepository) {}

    create(createCommentDto: CreateCommentDto) {
        return this.commentRepository.create(createCommentDto);
    }

    findAll() {
        return this.commentRepository.findAll();
    }

    findOne(id: string) {
        return this.commentRepository.findOne(id);
    }

    update(id: string, updateCommentDto: UpdateCommentDto) {
        return this.commentRepository.update(id, updateCommentDto);
    }

    remove(id: string) {
        return this.commentRepository.remove(id);
    }
}
