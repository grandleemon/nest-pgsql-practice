import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/user.model";
import {UserRoles} from "./user-roles.model";

interface UserCreationAttrs {
  value: string;
  description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, UserCreationAttrs> {

  @ApiProperty({example: "1", description: "Unique ID"})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @ApiProperty({example: "ADMIN", description: "Role"})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  value: string

  @ApiProperty({example: "Access to admin panel", description: "Role privileges"})
  @Column({type: DataType.STRING, allowNull: false})
  description: string

  @BelongsToMany(() => User, () => UserRoles)
  users: User[]
}