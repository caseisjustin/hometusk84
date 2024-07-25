import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { PrismaService } from '../prisma.service';
import { UsersModule } from '../users/users.module';
import { CarsModule } from '../cars/cars.module';

@Module({
  imports: [UsersModule, CarsModule],
  providers: [TransactionsService, PrismaService],
  controllers: [TransactionsController],
})
export class TransactionsModule {}
