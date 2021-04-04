import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './controller/user/user.module';
import { BaseController } from './controller/base/base.controller';

@Module({
  imports: [UserModule],
  controllers: [AppController, BaseController],
  providers: [AppService],
})
export class AppModule {}
