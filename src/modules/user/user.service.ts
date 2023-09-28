import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    create(createUserDto: CreateUserDto) {
        return this.userRepository.create(createUserDto);
    }

    findAll() {
        return this.userRepository.findAll();
    }

    findOne(id: string) {
        return this.userRepository.findOne(id);
    }

    findByEmail(email: string) {
        return this.userRepository.findByEmail(email);
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return this.userRepository.update(id, updateUserDto);
    }

    remove(id: string) {
        return this.userRepository.remove(id);
    }
}
