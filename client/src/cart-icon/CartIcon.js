import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './CartIcon.css'

export const CartIcon = ({ numberOfItems }) => {
    return (
        <div className='iconContainer'>
            {/* always use link for navigation when using routes other wise the redux store will be refreshed. */}
            <Link to='/cart'>
                <img alt='cart-icon' src={require('../shopping-01-512.png')} />
            </Link>
            <h1>{numberOfItems.toJS().length}</h1>
        </div>
    )
}

export const mapStateToProps = state => ({
    numberOfItems: state.itemsList.selectedItems
})

export default connect(mapStateToProps, null)(CartIcon)