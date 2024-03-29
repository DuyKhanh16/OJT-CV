import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CompanyModule } from './company/company.module';
import { UserModule } from './user/user.module';



@Module({
  imports: [UserModule,CompanyModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
