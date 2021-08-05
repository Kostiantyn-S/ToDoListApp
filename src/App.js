import {React, Component} from 'react';
import './App.css';
import Application from './components/Application';
import Autorization from './components/Auth/Autorization';
import Registration from './components/Registration/Registration';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {isLogin: false,
                  showRegForm: false}
  }
  
  render() {
    if(!this.state.isLogin && !this.state.showRegForm) {
      return (
        <div className="App">
          <Autorization logInTrue={this.logInTrue} showReg={this.showRegistration}/>
        </div>
      )
    } else if(this.state.isLogin) {
      return (
        <div className="App">
          <Application appState={this.profileState}/>
        </div>
      )
    } else if(this.state.showRegForm) {
      return (
        <div className="App">
          <Registration logInTrue={this.logInTrue}/>
        </div>
      )
    }
  }

  logInTrue = (key) => {
    this.profileState = JSON.parse(localStorage.getItem(key));
    this.setState({isLogin: true});
  }

  showRegistration = () => {
    this.setState({showRegForm: true});
  }
}