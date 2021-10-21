import rootReducer from '../redux/reducers/rootReducer'
import rootSaga from '../redux/sagas/rootSaga'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store