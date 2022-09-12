import { Injectable } from '@nestjs/common';
import { AssignmoduleRepository } from './assignmodule.repository';
import { AssignModuleDto } from './dto/assignmodule.dto';
import { UnassignmoduleDto } from './dto/unassignmodule.dto';

@Injectable()
export class AssignmoduleService {
    constructor(private readonly assignmoduleRepository:AssignmoduleRepository){}

    async getModules(roleId:number){
    return await this.assignmoduleRepository.getModules(roleId)
    }

    async assignModule(assignModuleDto:AssignModuleDto,user:any){
        return await this.assignmoduleRepository.assignModule(assignModuleDto,user)
    }

    async unassignModule(unassignModuleDto:UnassignmoduleDto,user:any){
        return await this.assignmoduleRepository.unassignModule(unassignModuleDto,user)
    }
}
