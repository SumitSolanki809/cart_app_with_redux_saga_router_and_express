import React from 'react'
import { connect } from 'react-redux'
import { updateItem } from '../actions/itemActions'
import CartIcon from '../cart-icon/CartIcon'
import './ListItems.css'

class ListItems extends React.Component {
    render() {
        const { items, dispatchUpdateItem } = this.props
        return(
            <div>
                <ul>
                    {
                        items.map((item, i) => (
                            <li key={i} onClick={() => dispatchUpdateItem(item)}>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <p>{item.type}</p>
                            </li>
                        ))
                    }
                </ul>
                <CartIcon />
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    items: state.itemsList.items
})

export const mapDispatchToProps = dispatch => ({
    dispatchUpdateItem: data => dispatch(updateItem(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListItems)