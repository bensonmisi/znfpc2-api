import { Injectable } from '@nestjs/common';
import { ChangePasswordDto } from './dto/change-password.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileRepository } from './profile.repository';

@Injectable()
export class ProfileService {
   constructor(private profileRepository:ProfileRepository){}

   async getProfile(id:number){
     return await this.profileRepository.getProfile(id)
   }

   async update(updateProfileDto:UpdateProfileDto,admin:any){
    return await this.profileRepository.update(updateProfileDto,admin)
   }

   async changepassword(changePasswordDto:ChangePasswordDto,admin:any){
    return await this.profileRepository.changepassword(changePasswordDto,admin)
   }

}
