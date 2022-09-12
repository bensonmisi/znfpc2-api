import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ServiceRepository } from './service-repository';

@Injectable()
export class ServiceService {
  constructor(private repo:ServiceRepository){}
  async create(createServiceDto: CreateServiceDto,user:any) {
    return await this.repo.create(createServiceDto,user)
  }

  async findAll() {
    return await this.repo.getAll()
  }

 

  async update(id: number, updateServiceDto: UpdateServiceDto,user:any) {
    return await this.repo.update(id,updateServiceDto,user)
  }

 async remove(id: number,user:any) {
    return await this.repo.delete(id,user)
  }
}
