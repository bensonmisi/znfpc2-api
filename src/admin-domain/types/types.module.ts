import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/authJWT/jwt.strategy';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoleRepository } from '../roles/role.repository';
import { RolesService } from '../roles/roles.service';
import { SystemauditRepository } from '../systemaudit/systemaudit.repository';
import { SystemauditService } from '../systemaudit/systemaudit.service';
import { TypesRepository } from './types-repository';

@Module({
  controllers: [TypesController],
  providers: [
    TypesService,
    TypesRepository,
    PrismaService,
    JwtStrategy,
    JwtService,
    RolesService,
    RoleRepository,
    SystemauditService,
    SystemauditRepository  
  ]
})
export class TypesModule {}
