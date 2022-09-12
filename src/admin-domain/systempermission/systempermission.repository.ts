import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { SystemauditService } from "../systemaudit/systemaudit.service";
import { CreateSystemPermissionDto } from "./dto/create-systempermission.dto";
import { UpdateSystemPermissionDto } from "./dto/update-systempermission.dto";

@Injectable()
export class SystempermissionRepository {
    constructor(private prisma:PrismaService,private systemauditService:SystemauditService){}

    async findAll(id:number){
         return await this.prisma.systempermission.findMany({
            where:{
                systemsubmoduleId:id
            }
        }) 
    }

    async create(createSystemPermissionDto:CreateSystemPermissionDto,user:any){
        const systemsubmodule = await this.prisma.systemsubmodule.findFirst({where:{id:+createSystemPermissionDto.systemsubmodule}})
        if(!systemsubmodule){
            throw new BadRequestException("System Sub module not found")
        }

        const checkrecord = await this.prisma.systempermission.findFirst({where:{name:createSystemPermissionDto.name}})
        if(checkrecord){
            throw new BadRequestException("Permission name already taken")
        }

       const newrecord=  await this.prisma.systempermission.create({
            data:{
               name:createSystemPermissionDto.name,
               systemsubmodule:{
                connect:{
                    id:+createSystemPermissionDto.systemsubmodule
                }
               }  
            }
        })
        await this.systemauditService.addSystemAudit({subject:"SystePermission",oldvalue:"",newvalue:JSON.stringify(newrecord),action:'CREATE',token:user.token})
      

        return {status:"success",message:"Permission successfully created"}
    }

    async update(id:number,updateSystemPermissionDto:UpdateSystemPermissionDto,user:any){
        const oldrecord = await this.prisma.systempermission.findFirst({where:{id:id}})
        const newrecord= await this.prisma.systempermission.update({where:{
            id:id
        },data:{
            name:updateSystemPermissionDto.name
        }})
        await this.systemauditService.addSystemAudit({subject:"SystePermission",oldvalue:JSON.stringify(oldrecord),newvalue:JSON.stringify(newrecord),action:'UPDATE',token:user.token})
      

        return {status:"success",message:"Permission successfully updated"} 
    }

    async delete(id:number,user:any){
        const oldrecord = await this.prisma.systempermission.findFirst({where:{id:id}})
       await this.prisma.systempermission.delete({where:{id:id}})
     
       await this.systemauditService.addSystemAudit({subject:"SystePermission",oldvalue:JSON.stringify(oldrecord),newvalue:"",action:'DELETE',token:user.token})
      

        return {status:"success",message:"Permission successfully delete"}
    }
}
