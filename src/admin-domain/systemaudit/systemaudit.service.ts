import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { LoginlogDto, SystemAuditDto } from 'src/utils/constants';
import { SystemauditRepository } from './systemaudit.repository';

@Injectable()
export class SystemauditService {
    constructor(private systemauditRepository:SystemauditRepository){}

    async addLoginLog(req:Request,args:LoginlogDto){
        return await this.systemauditRepository.AddLoginLog(req,args)
    }

    async addSystemAudit(args:SystemAuditDto){
        return await this.systemauditRepository.addSystemAudit(args)
    }
}
