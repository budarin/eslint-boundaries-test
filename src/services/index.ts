import type { Contract } from 'contracts/index.ts';
import { shared } from 'shared/index.ts';

export let service: Contract;

export function setupService(): void {
    console.log('service is called');
    shared();
}
