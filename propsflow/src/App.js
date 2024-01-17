import React from 'react'

class Title extends React.Component{
  render(){
    return(<h1>{this.props.name}</h1>)
  }
}
class Header extends React.Component{
  render(){
    return(
      <Title name={this.props.name}/>
    )
  }
}
class App extends React.Component{
  render(){
    return(
      <>
        <Header name="App Title"/>
      </>
    )
  }
}

export default App;
