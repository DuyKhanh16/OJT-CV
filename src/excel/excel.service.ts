import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as Excel from 'exceljs';
@Injectable()
export class ExcelService {
    constructor(
        // @InjectRepository(Company) private companyRepository : Repository<Company>
    ) {}
    async generateExcel() {
        // Tạo một workbook mới
        let workbook = new Excel.Workbook();
        let worksheet = workbook.addWorksheet('My Sheet');
    
        // Thêm tiêu đề cho các cột
        worksheet.columns = [
          { header: 'Id', key: 'id', width: 10 },
          { header: 'Name', key: 'name', width: 30 },
          { header: 'Email', key: 'email', width: 30},
        ];
    
        // Thêm một số dữ liệu
        worksheet.addRow({id: 1, name: 'John Doe', email: 'john@example.com'});
        worksheet.addRow({id: 2, name: 'Jane Doe', email: 'jane@example.com'});
    
        // Tạo một buffer
        const buffer = await workbook.xlsx.writeBuffer();
        return buffer;
      }
}
