import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { IUser } from "src/shared/interfaces/user.interface";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService,
    ) {}

    async signIn(email: string, pass: string): Promise<any> {
        const user: IUser = await this.usersService.findByEmail(email);

        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const payload = {
            sub: user.id,
            name: user.name,
            email: user.email,
        };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
