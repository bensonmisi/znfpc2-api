import { PartialType } from "@nestjs/mapped-types";
import { CreateAdministratorDto } from "./Create-administrator.dto";

export class UpdateAdministratorDto extends PartialType(CreateAdministratorDto){}