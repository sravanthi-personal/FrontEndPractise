import React, { Component } from 'react'

class IndexAsKey extends Component {
  render() {
      
    const names = ["Bruce","Alice","David"]
    const namesList = names.map((name,index) => <h2 key={name}>{name}</h2>)
    return (
      <div>{namesList}</div>
    )
  }
}

export default IndexAsKey