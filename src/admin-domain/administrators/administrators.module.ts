import { Module } from '@nestjs/common';
import { AdministratorsService } from './administrators.service';
import { AdministratorsController } from './administrators.controller';
import { AdministratorRepository } from './administrators.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { SecurityHelper } from 'src/helper/security.helper';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/authJWT/jwt.strategy'; 
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/guards/role.guard';
import { RolesService } from '../roles/roles.service';
import { RoleRepository } from '../roles/role.repository';
import { SystemauditService } from '../systemaudit/systemaudit.service';
import { SystemauditRepository } from '../systemaudit/systemaudit.repository';
import { MailModule } from 'src/mail/mail.module';
import { AuthenticationHelper } from 'src/helper/authentication.helper';

@Module({
  imports:[MailModule],
  controllers: [AdministratorsController],
  providers: [
              AdministratorsService,
              PrismaService,
              AdministratorRepository,
              SecurityHelper,
              AuthenticationHelper,
              JwtStrategy,
              JwtService,
              RolesService,
              RoleRepository,
              SystemauditService,
              SystemauditRepository

            ]
})
export class AdministratorsModule {} 
