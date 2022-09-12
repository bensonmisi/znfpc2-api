import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { SystemauditRepository } from "../systemaudit/systemaudit.repository";
import { SystemauditService } from "../systemaudit/systemaudit.service";
import { AssignSubModuleDto } from "./dto/assign-submodule.dto";
import { AssignSystemModuleDto } from "./dto/assign-systemmodule.dto";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";


@Injectable()
export class RoleRepository{

   constructor(private prisma:PrismaService,private systemauditService:SystemauditService){}

    async getRoles(){
       return  await this.prisma.role.findMany()      
    }

    async getRole(id:number){
        const role=  await this.prisma.role.findFirst({where:{
            id:id
        },include:{
            systempermissions:{
                include:{
                    systempermission:true
                }
            }
        }})
      
       return {...role,systempermissions:role.systempermissions.map((systempermission)=>systempermission.systempermission.name)}
    }


    async addRole(createRoleDto:CreateRoleDto,user:any){

         
        const  record = await this.prisma.role.create({
            data:{
                name:createRoleDto.name
            },
        })

        await this.systemauditService.addSystemAudit({subject:"Role",oldvalue:"",newvalue:JSON.stringify(record),action:'CREATE',token:user.token})
        return {status:"success",message:"System module successfully created  role"}
    }

    async updateRole(id:number,updateRoleDto:UpdateRoleDto,user:any){
        const oldrecord = await this.prisma.role.findFirst({where:{id:id}})
        const newrecord = await this.prisma.role.update({
            where:{
                id:id
            },
            data:{
                name:updateRoleDto.name
            }
        })

        await this.systemauditService.addSystemAudit({subject:"Role",oldvalue:JSON.stringify(oldrecord),newvalue:JSON.stringify(newrecord),action:'UPDATE',token:user.token})
        return {status:"success",message:"System module successfully updated  role"}
    }

    async deleteRole(id:number,user:any){
        const oldrecord = await this.prisma.role.findFirst({where:{id:id}})
       const result=  await this.prisma.role.delete({
            where:{
                id:id
            }
        })
        await this.systemauditService.addSystemAudit({subject:"Role",oldvalue:JSON.stringify(oldrecord),newvalue:"",action:'DELETE',token:user.token})
        return {status:"success",message:"System module successfully deleted role"}
    }

    async getRoleSystemodule(roleId:number){
        this.prisma.$use(async (params, next) => {
            const before = Date.now()
          
            const result = await next(params)
          
            const after = Date.now()
          
            console.log(`Query ${params.model}.${params.action} took ${after - before}ms`)
          
            return result
          })
         return await this.prisma.systemmodule.findMany({
            include:{
                roles:{
                    where:{
                        roleId:roleId
                    }
                }
            }
         })
    }

    async getRoleSubmodule(roleId:number,systemmoduleId:number){
        this.prisma.$use(async (params, next) => {
            const before = Date.now()
          
            const result = await next(params)
          
            const after = Date.now()
          
            console.log(`Query ${params.model}.${params.action} took ${after - before}ms`)
          
            return result
          })
         return await this.prisma.systemsubmodule.findMany({
            where:{
              systemmoduleId:systemmoduleId
            },
            include:{
                systemsubmoduleroles:{
                    where:{
                        roleId:roleId
                    }
                }
            }
         })
    }

    async getRolePermission(roleId:number,submoduleId:number){
        this.prisma.$use(async (params, next) => {
            const before = Date.now()
          
            const result = await next(params)
          
            const after = Date.now()
          
            console.log(`Query ${params.model}.${params.action} took ${after - before}ms`)
          
            return result
          })
         return await this.prisma.systempermission.findMany({
            where:{
              systemsubmoduleId:submoduleId
               },
            include:{
               systempermissionroles:{
                    where:{
                       roleId:+roleId
                    }
                }
            }
         })
    }

    async assignsystemmodule(rolemodulesDto:AssignSystemModuleDto,userId:number,user:any){

        const modules = JSON.parse(rolemodulesDto.modules)
        let modulelist = []
        
        if(modules.length>0){
            modules.forEach((element) => {
                 modulelist.push({assignedBy:userId,roleId:+rolemodulesDto.role,systemmoduleId:element}) 
            });
        }
        
        await this.prisma.systemmodulesonroles.deleteMany({where:{
            roleId:+rolemodulesDto.role
        }})
        
      const newvalue=  await this.prisma.systemmodulesonroles.createMany({
            data:modulelist,
            skipDuplicates:true
        })
         

        await this.systemauditService.addSystemAudit({subject:"Role",oldvalue:"",newvalue:JSON.stringify(newvalue),action:'ASSIGNMODULE',token:user.token})
   
      return{status:"success",message:"Role modules successfully updated"}
    }

    async assignSubModule(rolemodulesDto:AssignSubModuleDto,userId:number,user:any){

        const modules = JSON.parse(rolemodulesDto.modules)
        let modulelist = []

        
        if(modules.length>0){
            modules.forEach((element) => {
                 modulelist.push({assignedBy:userId,roleId:+rolemodulesDto.role,systemsubmoduleId:element}) 
            });
        }
      
        const submodules = await this.prisma.systemsubmodule.findMany({where:{systemmoduleId:+rolemodulesDto.systemmoduleId},select:{id:true}})
        await this.prisma.systemsubmodulesonroles.deleteMany({
                                                     where:{
                                                          roleId:+rolemodulesDto.role,
                                                          systemsubmodule:{
                                                            
                                                          }
                                                        }
                                                    })

       
      const newvalue=  await this.prisma.systemsubmodulesonroles.updateMany({
            data:modulelist
        })
         

        await this.systemauditService.addSystemAudit({subject:"Role",oldvalue:"",newvalue:JSON.stringify(newvalue),action:'ASSIGNMODULE',token:user.token})
   
      return{status:"success",message:"Role modules successfully updated"}
    }

    async assignPermission(rolemodulesDto:AssignSubModuleDto,userId:number,user:any){

        const modules = JSON.parse(rolemodulesDto.modules)
        let modulelist = []
        if(modules.length>0){
            modules.forEach((element) => {
                 modulelist.push({assignedBy:userId,roleId:+rolemodulesDto.role,systempermissionId:element}) 
            });
        }
       
        
      const newvalue=  await this.prisma.systemsubmodulesonroles.createMany({
            data:modulelist
        })
         

        await this.systemauditService.addSystemAudit({subject:"Role",oldvalue:"",newvalue:JSON.stringify(newvalue),action:'ASSIGNMODULE',token:user.token})
   
      return{status:"success",message:"Role modules successfully updated"}
    }

    async removePermissions(roleid:number,permissionId:number){
        await this.prisma.systempermissionsonroles.delete({where:{
            roleId_systempermissionId:{
                roleId:roleid,
                systempermissionId:permissionId
            }
        }})
        return {status:"success",message:"Permission Successfully removed"}
    }


}

