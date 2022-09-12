import { Module } from '@nestjs/common';
import { AssignmoduleService } from './assignmodule.service';
import { AssignmoduleController } from './assignmodule.controller';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/authJWT/jwt.strategy';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoleRepository } from '../roles/role.repository';
import { RolesService } from '../roles/roles.service';
import { SystemauditRepository } from '../systemaudit/systemaudit.repository';
import { SystemauditService } from '../systemaudit/systemaudit.service';
import { AssignmoduleRepository } from './assignmodule.repository';

@Module({
  controllers: [AssignmoduleController],
  providers: [
           AssignmoduleService,
           AssignmoduleRepository,
           PrismaService,
           JwtStrategy,
           JwtService,
           SystemauditService,
           SystemauditRepository,
           RolesService,
           RoleRepository
          ]
})
export class AssignmoduleModule {}
 