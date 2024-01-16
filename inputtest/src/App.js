import React from 'react'

class Item extends React.Component {
  render() {
    return <li>{this.props.name} , {this.props.price}$</li>
  }
}
class App extends React.Component {
  state = {
    Items: [
      { id: 1, name: "Apple", price: 0.99 },
      { id: 2, name: "Orange", price: 0.45 }
    ]
  }
  nameRef = React.createRef();
  priceRef = React.createRef();
  add = () => {

    let id = this.state.Items.length + 1;
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;
    this.setState(
      {
        Items: [
          ...this.state.Items,
          { id, name, price }
        ]
      }
    );
  }

  render() {
    return(
      <>
        <h1>Using Inputs</h1>
        <ul>
          {this.state.Items.map(
            i => {
              return (<Item key={i.id} name={i.name} price={i.price} />)
            }
          )}
        </ul>
        <input type='text' ref={this.nameRef}/><br />
        <input type='text' ref={this.priceRef}/><br />
        <button onClick={this.add}>Add</button>
      </>
    )
    
  }
}
        export default App;
