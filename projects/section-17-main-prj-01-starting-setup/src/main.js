import { createApp } from 'vue';
import router from './router';
import store from './store';

import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';

const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.use(router);
app.use(store);

app.mount('#app');
