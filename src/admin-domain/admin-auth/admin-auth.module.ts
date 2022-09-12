import { Module } from '@nestjs/common';
import { AdminAuthService } from './admin-auth.service';
import { AdminAuthController } from './admin-auth.controller';
import { AdministratorRepository } from '../administrators/administrators.repository';
import { SecurityHelper } from 'src/helper/security.helper';
import { PrismaService } from 'src/prisma/prisma.service';
import {JwtModule, JwtService} from '@nestjs/jwt'
import { AuthenticationHelper } from 'src/helper/authentication.helper';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from 'src/utils/constants';
import { SystemauditService } from '../systemaudit/systemaudit.service';
import { SystemauditRepository } from '../systemaudit/systemaudit.repository';
import { MailService } from 'src/mail/mail.service';
import { JwtAuthGuard } from 'src/authJWT/jwt.guard';

@Module({
  imports:[JwtModule.registerAsync({
    useFactory:async()=>({
      secret:jwtConstants.secret,
      signOptions: { expiresIn: '6000s' }, 
    }),
  }),PassportModule],
  controllers: [AdminAuthController],
  providers: [AdminAuthService,SystemauditService,SystemauditRepository,AdministratorRepository,SecurityHelper,JwtService,JwtAuthGuard,AuthenticationHelper,PrismaService,MailService]
})
export class AdminAuthModule {}
