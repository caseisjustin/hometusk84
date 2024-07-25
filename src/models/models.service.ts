import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Model } from '@prisma/client';

@Injectable()
export class ModelsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<Model> {
    return this.prisma.model.create({ data });
  }

  async update(id: string, data: any): Promise<Model> {
    return this.prisma.model.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Model> {
    return this.prisma.model.delete({ where: { id } });
  }

  async findAll(companyId: string): Promise<Model[]> {
    return this.prisma.model.findMany({ where: { company_id: companyId } });
  }

  async findOne(id: string): Promise<Model> {
    return this.prisma.model.findUnique({ where: { id } });
  }
}
