export class CreateCategoryDTO {
  id: string;
  name: string;
  description?: string;
  user_id: string;
  offensive: number;
  created_at: Date;
  updated_at: Date;
}
