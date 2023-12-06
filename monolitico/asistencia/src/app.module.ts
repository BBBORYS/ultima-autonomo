import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreaModule } from './area/area.module';
import { AsistenteModule } from './asistente/asistente.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://BORYS:19982012@atlascluster.91duwys.mongodb.net/autonomo'),
    AreaModule, 
    AsistenteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
