import { renderUI } from 'ui/index.ts';
import { setupService } from 'services/index.ts';
import { setupDomain } from 'domain/index.ts';

export function run() {
    setupDomain();
    setupService();
    renderUI();
}
