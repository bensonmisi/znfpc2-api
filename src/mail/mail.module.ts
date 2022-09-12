import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { MailService } from './mail.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailSetting, QueueSetting } from 'src/utils/constants';
import { BullModule } from '@nestjs/bull';


@Module({
  imports:[
    MailerModule.forRoot({
      transport: {
        host:'smtp.gmail.com', //MailSetting.host,
        secure:true,
        name:"Upper Manyame",
        options:{
          port:465//+MailSetting.port.toString
        },            
        auth: {
          user: "umscczim@gmail.com",//MailSetting.username,
          pass: "Manyame2022@"//MailSetting.password,
          
        },
      },
      defaults: {
        from: 'umscczim@gmail.com',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    
    BullModule.registerQueueAsync({
      name: QueueSetting.queue_name,
      useFactory: () => ({
        redis: {
          host: QueueSetting.queue_host,
          port: +QueueSetting.queue_port,
        },
      }),
    }),
  ],
  providers: [MailService],
  exports:[MailService]
})
export class MailModule {} 
