import React from 'react';
import Toolbar from './Toolbar';

class App extends React.Component{
  render(){
    return(
    <>
      <Toolbar>
        <h1>Hello</h1>
        <h2>This is Component splitting.</h2>
      </Toolbar>
    </>);
  }
}

export default App;
