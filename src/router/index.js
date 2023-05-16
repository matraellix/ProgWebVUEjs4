import {createRouter, createWebHistory} from 'vue-router';
import notFound from "../components/notFound.vue";
import galleryComponent from "../components/galleryComponent.vue";
import singleComponent from "../components/singleComponent.vue";
import headerComponent from "../components/headerComponent.vue";
import footerComponent from "../components/footerComponent.vue";

const routes = [
    { 
        path: '/', 
        name: 'gallery',
        components: {
            default : galleryComponent, 
            header : headerComponent, 
            footer : footerComponent,
        }
    },
    { 
        path: '/:id(\\d+)', 
        name: 'superhero', 

        components: {
            default : singleComponent, 
            header : headerComponent, 
            footer : footerComponent,
        }
    },
    {
        path: '/:catchAll(.*)',
        name: 'notfound',
        component: notFound
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router