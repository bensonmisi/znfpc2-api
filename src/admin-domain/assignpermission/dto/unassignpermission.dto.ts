import { IsNotEmpty } from "class-validator";

export class UnassignpermissionDto{
    @IsNotEmpty()
    role:number

    @IsNotEmpty()
    permission:number
}