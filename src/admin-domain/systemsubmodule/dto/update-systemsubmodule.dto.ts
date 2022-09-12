import { PartialType } from "@nestjs/mapped-types";
import { CreateSystemSubmoduleDto } from "./create-systemsubmodule.dto";

export class UpdateSystemSubmoduleDto extends PartialType(CreateSystemSubmoduleDto){}