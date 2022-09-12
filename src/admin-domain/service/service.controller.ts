import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ApiTags } from '@nestjs/swagger';
import { SkipThrottle } from '@nestjs/throttler';
import { JwtAuthGuard } from 'src/authJWT/jwt.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { PermissionsGuard } from 'src/guards/permissions.guard';
import { RolesGuard } from 'src/guards/role.guard';
import { Requiredpermissions } from 'src/decorators/requiredpermissions.decorator';
import { User } from 'src/decorators/user.decorator';

@Controller('administrator/service')
@ApiTags("Services")
@SkipThrottle(true)
@UseGuards(JwtAuthGuard,RolesGuard,PermissionsGuard)
@Roles(Role.Admin)
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  @Requiredpermissions('CREATE_SERVICE')
  create(@Body() createServiceDto: CreateServiceDto,@User() user) {
    return this.serviceService.create(createServiceDto,user);
  }

  @Get()
  findAll() {
    return this.serviceService.findAll();
  }


  @Patch(':id')
  @Requiredpermissions('UPDATE_SERVICE')
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto,@User() user) {
    return this.serviceService.update(+id, updateServiceDto,user);
  }

  @Delete(':id')
  @Requiredpermissions('DELETE_SERVICE')
  remove(@Param('id') id: string,@User() user) {
    return this.serviceService.remove(+id,user);
  }
}
