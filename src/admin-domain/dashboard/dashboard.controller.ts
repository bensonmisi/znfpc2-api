import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SkipThrottle } from '@nestjs/throttler';
import { JwtAuthGuard } from 'src/authJWT/jwt.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { User } from 'src/decorators/user.decorator';
import { Role } from 'src/enums/role.enum';
import { PermissionsGuard } from 'src/guards/permissions.guard';
import { RolesGuard } from 'src/guards/role.guard';
import { DashboardService } from './dashboard.service';

@Controller('administrator/dashboard')
@ApiTags("AdminDashboard")
@SkipThrottle(true)
@UseGuards(JwtAuthGuard,RolesGuard,PermissionsGuard)
@Roles(Role.Admin)
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get("/mymenu")
  async getmenu(@User() user){
    return await this.dashboardService.getMenu(user)
  }

  @Get('/report/current')
  async getCurrentReport(@User() user){
    return await this.dashboardService.getReport(user)
  }
}
