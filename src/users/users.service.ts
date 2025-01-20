import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // Verificar si ya existe un usuario con el mismo email
    const existingUser = await this.findOneByEmail(createUserDto.email);
    if (existingUser) {
      throw new ConflictException('Ya existe un usuario con este email');
    }

    const { password, ...rest } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = new this.userModel({
      ...rest,
      password_hash: hashedPassword,
    });

    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, createUserDto: CreateUserDto): Promise<User> {
    // Si se está actualizando el email, verificar que no exista otro usuario con ese email
    if (createUserDto.email) {
      const existingUser = await this.userModel.findOne({
        email: createUserDto.email,
        _id: { $ne: id }, // Excluir el usuario actual de la búsqueda
      });

      if (existingUser) {
        throw new ConflictException('Ya existe un usuario con este email');
      }
    }

    // Si se está actualizando la contraseña, hashearla
    if (createUserDto.password) {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      return this.userModel.findByIdAndUpdate(
        id,
        {
          ...createUserDto,
          password_hash: hashedPassword,
        },
        { new: true },
      );
    }

    return this.userModel.findByIdAndUpdate(id, createUserDto, { new: true });
  }

  async remove(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id);
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email }).exec();
  }
}
