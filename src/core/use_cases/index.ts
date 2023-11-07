import type { Contract } from 'contracts/index.ts';

import { createEntity } from 'domain/entities/todo';
import { createStore } from 'store/index.ts';
import { shared } from 'shared/index.ts';
import { setupService } from 'services/index.ts';
import { storeCoreMethod } from '../domain/store/core/index.ts';

export let use_case_contract: Contract;

export function use_case() {
    console.log('use case');

    shared();
    createEntity();
    createStore();
    setupService();
    storeCoreMethod();
}
