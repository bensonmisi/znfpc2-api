import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { SystemauditService } from "../systemaudit/systemaudit.service";
import { SystemmoduleRepository } from "../systemmodule/systemmodule.repository";
import { CreateSystemSubmoduleDto } from "./dto/create-systemsubmodule.dto";
import { UpdateSystemSubmoduleDto } from "./dto/update-systemsubmodule.dto";

@Injectable()
export class SystemsubmoduleRepository {

    constructor(private prisma:PrismaService,private systemmoduleRepository:SystemmoduleRepository,private systemauditService:SystemauditService){}
    

    async getAll(id:number){
        return this.prisma.systemsubmodule.findMany({where:{
            systemmoduleId:id
        },
        include:{
            systempermissions:true
        }
    });
    }

    async findOne(id:number){
        return await this.prisma.systemsubmodule.findFirst({
            where:
            {
                id:id
            }
        })
    }

    async add(createSystemSubmoduleDto:CreateSystemSubmoduleDto,user:any){
        const record = await this.prisma.systemsubmodule.findFirst({where:{url:createSystemSubmoduleDto.url}})
   
        if(record){
            throw new BadRequestException("System submodule Url already exist in database")
        }
        
     
            const systemModule = await this.systemmoduleRepository.findOne(+createSystemSubmoduleDto.systemmodule)  
      
       
        if(!systemModule){
            throw new BadRequestException("System module doesnt exist")
        }
         
        const newrecord = await  this.prisma.systemsubmodule.create({
            data:{
                name:createSystemSubmoduleDto.name,
                url:createSystemSubmoduleDto.url,
                icon:createSystemSubmoduleDto.icon,
                systemmodule:{
                    connect:{
                        id:+createSystemSubmoduleDto.systemmodule
                    }
                }
            }
         })
         await this.systemauditService.addSystemAudit({subject:"SysteSubmodule",oldvalue:"",newvalue:JSON.stringify(newrecord),action:'CREATE',token:user.token})
      

         return {status:"success",message:"Submodule successfully created"}
    }

    async update(id:number,updateSystemSubmoduleDto:UpdateSystemSubmoduleDto,user:any){
        const oldrecord = await this.prisma.systemsubmodule.findFirst({where:{id:id}})
       const newrecord = await this.prisma.systemsubmodule.update({where:{
          id:id
        },
                data:{
                name:updateSystemSubmoduleDto.name,
                url:updateSystemSubmoduleDto.url,
                icon:updateSystemSubmoduleDto.icon,
                systemmodule:{
                    connect:{
                        id:+updateSystemSubmoduleDto.systemmodule
                    }
                }
            }
         })
         await this.systemauditService.addSystemAudit({subject:"SysteSubmodule",oldvalue:JSON.stringify(oldrecord),newvalue:JSON.stringify(newrecord),action:'UPDATE',token:user.token})
      

         return {status:"success",message:"Submodule successfully updated"}
    }
    async delete(id:number,user:any){
        const oldrecord = await this.prisma.systemsubmodule.findFirst({where:{id:id}})
         await this.prisma.systemsubmodule.delete({where:{id}})
         await this.systemauditService.addSystemAudit({subject:"SysteSubmodule",oldvalue:JSON.stringify(oldrecord),newvalue:"",action:'DELETE',token:user.token})
        return {status:"success",message:"Submodule successfully deleted"}
    }
}
