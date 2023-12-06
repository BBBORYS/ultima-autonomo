import { Injectable } from '@nestjs/common';
import { CreateAsistenteDto } from './dto/create-asistente.dto';
import { UpdateAsistenteDto } from './dto/update-asistente.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from 'express';
import { Asistente, AsistenteDocument } from './entities/asistente.entity';

@Injectable()
export class AsistenteService {
  constructor( 
    @InjectModel(Asistente.name) private readonly asistenteModel: Model<AsistenteDocument>, 
  ) {}

  async create(createAsistenteDto: CreateAsistenteDto): Promise<Asistente> { 
    return this.asistenteModel.create(createAsistenteDto); 
  }

  async findAll(request: Request): Promise<Asistente[]> { 
    return this.asistenteModel.find(request.query)
    .setOptions({ sanitizeFilter: true })
    .exec();
  }

  async findOne(id: string): Promise<Asistente> { 
    return this.asistenteModel.findOne({ _id: id }).exec(); 
  }

  async update(id: string, updateAsistenteDto: UpdateAsistenteDto): Promise<Asistente> { 
    return this.asistenteModel.findOneAndUpdate({ _id: id }, updateAsistenteDto, { 
      new: true, 
    });
  }

  async remove(id: string) { 
    return this.asistenteModel.findByIdAndDelete({ _id: id }).exec(); 
  }
}
