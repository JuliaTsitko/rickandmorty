import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import watcher from '../sagas/watcher';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistCombineReducers(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    state: persistedReducer
});

function configureStore() {
    const store = createStore(
        reducer,
        undefined,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(watcher);
    return store;
}

export const store = configureStore();
export const persistor = persistStore(store);
