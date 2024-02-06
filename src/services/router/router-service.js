import { createRouter, createWebHistory } from "vue-router";
import BaseFrame from "@/services/themes/components/BaseFrame.vue";
import PageNotFound from "@/services/themes/components/PageNotFound.vue";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: BaseFrame,
        },
        { path: "/:path(.*)", component: PageNotFound },
    ],
});

router.beforeEach((to, from) => {
    console.log("to" + to);
    console.log("from" + from);
});
export default router;