import { Module } from '@nestjs/common';
import { AssignpermissionService } from './assignpermission.service';
import { AssignpermissionController } from './assignpermission.controller';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/authJWT/jwt.strategy';
import { PrismaService } from 'src/prisma/prisma.service';
import { SystemauditRepository } from '../systemaudit/systemaudit.repository';
import { SystemauditService } from '../systemaudit/systemaudit.service';
import { AssignpermissionRepository } from './assignpermission.repository';
import { RolesService } from '../roles/roles.service';
import { RoleRepository } from '../roles/role.repository';

@Module({
  controllers: [AssignpermissionController],
  providers: [
              AssignpermissionService,
              AssignpermissionRepository,
              PrismaService,
              JwtStrategy,
              JwtService,
              SystemauditService,
              SystemauditRepository,
              RolesService,
              RoleRepository
            ]
})
export class AssignpermissionModule {}
