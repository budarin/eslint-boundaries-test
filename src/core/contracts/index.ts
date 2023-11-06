import { Entity } from 'entities/type.ts';
import { Store } from 'store/type.ts';
import { Domain } from 'domain/type.ts';

export type Contract = {
    entity: Entity;
    store: Store;
    domain: Domain;
};
