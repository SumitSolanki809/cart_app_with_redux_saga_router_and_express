import { all, fork } from 'redux-saga/effects'
import { watchGetItemsData } from './itemsSagas'

export const rootSaga = function* () {
    yield all([
        fork(watchGetItemsData),
    ])
}