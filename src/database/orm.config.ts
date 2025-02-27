import { DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';


const ormConfig = (configService: ConfigService): DataSourceOptions => ({
    type: 'mysql',
    host: configService.get('DATABASE_HOST'),
    port: configService.get('DATABASE_PORT'),
    username: configService.get('DATABASE_USERNAME'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABASE_NAME'),
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
    dropSchema: true,
}
);



export default ormConfig;