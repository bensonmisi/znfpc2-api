import { PartialType } from "@nestjs/mapped-types";
import { CreateSystemModuleDto } from "./create-systemmodule.dto";

export class UpdateSystemModuleDto extends PartialType(CreateSystemModuleDto){}