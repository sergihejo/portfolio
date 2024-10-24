import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    // TODO: Implement this guard
    return true;
    // const request = context.switchToHttp().getRequest();
    // const token = request.headers.authorization?.split(' ')[1];
    // console.log(request.headers);

    // if (!token) {
    //   return false;
    // }

    // try {
    //   // const decoded = this.jwtService.verify(token);
    //   // request.user = decoded;
    //   return true;
    // } catch (error) {
    //   return false;
    // }
  }
}
