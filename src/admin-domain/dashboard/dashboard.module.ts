import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/authJWT/jwt.strategy';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoleRepository } from '../roles/role.repository';
import { RolesService } from '../roles/roles.service';
import { SystemauditRepository } from '../systemaudit/systemaudit.repository';
import { SystemauditService } from '../systemaudit/systemaudit.service';
import { DashboardRepository } from './dashboard.repository';

@Module({
  controllers: [DashboardController],
  providers: [
    DashboardService,  
    DashboardRepository,  
    PrismaService,
    JwtStrategy,
    JwtService,
    RolesService,
    RoleRepository,
    SystemauditService,
    SystemauditRepository
  ]
})
export class DashboardModule {}
