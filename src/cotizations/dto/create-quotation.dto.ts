export class CreateQuotationDto {
  car_price: number;
  accessories: { price: number }[];
  services: { price: number }[];
}
