import { IsNotEmpty } from "class-validator";

export class UnassignmoduleDto{
    @IsNotEmpty()
    role:number

    @IsNotEmpty()
    module:number
}