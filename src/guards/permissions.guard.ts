import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { RolesService } from 'src/admin-domain/roles/roles.service';
import { PERMISSION_KEY } from 'src/decorators/requiredpermissions.decorator';
import { Permissions } from 'src/enums/permission.enum';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector,private roleService:RolesService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredpermissions = this.reflector.getAllAndOverride<Permissions[]>(PERMISSION_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredpermissions) {
      return true;
    }
    const {user} = context.switchToHttp().getRequest();   
    const role = await this.roleService.getRole(user.roleId)
     const permissions = role.systempermissions
    return requiredpermissions.some((permission) => permissions.includes(permission));
  }
}