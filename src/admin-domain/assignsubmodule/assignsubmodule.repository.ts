import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/prisma/prisma.service"
import { SystemauditService } from "../systemaudit/systemaudit.service"
import { AssignSubmoduleDto } from "./dto/assignsubmodule.dto"
import { UnassignSubmoduleDto } from "./dto/unassignsubmodule.dto"

@Injectable()
export class AssignsubmoduleRepository {
    constructor(private readonly prisma:PrismaService,private systemauditService:SystemauditService){}
    async getSubmodules(roleId:number,systemmoduleId:number){
       
         return await this.prisma.systemsubmodule.findMany({
            where:{
              systemmoduleId:systemmoduleId
               },
            include:{
               systemsubmoduleroles:{
                    where:{
                       roleId:+roleId
                    }
                }
            }
         })
     }

     async assignSubmodule(assignSubmoduleDto:AssignSubmoduleDto,user:any){
        const permissions = JSON.parse(assignSubmoduleDto.submodules)
        let permissionlist = []
         const  submodules = await this.prisma.systemsubmodulesonroles.findMany({
            where:{
                roleId:+assignSubmoduleDto.role
            }
         })
        if(permissions.length>0){
            permissions.forEach(async(element) => {
                let check = false
                if(submodules.length>0){
                   submodules.forEach(module=>{
                         if(module.systemsubmoduleId==element){
                            check = true
                         }
                    })
                }

                 if(!check)
                 {
                 permissionlist.push({assignedBy:user.userId,roleId:+assignSubmoduleDto.role,systemsubmoduleId:element}) 
                 }
            });
        }
       
        
      const newvalue=  await this.prisma.systemsubmodulesonroles.createMany({
            data:permissionlist
        })
         

        await this.systemauditService.addSystemAudit({subject:"systemsubmodulesonroles",oldvalue:"",newvalue:JSON.stringify(newvalue),action:'ASSIGNSUBMODULE',token:user.token})
   
      return{status:"success",message:"Role Submodule successfully updated"}
     }

     async unassignSubmodule(unassignSubmoduleDto:UnassignSubmoduleDto,user:any){
     const oldrecord = await this.prisma.systemsubmodulesonroles.findFirst({
        where:{
            roleId:unassignSubmoduleDto.role,
            systemsubmoduleId:unassignSubmoduleDto.submodule
        }
     })
        
       await this.prisma.systemsubmodulesonroles.delete({
        where:{
        roleId_systemsubmoduleId:{
                roleId:unassignSubmoduleDto.role,
                systemsubmoduleId:+unassignSubmoduleDto.submodule
            }
        }
       })

        await this.systemauditService.addSystemAudit({subject:"systemSubmodulesOnRole",oldvalue:JSON.stringify(oldrecord),newvalue:"",action:'UNASSIGNSUBMODULE',token:user.token})
   
      return{status:"success",message:"Role Submodule successfully removed"}
     }
}
