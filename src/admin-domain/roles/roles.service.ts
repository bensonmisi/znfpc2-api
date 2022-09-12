import { Injectable } from '@nestjs/common';
import { AssignSubModuleDto } from './dto/assign-submodule.dto';
import { AssignSystemModuleDto } from './dto/assign-systemmodule.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleRepository } from './role.repository';

@Injectable()
export class RolesService {
    constructor(private roleRepository:RoleRepository){}

    async getRoles(){
      return await this.roleRepository.getRoles()
    }

    async getRole(id:number){
      return await this.roleRepository.getRole(id)
    }

    async addRole(createRoleDto:CreateRoleDto,user:any){
      return this.roleRepository.addRole(createRoleDto,user);
    }

    async updateRole(id:number,updateRoleDto:UpdateRoleDto,user:any){
      return this.roleRepository.updateRole(id,updateRoleDto,user)
    }

    async deleteRole(id:number,user:any){
      return this.roleRepository.deleteRole(id,user)
    }


    async getModuleRole(roleId:number){
      return await this.roleRepository.getRoleSystemodule(roleId)
    }

    async assignmodule(roleModulesDto:AssignSystemModuleDto,userId:number,user:any){
     return await this.roleRepository.assignsystemmodule(roleModulesDto,userId,user)
    }
    async assignSubmodule(roleModulesDto:AssignSubModuleDto,userId:number,user:any){
      return await this.roleRepository.assignSubModule(roleModulesDto,userId,user)
     }

    async getSubmoduleRole(roleId:number,systemmoduleId:number){
      return await this.roleRepository.getRoleSubmodule(roleId,systemmoduleId)
    }

    async getPermissions(roleId:number,submoduleId:number){
      return await this.roleRepository.getRolePermission(roleId,submoduleId)
    }
    async assignPermission(rolePermissionsDto:AssignSubModuleDto,userId:number,user:any){
      return await this.roleRepository.assignPermission(rolePermissionsDto,userId,user)
     }



}
