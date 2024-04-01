import { Module } from '@nestjs/common';
import { ExcelService } from './excel.service';
import { ExcelController } from './excel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Excel } from './entities/excel.entity';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
@Module({
  imports: [TypeOrmModule.forFeature([Excel,User])],
  controllers: [ExcelController],
  providers: [ExcelService,UserService],
})
export class ExcelModule {}
