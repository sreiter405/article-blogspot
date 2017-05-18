import React, { Component } from 'react'
import { render } from 'react-dom'

import TitleBar from './components/titleBar'

class App extends Component {
  handleClick() {
    alert("Hello")
  }
  render() {
    return <TitleBar name="Scott" title="Hello Man"/>
  }
}

render(<App />, document.getElementById('app'))
