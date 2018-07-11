import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavB from './component/navbar/navB';
import Search from './component/search/Search';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavB />
          <Search/>
        </div>
      </MuiThemeProvider> 
    ) 
  }
}

export default App;
