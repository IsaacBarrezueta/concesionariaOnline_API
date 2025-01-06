import { Body, Controller, Post } from '@nestjs/common';

@Controller('quotations')
export class QuotationsController {
  @Post()
  calculateQuotation(@Body() quotationDto: any): any {
    const { car_price, accessories, services } = quotationDto;
    const accessoriesTotal = accessories.reduce(
      (sum, acc) => sum + acc.price,
      0,
    );
    const servicesTotal = services.reduce(
      (sum, service) => sum + service.price,
      0,
    );

    const totalAmount = car_price + accessoriesTotal + servicesTotal;
    return { totalAmount };
  }
}
