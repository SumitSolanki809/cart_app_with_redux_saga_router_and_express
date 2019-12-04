export const GET_ITEMS_DATA = 'GET_ITEMS_DATA'
export const SET_ITEMS_TO_STORE = 'SET_ITEMS_TO_STORE'
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const REMOVE_ITEM_FROM_LIST = 'REMOVE_ITEM_FROM_LIST'

export const getItemsData = () => ({
    type: GET_ITEMS_DATA
})

export const setItemsToStore = payload => ({
    type: SET_ITEMS_TO_STORE,
    payload: payload
})

export const updateItem = payload => ({
    type: UPDATE_ITEM,
    payload: payload
})

export const removeItemFromList = payload => ({
    type: REMOVE_ITEM_FROM_LIST,
    payload: payload
})