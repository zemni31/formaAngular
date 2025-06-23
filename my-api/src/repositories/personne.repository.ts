import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BdDataSource} from '../datasources';
import {Personne, PersonneRelations} from '../models';

export class PersonneRepository extends DefaultCrudRepository<
  Personne,
  typeof Personne.prototype.id,
  PersonneRelations
> {
  constructor(
    @inject('datasources.BD') dataSource: BdDataSource,
  ) {
    super(Personne, dataSource);
  }
}
