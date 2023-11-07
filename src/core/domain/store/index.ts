import type { Entity } from 'domain/entities/todo/type';
import type { Contract } from 'contracts/index.ts';

import { shared } from 'shared/index.ts';
import { createTodoEntity } from 'domain/entities/todo';

export let store_contract: Contract;
export let store_entity: Entity;

export function createStore() {
    console.log('store');
    shared();
    createTodoEntity();
}
