// import App from '../App'
import home from '../views/home.vue'
import A from '../views/A.vue'

export default [
{
    path: '/',
    component: home,
    // children: [{
    //     path: '/home',
    //     component: home
    // },
    // {
    //     path: '/A',
    //     component: A
    // }]
},
{
    path: '/A',
    component: A,
},
{
    path: '/home',
    component: home,
}
]