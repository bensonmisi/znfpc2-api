import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateSystemModuleDto{
    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    icon:string

    @IsOptional()
    description:string
}