import { OmitType } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserRole } from 'src/db/types';
import { UserDto } from '../entity/user.entity';

export class CreateUserDto extends OmitType(UserDto, ['id']) {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum([UserRole.Intern, UserRole.Engineer, UserRole.Admin], {
    message: 'Valid role required',
  })
  role: UserRole;
}
