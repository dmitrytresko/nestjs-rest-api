import { UserRole } from 'src/db/types';

export class User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}
