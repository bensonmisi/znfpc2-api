import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { JwtStrategy } from 'src/authJWT/jwt.strategy';
import { JwtService } from '@nestjs/jwt';
import { AdministratorRepository } from '../administrators/administrators.repository';
import { AuthenticationHelper } from 'src/helper/authentication.helper';
import { SecurityHelper } from 'src/helper/security.helper';
import { RoleRepository } from '../roles/role.repository';
import { RolesService } from '../roles/roles.service';
import { SystemauditRepository } from '../systemaudit/systemaudit.repository';
import { SystemauditService } from '../systemaudit/systemaudit.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailModule } from 'src/mail/mail.module';
import { MailService } from 'src/mail/mail.service';
import { ProfileRepository } from './profile.repository';

@Module({
  controllers: [ProfileController],
  providers: [
               ProfileService,
               PrismaService,
               ProfileRepository,
                JwtStrategy,
                JwtService,
                SystemauditService,
                SystemauditRepository,
                RolesService,
                RoleRepository,
                SecurityHelper
              ]
})
export class ProfileModule {}
