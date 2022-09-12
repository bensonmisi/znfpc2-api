import { IsNotEmpty } from "class-validator";

export class AssignSubModuleDto{
    @IsNotEmpty()
    role:string

    @IsNotEmpty()
    systemmoduleId:string

    @IsNotEmpty()
    modules:string
}