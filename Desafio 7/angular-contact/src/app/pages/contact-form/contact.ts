// Modelos para a criação
export interface ContactRequestDto {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponseDto {
  message: string;
}
