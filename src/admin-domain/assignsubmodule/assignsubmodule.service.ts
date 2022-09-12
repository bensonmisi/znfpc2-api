import { Injectable } from '@nestjs/common';
import { AssignsubmoduleRepository } from './assignsubmodule.repository';
import { AssignSubmoduleDto } from './dto/assignsubmodule.dto';
import { UnassignSubmoduleDto } from './dto/unassignsubmodule.dto';

@Injectable()
export class AssignsubmoduleService {
    constructor(private readonly assignsubmoduleRepository:AssignsubmoduleRepository){}

    async getSubmodule(roleId:number,systemmoduleId:number){
           return await this.assignsubmoduleRepository.getSubmodules(roleId,systemmoduleId)
    }

    async assignSubmodule(assignSubmoduleDto:AssignSubmoduleDto,user:any){
        return await this.assignsubmoduleRepository.assignSubmodule(assignSubmoduleDto,user)
    }

    async unassignSubmodule(unassignSubmoduleDto:UnassignSubmoduleDto,user:any){
        return await this.assignsubmoduleRepository.unassignSubmodule(unassignSubmoduleDto,user)
    }
}
