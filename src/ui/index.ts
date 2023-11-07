import type { Contract } from 'contracts/index.ts';

import { shared } from 'shared/index.ts';
import { use_case } from 'use_cases/index.ts';
import { createTodoEntity } from 'domain/entities/todo';

export let ui: Contract;

export function renderUI() {
    shared();
    createTodoEntity();
    use_case();
}
