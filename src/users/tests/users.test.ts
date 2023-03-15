export const emailServiceMock = {
  enviarEmail: jest.fn().mockResolvedValue(undefined),
};

export const userSeed = {
  email: 'email@email.com',
  fullName: 'full name',
  password: 'pass123',
};

export const fakeUser = {
  id: '1234567',
  email: 'email@email.com',
  fullName: 'full name',
  password: 'pass123',
};
