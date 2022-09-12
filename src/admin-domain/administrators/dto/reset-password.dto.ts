import { IsEmail, IsNotEmpty, isNotEmpty, Length } from "class-validator";

export class ResetPasswordDto{
    @IsNotEmpty()
    authtoken:string

    @IsEmail()
    email:string

    @IsNotEmpty()
    @Length(8,20,{message:"Password length should beteen 8 - 20 characters"})
    password:string
}