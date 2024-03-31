import { Controller, Get, Res } from "@nestjs/common";
import { ExcelService } from "./excel.service";
import { Response } from "express";

@Controller('excel')
export class ExcelController { 

    constructor(private readonly excelService: ExcelService) {}
    @Get('export')
  async exportExcel(@Res() res: Response) {
    const buffer = await this.excelService.generateExcel();
    console.log(buffer)
    const fileName = 'export.xlsx';

    // Thiết lập header để thông báo cho trình duyệt là đây là một file cần được tải về
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    
    // Gửi file
    res.end(buffer);
  }


}
