import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UserService } from '../user-service/user.service';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { User } from '../entity/user.entity';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get() //경로를 설정하지 않으면 "user/" 경로로 설정이 된다.
  getHelloWorld(): string {
    return this.userService.getHelloWorld();
  }
}
