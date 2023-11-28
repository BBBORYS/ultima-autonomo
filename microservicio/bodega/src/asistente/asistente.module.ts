import { Module } from '@nestjs/common';
import { AsistenteService } from './asistente.service';
import { AsistenteController } from './asistente.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Asistente, AsistenteSchema } from './entities/asistente.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Asistente.name, schema: AsistenteSchema }]), 
  ],
  controllers: [AsistenteController],
  providers: [AsistenteService]
})
export class AsistenteModule {}
