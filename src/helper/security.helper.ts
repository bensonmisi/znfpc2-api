import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt'

@Injectable()
export class SecurityHelper{

    async hashPassword(password:string){
        const saltOrRounds = 10;
        const hashedpassword = await bcrypt.hash(password.toString(), saltOrRounds);
        return hashedpassword;
    }

    async generatePassword(){
        const max = 999999999;
        return await Math.floor(Math.random() * Math.floor(max));
    }

    async comparepassword(password:string,hashedpassword:string){
        return await bcrypt.compare(password,hashedpassword);
    }

  
}