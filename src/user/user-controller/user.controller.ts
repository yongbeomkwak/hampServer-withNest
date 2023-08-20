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
import { User } from '../entity/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * @author Hamp
   * @description @Body 방식 - @Body 어노테이션 여러개를 통해 요청 객체를 접근할 수 있습니다.
   *
   * CreateUserDto를 사용해서 @Body 전달 방식을 변경합니다.
   *
   * @param id 유저 고유 아이디
   * @param name 유저 이름
   */
  @Post('/create_user')
  @UsePipes(ValidationPipe)
  async onCreateUser(@Body() createUserDto: CreateUserDto): Promise<boolean> {
    return await this.userService.onCreateUser(createUserDto);
  }

  /**
   * @author Hamp
   * @description 전체 유저 조회
   * @url http://localhost:3000/user_all
   */
  @Get('/user_all')
  async getUserAll(): Promise<User[]> {
    return await this.userService.getUserAll();
  }

  /**
   * @author Hamp
   * @description @Query 방식 - 단일 유저 조회
   * @param id 유저 고유 아이디
   * @url  http://localhost:3000/user?id= id값
   */
  // @Get()
  // async findByUserOne1(@Query('id', ParseUUIDPipe) id: string): Promise<User> {
  //   return await this.userService.findByUserOne(id);
  // }

  /**
   * @author Hamp
   * @description @Param 방식 - 다중
   * @param name 유저 고유 아이디
   * @url http://localhost:3000/user/name값
   */
  // @Get('/:name')
  // async findByUserOne2(@Param('name') name: string): Promise<User[]> {
  //   return await this.userService.getUsersByName(name);
  // }

  /**
   * @author Hamp
   * @description @Query 방식 - 다중
   * @param name 유저 고유 아이디
   * @url http://localhost:3000/user/name?값
   */

  @Get()
  async findByUserOne2(@Query('name') name: string): Promise<User[]> {
    return await this.userService.getUsersByName(name);
  }

  /**
   * @author Hamp
   * @description @Param & @Body 혼합 방식 - 단일 유저 수정
   * @param id 유저 고유 아이디
   * @param name 유저 이름
   * 
   * @url : http://localhost:3000/user/user/a544136c-5774-4101-b6a3-0bf983e8d3a8(id값)
   * @Body : {"id" : "a544136c-5774-4101-b6a3-0bf983e8d3a8","user_id": "1234",
	"password" : "!Yy1234567","name": "tmp2","age": 20}
   * 
   */
  @Patch('/:id')
  @UsePipes(ValidationPipe)
  async setUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<boolean> {
    return await this.userService.setUser(id, updateUserDto);
  }

  /**
   * @author Hamp
   * @description @Body 방식 - 전체 유저 수정
   *
   * @param updateUserDto 유저 정보
   * @url http://localhost:3000/user/user/update
   * @Body : [UpdateUserDto]
   *
   */
  @Put('/update')
  @UsePipes(ValidationPipe)
  async setAllUser(@Body() updateUserDto: UpdateUserDto[]): Promise<boolean> {
    return await this.userService.setAllUser(updateUserDto);
  }

  /**
   * @author Hamp
   * @description @Query 방식 - 단일 유저 삭제
   * @param id 유저 고유 아이디
   * @url http://localhost:3000/user/delete?id=f8fdc484-13ea-4b6f-89c2-053805ee043b
   */
  @Delete('/delete')
  async deleteUser(@Query('id', ParseUUIDPipe) id: string): Promise<boolean> {
    console.log(id);
    return await this.userService.deleteUser(id);
  }
}
