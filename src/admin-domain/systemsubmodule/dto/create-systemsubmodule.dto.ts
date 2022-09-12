import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateSystemSubmoduleDto{
    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    icon:string

    @IsNotEmpty()
    url:string

    @IsNotEmpty()
    systemmodule:string
}