import { Injectable } from "@nestjs/common";
import { SecurityHelper } from "src/helper/security.helper";
import { PrismaService } from "src/prisma/prisma.service";
import { ChangePasswordDto } from "./dto/change-password.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";

@Injectable()
export class ProfileRepository {
    constructor(private prisma:PrismaService,private helperService:SecurityHelper){}

    async getProfile(id:number){
        const user=  await this.prisma.administrator.findFirst({where:{
            id:id
        },select:{
            name:true,
            surname:true,
            email:true,
            status:true,
            role:{
                select:{
               id:true,
               name:true
                }
            }
            
        }
    })
    const role= await this.prisma.role.findFirst({
        where:{
            id:user.role.id
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
                                        roleId:user.role.id
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

    return {user:{profile:user,menus:menuarray}}
    }

    async update(updateProfileDto:UpdateProfileDto,admin:any){
     await this.prisma.administrator.update({where:{
            id:admin.userId
        },data:{
            name:updateProfileDto.name,
            surname:updateProfileDto.surname,
            email:updateProfileDto.email
        }
    })

     return {status:"success",message:"Profile successfully updated"}

    }

    async changepassword(changePasswordDto:ChangePasswordDto,admin:any){
        const password = await this.helperService.hashPassword(changePasswordDto.password)
        await this.prisma.administrator.update({where:{
            id:admin.userId
        },data:{
            password:password
        }
    })
    return {status:"success",message:"Password  successfully updated"}
    }
}
