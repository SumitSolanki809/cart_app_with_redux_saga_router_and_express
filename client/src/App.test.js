import React from 'react';
import App from './App';
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
configure({ adapter: new Adapter() })

describe('App', () => {
  let mockProps = {}
  let appComponent
  let store = {}
  beforeEach(() => {
    mockProps = {
      dispatchSetItemsToStore: jest.fn()
    }
    store = {
      getState: jest.fn(),
      subscribe: jest.fn(),
      dispatch: jest.fn()
    }
    appComponent = shallow(
      <Provider store={store}>
        <App {...mockProps} />
      </Provider>
    )
  })

  it('renders without crashing', () => {
    expect(appComponent.html()).toBeTruthy()
  })
})
