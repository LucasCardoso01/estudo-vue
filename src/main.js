import { createApp } from 'vue'
import App from './App.vue'
import router from "@/services/router/router-service";
import CoreuiVue from "@coreui/vue";

const app = createApp(App);

app.use(router);
app.use(CoreuiVue);
app.mount('#app');
