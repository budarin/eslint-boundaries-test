import type { Entity } from 'domain/entities/todo/type';
import type { Store } from 'store/type.ts';
import type { Domain } from 'domain/type.ts';
import type { Service } from 'services/type.ts';

export type Contract = {
    entity: Entity;
    store: Store;
    domain: Domain;
    service: Service;
};
