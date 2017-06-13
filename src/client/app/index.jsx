import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import person from './Reducers/person_reducer'
import { getPersonsAsynch  } from './ActionTypes/person_actions'
import PersonContainer from './Containers/person_container'

class App extends Component {
  render() {
    return (
        <div>
          <PersonContainer />
        </div>
    )
  }
}
let store = createStore(person, applyMiddleware(thunk, logger))
store.dispatch(getPersonsAsynch())

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'));

