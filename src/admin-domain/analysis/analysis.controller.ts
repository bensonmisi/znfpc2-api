import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import { JwtAuthGuard } from 'src/authJWT/jwt.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { PermissionsGuard } from 'src/guards/permissions.guard';
import { RolesGuard } from 'src/guards/role.guard';
import { AnalysisService } from './analysis.service';
import { FilterDto } from './dto/filter.dto';

@Controller('administrator/analysis')
@SkipThrottle(true)
@UseGuards(JwtAuthGuard,RolesGuard,PermissionsGuard)
@Roles(Role.Admin)
export class AnalysisController {
  constructor(private readonly analysisService: AnalysisService) {}

  @Get()
  async getReport(){
    return await this.analysisService.getAll()
  }


  @Post()
  async filterByDate(@Body() dto:FilterDto){
  return await this.analysisService.filterByDate(dto)
  }
}
