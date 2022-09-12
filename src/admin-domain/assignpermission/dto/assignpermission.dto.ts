import { IsNotEmpty } from "class-validator"

export class AssignPermissionDto{
    @IsNotEmpty()
    role:string

    @IsNotEmpty()
    permissions:string
}