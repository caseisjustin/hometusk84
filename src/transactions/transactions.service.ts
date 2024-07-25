import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Transaction } from '@prisma/client';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<Transaction> {
    return this.prisma.transaction.create({ data });
  }

  async update(id: string, data: any): Promise<Transaction> {
    return this.prisma.transaction.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Transaction> {
    return this.prisma.transaction.delete({ where: { id } });
  }

  async findAll(filters: any): Promise<Transaction[]> {
    return this.prisma.transaction.findMany({ where: filters });
  }

  async findOne(id: string): Promise<Transaction> {
    return this.prisma.transaction.findUnique({ where: { id } });
  }
}
