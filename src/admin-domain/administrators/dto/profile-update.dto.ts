import { IsEmail, IsNotEmpty } from "class-validator";

export class ProfileUpdateDto{
    @IsNotEmpty()
    name:string
    
    @IsNotEmpty()
    surname:string

    @IsEmail()
    email:string

    
}