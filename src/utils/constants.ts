
export const jwtConstants = {
    secret: process.env.JWTSECRET
  };

export class LoginlogDto{
  administratorId:number
  token:string
}

export class SystemAuditDto{
  subject:string
  oldvalue:string
  newvalue:string
  action:string
  token:string
}

export const QueueSetting={
  queue_name:process.env.QUEUE_NAME,
  queue_host:process.env.QUEUE_HOST,
  queue_port:process.env.QUEUE_PORT
}

export const MailSetting={
  host:process.env.MAIL_HOST,
  username:process.env.MAIL_USERNAME,
  password:process.env.MAIL_PASSWORD,
  port:process.env.MAIL_PORT
}

export const clientUrls={
 clientUrl:process.env.CLIENT_URL,
 adminUrl:process.env.ADMIN_URL
}
