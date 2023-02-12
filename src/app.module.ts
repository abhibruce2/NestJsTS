import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModel } from './task.module';
import { TaskEntity } from './task';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserService } from './users/users.service';
// import { UsersController } from './users/users.controller';



@Module({
  imports: [ConfigModule.forRoot(),TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.HOST,
    port : 3306,
    username:process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME,
    entities:[TaskEntity, UserService],
    synchronize: true,
  }), TaskModel, AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
