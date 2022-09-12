import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/authJWT/jwt.strategy';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoleRepository } from '../roles/role.repository';
import { RolesService } from '../roles/roles.service';
import { SystemauditService } from '../systemaudit/systemaudit.service';
import { ServiceRepository } from './service-repository';
import { SystemauditRepository } from '../systemaudit/systemaudit.repository';

@Module({
  controllers: [ServiceController],
  providers: [
    ServiceService,
    ServiceRepository,
    PrismaService,
    JwtStrategy,
    JwtService,
    RolesService,
    RoleRepository,
    SystemauditService,
    SystemauditRepository
  ]
})
export class ServiceModule {}
