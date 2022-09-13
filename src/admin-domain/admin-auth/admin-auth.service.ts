import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthenticationHelper } from 'src/helper/authentication.helper';
import { SecurityHelper } from 'src/helper/security.helper';
import { AdministratorRepository } from '../administrators/administrators.repository';
import { ResetPasswordDto } from '../administrators/dto/reset-password.dto';
import { SystemauditService } from '../systemaudit/systemaudit.service';
import { AdminAuthDto } from './dto/admin-auth.dto';


@Injectable()
export class AdminAuthService {
    constructor(private securityHelper:SecurityHelper,private authenicationHelper:AuthenticationHelper,private administratorRepository:AdministratorRepository,private systemauditService:SystemauditService){}

    async SignIn(adminAuthDto:AdminAuthDto,req:Request){
        const user = await this.administratorRepository.getAdministratorByUsername(adminAuthDto.username)
        if(!user){
            throw new UnauthorizedException("Invalid login details")
        }
        const compare = await this.securityHelper.comparepassword(adminAuthDto.password,user.password)
        if(!compare){
            throw new UnauthorizedException("Invalid  login details")
        }
        if(user.status=='BLOCKED'){
            throw new UnauthorizedException("Account BLOCKED")
        }

        const authtoken = await this.authenicationHelper.generateUUID()
        const token = await this.authenicationHelper.signToken({id:user.id,email:user.email,token:authtoken,roleId:user.roleId,roles:["ADMIN"]})
        if(!token){
            throw new ForbiddenException()
        }
      
        await this.systemauditService.addLoginLog(req,{administratorId:+user.id,token:authtoken})
        //res.cookie("access_token",token)
       // res.send(token) 
       return {access_token:token}
    }

    async SignOut(req:Request,res:Response){
        res.clearCookie("access_token")
        res.send("Logged out successfully")
    }

    async resetpassword(resetPasswordDto:ResetPasswordDto){
        return await this.administratorRepository.resetPassword(resetPasswordDto)
    }
}
