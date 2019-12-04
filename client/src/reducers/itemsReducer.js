import * as actions from '../actions/itemActions'
import SetItemsToStoreRecord from '../records/itemsRecords'

export const setItemsToStoreReducer = (state = new SetItemsToStoreRecord(), action) => {
    switch(action.type) {
        case actions.SET_ITEMS_TO_STORE:
            return state.merge({ items: action.payload })
        case actions.UPDATE_ITEM:
            return state.merge({ selectedItems: state.selectedItems.concat(action.payload) })
        case actions.REMOVE_ITEM_FROM_LIST:
            return state.merge({
                selectedItems: state.selectedItems.filter(item => item !== action.payload)
            })
        default:
            return state
    }
}