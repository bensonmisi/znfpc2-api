import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { SystemauditService } from "../systemaudit/systemaudit.service";
import { AssignPermissionDto } from "./dto/assignpermission.dto";
import { UnassignpermissionDto } from "./dto/unassignpermission.dto";

@Injectable()
export class AssignpermissionRepository {
    constructor(private readonly prisma:PrismaService,private systemauditService:SystemauditService){}

     async getPermissions(roleId:number,submoduleId:number){
     
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

     async assignPermission(assignPermissionDto:AssignPermissionDto,user:any){
        const permissions = JSON.parse(assignPermissionDto.permissions)
        let permissionlist = []
        const perms = await this.prisma.systempermissionsonroles.findMany({
            where:{
                roleId:+assignPermissionDto.role
            },
            select:{
                systempermissionId:true
            }
        })
        if(permissions.length>0){
            permissions.forEach(async(element) => {
                let check = false
                if(perms.length>0){
                   perms.forEach(module=>{
                         if(module.systempermissionId==element){
                            check = true
                         }
                    })
                }
                 if(!check)
                 {
                 permissionlist.push({assignedBy:user.userId,roleId:+assignPermissionDto.role,systempermissionId:element}) 
                 }
            });
        }
       
        
      const newvalue=  await this.prisma.systempermissionsonroles.createMany({
            data:permissionlist
        })
         

        await this.systemauditService.addSystemAudit({subject:"systempermissionsonroles",oldvalue:"",newvalue:JSON.stringify(newvalue),action:'ASSIGNPERMISSION',token:user.token})
   
      return{status:"success",message:"Role Permission successfully updated"}
     }

     async unassignPermission(unassignPermissionDto:UnassignpermissionDto,user:any){
     const oldrecord = await this.prisma.systempermissionsonroles.findFirst({
        where:{
            roleId:unassignPermissionDto.role,
            systempermissionId:unassignPermissionDto.permission
        }
     })
        
       await this.prisma.systempermissionsonroles.delete({
        where:{
            roleId_systempermissionId:{
                roleId:unassignPermissionDto.role,
                systempermissionId:unassignPermissionDto.permission
            }
        }
       })

        await this.systemauditService.addSystemAudit({subject:"systempermissionsonroles",oldvalue:JSON.stringify(oldrecord),newvalue:"",action:'UNASSIGNPERMISSION',token:user.token})
   
      return{status:"success",message:"Role Permission successfully removed"}
     }
}
