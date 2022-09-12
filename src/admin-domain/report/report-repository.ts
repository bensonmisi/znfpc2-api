import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { SystemauditService } from "../systemaudit/systemaudit.service";
import { CreateReportDto } from "./dto/create-report.dto";
import { UpdateReportDto } from "./dto/update-report.dto";

@Injectable()
export class ReportRepository {
    constructor(private prisma: PrismaService, private systemauditService: SystemauditService) { }

    async getAll(user: any) {
        return await this.prisma.report.findMany({
            where: {
                administratorId: user.userId
            },
            include: {
                type: {
                    select: {
                        name: true
                    }
                },
                service: {
                    select: {
                        name: true
                    }
                },
                product: {
                    select: {
                        name: true
                    }
                }

            }
        })
    }

    async create(dto: CreateReportDto, user: any) {
        const record = await this.prisma.report.create({
            data: {
                name: dto.name,
                gender: dto.gender,
                maritalstatus: dto.maritalstatus,
                phonenumber: dto.phonenumber,
                email: dto.email,
                province: dto.province,
                district: dto.district,
                city: dto.city,
                location: dto.location,
                service: {
                    connect: {
                        id: dto.serviceId
                    }
                },
                type: {
                    connect: {
                        id: dto.typeId
                    }
                },
                product: {
                    connect: {
                        id: dto.productId
                    }
                },
                user: {
                    connect: {
                        id: user.userId
                    }
                },
                frequeny: dto.reference,
                issue: dto.issue,
                age: dto.age,
                reference: dto.reference,
                knowledge: dto.reference,
                mode: dto.mode,
                starttim: dto.starttime,
                endttime: dto.endtime,
                calldate: dto.calldate
            }
        })

        await this.systemauditService.addSystemAudit({subject:"report",oldvalue:"",newvalue:JSON.stringify(record),action:'CREATE',token:user.token})
        return {status:"success",message:"Record successfully created"}
    }

    async update(id:number,dto:UpdateReportDto,user:any){
        const oldrecord = await this.prisma.report.findFirst({
            where:{
                id:id,
                administratorId:user.userId
            }
        })

        if(!oldrecord){
            throw new BadRequestException("Report Not Found")
        }

        const newrecord = await this.prisma.report.update({
            where:{
              id:id
            },
            data:{
                name: dto.name,
                gender: dto.gender,
                maritalstatus: dto.maritalstatus,
                phonenumber: dto.phonenumber,
                email: dto.email,
                province: dto.province,
                district: dto.district,
                city: dto.city,
                location: dto.location,
                service: {
                    connect: {
                        id: dto.serviceId
                    }
                },
                type: {
                    connect: {
                        id: dto.typeId
                    }
                },
                product: {
                    connect: {
                        id: dto.productId
                    }
                },
                user: {
                    connect: {
                        id: user.userId
                    }
                },
                frequeny: dto.reference,
                issue: dto.issue,
                age: dto.age,
                reference: dto.reference,
                knowledge: dto.reference,
                mode: dto.mode,
                starttim: dto.starttime,
                endttime: dto.endtime,
                calldate: dto.calldate,
                
            }
        })

        await this.systemauditService.addSystemAudit({subject:"report",oldvalue:JSON.stringify(oldrecord),newvalue:JSON.stringify(newrecord),action:'UPDATE',token:user.token})
        return {status:"success",message:"Record successfully updated"}
    }



}
