'use strict'

import React, { Component } from 'react'
import Square from './square'
class App extends Component {
  render () {
    return (
      <div className='container' onClick={(e) => {
        alert('clicou')
      }}>
        <Square />
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
