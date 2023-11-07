import type { Contract } from 'contracts/index.ts';

import { shared } from 'shared/index.ts';
import { use_case } from 'use_cases/index.ts';
import { createEntity } from 'domain/entities/todo';

export let ui: Contract;

export function renderUI() {
    shared();
    createEntity();
    use_case();
}
