import {createStore, combineReducers, applyMiddleware} from 'redux'
import {postsReducer} from "./posts-reducer";
import createSagaMiddleware from 'redux-saga'
import firstSaga from './sagas/sagas'

const rootReducer = combineReducers({
    posts: postsReducer
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer,
    applyMiddleware(sagaMiddleware))

sagaMiddleware.run(firstSaga)

const action = type => store.dispatch({type})


