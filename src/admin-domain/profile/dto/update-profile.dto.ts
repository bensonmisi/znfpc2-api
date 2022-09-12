import { IsNotEmpty } from "class-validator";

export class UpdateProfileDto{
    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    surname:string

    @IsNotEmpty()
    email:string
}