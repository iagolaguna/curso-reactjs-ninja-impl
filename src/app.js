'use strict'

import React, { Component } from 'react'
import Button from './button'
class App extends Component {
  render () {
    return (
      <div className='container'>
        <Button>
          <span>Texto</span>
          outro texto
          </Button>
      </div>
    )
  }
}

// var App = React.createClass({
//   render: function () {
//     return (
//       <div className='container'>
//         <Title name='Fernado' lastname='Daciuk'/>
//       </div>
//     )
//   }
// })

export default App
