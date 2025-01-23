import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from 'src/db/types';

export class UserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty({
    enum: UserRole,
  })
  role: UserRole;
}
