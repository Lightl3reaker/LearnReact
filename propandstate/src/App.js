import React from 'react'

class Item extends React.Component{
  render(){
    return <li>
      {this.props.name},
      {this.props.price}
    </li>
  }
}
class App extends React.Component{
  render(){
    return(
      <>
      <h1>Hello Testing Props</h1>
      <Item name="Apple" price="3.99$"/>
      <Item name="Orange" price="2.00$"/>
      </>
    )
  }
}
export default App;