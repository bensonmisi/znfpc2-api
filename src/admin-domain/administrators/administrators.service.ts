import { Injectable } from '@nestjs/common';
import { AdministratorRepository } from './administrators.repository';
import { CreateAdministratorDto } from './dto/Create-administrator.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { UpdateAdministratorDto } from './dto/Update-administrator.dto';

@Injectable()
export class AdministratorsService {
    constructor(private administratorRepository:AdministratorRepository){}

    async getUsers(){
        return this.administratorRepository.getAdministrators();
    }

    async addUser(creatreAdministratorDto:CreateAdministratorDto,user:any){        
        return this.administratorRepository.addAdministrator(creatreAdministratorDto,user);
    }

    async updateUser(id:number,updateAdministratorDto:UpdateAdministratorDto,user:any){
        return this.administratorRepository.updateAdministrator(id,updateAdministratorDto,user);
    }

    async forgotpassword(id:number,user:any){
        return await this.administratorRepository.forgotPassword(id)
    }

    async userlogs(id:number){
        return await this.administratorRepository.getLogs(id)
    }

   
}
