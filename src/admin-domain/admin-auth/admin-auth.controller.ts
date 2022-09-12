import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ResetPasswordDto } from '../administrators/dto/reset-password.dto';
import { AdminAuthService } from './admin-auth.service';
import { AdminAuthDto } from './dto/admin-auth.dto';

@Controller('admin-auth')
export class AdminAuthController {
  constructor(private readonly adminAuthService: AdminAuthService) {}

  @Post("/login")
  async login(@Body() adminAuthDto:AdminAuthDto,@Req() req){
  
    return this.adminAuthService.SignIn(adminAuthDto,req);
  }

  @Post("/resetpassword") 
  async resetpassword(@Body() resetPasswordDto:ResetPasswordDto){
    return this.adminAuthService.resetpassword(resetPasswordDto)
  }

  @Get("/logout")
  async logout(@Req() req, @Res() res){
   return this.adminAuthService.SignOut(req,res);
  }
}
