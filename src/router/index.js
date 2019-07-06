import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import menu from '../pages/menu'
import shoppingCart from '../pages/shoppingCart'
import user from '../pages/user'
import goodsCont from '../pages/goodsCont'


Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/menu',
            name: 'menu',
            component: menu
        },
        {
            path: '/shoppingCart',
            name: 'shoppingCart',
            component: shoppingCart
        },
        {
            path: '/user',
            name: 'user',
            component: user
        },
        {
            path: '/goodsCont/:id.html',
            name: 'goodsCont',
            component: goodsCont
        }
    ]
})
