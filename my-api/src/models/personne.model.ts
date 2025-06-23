import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false},
    mysql: {
      table: 'personne',  
    },})
export class Personne extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  firstname: string;

  @property({
    type: 'number',
    required: true,
  })
  cin: number;

  @property({
    type: 'string',
    required: true,
  })
  job: string;

  @property({
    type: 'string',
  })
  path?: string;

  @property({
    type: 'number',
    required: true,
  })
  age: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Personne>) {
    super(data);
  }
}

export interface PersonneRelations {
  // describe navigational properties here
}

export type PersonneWithRelations = Personne & PersonneRelations;
