import { Module } from '@nestjs/common';
import { SystemmoduleService } from './systemmodule.service';
import { SystemmoduleController } from './systemmodule.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { SystemmoduleRepository } from './systemmodule.repository';
import { JwtStrategy } from 'src/authJWT/jwt.strategy';
import { JwtService } from '@nestjs/jwt';
import { RolesService } from '../roles/roles.service';
import { RoleRepository } from '../roles/role.repository';
import { SystemauditService } from '../systemaudit/systemaudit.service';
import { SystemauditRepository } from '../systemaudit/systemaudit.repository';

@Module({
  controllers: [SystemmoduleController],
  providers: [
                SystemmoduleService,
                PrismaService,
                SystemmoduleRepository,
                JwtStrategy,
                JwtService,
                RolesService,
                RoleRepository,                
               SystemauditService,
              SystemauditRepository
              ]
})
export class SystemmoduleModule {}
