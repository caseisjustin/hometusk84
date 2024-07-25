import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Company } from '@prisma/client';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<Company> {
    return this.prisma.company.create({ data });
  }

  async update(id: string, data: any): Promise<Company> {
    return this.prisma.company.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Company> {
    return this.prisma.company.delete({ where: { id } });
  }

  async findAll(): Promise<Company[]> {
    return this.prisma.company.findMany();
  }

  async findOne(id: string): Promise<Company> {
    return this.prisma.company.findUnique({ where: { id } });
  }
}
