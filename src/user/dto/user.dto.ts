import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateUserDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}

//UpdateUserDto 속성은 CreateUserDto 클래스와 다르지 않기 때문에 해당 속성을 물려받습니다.
//(물려받기 위해 PartialType() 사용)
export class UpdateUserDto extends PartialType(CreateUserDto) {}
