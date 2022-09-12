import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import { JwtAuthGuard } from 'src/authJWT/jwt.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { User } from 'src/decorators/user.decorator';
import { Role } from 'src/enums/role.enum';
import { RolesGuard } from 'src/guards/role.guard';
import { ChangePasswordDto } from '../administrators/dto/change-password.dto';
import { ProfileUpdateDto } from '../administrators/dto/profile-update.dto';
import { AdminprofileService } from './adminprofile.service';

@Controller('administrator/adminprofile')
@SkipThrottle(true)
@UseGuards(JwtAuthGuard,RolesGuard)
@Roles(Role.Admin)
export class AdminprofileController {
  constructor(private readonly adminprofileService: AdminprofileService) {}

  @Get()
  async getProfile(@User() user){
    return await this.adminprofileService.getProfile(user)
  }

  @Post("/changepassword")
  async changepassword(@Body() changePasswordDto:ChangePasswordDto,@User() user){
    return await this.adminprofileService.changepassword(changePasswordDto,user)
  }

  @Post("/updateProfile")
  async updateProfile(@Body() profileUpdateDto:ProfileUpdateDto,@User() user){
    return await this.adminprofileService.updateProfile(profileUpdateDto,user)
  }
}
