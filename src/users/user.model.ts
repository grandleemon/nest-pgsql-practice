import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

  @ApiProperty({example: "1", description: "Unique ID"})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: Number

  @ApiProperty({example: "example@example.example", description: "Email"})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string

  @ApiProperty({example: "password", description: "Password"})
  @Column({type: DataType.STRING, allowNull: false})
  password: string

  @ApiProperty({example: "false", description: "Is user banned or not"})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean

  @ApiProperty({example: "null", description: "Ban reason"})
  @Column({type: DataType.STRING, allowNull: true})
  banReason: string
}