import React from 'react';

class Fragment extends React.Component {
    render () {
      return <div>{this.props.children}</div>
    }
}


export default Fragment;
