import React,{Component} from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      inventory :['soj','sdsd','3']
    }
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Form/>
      <Dashboard/>
        
      </div>
    );
  }
}

export default App;
