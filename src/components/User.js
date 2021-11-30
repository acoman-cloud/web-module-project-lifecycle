import React from 'react';

class User extends React.Component {
  componentDidMount() {

  }

  render() {
		const { user, handleClick, handleChange, currentUser } = this.props;
    return(<div>
      <form>
				<input onChange={handleChange} value={currentUser} placeholder='username' />
				<button onClick={handleClick}>Find User</button>
			</form>
			<div className='userName'>
				<img src={user.avatar_url} />
				<div>
					<h1>{user.login}</h1>
					<h2>Total Repos: {user.public_repos}</h2>
					<h2>Total Followers: {user.followers}</h2>
				</div>
			</div>
    </div>);
  }
}

export default User;
