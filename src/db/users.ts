import { UserDto } from 'src/users/entity/user.entity';
import { UserRole } from './types';

export const users: UserDto[] = [
  {
    id: 1,
    name: 'Katti Posnett',
    email: 'kposnett0@shutterfly.com',
    role: UserRole.Intern,
  },
  {
    id: 2,
    name: 'Carolann Ander',
    email: 'cander1@google.cn',
    role: UserRole.Intern,
  },
  {
    id: 3,
    name: 'Kelsi Dorning',
    email: 'kdorning2@booking.com',
    role: UserRole.Engineer,
  },
  {
    id: 4,
    name: 'Carmel Growcock',
    email: 'cgrowcock3@fastcompany.com',
    role: UserRole.Engineer,
  },
  {
    id: 5,
    name: 'Megan Landman',
    email: 'mlandman3@narod.ru',
    role: UserRole.Admin,
  },

  {
    id: 6,
    name: 'Fred Jacobson',
    email: 'fjacobson0@wix.com',
    role: UserRole.Engineer,
  },
  {
    id: 7,
    name: 'Amabel Renish',
    email: 'arenish1@globo.com',
    role: UserRole.Engineer,
  },
  {
    id: 8,
    name: "Wandie O'Riordan",
    email: 'woriordan2@blinklist.com',
    role: UserRole.Intern,
  },
  {
    id: 9,
    name: 'Martita Hackelton',
    email: 'mhackelton3@dmoz.org',
    role: UserRole.Engineer,
  },
  {
    id: 10,
    name: 'Mirilla Coll',
    email: 'mcoll4@craigslist.org',
    role: UserRole.Admin,
  },
];
