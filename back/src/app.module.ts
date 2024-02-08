/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-02-08 09:50:00                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-02-08 09:51:55                               *
 * @FilePath              : angularApi/back/src/app.module.ts                 *
 * @CopyRight             : MerBleueAviation                                  *
 *****************************************************************************/

import { Module } from '@nestjs/common';
import { TasksController } from './controllers/tasks/tasks.controller';
import { PrismaService } from "./prisma.service";

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [PrismaService],
})
export class AppModule {}
