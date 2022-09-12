import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthenticationHelper } from "src/helper/authentication.helper";
import { SecurityHelper } from "src/helper/security.helper";
import { MailService } from "src/mail/mail.service";
import { PrismaService } from "src/prisma/prisma.service";
import { clientUrls } from "src/utils/constants";
import { SystemauditService } from "../systemaudit/systemaudit.service";
import { ChangePasswordDto } from "./dto/change-password.dto";
import { CreateAdministratorDto } from "./dto/Create-administrator.dto";
import { ProfileUpdateDto } from "./dto/profile-update.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { UpdateAdministratorDto } from "./dto/Update-administrator.dto";

@Injectable()
export class AdministratorRepository{
   constructor(
               private securityHelper:SecurityHelper,
               private prisma:PrismaService,
               private systemauditService:SystemauditService,
               private mailService: MailService,
               private authenicationHelper:AuthenticationHelper
               ){}

   async getAdministrators(){
    return this.prisma.administrator.findMany({select:{id:true,name:true,surname:true,email:true,status:true,role:true,loginlogs:true}})
   }

   async getAdministratorByEmail(email:string){
    return this.prisma.administrator.findUnique({where:{
        email:email
    }})
   }

   async getAdministrator(user:any){
    return await this.prisma.administrator.findFirst({
        where:{
            id:user.userId
        },
        include:{            
            loginlogs:{
                include:{
                    systemaudits:true
                }
            }
        }
    })
   }

   async addAdministrator(creatreAdministratorDto:CreateAdministratorDto,user:any){
    const {email,name,surname,roleId} = creatreAdministratorDto
       const checkuser = await this.getAdministratorByEmail(creatreAdministratorDto.email)
       if(checkuser){
        throw new BadRequestException("Email already exists")
       }

       const password = await this.securityHelper.generatePassword()
       const hashedpassword = await this.securityHelper.hashPassword(password.toString());
       const newrecord = await this.prisma.administrator.create({
                                        data:{
                                        name:name,  
                                        surname:surname,
                                        email:email,
                                        password:hashedpassword,
                                        roleId:+roleId
                                        }
                                    })
      await this.systemauditService.addSystemAudit({subject:"Administrator",oldvalue:"",newvalue:JSON.stringify(newrecord),action:'CREATE',token:user.token})
      return {status:"success",message:"Administrator successfully created :"+password}
   }

   async updateAdministrator(id:number,updateAdministratorDto:UpdateAdministratorDto,user:any){
    try {
      const oldrecord = await this.prisma.administrator.findFirst({where:{id:id}})
      const newrecord= await this.prisma.administrator.update({ 
                            where: { id: id } ,
                            data:{
                                name:updateAdministratorDto.name,
                                surname:updateAdministratorDto.surname,
                                email:updateAdministratorDto.email,
                                roleId:+updateAdministratorDto.roleId,
                                status:updateAdministratorDto.status
                            }
                        })
    await this.systemauditService.addSystemAudit({subject:"Administrator",oldvalue:JSON.stringify(oldrecord),newvalue:JSON.stringify(newrecord),action:'UPDATE',token:user.token})
    return {status:"success",message:"Administrator successfully updated"}
    } catch (error) {
        
    }
   }

   

   async updateProfile(profileUpdateDto:ProfileUpdateDto,user:any){

       await this.prisma.administrator.update({
        where:{
            id:user.userId
        },data:{
            name:profileUpdateDto.name,
            surname:profileUpdateDto.surname,
            email:profileUpdateDto.email
        }
       })
       return {status:"success",message:"Password successfully updated"}
   }

   async forgotPassword(id:number){
     const user = await this.prisma.administrator.findFirst({where:{id:id}})
     if(!user){
        throw new BadRequestException("User not found")
     }
    const resettoken = await this.authenicationHelper.generateUUID()
    const url = clientUrls.adminUrl+"/resetpassword/"+resettoken
    const {name,email} = user
    await this.mailService.sendPasswordReset(email,name,url,resettoken)
    return {status:"success",message:"Password reset link has been successfully sent to: "+email}
   }

   async resetPassword(resetPasswordDto:ResetPasswordDto){
    const {email,password,authtoken} =resetPasswordDto
        const user = await this.prisma.administrator.findFirst({
            where:{
                email:email,
                resettoken:authtoken                
            }
        })

        if(!user){
            throw new BadRequestException("Invalid password reset details")
        }

        const hashedpassword = await this.securityHelper.hashPassword(password.toString());

        await this.prisma.administrator.update({
            where:{
                id:user.id
            },
            data:{
                password:hashedpassword
            }
        })
        return {status:"success",message:"Password successfully reset you can login"}
   }

   async changePassword(changePasswordDto:ChangePasswordDto,user:any){
    const {password} = changePasswordDto
    const record = await this.prisma.administrator.findFirst({
        where:{
            id:user.userId
        }
    })

    if(!record){
        throw new UnauthorizedException("unauthorized to access resource")
    }
    
    const hashedpassword = await this.securityHelper.hashPassword(password.toString());

    await this.prisma.administrator.update({
        where:{
            id:record.id
        },
        data:{
            password:hashedpassword
        }
    })
    return {status:"success",message:'Password successfully changed'}

   }

   async getLogs(id:number){
     return await this.prisma.loginlog.findMany({
        where:{
            administratorId:id            
        },
        orderBy:{
            id:"desc"
        },
        include:{
            systemaudits:{
                orderBy:{
                    id:"desc"
                }
            }
        }

     })
   }
}