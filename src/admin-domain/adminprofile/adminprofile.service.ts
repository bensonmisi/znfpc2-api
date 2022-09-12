import { Injectable } from '@nestjs/common';
import { AdministratorRepository } from '../administrators/administrators.repository';
import { ChangePasswordDto } from '../administrators/dto/change-password.dto';
import { ProfileUpdateDto } from '../administrators/dto/profile-update.dto';
import { SystemauditRepository } from '../systemaudit/systemaudit.repository';

@Injectable()
export class AdminprofileService {
    constructor(private administratorRepository:AdministratorRepository){}

    async getProfile(user:any){
        return await this.administratorRepository.getAdministrator(user)
    }

    async updateProfile(profileUpdateDto:ProfileUpdateDto,user:any){
        return await this.administratorRepository.updateProfile(profileUpdateDto,user)
    }

    async changepassword(changePasswordDto:ChangePasswordDto,user:any){
        return await this.administratorRepository.changePassword(changePasswordDto,user)
    }


}
