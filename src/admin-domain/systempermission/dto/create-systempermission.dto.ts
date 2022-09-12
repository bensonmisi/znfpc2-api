import { IsNotEmpty } from "class-validator";

export class CreateSystemPermissionDto{
    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    systemsubmodule:string
}