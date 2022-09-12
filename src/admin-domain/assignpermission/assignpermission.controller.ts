import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import { JwtAuthGuard } from 'src/authJWT/jwt.guard';
import { Requiredpermissions } from 'src/decorators/requiredpermissions.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { User } from 'src/decorators/user.decorator';
import { Role } from 'src/enums/role.enum';
import { PermissionsGuard } from 'src/guards/permissions.guard';
import { RolesGuard } from 'src/guards/role.guard';
import { AssignpermissionService } from './assignpermission.service';
import { AssignPermissionDto } from './dto/assignpermission.dto';
import { UnassignpermissionDto } from './dto/unassignpermission.dto';

@Controller('administrator/assignpermission')
@SkipThrottle(true)
@UseGuards(JwtAuthGuard,RolesGuard,PermissionsGuard)
@Roles(Role.Admin)
export class AssignpermissionController {
  constructor(private readonly assignpermissionService: AssignpermissionService) {}

  @Get("/:roleId/:submoduleId/")
  @Requiredpermissions("GET_ASSIGNED_PERMISSIONS")
  async getPermissions(@Param("roleId") roleId:string,@Param("submoduleId") submoduleId:string){
    return await this.assignpermissionService.getPermissions(+roleId,+submoduleId)
  }

  @Post()
  @Requiredpermissions("ASSIGN_PERMISSION")
  async assignPermission(@Body() assignPermissionDto:AssignPermissionDto,@User() user){
    return await this.assignpermissionService.assignPermission(assignPermissionDto,user)
  }

  @Patch()
  @Requiredpermissions("UNASSIGN_PERMISSION")
  async unassignPermission(@Body() unassignpermissionDto:UnassignpermissionDto,@User() user){
    return await this.assignpermissionService.unassignPermission(unassignpermissionDto,user)
  }


}
