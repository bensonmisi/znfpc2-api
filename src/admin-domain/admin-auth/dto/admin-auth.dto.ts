import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class AdminAuthDto{
    @IsNotEmpty({message:"Please enter a valid email"})
    username:string

    @IsNotEmpty()
    @Length(6,16,{message:"Password should be between 10 to 16 characters"})
    password:string
}