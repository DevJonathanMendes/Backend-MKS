import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createHash } from 'crypto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn({ username, password }) {
    const user = await this.usersService.findOne(username);

    if (user?.password !== this.passwordHash(password)) {
      throw new UnauthorizedException(
        'User does not exist or password is incorrect',
      );
    }

    const payload = { username: user.username, sub: user.id };

    return {
      username,
      token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp({ username, password }) {
    this.usersService.create({
      username,
      password: this.passwordHash(password),
    });

    return {
      username,
      token: await this.jwtService.signAsync({ username, password }),
    };
  }

  private passwordHash(password: string) {
    return createHash('sha256')
      .update(password + process.env.JWT_SECRET)
      .digest('hex');
  }
}
