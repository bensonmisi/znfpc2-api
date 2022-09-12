import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { SystemauditService } from "../systemaudit/systemaudit.service";
import { CreateSystemModuleDto } from "./dto/create-systemmodule.dto";
import { UpdateSystemModuleDto } from "./dto/update-systemmodule.dto";

@Injectable()
export class SystemmoduleRepository {
    constructor(private prisma:PrismaService,private systemauditService:SystemauditService){}
    

    async getAll(){
        return this.prisma.systemmodule.findMany({include:{
            systemsubmodules:true
        }});
    }

    async findOne(id:number){
        return this.prisma.systemmodule.findUnique({where:{id:id}})
    }

    async add(createSystemModuleDto:CreateSystemModuleDto,user:any){
        const newrecord= await this.prisma.systemmodule.create({
            data:{
                name:createSystemModuleDto.name,
                icon:createSystemModuleDto.icon,
                description:createSystemModuleDto.description
            }
         })
         await this.systemauditService.addSystemAudit({subject:"SysteModule",oldvalue:"",newvalue:JSON.stringify(newrecord),action:'CREATE',token:user.token})
        return {status:"success",message:"System module successfully created  System Module"}
    }

    async update(id:number,UpdateSystemModuleDto:UpdateSystemModuleDto,user:any){
        const oldrecord = await this.prisma.systemmodule.findFirst({where:{id:id},include:{systemsubmodules:{}}})
        const newrecord= await this.prisma.systemmodule.update({where:{id:id},data:{name:UpdateSystemModuleDto.name,icon:UpdateSystemModuleDto.icon,description:UpdateSystemModuleDto.description}})
        await this.systemauditService.addSystemAudit({subject:"SysteModule",oldvalue:JSON.stringify(oldrecord),newvalue:JSON.stringify(newrecord),action:'UPDATE',token:user.token})
        return {status:"success",message:"System module successfully created  System Module"}
    }

    async delete(id,user:any){
        const oldrecord = await this.prisma.systemmodule.findFirst({where:{id:id}})
     
         await this.prisma.systemmodule.delete({where:{id}})
         await this.systemauditService.addSystemAudit({subject:"SysteModule",oldvalue:JSON.stringify(oldrecord),newvalue:"",action:'DELETE',token:user.token})
        return {status:"success",message:"System module successfully created  System Module"}
    }
}
