import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AreasFormsService } from './areas_forms.service';
import { CreateAreasFormsDto } from './dto/create-areas_forms.dto';
import { UpdateAreasFormsDto } from './dto/update-areas_forms.dto';
import { DeleteAreaFormsDto } from './dto/delete-area_forms.sto';

@Controller('areas-forms')
export class AreasFormsController {
  constructor(private readonly areasFormsService: AreasFormsService) { }

  @Post()
  create(@Body() createSurveysAreaDto: CreateAreasFormsDto) {
    return this.areasFormsService.create(createSurveysAreaDto);
  }

  @Get()
  findAll() {
    return this.areasFormsService.findAll();
  }

  @Get(':id')
  findAreasByFormId(@Param('id') id: string) {
    return this.areasFormsService.findAreasByFormId(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSurveysAreaDto: UpdateAreasFormsDto) {
    return this.areasFormsService.update(id, updateSurveysAreaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body() deleteAreaFormsDto: DeleteAreaFormsDto) {
    return this.areasFormsService.removeOneAreaFromForm(id, deleteAreaFormsDto);
  }
}
