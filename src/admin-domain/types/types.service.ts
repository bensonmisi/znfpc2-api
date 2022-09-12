import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { TypesRepository } from './types-repository';

@Injectable()
export class TypesService {

  constructor(private repo:TypesRepository){}
  async create(createTypeDto: CreateTypeDto,user:any) {
    return await this.repo.create(createTypeDto,user)
  }

  async findAll() {
    return await this.repo.getAll()
  }

  async findByService(id: number) {
    return await this.repo.findByService(id)
  }

 

  async update(id: number, updateTypeDto: UpdateTypeDto,user:any) {
    return  await this.repo.update(id,updateTypeDto,user)
  }

  async remove(id: number,user:any) {
    return await this.repo.delete(id,user)
  }
}
