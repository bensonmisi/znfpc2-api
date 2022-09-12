import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AdministratorsModule } from './admin-domain/administrators/administrators.module';
import { AdminAuthModule } from './admin-domain/admin-auth/admin-auth.module';
import { RolesModule } from './admin-domain/roles/roles.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { SystemmoduleModule } from './admin-domain/systemmodule/systemmodule.module';
import { SystemsubmoduleModule } from './admin-domain/systemsubmodule/systemsubmodule.module';
import { SystempermissionModule } from './admin-domain/systempermission/systempermission.module';
import { SystemauditModule } from './admin-domain/systemaudit/systemaudit.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { AdminprofileModule } from './admin-domain/adminprofile/adminprofile.module';

import { DashboardModule } from './admin-domain/dashboard/dashboard.module';
import { ProfileModule } from './admin-domain/profile/profile.module';
import { AssignpermissionModule } from './admin-domain/assignpermission/assignpermission.module';
import { AssignsubmoduleModule } from './admin-domain/assignsubmodule/assignsubmodule.module';
import { AssignmoduleModule } from './admin-domain/assignmodule/assignmodule.module';
import { ServiceModule } from './admin-domain/service/service.module';
import { TypesModule } from './admin-domain/types/types.module';
import { ProductsModule } from './admin-domain/products/products.module';
import { ReportModule } from './admin-domain/report/report.module';
import { AnalysisModule } from './admin-domain/analysis/analysis.module';

@Module({
  imports: [
        ThrottlerModule.forRoot({
          ttl: 60,
          limit: 3,
        }),
        ConfigModule.forRoot({
          isGlobal: true, 
        }),
        PrismaModule,
        AdministratorsModule,
        AdminAuthModule,
        RolesModule,
        SystemmoduleModule,
        SystemsubmoduleModule,
        SystempermissionModule,
        SystemauditModule,
        MailModule,
        AdminprofileModule,
        DashboardModule,
        ProfileModule,
        AssignpermissionModule,
        AssignsubmoduleModule,
        AssignmoduleModule,
        ServiceModule,
        TypesModule,
        ProductsModule,
        ReportModule,
        AnalysisModule
      ],
  controllers: [],
  providers: [],
})
export class AppModule {}
