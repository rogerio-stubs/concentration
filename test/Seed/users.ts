import { faker } from '@faker-js/faker';

export const userSeed = {
  id: crypto.randomUUID(),
  email: faker.internet.email(),
  fullName: faker.name.fullName(),
  password: faker.internet.password(),
};
