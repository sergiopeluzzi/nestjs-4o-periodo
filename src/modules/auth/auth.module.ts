import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserModule } from "../user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./auth.constants";

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            global: true,
            signOptions: { expiresIn: jwtConstants.expiresIn },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
