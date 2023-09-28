import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { IAuth } from "src/shared/interfaces/auth.interface";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("login")
    signIn(@Body() body: IAuth) {
        return this.authService.signIn(body.email, body.password);
    }
}
