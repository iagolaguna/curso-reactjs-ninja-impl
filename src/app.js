'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: '2',
    }
  }
  render () {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          console.log('e', e)
        }}
          onChange={(e) => {
            console.log('name', e.target.name)
            console.log('value', e.target.value)
          }}
        >
          <textarea defaultValue={'textarea \nvalue'} />
          <button type='submit'></button>
        </form>
      </div>
    )
  }
}
export default App
