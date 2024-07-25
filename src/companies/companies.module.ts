import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { PrismaService } from '../prisma.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  providers: [CompaniesService, PrismaService],
  controllers: [CompaniesController],
})
export class CompaniesModule {}
