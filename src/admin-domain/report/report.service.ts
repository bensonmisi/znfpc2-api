import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { ReportRepository } from './report-repository';

@Injectable()
export class ReportService {
  constructor(private repo:ReportRepository){}
  async create(createReportDto: CreateReportDto,user:any) {
    return await this.repo.create(createReportDto,user)
  }

  async findAll(user) {
    return await this.repo.getAll(user)
  }



  async update(id: number, updateReportDto: UpdateReportDto,user:any) {
    return await this.repo.update(id,updateReportDto,user)
  }


}
