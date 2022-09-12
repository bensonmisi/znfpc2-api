import { IsNotEmpty, Length } from "class-validator";

export class ChangePasswordDto{
    @IsNotEmpty()
    @Length(8,20,{message:"Password length should beteen 8 - 20 characters"})
    password:string
}