import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { ApiTags } from '@nestjs/swagger';
import { SkipThrottle } from '@nestjs/throttler';
import { JwtAuthGuard } from 'src/authJWT/jwt.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { PermissionsGuard } from 'src/guards/permissions.guard';
import { RolesGuard } from 'src/guards/role.guard';
import { Requiredpermissions } from 'src/decorators/requiredpermissions.decorator';
import { User } from 'src/decorators/user.decorator';

@Controller('administrator/report')
@ApiTags("report")
@SkipThrottle(true)
@UseGuards(JwtAuthGuard,RolesGuard,PermissionsGuard)
@Roles(Role.Admin)
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post()
 // @Requiredpermissions('CREATE_INQUIRY')
 async create(@Body() createReportDto: CreateReportDto,@User() user) {
    return  await this.reportService.create(createReportDto,user);
  }

  @Get()
  async findAll(@User() user) {
    return await this.reportService.findAll(user);
  }

 
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto,@User() user) {
    return await this.reportService.update(+id, updateReportDto,user);
  }

}
