import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Pizza from '../models/Pizza';

const models = [Pizza];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
