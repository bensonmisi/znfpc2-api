import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class AdminAuthDto{
    @IsEmail({message:"Please enter a valid email"})
    email:string

    @IsNotEmpty()
    @Length(6,16,{message:"Password should be between 10 to 16 characters"})
    password:string
}