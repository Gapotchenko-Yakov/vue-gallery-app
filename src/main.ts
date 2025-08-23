import { createApp } from 'vue';
import './styles/style.css';
import App from './App.vue';
import router from './router';
import { sharedComponents } from './components/shared';

const app = createApp(App);

sharedComponents.forEach(({ name, component }) => {
    app.component(name, component);
});

app.use(router);

app.mount('#app');
