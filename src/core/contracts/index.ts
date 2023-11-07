import type { Entity } from 'entities/type.ts';
import type { Store } from 'store/type.ts';
import type { Domain } from 'domain/type.ts';
import type { Service } from 'services/type.ts';

export type Contract = {
    entity: Entity;
    store: Store;
    domain: Domain;
    service: Service;
};
