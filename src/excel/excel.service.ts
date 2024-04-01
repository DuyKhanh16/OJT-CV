import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as Excel from 'exceljs';
import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
@Injectable()
export class ExcelService {
    constructor(
        @InjectRepository(User) private userRepository : Repository<User>
    ) {}
    async generateExcel() {
        // Tạo một workbook mới
        let workbook = new Excel.Workbook();
        let worksheet = workbook.addWorksheet('My Sheet');
        let data = await this.userRepository.find();
        console.log(data)
        // Thêm tiêu đề cho các cột
        worksheet.columns = [
          { header: `userId`, key: 'id', width: 10 },
          { header: `name`, key: 'name', width: 30 },
          { header:`email`, key: 'email', width: 30},
          { header:`password`, key: 'password', width: 30},
          { header:`createdAt`, key: 'createdAt', width: 30},
        ];
        
        // Thêm một s ố dữ liệu
        {data.map((item) => worksheet.addRow({id: item.userId, name: item.userName, email: item.email, password: item.password, createdAt: item.createdAt}))}
    
        // Tạo một buffer
        const buffer = await workbook.xlsx.writeBuffer();
        return buffer;
      }
  // lay tat ca cac user
 

}
