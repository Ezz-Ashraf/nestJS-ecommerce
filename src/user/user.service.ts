import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from 'entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
 async create(user:CreateUserDto) {
    if(typeof user.firstName ==="string" && typeof user.lastName ==="string")
    {
      await this.usersRepository.insert(user)
    return 'user added successfully'
    }
    else {
      throw new BadRequestException('First Name and Last Name should be string', { cause: new Error(), description: 'First Name and Last Name should be string' })
    }
  }

 async  findAll() {
    return await this.usersRepository.find();
  }

 async findOne(id: number) {
    const user = await this.usersRepository.findOneBy({id:id})
    if(user)
    {
      return user
    }
    else {
      throw new BadRequestException('No such user exists', { cause: new Error(), description: 'There is No such user with this id' })
    }
  }

 async update(id: number, updateUserDto: UpdateUserDto) {
    const userExists = await this.usersRepository.exist({ where: { id: id } })
    if(userExists)
    {
      await this.usersRepository.update({  id: id  },updateUserDto)
      return 'user updated succresfully'
    }
    else {
      throw new BadRequestException('No such user exists', { cause: new Error(), description: 'There is No such user with this id' })
    }
  }

 async remove(id: number) {
  const userExists = await this.usersRepository.exist({ where: { id: id } })
  if(userExists)
  {
     await this.usersRepository.delete({id:id});
    return 'user deleted succresfully'
  }
  else {
    throw new BadRequestException('No such user exists', { cause: new Error(), description: 'There is No such user with this id' })
  }

  }
}
