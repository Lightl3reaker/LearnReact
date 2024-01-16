import React from 'react'

class Item extends React.Component{
  render(){
    return <li>{this.props.name} , {this.props.price}$</li>
  }
}

class AddForm extends React.Component{
  nameRef=React.createRef();
  priceRef=React.createRef();
  add =()=>{
    let name=this.nameRef;
    let price=this.priceRef;
    this.props.add(name,price);
  }
  render(){
    return(
      <div>
        <input type='text' ref={this.nameRef}/><br/>
        <input type='text' ref={this.priceRef}/><br/>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }

}
class App extends React.Component{
  state={
    Items:[
      {id:1,name:"Apple",price:"3.33"}
    ]
  }
  add=(name,price)=>{
    let id=this.state.Items.length+1;
    this.setState(
      {
        Items:[...this.state.Items,
        {id,name,price}
      ]}
    );
  
  }
  render(){
    return(
      <>
        <h1>Using Parent Props and functions</h1>
        <ul>
          {this.state.Items.map(
            i=>{
              return(
                <Item id={i.id} name={i.name} price={i.price}/>
              )
            }
          )}
        </ul>
        <AddForm add={this.add}/>
      </>
    )
  }
}

export default App;
