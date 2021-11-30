import React from 'react';

class Follower extends React.Component {
  componentDidMount() {
    
  }

  render() {
		const { follower } = this.props;
    return(<div>
      <img src={follower.avatar_url} />
			<p>{follower.login}</p>
    </div>);
  }
}

export default Follower;
