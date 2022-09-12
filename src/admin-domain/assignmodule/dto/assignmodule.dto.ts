import { IsNotEmpty } from "class-validator"

export class AssignModuleDto{
    @IsNotEmpty()
    role:string

    @IsNotEmpty()
     modules:string
}