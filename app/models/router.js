import {NavigationActions} from 'react-navigation';
import {routerReducer} from '../router';

const actions = [
    NavigationActions.BACK,
    NavigationActions.INIT,
    NavigationActions.NAVIGATE,
    NavigationActions.RESET,
    NavigationActions.SET_PARAMS,
    NavigationActions.URI,
];

export default {
    namespace: 'router',
    state: {
        ...routerReducer(),
    },
    reducers: {
        apply(state, {payload: action}) {
            return routerReducer(state, action);
        },
    },
    effects: {
        watch: [
            function* watch({take, put}) {
                const loop = true;
                while (loop) {
                    const payload = yield take(actions);
                    yield put({
                        type: 'apply',
                        payload,
                    });
                }
            },
            {type: 'watcher'},
        ],
    },
};
