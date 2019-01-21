import querystring from 'querystring';
export default {
    namespaced: true,
    state: {
        page: 1,
        pagesize: 5,
        results: [],
        total: 0
    },
    mutations: {
        changeResults (state, { results }) {
            state.results = results;
        },
        changeTotal (state, { total }) {
            state.total = total;
        },
        changePage (state, { page }) {
            state.page = page;
        },
        changePagesize (state, { pagesize }) {
            state.pagesize = pagesize;
        }
    },
    actions: {
        async init ({ commit, state }) {
            const obj = {
                'page': state.page,
                'pagesize': state.pagesize
            };
            const { results, total } = await fetch('http://192.168.2.188/findcar?' + querystring.stringify(obj)).then(data => data.json());
            commit('changeResults', { results });
            commit('changeTotal', { total });
        },
        changePage ({ commit, dispatch }, { page }) {
            commit('changePage', { page });
            dispatch('init');
        },
        changePagesize ({ commit, dispatch }, { pagesize }) {
            commit('changePagesize', { pagesize });
            commit('changePage', { 'page': 1 });
            dispatch('init');
        }
    }
};
