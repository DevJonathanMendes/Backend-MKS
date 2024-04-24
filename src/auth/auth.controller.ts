import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CreateUserDto } from '../users/dto/create-user.dto';
import { UpdatedUserDto } from '../users/dto/update-user.dto';

import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';

@ApiTags('auth')
@Public()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOkResponse()
  @ApiBadRequestResponse()
  @ApiUnauthorizedResponse()
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() data: UpdatedUserDto) {
    return this.authService.signIn(data);
  }

  @ApiCreatedResponse()
  @ApiBadRequestResponse()
  @ApiUnauthorizedResponse()
  @Post('signup')
  signUp(@Body() data: CreateUserDto) {
    return this.authService.signUp(data);
  }
}
