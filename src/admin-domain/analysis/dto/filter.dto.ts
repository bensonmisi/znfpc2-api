import { IsNotEmpty } from "class-validator";

export class FilterDto{

    @IsNotEmpty()
    startdate:string

    @IsNotEmpty()
    enddate:string
}