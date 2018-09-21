import Foo from './views/Foo.vue';
import App from './App.vue';
import Error from './views/Error.vue';

export default [
    {
        path: '/foo', component: Foo
    },
    {
        path: '/', component: App
    },
    {
        path: '/:page', component: Error
    }
]