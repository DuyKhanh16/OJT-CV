import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';
// import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(@InjectRepository(Company) private companyRepository : Repository<Company>) {}  
  async create(createCompanyDto: any) {
    const company =  await this.companyRepository.create(createCompanyDto);
   this.companyRepository.save(company);

    return 'Tạo thành công  công ty mới';
  }

  findAll() {
    const company = this.companyRepository.find({});
    return {
      data: company,
      message : "Thành công"
    }
  }

  async findOne(id: number) {
    const Onecompany = await this.companyRepository.findOneBy({id})
    if(!Onecompany) throw new Error('Company not found')
    return {
      data: Onecompany,
      message : "Thành công"
    }
  }

  async update(id: number, updateCompanyDto: any) {
      const updateCompany = await this.companyRepository.update({id}, updateCompanyDto)
    return `Bạn đã cập nhật thành công`;
  }

  async remove(id: number) {
     await this.companyRepository.delete({id})
    return `This action removes a #${id} company`;
  }
}
