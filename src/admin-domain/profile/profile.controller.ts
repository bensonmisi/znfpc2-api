import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SkipThrottle } from '@nestjs/throttler';
import { JwtAuthGuard } from 'src/authJWT/jwt.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { User } from 'src/decorators/user.decorator';
import { Role } from 'src/enums/role.enum';
import { RolesGuard } from 'src/guards/role.guard';
import { ChangePasswordDto } from './dto/change-password.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileService } from './profile.service';

@Controller('administrator/profile')
@ApiTags("admin-profile")
@SkipThrottle(true)
@UseGuards(JwtAuthGuard,RolesGuard)
@Roles(Role.Admin)
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async getProfile(@User() user){
    return await this.profileService.getProfile(+user.userId)
  }

  @Post("/update") 
  async updateProfile(@Body() updateProfileDto:UpdateProfileDto,@User() user){
    return await this.profileService.update(updateProfileDto,user)
  }

  @Post("/changepassword")
  async changePassword(@Body() changePasswordDto:ChangePasswordDto,@User() user){
    return await this.profileService.changepassword(changePasswordDto,user)
  }
}
