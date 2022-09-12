import { Module } from '@nestjs/common';
import { SystemsubmoduleService } from './systemsubmodule.service';
import { SystemsubmoduleController } from './systemsubmodule.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { SystemsubmoduleRepository } from './systemsubmodule.repository';
import { SystemmoduleRepository } from '../systemmodule/systemmodule.repository';
import { JwtStrategy } from 'src/authJWT/jwt.strategy';
import { JwtService } from '@nestjs/jwt';
import { RolesService } from '../roles/roles.service';
import { RoleRepository } from '../roles/role.repository';
import { SystemauditService } from '../systemaudit/systemaudit.service';
import { SystemauditRepository } from '../systemaudit/systemaudit.repository';

@Module({
  controllers: [SystemsubmoduleController],
  providers: [
                 SystemsubmoduleService,
                 PrismaService,
                 SystemsubmoduleRepository,
                 SystemmoduleRepository,
                 JwtStrategy,
                 JwtService,
                 RolesService,
                 RoleRepository,
                 SystemauditService,
                 SystemauditRepository
                ]
})
export class SystemsubmoduleModule {}
