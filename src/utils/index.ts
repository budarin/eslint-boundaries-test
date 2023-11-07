import { renderUI } from 'ui/index.ts';
import { setupService } from 'services/index.ts';

export function run() {
    setupService('src_utils');
    renderUI();
}
