import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Car } from '@prisma/client';

@Injectable()
export class CarsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<Car> {
    return this.prisma.car.create({ data });
  }

  async update(id: string, data: any): Promise<Car> {
    return this.prisma.car.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Car> {
    return this.prisma.car.delete({ where: { id } });
  }

  async findAll(companyId: string): Promise<Car[]> {
    return this.prisma.car.findMany({ where: { company_id: companyId } });
  }

  async findOne(id: string): Promise<Car> {
    return this.prisma.car.findUnique({ where: { id } });
  }
}
