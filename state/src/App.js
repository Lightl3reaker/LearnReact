import React from 'react'

class Item extends React.Component{
  render(){
    return <li>
      {this.props.name},{this.props.price}
    </li>
  }
}

class App extends React.Component{
  state={
    Items:[
      {id:1,name:'Apple',price:'2.33$'},
      {id:2,name:'Orange',price:'3.23$'},
      {id:3,name:'Grape',price:'5.43$'}
    ]
  }
  render(){
    return(
      <div>
        <h1>Using State</h1>
        <ul>
          {this.state.Items.map(i=>{
            return(
              <Item name={i.name} price={i.price}/>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default App;