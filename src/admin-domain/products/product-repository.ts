import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { SystemauditService } from "../systemaudit/systemaudit.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductRepository {
  
    constructor(private prisma:PrismaService,private systemauditService:SystemauditService){}

    async getAll(){
        return await this.prisma.product.findMany({
            include:{
             type:true
            }
        })
    }

    async findByType(id: number) {
         return await this.prisma.product.findMany({
            where:{
                typeId:id
            }
         })
      }

    async create(dto:CreateProductDto,user:any){
        const record = await this.prisma.product.create({data:{
            name:dto.name,
            type:{
                connect:{
                    id:dto.typeId
                }
            }
        }})

        await this.systemauditService.addSystemAudit({subject:"Product",oldvalue:"",newvalue:JSON.stringify(record),action:'CREATE',token:user.token})
       return {status:"success",message:"Record successfully created"}
    }

    async update(id:number,dto:UpdateProductDto,user:any){
        const oldrecord = await this.prisma.product.findFirst({where:{id:id}})
        const record = await this.prisma.product.update({
            where:{
                id:id
            },
            data:{
                name:dto.name
            }
        })
        await this.systemauditService.addSystemAudit({subject:"product",oldvalue:JSON.stringify(oldrecord),newvalue:JSON.stringify(record),action:'UPDATE',token:user.token})
        return {status:"success",message:"Product successfully UPDATED"}
    }

    async delete(id:number,user:any){
        const oldrecord = await this.prisma.product.findFirst({where:{id:id}})
        const record = await this.prisma.product.delete({
            where:{
                id:id
            }
        })
        await this.systemauditService.addSystemAudit({subject:"product",oldvalue:JSON.stringify(oldrecord),newvalue:JSON.stringify(record),action:'DELETE',token:user.token})
        return {status:"success",message:"Record successfully DELETED"}
    }
}
