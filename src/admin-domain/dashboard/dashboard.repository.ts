import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Role } from "src/enums/role.enum";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class DashboardRepository {
   
    constructor(private prisma:PrismaService){}

    async getMenu(admin:any){

        const user =  await this.prisma.administrator.findFirst({ where:{id:admin.userId }})
        if(!user){
            throw new UnauthorizedException("Unauthorized")
        }

        const role= await this.prisma.role.findFirst({
            where:{
                id:user.roleId
            },
            include:{
                systemrolemodules:{                  
                    include:{
                        systemmodule:{                            
                            include:{
                                systemsubmodules:{
                                    include:{                                         
                                        systemsubmoduleroles:{
                                          where:{
                                            roleId:admin.roleId
                                          }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })     
        
        
        let menuarray=[]

          role.systemrolemodules.forEach(role=>{
             const icon =  role.systemmodule.icon
             const name = role.systemmodule.name
             const submodules = role.systemmodule.systemsubmodules.filter((submodule)=>{
                 if(submodule.systemsubmoduleroles.length>0){
                    return {name:submodule.name,icon:submodule.icon,url:submodule.url}
                 }
             })
             let elements = {icon:icon,name:name,submodules:submodules}
             menuarray.push(elements)
          })

          return menuarray

     

    }

    async getReport(user: any) {
      return await this.prisma.report.findMany({
        where:{
            administratorId:user.userId
        },
        include:{
            type:true,
            product:{
                select:{
                    name:true
                }
            },
            service:{
                select:{
                    name:true
                }
            },
            user:{
                select:{
                    name:true
                }
            }
        }
      })
    }
}
