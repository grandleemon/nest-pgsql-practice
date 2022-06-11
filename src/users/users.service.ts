import {User} from "./user.model";
import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user-dto";


@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private readonly userRepository: typeof User) {
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto)
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll()
    return users
  }
}
