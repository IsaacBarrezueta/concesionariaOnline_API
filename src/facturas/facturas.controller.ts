import { Body, Controller, Post } from '@nestjs/common';

@Controller('invoices')
export class InvoicesController {
  @Post()
  generateInvoice(@Body() invoiceDto: any): any {
    const { car, accessories, services, user } = invoiceDto;

    // Lógica para calcular el total y generar la factura
    const totalAmount =
      car.price +
      accessories.reduce((sum, acc) => sum + acc.price, 0) +
      services.reduce((sum, service) => sum + service.price, 0);

    const invoice = {
      user: user.email,
      items: [...accessories, ...services],
      totalAmount,
      status: 'paid', // o 'unpaid' según el caso
    };

    // Puedes guardar la factura en la base de datos aquí
    return invoice;
  }
}
