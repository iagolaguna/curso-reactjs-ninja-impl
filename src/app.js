'use strict'

import React from 'react'
import Title from './title'

var App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title name='Fernado' lastname='Daciuk'/>
      </div>
    )
  }
})

export default App
