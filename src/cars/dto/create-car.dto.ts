export class CreateCarDto {
  readonly brand: string;
  readonly car_model: string; // Cambiado de 'model' a 'car_model'
  readonly year: number;
  readonly type: string;
  readonly price: number;
  readonly stock: number;
  readonly available_colors: string[];
  readonly features: string[];
  readonly images: { color: string; url: string }[];
}
