import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import { JwtAuthGuard } from 'src/authJWT/jwt.guard';
import { Requiredpermissions } from 'src/decorators/requiredpermissions.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { User } from 'src/decorators/user.decorator';
import { Role } from 'src/enums/role.enum';
import { PermissionsGuard } from 'src/guards/permissions.guard';
import { RolesGuard } from 'src/guards/role.guard';
import { CreateSystemSubmoduleDto } from './dto/create-systemsubmodule.dto';
import { UpdateSystemSubmoduleDto } from './dto/update-systemsubmodule.dto';
import { SystemsubmoduleService } from './systemsubmodule.service';

@Controller('administrator/systemsubmodules')
@SkipThrottle(true)
@UseGuards(JwtAuthGuard,RolesGuard,PermissionsGuard)
@Roles(Role.Admin)
export class SystemsubmoduleController {
  constructor(private readonly systemsubmoduleService: SystemsubmoduleService) {}

  @Get(":id")
  @Requiredpermissions("SYSTEMSUBMODULE_READ")
  async findAll(@Param("id") id:string){
    return await this.systemsubmoduleService.getAll(+id)
  } 

  @Post()
  @Requiredpermissions("SYSTEMSUBMODULE_CREATE")
  async create(@Body() CreateSystemSubmoduleDto:CreateSystemSubmoduleDto,@User() user){
    return await this.systemsubmoduleService.add(CreateSystemSubmoduleDto,user)
  } 

  @Patch(":id")
  @Requiredpermissions("SYSTEMSUBMODULE_UPDATE")
  async update(@Param("id") id:string,@Body() updateSystemSubmoduleDto:UpdateSystemSubmoduleDto,@User() user){
    return await this.systemsubmoduleService.update(+id,updateSystemSubmoduleDto,user)
  }

  @Delete(":id")
  @Requiredpermissions("SYSTEMSUBMODULE_DELETE")
  async delete(@Param("id") id:string,@User() user){
    return await this.systemsubmoduleService.delete(+id,user)
  }
}
