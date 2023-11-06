import type { Contract } from 'contracts/index.ts';

import { shared } from 'shared/index.ts';

export let service: Contract;

export function setupService(str: string): void {
    service = 'service';
    console.log(shared);
}
