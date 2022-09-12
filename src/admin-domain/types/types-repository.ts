import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { SystemauditService } from "../systemaudit/systemaudit.service";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";

@Injectable()
export class TypesRepository {
  
    constructor(private prisma:PrismaService,private systemauditService:SystemauditService){}

    async getAll(){
        return await this.prisma.type.findMany({
            include:{
             service:true
            }
        })
    }

    async findByService(id: number) {
        return await this.prisma.type.findMany({
            where:{
                serviceId:id
            }
        })
      }

    async create(dto:CreateTypeDto,user:any){
        const record = await this.prisma.type.create({data:{
            name:dto.name,
            service:{
                connect:{
                    id:dto.serviceId
                }
            }
        }})

        await this.systemauditService.addSystemAudit({subject:"Types",oldvalue:"",newvalue:JSON.stringify(record),action:'CREATE',token:user.token})
       return {status:"success",message:"Type successfully created"}
    }

    async update(id:number,dto:UpdateTypeDto,user:any){
        const oldrecord = await this.prisma.type.findFirst({where:{id:id}})
        const record = await this.prisma.type.update({
            where:{
                id:id
            },
            data:{
                name:dto.name
            }
        })
        await this.systemauditService.addSystemAudit({subject:"type",oldvalue:JSON.stringify(oldrecord),newvalue:JSON.stringify(record),action:'UPDATE',token:user.token})
        return {status:"success",message:"Type successfully UPDATED"}
    }

    async delete(id:number,user:any){
        const oldrecord = await this.prisma.type.findFirst({where:{id:id}})
        const record = await this.prisma.type.delete({
            where:{
                id:id
            }
        })
        await this.systemauditService.addSystemAudit({subject:"type",oldvalue:JSON.stringify(oldrecord),newvalue:JSON.stringify(record),action:'DELETE',token:user.token})
        return {status:"success",message:"Type successfully DELETED"}
    }
}
