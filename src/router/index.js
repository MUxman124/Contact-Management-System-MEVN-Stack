import { createRouter, createWebHistory} from 'vue-router'  
import Home from '../components/CreateContact.vue'

const router = createRouter({
    history: createWebHistory(), //import.meta.env.BASE_URL
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/view',
            name: 'view',
            component: () => import('../components/ContactCard.vue'),
        },
        {
            path: '/edit/:id',
            name: 'edit',
            props: true,
            component: () => import('../components/EditContact.vue')
        },

        {
            path: '/viewcon/:id',
            name: 'viewCon',
            props: true,
            component: () => import('../components/ViewContact.vue')
        }
    ]
})

export default router
