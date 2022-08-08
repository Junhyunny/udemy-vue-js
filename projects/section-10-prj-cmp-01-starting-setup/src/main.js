import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';

const app = createApp(App);

// UI 디렉토리에 들어가 있는 공용 콤포넌트는 전역 컴포넌트로 등록하는 편이 좋다.
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
