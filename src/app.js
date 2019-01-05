'use strict'

import React, { Component } from 'react'
import LikeButton from './like-button'
import SearchButton from './search-button'
class App extends Component {
  render () {
    return (
      <div className='container'>
        <LikeButton handleClick={(e) => { console.log('Curtir') }} />
        <SearchButton handleClick={(e) => { console.log('Search') }} />
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
