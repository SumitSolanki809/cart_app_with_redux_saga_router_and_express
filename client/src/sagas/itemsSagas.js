import { put, takeEvery, call } from 'redux-saga/effects'
import * as actions from '../actions/itemActions'
import { setItemsToStore } from '../actions/itemActions'
import { getItemsWithApiCall } from '../communications/api'

export const getItemsData = function* () {
    try {
        const { data: { items } } = yield call(getItemsWithApiCall)
        //console.log(data)
        yield put(setItemsToStore(items))
    } catch(err) {
        console.log(err)
    }
}

export const watchGetItemsData = function* () {
    yield takeEvery(actions.GET_ITEMS_DATA, getItemsData)
}