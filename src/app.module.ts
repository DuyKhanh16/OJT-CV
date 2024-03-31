import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CompanyModule } from './company/company.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { User } from './user/entities/user.entity';
import { Company } from './company/entities/company.entity';
import { ExcelModule } from './excel/excel.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'testojt',
      entities: [User, Company],
      synchronize: true,
    }),
    UserModule,
    CompanyModule,
    ExcelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
