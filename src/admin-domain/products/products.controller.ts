import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { SkipThrottle } from '@nestjs/throttler';
import { JwtAuthGuard } from 'src/authJWT/jwt.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { PermissionsGuard } from 'src/guards/permissions.guard';
import { RolesGuard } from 'src/guards/role.guard';
import { Requiredpermissions } from 'src/decorators/requiredpermissions.decorator';
import { User } from 'src/decorators/user.decorator';

@Controller('administrator/products')
@ApiTags("products")
@SkipThrottle(true)
@UseGuards(JwtAuthGuard,RolesGuard,PermissionsGuard)
@Roles(Role.Admin)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @Requiredpermissions("CREATE_PRODUCT")
 async create(@Body() createProductDto: CreateProductDto,@User() user) {
    return await this.productsService.create(createProductDto,user);
  }

  @Get()
  async findAll() {
    return await this.productsService.findAll();
  }

  @Get(":id")
  async findByType(@Param("id") id:string) {
    return await this.productsService.findByType(+id);
  }

 

  @Patch(':id')
  @Requiredpermissions("UPDATE_PRODUCT")
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto,@User() user) {
    return await this.productsService.update(+id, updateProductDto,user);
  }

  @Delete(':id')
  @Requiredpermissions("DELETE_PRODUCT")
  async remove(@Param('id') id: string,@User() user) {
    return await this.productsService.remove(+id,user);
  }
}
