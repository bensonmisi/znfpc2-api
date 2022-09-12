import { Injectable } from '@nestjs/common';
import { AnalysisRepository } from './analysis-repository';
import { FilterDto } from './dto/filter.dto';

@Injectable()
export class AnalysisService {
    constructor(private repo:AnalysisRepository){}

    async getAll(){
        return await this.repo.getAll()
    }

    async filterByDate(dto:FilterDto){
        return await this.repo.filterbyDate(dto)
    }
}
