import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product-repository';

@Injectable()
export class ProductsService {

  constructor(private repo:ProductRepository){}
  async create(createTypeDto: CreateProductDto,user:any) {
    return await this.repo.create(createTypeDto,user)
  }

  async findAll() {
    return await this.repo.getAll()
  }

  async findByType(id: number) {
     return await this.repo.findByType(id)
  }

  async update(id: number, updateTypeDto: UpdateProductDto,user:any) {
    return  await this.repo.update(id,updateTypeDto,user)
  }

  async remove(id: number,user:any) {
    return await this.repo.delete(id,user)
  }
}
