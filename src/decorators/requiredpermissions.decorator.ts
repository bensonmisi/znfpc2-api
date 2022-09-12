import { SetMetadata } from '@nestjs/common';
import { Permissions } from 'src/enums/permission.enum';

export const PERMISSION_KEY = 'permissions';
export const Requiredpermissions = (...requiredpermissions: String[]) => SetMetadata(PERMISSION_KEY, requiredpermissions);