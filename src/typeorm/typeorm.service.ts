import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';


@Injectable()
export class TypeormService implements TypeOrmOptionsFactory{
    
     constructor(){

     }
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
      /*  return {
            type: 'postgres',
            host: process.env.DB_HOST,
            port:  Number(process.env.DB_PORT),
            username:  process.env.DB_USERNAME,
            password:  process.env.DB_PASSWORD,
            database:  process.env.DB_DATABASE,*/
     //       entities: [__dirname + '/../**/*.entity{.js,.ts}'],
     /*       synchronize: true,
            logging: true
        }*/

        return {
            type: 'postgres',
            host: 'user-prod-us-east-2-1.cluster-cfi5vnucvv3w.us-east-2.rds.amazonaws.com',
            port:  5432,
            username:  'zc-tournaments-main-db-0efa305efb27bd039',
            password:  'kZWGaX3h7VcFReASyFQMkfh5mFS21k',
            database: 'zc-tournaments-main-db-0efa305efb27bd039',
            entities: [__dirname + '/../**/*.entity{.js,.ts}'],
            synchronize: true,
            logging: true
        }
    }
    
 }
