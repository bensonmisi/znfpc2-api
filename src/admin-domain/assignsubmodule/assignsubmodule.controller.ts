import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import { JwtAuthGuard } from 'src/authJWT/jwt.guard';
import { Requiredpermissions } from 'src/decorators/requiredpermissions.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { User } from 'src/decorators/user.decorator';
import { Role } from 'src/enums/role.enum';
import { PermissionsGuard } from 'src/guards/permissions.guard';
import { RolesGuard } from 'src/guards/role.guard';
import { AssignsubmoduleService } from './assignsubmodule.service';
import { AssignSubmoduleDto } from './dto/assignsubmodule.dto';
import { UnassignSubmoduleDto } from './dto/unassignsubmodule.dto';

@Controller('administrator/assignsubmodule')
@SkipThrottle(true)
@UseGuards(JwtAuthGuard,RolesGuard,PermissionsGuard)
@Roles(Role.Admin)
export class AssignsubmoduleController {
  constructor(private readonly assignsubmoduleService: AssignsubmoduleService) {}

  @Get("/:roleId/:systemmoduleId/")
  @Requiredpermissions("GET_ASSIGNED_SUBMODULE")
  async getSubmodule(@Param("roleId") roleId:string,@Param("systemmoduleId") systemmoduleId:string){
     return await this.assignsubmoduleService.getSubmodule(+roleId,+systemmoduleId)
  }

  @Post()
  @Requiredpermissions("ASSIGN_SUBMODULE")
  async assignSubmodule(@Body() assignSubmoduleDto:AssignSubmoduleDto,@User() user){
    return await this.assignsubmoduleService.assignSubmodule(assignSubmoduleDto,user)
  }

  @Patch()
  @Requiredpermissions("UNASSIGN_SUBMODULE")
  async unassignSubmodule(@Body() unassignSubmoduleDto:UnassignSubmoduleDto,@User() user){
    return await this.assignsubmoduleService.unassignSubmodule(unassignSubmoduleDto,user)
  }

}
