import { Injectable } from '@nestjs/common';
import { AssignpermissionRepository } from './assignpermission.repository';
import { AssignPermissionDto } from './dto/assignpermission.dto';
import { UnassignpermissionDto } from './dto/unassignpermission.dto';

@Injectable()
export class AssignpermissionService {
    constructor(private readonly assginPermissionRepository:AssignpermissionRepository){}

    async getPermissions(roleid:number,submoduleId:number){
        return await this.assginPermissionRepository.getPermissions(roleid,submoduleId)
    }

    async assignPermission(assignPermissionDto:AssignPermissionDto,user:any){
        return await this.assginPermissionRepository.assignPermission(assignPermissionDto,user)
    }

    async unassignPermission(unassignPermission:UnassignpermissionDto,user:any){
        return await this.assginPermissionRepository.unassignPermission(unassignPermission,user)
    }
}
