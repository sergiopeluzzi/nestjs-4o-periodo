import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { PostRepository } from "./post.repository";

@Injectable()
export class PostService {
    constructor(private readonly postRepository: PostRepository) {}

    create(createPostDto: CreatePostDto) {
        return this.postRepository.create(createPostDto);
    }

    findAll() {
        return this.postRepository.findAll();
    }

    findOne(id: string) {
        return this.postRepository.findOne(id);
    }

    update(id: string, updatePostDto: UpdatePostDto) {
        return this.postRepository.update(id, updatePostDto);
    }

    remove(id: string) {
        return this.postRepository.remove(id);
    }
}
