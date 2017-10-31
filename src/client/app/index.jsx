import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import App from 'grommet/components/App';
import { Provider } from 'react-redux'
import appreducer from './Reducers/app_reducer'
import HomeContainer from './Containers/home_container'
import {persistStore, autoRehydrate} from 'redux-persist'

class HomeApp extends Component {
  render() {
    return (
          <HomeContainer />
    )
  }
}
let store = createStore(appreducer, applyMiddleware(thunk, logger), autoRehydrate())

persistStore(store)

render(
    <Provider store={store}>
      <HomeApp />
    </Provider>,
    document.getElementById('app'));
