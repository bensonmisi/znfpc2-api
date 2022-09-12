import { ExtractJwt, Strategy } from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from "src/utils/constants";
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration:false,
      secretOrKey:jwtConstants.secret
  })
  }

  async validate(payload: any) {
    return { userId: payload.id,roleId:payload.roleId,token:payload.token,roles:payload.roles,username: payload.email };
  }
}