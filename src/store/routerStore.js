export default {
    namespaced: true,
    state: {
        // 当前所在栏目
        isShowSide: true,
        column: '',
        scolumn: '',
        scolumnc: ''
    },
    mutations: {
        // 改变侧边栏的现实性
        changeIsShowSide (state, { isShowSide }) {
            state.isShowSide = isShowSide;
        },
        // 改变栏目
        changeColumn (state, { column, scolumn, scolumnc }) {
            state.column = column;
            state.scolumn = scolumn;
            state.scolumnc = scolumnc;
        }
    }
};
