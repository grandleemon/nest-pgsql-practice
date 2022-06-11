import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateRoleDto} from "./dto/create-role.dto";
import {RolesService} from "./roles.service";

@Controller('/roles')
export class RolesController {

  constructor(private readonly rolesService: RolesService) {
  }

  @Post()
  createRole(@Body() roleDto: CreateRoleDto) {
    return this.rolesService.createRole(roleDto)
  }

  @Get('/:value')
  findRoleByValue(@Param('value') value: string) {
    return this.rolesService.getRoleByValue(value)
  }
}
