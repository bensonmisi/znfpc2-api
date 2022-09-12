import { Injectable } from '@nestjs/common';
import { CreateSystemPermissionDto } from './dto/create-systempermission.dto';
import { UpdateSystemPermissionDto } from './dto/update-systempermission.dto';
import { SystempermissionRepository } from './systempermission.repository';

@Injectable()
export class SystempermissionService {
    constructor(private systempermissionRepository:SystempermissionRepository){}

    async getAll(id:number){
        return await this.systempermissionRepository.findAll(id);
    }
    
    async create(createSystemPermissionDto:CreateSystemPermissionDto,user:any){
        return await this.systempermissionRepository.create(createSystemPermissionDto,user);
    }

    async update(id:number,updateSystemPermissionDto:UpdateSystemPermissionDto,user:any){
        return await this.systempermissionRepository.update(id,updateSystemPermissionDto,user);
    }

    async delete(id:number,user:any){
        return await this.systempermissionRepository.delete(id,user)
    }
}
