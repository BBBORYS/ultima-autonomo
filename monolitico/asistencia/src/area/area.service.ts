import { Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Area, AreaDocument } from './entities/area.entity';
import { Request } from 'express';

@Injectable()
export class AreaService {
  constructor( 
    @InjectModel(Area.name) private readonly areaModel: Model<AreaDocument>, 
  ) {}

  async create(createAreaDto: CreateAreaDto): Promise<Area> { 
    return this.areaModel.create(createAreaDto); 
  }

  async findAll(request: Request): Promise<Area[]> { 
    return this.areaModel.find(request.query)
    .setOptions({ sanitizeFilter: true })
    .exec();
  }

  async findOne(id: string): Promise<Area> { 
    return this.areaModel.findOne({ _id: id }).exec(); 
  }

  async update(id: string, updateAreaDto: UpdateAreaDto): Promise<Area> { 
    return this.areaModel.findOneAndUpdate({ _id: id }, updateAreaDto, { 
      new: true, 
    });
  }

  async remove(id: string) { 
    return this.areaModel.findByIdAndDelete({ _id: id }).exec(); 
  }
}