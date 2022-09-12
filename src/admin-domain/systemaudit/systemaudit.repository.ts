import { BadRequestException, Injectable } from "@nestjs/common";
import { Request } from "express";
import { PrismaService } from "src/prisma/prisma.service";
import { LoginlogDto, SystemAuditDto } from "src/utils/constants";

@Injectable()
export class SystemauditRepository {
    constructor(private prisma:PrismaService){}

    async AddLoginLog(req:Request,args:LoginlogDto){
      await this.prisma.loginlog.create({
        data:{
            administratorId:args.administratorId,
            token:args.token,
            ipaddress:req.ip,            
            device:req.hostname,

        }
      })
    }
    async getLoginlog(token:string){
        return await this.prisma.loginlog.findFirst({where:{token:token}})
    }

    async getLogs(user:any){
        return await this.prisma.loginlog.findMany({
            where:{
                administratorId:user.userId
            },
            include:{
                systemaudits:true
            }
        })
    }

    async addSystemAudit(args:SystemAuditDto){
       const loginlog = await this.getLoginlog(args.token)
       if(!loginlog){
        throw new BadRequestException("Invalid login session")
       } 
      
       await this.prisma.systemaudit.create({
        data:{
            subject:args.subject,
            old:args.oldvalue,
            new:args.newvalue,
            action:args.action,
            loginlog:{
                connect:{
                 id:loginlog.id 
                }
            }
        }
       })
    }
}
