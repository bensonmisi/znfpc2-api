import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
    constructor(private mailerService:MailerService){}

    async sendPasswordReset(email:string,name:string,url:string,token:string){
      try {
        await this.mailerService.sendMail({
          to: email,         
          subject: 'Password Reset',
          template: 'resetpassword',
          context: {
            name:name,
            url,
          },
        });
      } catch (error) {
        console.log(error)
      }
        
    }
    async sendCustomerAccount(email:string,name:string,password:string){
      const url ="https://portal.uppermanyame.org.zw"
      await this.mailerService.sendMail({
          to: email,         
          subject: 'Upper Manyame Sub-Catchment Portal Login Details',
          template: 'customeraccount',
          context: {
            name,
            url,
            password
          },
        });
  }
}
