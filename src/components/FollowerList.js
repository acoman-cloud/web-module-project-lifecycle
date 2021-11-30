import React from 'react';

import Follower from './Follower'

class FollowerList extends React.Component {
  componentDidMount() {
    
  }

  render() {

    return(
		<div className='Lor'>
			{this.props.followers.map(follower =>(
				<Follower key={follower.id} follower={follower} />
			))}
    </div>
		);
  }
}

export default FollowerList;
