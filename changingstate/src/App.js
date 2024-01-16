import React from 'react'

class Item extends React.Component{
  render(){
    return <li>{this.props.name} , {this.props.price}</li>
  }
}
class App extends React.Component{
  state={
    Items:[
      {id:1,name:"Apple",price:0.99},
      {id:2,name:"Orange",price:1.99}
    ]
  }
  add=()=>{
    let id=this.state.Items.length+1;
    this.setState(
      {
        Items:[
          ...this.state.Items,
          {id,name:`Item ${id}`,price: 0.01 * id}
        ]
      }
    );

  }
  render(){
    return(
      <>
        <h1>Changing State</h1>
        <ul>
          {this.state.Items.map(
            i=>{
              return(<Item key={i.id} name={i.name} price={i.price}/>)
            }
          )}
        </ul>
        <button onClick={this.add}>
          Add
        </button>
      </>
    )
  }
}

export default App;
