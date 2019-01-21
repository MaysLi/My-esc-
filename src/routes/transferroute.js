export default {
    'columnChinese': '过户',
    'columnEnglish': 'transfer',
    'children': [
        {
            'cn': '本省车辆过户到本省',
            'en': 'b2b',
            'co': () => import('../views/transfer/B2B.vue')
        },
        {
            'cn': '本省车辆过户到外省',
            'en': 'b2w',
            'co': () => import('../views/transfer/B2W.vue')
        },
        {
            'cn': '外省车辆过户到本省',
            'en': 'w2b',
            'co': () => import('../views/transfer/W2B.vue')
        }
    ]
};
