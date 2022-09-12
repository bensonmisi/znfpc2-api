import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import { JwtAuthGuard } from 'src/authJWT/jwt.guard';
import { Requiredpermissions } from 'src/decorators/requiredpermissions.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { User } from 'src/decorators/user.decorator';
import { Role } from 'src/enums/role.enum';
import { PermissionsGuard } from 'src/guards/permissions.guard';
import { RolesGuard } from 'src/guards/role.guard';
import { CreateSystemModuleDto } from './dto/create-systemmodule.dto';
import { UpdateSystemModuleDto } from './dto/update-systemmodule.dto';
import { SystemmoduleService } from './systemmodule.service';

@Controller('administrator/systemmodules')
@SkipThrottle(true)
@UseGuards(JwtAuthGuard,RolesGuard,PermissionsGuard)
@Roles(Role.Admin)
export class SystemmoduleController {
  constructor(private readonly systemmoduleService: SystemmoduleService) {}

  @Get()
  @Requiredpermissions("SYSTEMMODULE_READ")
  async findAll(){
    return await this.systemmoduleService.findAll()
  }

  @Post()
  @Requiredpermissions("SYSTEMMODULE_CREATE")
  async create(@Body() createSystemModuleDto:CreateSystemModuleDto,@User() user){
    return await this.systemmoduleService.create(createSystemModuleDto,user)
  }

  @Patch(":id")
  @Requiredpermissions("SYSTEMMODULE_UPDATE")
  async update(@Param("id") id:string,@Body() UpdateSystemModuleDto:UpdateSystemModuleDto,@User() user){
    return await this.systemmoduleService.update(+id,UpdateSystemModuleDto,user)
  }

  @Delete(":id")
  @Requiredpermissions("SYSTEMMODULE_DELETE")
  async delete(@Param("id") id:string,@User() user){
    return await this.systemmoduleService.delete(+id,user)
  }


}
