import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas/rootSaga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

//always create same kind of store when using redux saga.

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)