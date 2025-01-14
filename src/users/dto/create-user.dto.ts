import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserRole } from 'src/db/types';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum([UserRole.Intern, UserRole.Engineer, UserRole.Admin], {
    message: 'valid role required',
  })
  role: UserRole;
}
