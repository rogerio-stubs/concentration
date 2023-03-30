import { Injectable } from '@nestjs/common';
import { ListCategoryByUserIdService } from './listCategoryByUserId.service';

@Injectable()
export class IncrementCategoryOffensiveService {
  constructor(
    private readonly listCategoriesByUserService: ListCategoryByUserIdService,
  ) {}

  async execute(): Promise<void> {
    // listar todas as categorias
    // entao retornar todas os Todos daquele category
    // verificar se o campo checked está como true
    // se todos o campos estiverem como true então podemos incrementar +1 ao campo offensive
    // caso algum Todo estiver false então zeramos o valor do campo offensive
  }
}
