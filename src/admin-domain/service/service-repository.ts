import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { SystemauditService } from "../systemaudit/systemaudit.service";
import { CreateServiceDto } from "./dto/create-service.dto";
import { UpdateServiceDto } from "./dto/update-service.dto";

@Injectable()
export class ServiceRepository {
    constructor(private prisma:PrismaService,private systemauditService:SystemauditService){}

    async getAll(){
        return await this.prisma.service.findMany() 
    }

    async create(dto:CreateServiceDto,user:any){
        const record = await this.prisma.service.create({data:{
            name:dto.name
        }})

        await this.systemauditService.addSystemAudit({subject:"service",oldvalue:"",newvalue:JSON.stringify(record),action:'CREATE',token:user.token})
       return {status:"success",message:"Service successfully created"}
    }

    async update(id:number,dto:UpdateServiceDto,user:any){
        const oldrecord = await this.prisma.service.findFirst({where:{id:id}})
        const record = await this.prisma.service.update({
            where:{
                id:id
            },
            data:{
                name:dto.name
            }
        })
        await this.systemauditService.addSystemAudit({subject:"service",oldvalue:JSON.stringify(oldrecord),newvalue:JSON.stringify(record),action:'UPDATE',token:user.token})
        return {status:"success",message:"Service successfully UPDATED"}
    }

    async delete(id:number,user:any){
        const oldrecord = await this.prisma.service.findFirst({where:{id:id}})
        const record = await this.prisma.service.delete({
            where:{
                id:id
            }
        })
        await this.systemauditService.addSystemAudit({subject:"service",oldvalue:JSON.stringify(oldrecord),newvalue:JSON.stringify(record),action:'DELETE',token:user.token})
        return {status:"success",message:"Service successfully DELETED"}
    }
}
