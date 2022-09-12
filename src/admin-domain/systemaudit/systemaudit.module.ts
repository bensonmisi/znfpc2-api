import { Module } from '@nestjs/common';
import { SystemauditService } from './systemaudit.service';
import { SystemauditController } from './systemaudit.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { SystemauditRepository } from './systemaudit.repository';

@Module({
  controllers: [SystemauditController],
  providers: [SystemauditService,PrismaService,SystemauditRepository],
  exports:[SystemauditService]
})
export class SystemauditModule {}
