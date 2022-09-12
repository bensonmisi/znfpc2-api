import { IsNotEmpty, IsOptional } from "class-validator"

export class CreateReportDto {
    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    gender:string

    @IsNotEmpty()
    maritalstatus:string

    @IsNotEmpty()
    phonenumber:string

    @IsNotEmpty()
    email:string

    @IsNotEmpty()
    city:string

    @IsNotEmpty()
    location:string

    @IsNotEmpty()
    serviceId:number

    @IsOptional()
    typeId:number

    @IsOptional()
    productId:number

    @IsOptional()
    frequency:string

    @IsNotEmpty()
    issue:string

    @IsNotEmpty()
    age:string

    @IsNotEmpty()
    mode:string

    @IsNotEmpty()
    calldate:string

    @IsNotEmpty()
    starttime:string

    @IsNotEmpty()
    endtime:string

    @IsNotEmpty()
    reference:string

    @IsOptional()
    province:string

    @IsOptional()
    district?:string
}
