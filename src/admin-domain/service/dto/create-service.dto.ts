import { IsNotEmpty } from "class-validator";

export class CreateServiceDto {
    @IsNotEmpty()
    name:string
}
