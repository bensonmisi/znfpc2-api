import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"
import { SystemauditService } from "../systemaudit/systemaudit.service"
import { AssignModuleDto } from "./dto/assignmodule.dto"
import { UnassignmoduleDto } from "./dto/unassignmodule.dto"

@Injectable()
export class AssignmoduleRepository {
    constructor(private prisma:PrismaService,private systemauditService:SystemauditService){}
    async getModules(roleId:number){
      
         return await this.prisma.systemmodule.findMany({
            include:{
               roles:{
                    where:{
                       roleId:+roleId
                    }
                }
            }
         })
     }

     async assignModule(assignmoduleDto:AssignModuleDto,user:any){
        const permissions = JSON.parse(assignmoduleDto.modules)
        let permissionlist = []
        let assignedmodules =  await this.prisma.systemmodulesonroles.findMany({
            where:{
                roleId:+assignmoduleDto.role
            },
            select:{
                systemmoduleId:true
            }
         })
        if(permissions.length>0){
            permissions.forEach(async(element) => {
                let check = false
                if(assignedmodules.length>0){
                    assignedmodules.forEach(module=>{
                         if(module.systemmoduleId==element){
                            check = true
                         }
                    })
                }
                 if(!check) 
                 { 
                  permissionlist.push({assignedBy:user.userId,roleId:+assignmoduleDto.role,systemmoduleId:element}) 
                }
            });
        }
       
        
      const newvalue=  await this.prisma.systemmodulesonroles.createMany({
            data:permissionlist,
            skipDuplicates:true
        })
         

        await this.systemauditService.addSystemAudit({subject:"systemmodulesonroles",oldvalue:"",newvalue:JSON.stringify(newvalue),action:'ASSIGNMODULE',token:user.token})
   
      return{status:"success",message:"Role Module successfully updated"}
     }

     async unassignModule(unassignModuleDto:UnassignmoduleDto,user:any){
     const oldrecord = await this.prisma.systemmodulesonroles.findFirst({
        where:{
            roleId:unassignModuleDto.role,
            systemmoduleId:unassignModuleDto.module
        }
     })
        
       await this.prisma.systemmodulesonroles.delete({
        where:{
         roleId_systemmoduleId:{
                roleId:unassignModuleDto.role,
                systemmoduleId:+unassignModuleDto.module
            }
        }
       })

        await this.systemauditService.addSystemAudit({subject:"systemmodulesonroles",oldvalue:JSON.stringify(oldrecord),newvalue:"",action:'UNASSIGNMODULE',token:user.token})
   
      return{status:"success",message:"Role Module successfully removed"}
     }
}
