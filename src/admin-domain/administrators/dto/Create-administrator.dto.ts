import { IsEmail, IsNotEmpty, IsOptional, Length } from "class-validator";

export class CreateAdministratorDto{

     @IsNotEmpty()
     name:string

     @IsNotEmpty()
     surname:string

     @IsEmail()
     email:string

    
     @IsNotEmpty()
     roleId:string

     @IsOptional()
     status:string

}