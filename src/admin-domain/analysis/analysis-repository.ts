import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { FilterDto } from "./dto/filter.dto";

@Injectable()
export class AnalysisRepository {
    constructor(private prisma:PrismaService){}

    async getAll(){
        return await this.prisma.report.findMany({
            include:{
                type:true,
                service:true,
                product:true,
                user:{
                    select:{
                        name:true,
                        surname:true
                    }
                }
            }
        })
    }

    async filterbyDate(dto:FilterDto){
        return await this.prisma.report.findMany({
            where:{
               calldate:{
                    lte:dto.startdate,
                    gte:dto.enddate
                }
            },
            include:{
                type:true,
                service:true,
                product:true,
                user:{
                    select:{
                        name:true,
                        surname:true
                    }
                }
            }
        })   
    }
}
