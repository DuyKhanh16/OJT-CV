import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('ap1/v1/company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  create(@Body() createCompanyDto: any) {
    try {
      return this.companyService.create(createCompanyDto);
      
    } catch (error) {
      console.log(error)
    }
  }

  @Get()
  findAll() {
    try {
      
      return this.companyService.findAll();
    } catch (error) {
      console.log(error)
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.companyService.findOne(+id);
      
    } catch (error) {
      console.log(error)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: any) {
    try {
      
      return this.companyService.update(+id, updateCompanyDto);
    } catch (error) {
      console.log(error)
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.companyService.remove(+id);
      
    } catch (error) {
      console.log(error)
    }
  }
}
