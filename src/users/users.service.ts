import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOneByPhone(phone: string): Promise<User | undefined> {
    return this.prisma.user.findUnique({ where: { phone } });
  }

  async findOne(id: string): Promise<User | undefined> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async create(data: any): Promise<User> {
    return this.prisma.user.create({ data });
  }
}
