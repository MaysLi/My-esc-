export default [
    {
        title: '缩略图',
        key: 'avatar',
        render (h, { row }) {
            return h('div', {
                attrs: {
                    'data-id': row.id
                }
            }, [
                h('LoadingGifImages', {
                    attrs: {
                        w: 90,
                        h: 60,
                        src: `http://192.168.2.188/images/carimages_small/${row.id}/view/${row.avatar}`
                    }
                }, '')
            ]);
        }
    },
    {
        title: 'ID',
        key: 'id'
    },
    {
        title: '车牌',
        key: 'brand'
    },
    {
        title: '车系',
        key: 'series'
    },
    {
        title: '颜色',
        key: 'color'
    },
    {
        title: '发动机',
        key: 'engine'
    },
    {
        title: '排量',
        key: 'exhaust'
    },
    {
        title: '变速器',
        key: 'gearbox'
    },
    {
        title: '汽油',
        key: 'fuel'
    }
];
