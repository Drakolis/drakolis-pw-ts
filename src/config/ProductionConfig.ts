import {
  IConfig,
  EnvironmentConfig,
  LogConfig,
  PostgressConfig,
  ServiceRegistryConfig,
  ExpressConfig,
} from '.';

export class ProductionConfig implements IConfig {
  public environment: EnvironmentConfig = 'production';
  public logging: LogConfig = {
    console: true,
    file: true,
    fileName: 'drakolis-pw',
    level: 'info',
  };

  public postgress: PostgressConfig = {
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'drakolis-pw',
    schema: 'public',
  };

  public express: ExpressConfig = {
    host: 'api.drakolis.pw',
    port: 8080,
  };

  public serviceRegistry: ServiceRegistryConfig = {
    startingConcurrency: 10,
  };
}
