import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/authJWT/jwt.strategy';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoleRepository } from '../roles/role.repository';
import { RolesService } from '../roles/roles.service';
import { SystemauditRepository } from '../systemaudit/systemaudit.repository';
import { SystemauditService } from '../systemaudit/systemaudit.service';
import { ProductRepository } from './product-repository';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    ProductRepository,
    PrismaService,
    JwtStrategy,
    JwtService,
    RolesService,
    RoleRepository,
    SystemauditService,
    SystemauditRepository  
  ]
})
export class ProductsModule {}
