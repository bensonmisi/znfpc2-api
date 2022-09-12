import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { jwtConstants} from "src/utils/constants";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthenticationHelper{

    constructor(private jwtservice:JwtService){ }

    async signToken(args:any){
        const payload = args
        return this.jwtservice.signAsync(payload,{secret:jwtConstants.secret})
        
      }

    async tokenDecode(token:string){
      return await this.jwtservice.decode(token)
    }

    async generateUUID(){
     return await uuidv4()
    }

}