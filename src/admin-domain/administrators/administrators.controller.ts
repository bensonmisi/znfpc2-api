import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import { JwtAuthGuard } from 'src/authJWT/jwt.guard';
import { Requiredpermissions } from 'src/decorators/requiredpermissions.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { User } from 'src/decorators/user.decorator';
import { Role } from 'src/enums/role.enum';
import { PermissionsGuard } from 'src/guards/permissions.guard';
import { RolesGuard } from 'src/guards/role.guard';
import { AdministratorsService } from './administrators.service';
import { CreateAdministratorDto } from './dto/Create-administrator.dto';
import { UpdateAdministratorDto } from './dto/Update-administrator.dto';

@Controller('administrator/users')
@SkipThrottle(true)
@UseGuards(JwtAuthGuard,RolesGuard,PermissionsGuard)
@Roles(Role.Admin)
export class AdministratorsController {
  constructor(private readonly administratorsService: AdministratorsService) {}

   @Get()
   async getUsers(){
    return await this.administratorsService.getUsers()
   }

   @Post()
   @Requiredpermissions("ADMINISTRATOR_CREATE")
   async addUser(@Body() createAdministratorDto:CreateAdministratorDto,@User() user){
    return await this.administratorsService.addUser(createAdministratorDto,user);
   }

   @Patch("/:id")
   @Requiredpermissions("ADMINISTRATOR_UPDATE")
   async updateUser(@Param("id") id:string,@Body() updateAdministratorDto:UpdateAdministratorDto,@User() user){
    return await this.administratorsService.updateUser(+id,updateAdministratorDto,user);
   }
   @Get("/resetpassword/:id")
   @Requiredpermissions("ADMINISTRATOR_RESET")
   async passwordReset(@Param("id") id:string,@User() user){
    return await this.administratorsService.forgotpassword(+id,user);
   }
   @Get("/user/logs/:id")
   @Requiredpermissions("ADMINISTRATOR_LOGS")
   async getLogs(@Param("id") id:string,@User() user){
    return await this.administratorsService.userlogs(+id);
   }
}
