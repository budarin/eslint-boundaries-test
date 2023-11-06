import { createEntity } from 'entities/index.ts';
import { creteStore } from 'store/index.ts';
import { service } from 'services/index.ts';
import { shared } from 'shared/index.ts';

export function use_case() {
    console.log('use case');
    createEntity();
    creteStore();
    console.log('using', service);
    console.log('using', shared);
}
