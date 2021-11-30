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

  handleClick=(e)=>{
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(esp=>{
                console.log(esp)
        this.setState({
          ...this.state,
          user: esp.data,
        })
      })
      .catch(err=>{
        console.log(err);
      })
      axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
      .then(esp=>{
        this.setState({
          ...this.state,
          followers: esp.data,
          currentUser: '',
        })
      })
      .catch(err=>{
        console.error(err);
      })
  }

  handleChange = (e) =>[
    this.setState({
      ...this.state,
      currentUser: e.target.value,
    })
  ]

  render() {

    return(<div>
    <h1>Github Info</h1>
      <User user={this.state.user} handleClick={this.handleClick} handleChange={this.handleChange} currentUser={this.state.currentUser} />
      <h2>Followers: </h2>
      <FollowerList followers={this.state.followers}/>
    </div>);
  }
}

export default App;
