import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './firestore.datasource.json';

export class FirestoreDataSource extends juggler.DataSource {
  static dataSourceName = 'firestore';

  constructor(
    @inject('datasources.config.firestore', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
