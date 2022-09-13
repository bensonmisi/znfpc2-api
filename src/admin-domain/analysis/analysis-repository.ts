import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { FilterDto } from "./dto/filter.dto";
import * as moment from 'moment'

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
        const startdate = moment(dto.startdate).format()
        return await this.prisma.report.findMany({
            where:{
               created_at:{
                    gte:new Date(dto.startdate),
                    lte:new Date(dto.enddate)
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
