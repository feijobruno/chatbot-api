import { container } from 'tsyringe';
import { IConnectionsRepository } from '../../repositories/IConnectionsRepository';
import { ConnectionsRepository } from '../../repositories/typeorm/ConnectionsRepository';
import { IMessagesRepository  } from '../../repositories/IMessagesRepository';
import { ISettingsRepository } from '../../repositories/ISettingsRepository';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { MessagesRepository } from '../../repositories/typeorm/MessagesRepository';
import { SettingsRepository } from '../../repositories/typeorm/SettingsRepository';
import { UsersRepository } from '../../repositories/typeorm/UsersRepository';

// Descreve um nome que indica qual implementação usar
container.registerSingleton<IConnectionsRepository>(
    'ConnectionsRepository',
    ConnectionsRepository
)

container.registerSingleton<IMessagesRepository>(
    'MessagesRepository',
    MessagesRepository
)

container.registerSingleton<ISettingsRepository>(
    'SettingsRepository',
    SettingsRepository
)
    
container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
)




