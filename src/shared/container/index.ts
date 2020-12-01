import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

// import IUserTokenRepository from '@modules/users/repositories/IUserTokenRepository';
// import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersToe';

// registerSingleton cria uma classe para ser usada
// durante todo o ciclo de vida da aplicação,
// Se usassemos o regiter(), para cada interação, ele criaria uma classe.

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
