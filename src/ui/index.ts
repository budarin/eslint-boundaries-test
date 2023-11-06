import type { Contract } from 'contracts/index.ts';

import { use_case } from 'use_cases/index.ts';
import { createEntity } from 'entities/index.ts';
import { shared } from 'shared/index.ts';

export let ui: Contract;

export function renderUI() {
    createEntity();
    use_case();
    console.log(shared);
}
