import Immutable from 'immutable'

const SetItemsToStoreRecord = Immutable.Record({
    items: Immutable.List([]),
    selectedItems: Immutable.List([])
})

export default SetItemsToStoreRecord