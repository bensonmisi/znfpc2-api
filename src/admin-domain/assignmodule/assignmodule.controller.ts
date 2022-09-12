import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import { JwtAuthGuard } from 'src/authJWT/jwt.guard';
import { Requiredpermissions } from 'src/decorators/requiredpermissions.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { User } from 'src/decorators/user.decorator';
import { Role } from 'src/enums/role.enum';
import { PermissionsGuard } from 'src/guards/permissions.guard';
import { RolesGuard } from 'src/guards/role.guard';
import { AssignmoduleService } from './assignmodule.service';
import { AssignModuleDto } from './dto/assignmodule.dto';
import { UnassignmoduleDto } from './dto/unassignmodule.dto';

@Controller('administrator/assignmodule')
@SkipThrottle(true)
@UseGuards(JwtAuthGuard,RolesGuard,PermissionsGuard)
@Roles(Role.Admin)
export class AssignmoduleController {
  constructor(private readonly assignmoduleService: AssignmoduleService) {}

  @Get("/:roleId")
  @Requiredpermissions("GET_ASSIGNED_MODULE")
  async getModule(@Param("roleId") roleId:string){
     return await this.assignmoduleService.getModules(+roleId)
  }

  @Post()
  @Requiredpermissions("ASSIGN_MODULE")
  async assignmodule(@Body() assignmoduleDto:AssignModuleDto ,@User() user){
    return await this.assignmoduleService.assignModule(assignmoduleDto,user)
  }

  @Patch()
  @Requiredpermissions("UNASSIGN_MODULE")
  async unassignmodule(@Body() unassignModuleDto:UnassignmoduleDto,@User() user){
    return await this.assignmoduleService.unassignModule(unassignModuleDto,user)
  }
}
