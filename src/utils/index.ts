import { setupService } from 'services/index.ts';
import { renderUI } from 'ui/index.ts';

export function run() {
    setupService('src_utils');
    renderUI();
}
