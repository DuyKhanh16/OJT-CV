import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor (@InjectRepository(User) private readonly userRepos: Repository<User> ) {}
  async create(createUserDto: CreateUserDto) {
    const {userName, email, password,createdAt} = createUserDto;
    const user = await this.userRepos.create({
      userName: userName,
      email: email,
      password: password,
      createdAt: createdAt
    })
    return this.userRepos.save(user)
  }

  findAll() {
    const users = this.userRepos.find();
    return users
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
