import type { Entity } from 'entities/type.ts';
import type { Contract } from 'contracts/index.ts';

import { shared } from 'shared/index.ts';
import { createEntity } from 'entities/index.ts';

export let store_contract: Contract;
export let store_entity: Entity;

export function createStore() {
    console.log('store');
    shared();
    createEntity();
}
