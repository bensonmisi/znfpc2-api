import { Module } from '@nestjs/common';
import { AdminprofileService } from './adminprofile.service';
import { AdminprofileController } from './adminprofile.controller';
import { AdministratorRepository } from '../administrators/administrators.repository';
import { AdministratorsService } from '../administrators/administrators.service';
import { SecurityHelper } from 'src/helper/security.helper';
import { PrismaService } from 'src/prisma/prisma.service';
import { SystemauditService } from '../systemaudit/systemaudit.service';
import { SystemauditRepository } from '../systemaudit/systemaudit.repository';
import { MailService } from 'src/mail/mail.service';
import { AuthenticationHelper } from 'src/helper/authentication.helper';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AdminprofileController],
  providers: [
                 AdminprofileService,
                 AdministratorRepository,
                 AdministratorsService,
                 SecurityHelper,
                 PrismaService,
                 SystemauditService,
                 SystemauditRepository,
                 MailService,
                 AuthenticationHelper,
                 JwtService
                ]
})
export class AdminprofileModule {}
