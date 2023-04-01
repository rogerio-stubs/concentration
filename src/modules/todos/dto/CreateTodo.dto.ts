export class CreateTodoDTO {
  name: string;
  description?: string;
  recurrence: string;
  checked: boolean;
  category_id?: string;
}
