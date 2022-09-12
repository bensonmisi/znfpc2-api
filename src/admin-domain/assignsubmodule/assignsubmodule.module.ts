import { Module } from '@nestjs/common';
import { AssignsubmoduleService } from './assignsubmodule.service';
import { AssignsubmoduleController } from './assignsubmodule.controller';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/authJWT/jwt.strategy';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoleRepository } from '../roles/role.repository';
import { RolesService } from '../roles/roles.service';
import { SystemauditRepository } from '../systemaudit/systemaudit.repository';
import { SystemauditService } from '../systemaudit/systemaudit.service';
import { AssignsubmoduleRepository } from './assignsubmodule.repository';

@Module({
  controllers: [AssignsubmoduleController],
  providers: [
            AssignsubmoduleService,
            AssignsubmoduleRepository,
            PrismaService,
            JwtStrategy,
            JwtService,
            SystemauditService,
            SystemauditRepository,
            RolesService,
            RoleRepository
          ]
})
export class AssignsubmoduleModule {}
