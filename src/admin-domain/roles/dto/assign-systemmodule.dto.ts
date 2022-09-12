import { IsNotEmpty } from "class-validator";

export class AssignSystemModuleDto{
    @IsNotEmpty()
    role:string

    @IsNotEmpty()
    modules:string
}