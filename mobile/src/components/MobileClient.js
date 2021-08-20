import React from 'react';
import PropTypes from 'prop-types';
import {mobileEvents} from './events';


import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    clientInfo: PropTypes.object.isRequired,
    cbActivateEditMode: PropTypes.func.isRequired,
  };

  state = {
    id: this.props.clientInfo.id,
    lastname: this.props.clientInfo.lastname,
    name: this.props.clientInfo.name,
    secondname: this.props.clientInfo.secondname,
    balance: this.props.clientInfo.balance,
    active: this.props.clientInfo.balance < 0 ? false : true,
  };

  changeCientInfo = (obj) => {
    console.log(obj);
  };

  componentDidMount = () => {
    mobileEvents.addListener('editedClientInfo',this.changeCientInfo);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('editedClientInfo',this.changeCientInfo);
  };

  render() {

    console.log("MobileClient id="+this.props.clientInfo.id+" render");
    // console.log(this.props.clientInfo.id);

    return (
        <div className='mobile-client mobile-client__row'>
            <div className='mobile-client__lastname'>{this.state.lastname}</div>
            <div className='mobile-client__name'>{this.state.name}</div>
            <div className='mobile-client__secondname'>{this.state.secondname}</div>
            <div className='mobile-client__balance'>{this.state.balance}</div>
            
            <div className='mobile-client__active' style={this.state.active ? {backgroundColor: "green"} : {backgroundColor: "red"}}>{this.state.active ? "active" : "blocked"}</div>
            
            <input type="button" value="Edit" onClick={()=>this.props.cbActivateEditMode({...this.state, newClient: false})} />
        </div>
    );

  }

}

export default MobileClient;
