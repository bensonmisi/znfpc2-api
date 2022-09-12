import { Module } from '@nestjs/common';
import { SystempermissionService } from './systempermission.service';
import { SystempermissionController } from './systempermission.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { SystempermissionRepository } from './systempermission.repository';
import { SystemsubmoduleRepository } from '../systemsubmodule/systemsubmodule.repository';
import { SystemsubmoduleService } from '../systemsubmodule/systemsubmodule.service';
import { JwtStrategy } from 'src/authJWT/jwt.strategy';
import { JwtService } from '@nestjs/jwt';
import { RolesService } from '../roles/roles.service';
import { RoleRepository } from '../roles/role.repository';
import { SystemauditService } from '../systemaudit/systemaudit.service';
import { SystemauditRepository } from '../systemaudit/systemaudit.repository';

@Module({
  controllers: [SystempermissionController],
  providers: [
             SystempermissionService,
             PrismaService,
             SystempermissionRepository,
             JwtStrategy,
             JwtService,
             RolesService,
             RoleRepository,             
             SystemauditService,
             SystemauditRepository
            ]
})
export class SystempermissionModule {}
