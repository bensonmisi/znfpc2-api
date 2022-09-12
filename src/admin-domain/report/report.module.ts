import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { ReportRepository } from './report-repository';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/authJWT/jwt.strategy';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoleRepository } from '../roles/role.repository';
import { RolesService } from '../roles/roles.service';
import { SystemauditRepository } from '../systemaudit/systemaudit.repository';
import { SystemauditService } from '../systemaudit/systemaudit.service';

@Module({
  controllers: [ReportController],
  providers: [
    ReportService,
    ReportRepository,
    PrismaService,
    JwtStrategy,
    JwtService,
    RolesService,
    RoleRepository,
    SystemauditService,
    SystemauditRepository 
   ]
})
export class ReportModule {}
