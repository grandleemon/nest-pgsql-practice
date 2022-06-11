import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user-dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./user.model";

@ApiTags('Users')
@Controller('/users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {
  }

  @ApiOperation({summary: "Getting all users"})
  @ApiResponse({status: 200, type: [User]})
  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers()
  }

  @ApiOperation({summary: "Creating a user"})
  @ApiResponse({status: 200, type: User})
  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto)
  }
}
