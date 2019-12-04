import React from 'react';
import './App.css';
import Cart from './cart/Cart.js'
import ListItems from './list-items/ListItems.js'
import Welcome from './welcome/Welcome'
import { getItemsData } from './actions/itemActions'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    const { dispatchGetItemsData } = this.props
    dispatchGetItemsData()
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path='/' component={Welcome} />
          <Route path='/list' component={ListItems} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  dispatchGetItemsData: () => dispatch(getItemsData())
})

export default connect(null, mapDispatchToProps)(App)
