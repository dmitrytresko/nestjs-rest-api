import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRole } from 'src/db/types';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { JSONUser } from './examples.json';

@ApiTags('Users endpoints')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET /users or /users?role=value
  @ApiOperation({
    summary: 'Get all users',
  })
  @ApiOkResponse({
    description: 'User list fetched successfully',
    schema: {
      type: 'array',
      example: [JSONUser],
    },
  })
  @ApiNotFoundResponse({
    description: 'Users not found',
  })
  @ApiQuery({
    name: 'role',
    required: false,
    description: 'Find users by role',
    enum: UserRole,
  })
  @Get()
  findAll(@Query('role') role?: UserRole) {
    return this.usersService.findAll(role);
  }

  // GET /users/:id
  @ApiOperation({
    summary: 'Get user by id',
  })
  @ApiOkResponse({
    description: 'User fetched successfully',
    schema: {
      type: 'object',
      example: JSONUser,
    },
  })
  @ApiNotFoundResponse({
    description: 'User not found',
  })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  // POST /users
  @ApiOperation({
    summary: 'Create user',
  })
  @ApiCreatedResponse({
    description: 'User created successfully',
    schema: {
      type: 'object',
      example: JSONUser,
    },
  })
  @ApiBody({ type: CreateUserDto })
  @Post()
  create(
    @Body(ValidationPipe)
    createUserDto: CreateUserDto,
  ) {
    return this.usersService.create(createUserDto);
  }

  // PATCH /users/:id
  @ApiOperation({
    summary: 'Update user by id',
  })
  @ApiOkResponse({
    description: 'User updated successfully',
    schema: {
      type: 'object',
      example: JSONUser,
    },
  })
  @ApiBody({ type: UpdateUserDto })
  @ApiNotFoundResponse({
    description: 'User not found',
  })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  // DELETE /users/:id
  @ApiOperation({
    summary: 'Delete user by id',
  })
  @ApiOkResponse({
    description: 'User deleted successfully',
    schema: {
      type: 'object',
      example: JSONUser,
    },
  })
  @ApiNotFoundResponse({
    description: 'User not found',
  })
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
