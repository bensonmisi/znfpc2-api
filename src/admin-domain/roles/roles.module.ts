import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { RoleRepository } from './role.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtStrategy } from 'src/authJWT/jwt.strategy';
import { JwtService } from '@nestjs/jwt';
import { SystemauditRepository } from '../systemaudit/systemaudit.repository';
import { SystemauditService } from '../systemaudit/systemaudit.service';

@Module({
  controllers: [RolesController],
  providers: [
    RolesService,
    RoleRepository,
    PrismaService,
    JwtStrategy,
    JwtService,
    SystemauditService,
    SystemauditRepository
  ],
  exports:[RolesService]
})
export class RolesModule {}
