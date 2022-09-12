import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { ApiTags } from '@nestjs/swagger';
import { SkipThrottle } from '@nestjs/throttler';
import { JwtAuthGuard } from 'src/authJWT/jwt.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { PermissionsGuard } from 'src/guards/permissions.guard';
import { RolesGuard } from 'src/guards/role.guard';
import { Requiredpermissions } from 'src/decorators/requiredpermissions.decorator';
import { User } from 'src/decorators/user.decorator';

@Controller('administrator/types')
@ApiTags("types")
@SkipThrottle(true)
@UseGuards(JwtAuthGuard,RolesGuard,PermissionsGuard)
@Roles(Role.Admin)
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Post()
  @Requiredpermissions("CREATE_TYPE")
  async create(@Body() createTypeDto: CreateTypeDto,@User() user) {
    return await this.typesService.create(createTypeDto,user);
  }

  @Get()
  async findAll() {
    return await this.typesService.findAll();
  }

  @Get(':id')
  async findByService(@Param("id") id:string){
    return await this.typesService.findByService(+id)
  }

  @Patch(':id')
  @Requiredpermissions("UPDATE_TYPE")
  async update(@Param('id') id: string, @Body() updateTypeDto: UpdateTypeDto,@User() user) {
    return await this.typesService.update(+id, updateTypeDto,user);
  }

  @Delete(':id')
  @Requiredpermissions("DELETE_TYPE")
  async remove(@Param('id') id: string,@User() user) {
    return this.typesService.remove(+id,user);
  }
}
