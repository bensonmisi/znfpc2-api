import { IsNotEmpty } from "class-validator";

export class UnassignSubmoduleDto{
    @IsNotEmpty()
    role:number

    @IsNotEmpty()
    submodule:number
}