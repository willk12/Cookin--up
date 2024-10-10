import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';

createApp(App).mount('#app');
App.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
