import { fetchShotsList } from './api'

export default {
    namespace: 'shot',
    state: {
        shotsListArray: [
            {
                id: 1,
                images: {
                    normal: '',
                },
            },
        ],
    },
    effects: {
        *fetchShotsList({ payload }, { call, put }) {
            const shotsList = yield call(fetchShotsList, payload)
            yield put({
                type: 'saveShotsList',
                payload: {
                    shotsListArray: shotsList,
                },
            })
        },
    },
    reducers: {
        saveShotsList(state, { payload }) {
            return { ...state, shotsListArray: payload.shotsListArray }
        },
    },
}
