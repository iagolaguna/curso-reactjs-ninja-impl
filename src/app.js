'use strict'

import React, { Component } from 'react'
import Title from './title'

class App extends Component {

  render() {
    return (
      <div className='container'>
        <Title name='Fernado' />
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
