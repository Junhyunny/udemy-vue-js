import { createApp } from 'vue';
import router from './router';

import CoachesList from './pages/coaches/CoachesList.vue';

const app = createApp(CoachesList);

app.use(router);

app.mount('#app');
