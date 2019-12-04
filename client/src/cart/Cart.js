import React from 'react'
import { connect } from 'react-redux'
import { removeItemFromList } from '../actions/itemActions'
import { Link } from 'react-router-dom'
import './Cart.css'

class Cart extends React.Component {

    //write as arrow function to call it with this in the return without a call back like {() => this.myFunc()}
    
    render() {
        const { items, dispatchRemoveItemFromList } = this.props
        return(
            <div className='cartContainer'>
                <ul>
                    {
                        items.map((item, i) => (
                            <li key={i}>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <p>{item.type}</p>
                                <button onClick={() => dispatchRemoveItemFromList(item)}>X</button>
                            </li>
                        ))
                    }
                </ul>
                {/* always use link for navigation when using routes other wise the redux store will be refreshed. */}
                <Link to='/list'>
                    <button>Go back to List</button>
                </Link>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    items: state.itemsList.selectedItems
})

export const mapDispsatchToProps = dispatch => ({
    dispatchRemoveItemFromList: data => dispatch(removeItemFromList(data)),
})

export default connect(mapStateToProps, mapDispsatchToProps)(Cart)