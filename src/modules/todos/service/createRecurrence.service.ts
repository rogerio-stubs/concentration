import { HttpException, Injectable } from '@nestjs/common';
import { UpdateTodoService } from './updateTodo.service';
import { RequestRecurrence } from '../contract/RequestReccuence';

@Injectable()
export class CreateRecurrenceService {
  constructor(private readonly updateTodoService: UpdateTodoService) {}

  async execute(
    id: string,
    { dayWeek, hour }: RequestRecurrence,
  ): Promise<void> {
    try {
      const recurrence = `0 ${hour} * * ${dayWeek}`;
      await this.updateTodoService.execute(id, { recurrence });
    } catch (error) {
      console.log(`CreateRecurrenceService ${error}`);
      const { message, status } = error;
      throw new HttpException(message, status);
    }
  }
}
