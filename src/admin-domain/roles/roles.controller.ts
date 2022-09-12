import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import { JwtAuthGuard } from 'src/authJWT/jwt.guard';
import { Requiredpermissions } from 'src/decorators/requiredpermissions.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { User } from 'src/decorators/user.decorator';
import { Role } from 'src/enums/role.enum';
import { PermissionsGuard } from 'src/guards/permissions.guard';
import { RolesGuard } from 'src/guards/role.guard';
import { AssignSubModuleDto } from './dto/assign-submodule.dto';
import { AssignSystemModuleDto } from './dto/assign-systemmodule.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RolesService } from './roles.service';

@Controller('administrator/roles')
@SkipThrottle(true)
@UseGuards(JwtAuthGuard,RolesGuard,PermissionsGuard)
@Roles(Role.Admin)
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  async findall(){
   return await this.rolesService.getRoles();
  }

  @Post()
  @Requiredpermissions("ROLE_CREATE")
  async addRole(@Body() createRoleDto:CreateRoleDto,@User() user){
    return await this.rolesService.addRole(createRoleDto,user);
  }

  @Patch("/:id")
  @Requiredpermissions("ROLE_UPDATE")
  async updateRole(@Param("id") id:string,@Body() updateRoleDto:UpdateRoleDto,@User() user){
    return await this.rolesService.updateRole(+id,updateRoleDto,user)
  }

  @Delete("/:id")
  @Requiredpermissions("ROLE_DELETE")
  async deleteRole(@Param("id") id:string,@User() user){
    return await this.rolesService.deleteRole(+id,user)
  }

  @Get("/systemmodule/:roleId")
  @Requiredpermissions("GET_ROLE_SYSTEMMODULE")
  async getSystemModule(@Param("roleId") id:string){
    return await this.rolesService.getModuleRole(+id)
  }

  @Post("/systemmodule/assign")
  @Requiredpermissions("ROLE_ASSIGN_SYSTEMMODULE")
  async assignSystemmodule(@Body() rolemodulesDto:AssignSystemModuleDto,@User() user:any){
    return await this.rolesService.assignmodule(rolemodulesDto,user.userId,user)
  }

  
  @Get("/submodule/:systemmoduleId/:roleId")
  @Requiredpermissions("GET_ROLE_SUBMODULE")
  async getSubModule(@Param("roleId") id:string,@Param("systemmoduleId") systemmoduleId:string){
    return await this.rolesService.getSubmoduleRole(+id,+systemmoduleId)
  }

  
  @Post("/submodule/role/assign")
  @Requiredpermissions("ROLE_ASSIGN_SUBMODULE")
  async assignSubmodule(@Body() roleSubmoduleDto:AssignSubModuleDto,@User() user:any){
    return await this.rolesService.assignSubmodule(roleSubmoduleDto,user.userId,user)
  }

    
  @Get("/submodule/:submoduleId/:roleId")
  @Requiredpermissions("GET_ROLE_PERMISSION")
  async getPermission(@Param("roleId") id:string,@Param("submoduleId") submoduleId:string){
    return await this.rolesService.getPermissions(+id,+submoduleId)
  }

  
  @Post("/permission/role/assign")
  @Requiredpermissions("ROLE_ASSIGN_PERMISSION")
  async assignPermission(@Body() permissionDto:AssignSubModuleDto,@User() user:any){
    return await this.rolesService.assignPermission(permissionDto,user.userId,user)
  }
 
 


}
