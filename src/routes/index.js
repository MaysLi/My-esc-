import IndexLayout from '../layouts/IndexLayout';
import SideLayout from '../layouts/SideLayout';

import transferroute from './transferroute';
import buyroute from './buyroute';

export default {
    routes: [
        {
            path: '/index',
            component: IndexLayout,
            children: [
                {
                    path: 'index',
                    component: () => import('../views/index/Index.vue'),
                    meta: {
                        column: 'index'
                    },
                    name: 'index'
                },
                {
                    path: 'buy',
                    component: SideLayout,
                    children: buyroute.children.map(item => ({
                        path: item.en,
                        component: item.co,
                        meta: {
                            column: 'buy',
                            scolumn: item.en,
                            scolumnc: item.cn
                        },
                        name: item.en
                    })),
                    name: 'buy',
                    redirect: { name: 'large-scale-car-selection' }
                },
                {
                    path: 'sale',
                    component: () => import('../views/sale/Index.vue'),
                    meta: {
                        column: 'sale'
                    },
                    name: 'sale'
                },
                {
                    path: 'transfer',
                    component: SideLayout,
                    // 映射出配置项
                    children: transferroute.children.map(item => ({
                        path: item.en,
                        component: item.co,
                        meta: {
                            column: 'transfer',
                            scolumn: item.en,
                            scolumnc: item.cn
                        },
                        name: item.en
                    })),
                    name: 'transfer',
                    redirect: { name: 'b2b' }
                },
                {
                    path: 'insurance',
                    component: () => import('../views/insurance/Index.vue'),
                    meta: {
                        column: 'insurance'
                    },
                    name: 'insurance'
                },
                {
                    path: 'parking',
                    component: () => import('../views/parking/Index.vue'),
                    meta: {
                        column: 'parking'
                    },
                    name: 'parking'
                }
            ]
        },
        {
            path: '*',
            redirect: { 'name': 'index' }
        }
    ]
};
