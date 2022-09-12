import { Injectable } from '@nestjs/common';
import { DashboardRepository } from './dashboard.repository';

@Injectable()
export class DashboardService {
   
    constructor(private dashboardRepository:DashboardRepository){}

    async getMenu(admin:any){
        return await this.dashboardRepository.getMenu(admin)
    }

    async getReport(user: any) {
       return await this.dashboardRepository.getReport(user)
      }
}
