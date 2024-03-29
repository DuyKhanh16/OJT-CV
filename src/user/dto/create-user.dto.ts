import { IsDate, IsEmpty, IsNotEmpty, IsString } from "class-validator";


export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsDate()
    @IsEmpty()
    createdAt: string;
}
