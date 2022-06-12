import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

  @ApiProperty({example: "example@example.example", description: "Email"})
  @IsString({message: "Email should be a string"})
  @IsEmail({}, {message: "Invalid email"})
  readonly email: string;

  @ApiProperty({example: "password", description: "Password"})
  @IsString({message: "Password should be a string"})
  @Length(4, 16, {message: "Password should contain more than 4 and less than 16 characters"})
  readonly password: string;
}