import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateUserDto {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  // 최소 8자 및 최대 16자, 하나 이상의 대문자, 하나의 소문자, 하나의 숫자 및 하나의 특수 문자
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(16)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
    {
      message: '비밀번호를 양식에 맞게 작성해주세요.',
    },
  )
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;
}

//UpdateUserDto 속성은 CreateUserDto 클래스와 다르지 않기 때문에 해당 속성을 물려받습니다.
//(물려받기 위해 PartialType() 사용)
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  id: string;
}
