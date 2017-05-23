import React from 'react'
import { render } from 'react-dom'

import Container from './containers/Container.jsx'

class Application extends React.Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <Container />
      </div>
    )
  }
}

render(<Application />, document.getElementById('app'))
