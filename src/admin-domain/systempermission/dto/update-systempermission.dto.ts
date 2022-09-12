import { PartialType } from "@nestjs/mapped-types";
import { CreateSystemPermissionDto } from "./create-systempermission.dto";

export class UpdateSystemPermissionDto extends PartialType(CreateSystemPermissionDto){}