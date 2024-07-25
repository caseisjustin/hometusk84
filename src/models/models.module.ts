import { Module } from '@nestjs/common';
import { ModelsService } from './models.service';
import { ModelsController } from './models.controller';
import { PrismaService } from '../prisma.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    UsersModule
  ],
  providers: [ModelsService, PrismaService],
  controllers: [ModelsController],
})
export class ModelsModule {}
