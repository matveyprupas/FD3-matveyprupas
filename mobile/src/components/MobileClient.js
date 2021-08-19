import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
    lastname: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    secondname: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    balance: PropTypes.number.isRequired,
  };

  state = {
    balance: this.props.balance,
    active: this.props.balance < 0 ? false : true,
  };

  render() {

    console.log("MobileClient id="+this.props.id+" render");
    
    return (
        <div className='mobile-client mobile-client__row'>
            <div className='mobile-client__lastname'>{this.props.lastname}</div>
            <div className='mobile-client__name'>{this.props.name}</div>
            <div className='mobile-client__secondname'>{this.props.secondname}</div>
            <div className='mobile-client__balance'>{this.state.balance}</div>
            
            <div className='mobile-client__active' style={this.state.active ? {backgroundColor: "green"} : {backgroundColor: "red"}}>{this.state.active ? "active" : "blocked"}</div>
            
            <input type="button" value="Edit" />
        </div>
    );

  }

}

export default MobileClient;
