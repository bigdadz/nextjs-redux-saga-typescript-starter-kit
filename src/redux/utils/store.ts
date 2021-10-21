import rootReducer from '../reducers/rootReducer'
import rootSaga from '../sagas/rootSaga'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store