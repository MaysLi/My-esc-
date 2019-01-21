export default {
    'columnChinese': '买车',
    'columnEnglish': 'buy',
    'children': [
        {
            'cn': '大表选车',
            'en': 'large-scale-car-selection',
            'co': () => import('../views/buy/Large-scale-car-selection.vue')
        },
        {
            'cn': 'AI荐车',
            'en': 'ai-recommendation-car',
            'co': () => import('../views/buy/Ai-recommendation-car.vue')
        },
        {
            'cn': '司法拍卖车辆选购',
            'en': 'judicial-auction-vehicle-selection',
            'co': () => import('../views/buy/Judicial-auction-vehicle-selection.vue')
        }
    ]
};
