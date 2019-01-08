'use strict'

import React, { Component } from 'react'
import LikeButton from './like-button'
import SearchButton from './search-button'
class App extends Component {
  constructor() {
    super()
    this.state = {
      text: 'Fernando'
    }
  }

  render () {
    return (
      <div className='container' onClick={() => (this.setState({
        text: 'Outro texto'
      }))}>
        {this.state.text}
      </div >
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
