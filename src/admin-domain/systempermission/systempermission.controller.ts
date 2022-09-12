import { Body, Controller, Delete, Get, Param, ParseArrayPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import { JwtAuthGuard } from 'src/authJWT/jwt.guard';
import { Requiredpermissions } from 'src/decorators/requiredpermissions.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { User } from 'src/decorators/user.decorator';
import { Role } from 'src/enums/role.enum';
import { PermissionsGuard } from 'src/guards/permissions.guard';
import { RolesGuard } from 'src/guards/role.guard';
import { CreateSystemPermissionDto } from './dto/create-systempermission.dto';
import { UpdateSystemPermissionDto } from './dto/update-systempermission.dto';
import { SystempermissionService } from './systempermission.service';

@Controller('administrator/systempermissions')
@SkipThrottle(true)
@UseGuards(JwtAuthGuard,RolesGuard,PermissionsGuard)
@Roles(Role.Admin)
export class SystempermissionController {
  constructor(private readonly systempermissionService: SystempermissionService) {}

  @Get(":id")
  @Requiredpermissions("PERMISSION_READ")
  async getAll(@Param("id") id:string){
     return await this.systempermissionService.getAll(+id)
  }

  @Post()
  @Requiredpermissions("PERMISSION_CREATE")
  async create(@Body() CreateSystemPermissionDto:CreateSystemPermissionDto,@User() user){
    return await this.systempermissionService.create(CreateSystemPermissionDto,user)
  }

  @Patch(":id")
  @Requiredpermissions("PERMISSION_UPDATE")
  async update(@Param("id") id:string,@Body() UpdateSystemPermissionDto:UpdateSystemPermissionDto,@User() user){
    return await this.systempermissionService.update(+id,UpdateSystemPermissionDto,user)
  }

  @Delete(":id")
  @Requiredpermissions("PERMISSION_DELETE")
  async delete(@Param("id") id:string,@User() user){
    return await this.systempermissionService.delete(+id,user)
  }

}
