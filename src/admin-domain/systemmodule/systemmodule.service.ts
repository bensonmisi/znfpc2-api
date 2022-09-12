import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSystemModuleDto } from './dto/create-systemmodule.dto';
import { UpdateSystemModuleDto } from './dto/update-systemmodule.dto';
import { SystemmoduleRepository } from './systemmodule.repository';

@Injectable()
export class SystemmoduleService {
    constructor(private systemRepository:SystemmoduleRepository){}

    async findAll(){
        return this.systemRepository.getAll()
    }

    async create(createSystemModuleDto:CreateSystemModuleDto,user:any){
         try {
            this.systemRepository.add(createSystemModuleDto,user)  
            return {status:"success",message:"Successfully created System module"}
         } catch (error) {
            throw new BadRequestException(error.message)  
         }
    }

    async update(id:number,UpdateSystemModuleDto:UpdateSystemModuleDto,user:any){
        try {
            this.systemRepository.update(id,UpdateSystemModuleDto,user)  
            return {status:"success",message:"Successfully updated System module"}
         } catch (error) {
            throw new BadRequestException(error.message)  
         }  
    }

    async delete(id:number,user:any){
        try {
            this.systemRepository.delete(id,user)  
            return {status:"success",message:"Successfully delete System module"}
         } catch (error) {
            throw new BadRequestException(error.message)  
         }  
    }
}
