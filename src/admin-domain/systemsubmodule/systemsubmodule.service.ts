import { Injectable } from '@nestjs/common';
import { CreateSystemSubmoduleDto } from './dto/create-systemsubmodule.dto';
import { UpdateSystemSubmoduleDto } from './dto/update-systemsubmodule.dto';
import { SystemsubmoduleRepository } from './systemsubmodule.repository';

@Injectable()
export class SystemsubmoduleService {
    constructor(private systemsubmoduleRepository:SystemsubmoduleRepository){}

    async getAll(id:number){
        return await this.systemsubmoduleRepository.getAll(id)
    }

    async add(createSystemSubmoduleDto:CreateSystemSubmoduleDto,user:any){
        return await this.systemsubmoduleRepository.add(createSystemSubmoduleDto,user)
    }

    async update(id:number,updateSystemSubmoduleDto:UpdateSystemSubmoduleDto,user:any){
        return await this.systemsubmoduleRepository.update(id,updateSystemSubmoduleDto,user)
    }

    async delete(id:number,user:any){
        return await this.systemsubmoduleRepository.delete(id,user)
    }
}
