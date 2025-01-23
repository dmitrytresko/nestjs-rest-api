import { UserRole } from 'src/db/types';
import { UserDto } from './entity/user.entity';

export const JSONUser: UserDto = {
  id: 1,
  name: 'Collie Lovegrove',
  email: 'clovegrove0@unesco.org',
  role: UserRole.Admin,
};
