export default {
    namespaced: true,
    state: {
        id: 0,
        nowAlbum: 'view',
        nowIdx: 0,
        result: {}
    },
    mutations: {
        changeId (state, { id }) {
            state.id = id;
        },
        // 改变results
        changeResult (state, { result }) {
            state.result = result;
        },
        // 改变图集
        changeNowAlbum (state, { nowAlbum }) {
            state.nowAlbum = nowAlbum;
        },
        // 改变小序号
        changeNowIdx (state, { nowIdx }) {
            state.nowIdx = nowIdx;
        }
    },
    actions: {
        // 初始化
        async init ({ commit }, { id }) {
            // 这里请求接口，接口已经写好了跨域，这叫做CORS跨域。
            const { result } = await fetch('http://192.168.2.188/car/' + id).then(data => data.json());
            commit('changeResult', { result });
            // 换回view
            commit('changeNowAlbum', { 'nowAlbum': 'view' });
            // 换回0
            commit('changeNowIdx', { 'nowIdx': 0 });
            // 改id
            commit('changeId', { 'id': id });
        },
        changeNowAlbum ({ commit }, { nowAlbum }) {
            commit('changeNowIdx', { 'nowIdx': 0 });
            commit('changeNowAlbum', { nowAlbum });
        },
        goNext ({ commit, state }) {
            if (state.nowIdx < state.result.images[state.nowAlbum].length - 1) {
                commit('changeNowIdx', { 'nowIdx': state.nowIdx + 1 });
            } else {
                if (state.nowAlbum === 'view') {
                    commit('changeNowAlbum', { 'nowAlbum': 'inner' });
                } else if (state.nowAlbum === 'inner') {
                    commit('changeNowAlbum', { 'nowAlbum': 'engine' });
                } else if (state.nowAlbum === 'engine') {
                    commit('changeNowAlbum', { 'nowAlbum': 'more' });
                } else if (state.nowAlbum === 'more') {
                    commit('changeNowAlbum', { 'nowAlbum': 'view' });
                }
                commit('changeNowIdx', { 'nowIdx': 0 });
            }
        },
        goPrev ({ commit, state }) {
            if (state.nowIdx > 0) {
                commit('changeNowIdx', { 'nowIdx': state.nowIdx - 1 });
            } else {
                if (state.nowAlbum === 'view') {
                    commit('changeNowAlbum', { 'nowAlbum': 'more' });
                } else if (state.nowAlbum === 'more') {
                    commit('changeNowAlbum', { 'nowAlbum': 'engine' });
                } else if (state.nowAlbum === 'engine') {
                    commit('changeNowAlbum', { 'nowAlbum': 'inner' });
                } else if (state.nowAlbum === 'inner') {
                    commit('changeNowAlbum', { 'nowAlbum': 'view' });
                }
                commit('changeNowIdx', { 'nowIdx': state.result.images[state.nowAlbum].length - 1 });
            }
        }
    }
};
