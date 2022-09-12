import { IsNotEmpty } from "class-validator"

export class AssignSubmoduleDto{
    @IsNotEmpty()
    role:string

    @IsNotEmpty()
    submodules:string
}