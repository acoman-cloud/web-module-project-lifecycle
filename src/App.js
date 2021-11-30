import React from 'react';
import axios from 'axios';

import FollowerList from './components/FollowerList';
import User from './components/User';

class App extends React.Component {
  state = {
    currentUser: '',
    user: [],
    followers: [],
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/acoman-cloud')
      .then(esp=>{
        this.setState({
          ...this.state,
          user: esp.data,
        })
      })
      .catch(err=>{
        console.error(err);
      })
    axios.get('https://api.github.com/users/acoman-cloud/followers')
      .then(esp=>{
        this.setState({
          ...this.state,
          followers: esp.data,
        })
      })
      .catch(err=>{
        console.error(err);
      })
  }

  render() {

    return(<div>
    <h1>Github Info</h1>
      <User user={this.state.user} />
      <FollowerList followers={this.state.followers}/>
    </div>);
  }
}

export default App;
