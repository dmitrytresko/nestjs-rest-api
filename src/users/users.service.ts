import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRole } from 'src/db/types';
import { users } from 'src/db/users';

@Injectable()
export class UsersService {
  private users = [...users];

  async findAll(role?: UserRole) {
    if (role) {
      const usersWithRoles = this.users.filter((user) => user.role === role);

      if (usersWithRoles.length === 0) {
        throw new NotFoundException('User role not found');
      }

      return usersWithRoles;
    }

    return this.users;
  }

  async findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto,
    };

    this.users.push(newUser);

    return newUser;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...updateUserDto,
        };
      }

      return user;
    });

    return this.findOne(id);
  }

  async delete(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
