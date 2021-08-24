import React from 'react';
import PropTypes from 'prop-types';
import {mobileEvents} from './events';

import './editMode.css';

class EditMode extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number,
    lastname: PropTypes.string,
    name: PropTypes.string,
    secondname: PropTypes.string,
    balance: PropTypes.number,
    newClient: PropTypes.bool,
    clientsID: PropTypes.array,
    cbDeactivateEditMode: PropTypes.func,
    cbRemoveClient: PropTypes.func,
  };

  state = {
    id: this.props.id,
    lastname: this.props.lastname,
    name: this.props.name,
    secondname: this.props.secondname,
    balance: this.props.balance,
    clientsID: this.props.clientsID,
  };

  newLastnameRef = null;
  newNameRef = null;
  newSecondnameRef = null;
  newBalanceRef = null;

  setNewLastnameRef = (ref) => {
    this.newLastnameRef=ref;
  };

  setNewNameRef = (ref) => {
    this.newNameRef=ref;
  };

  setNewSecondnameRef = (ref) => {
    this.newSecondnameRef=ref;
  };

  setNewBalanceRef = (ref) => {
    this.newBalanceRef=ref;
  };

  setNewState = () => {
    let newState = {id: this.state.id};
    
    if (!this.state.id) {
      let newID=this.state.clientsID.sort( (a,b) => b-a )[0] + 1;

      newState.id = newID;
      newState.lastname = this.newLastnameRef.value;
      newState.name = this.newNameRef.value;
      newState.secondname = this.newSecondnameRef.value;
      newState.balance = parseFloat(this.newBalanceRef.value);

      this.setState( newState );
    }

    if ( this.newLastnameRef && this.newLastnameRef.value !== this.state.lastname ) {
      newState.lastname = this.newLastnameRef.value;
      this.setState( newState );
    }
    if ( this.newNameRef && this.newNameRef.value !== this.state.name ) {
      newState.name = this.newNameRef.value;
      this.setState( newState );
    }
    if ( this.newSecondnameRef && this.newSecondnameRef.value !== this.state.secondname ) {
      newState.secondname = this.newSecondnameRef.value;
      this.setState( newState );
    }
    if ( this.newBalanceRef && parseFloat(this.newBalanceRef.value) !== this.state.balance ) {
      newState.balance = parseFloat(this.newBalanceRef.value);
      this.setState( newState );
    }

    // console.log(newState);
    mobileEvents.emit('editedClientInfo', newState);
    this.props.cbDeactivateEditMode();
  };


  render() {

    console.log("EditMode id="+this.props.id+" render");
    
    return (
        <div className='edit-form'>
            <h2>{this.props.newClient ? "Add new client" : "Edit client info"}</h2>

            <div className="edit-form__row">
                <label htmlFor="edit-form__lastname">Lastname</label>
                <input type="text" id='edit-form__lastname' defaultValue={this.props.lastname ? this.props.lastname : ""} ref={this.setNewLastnameRef} />
            </div>

            <div className="edit-form__row">
                <label htmlFor="edit-form__name">Name</label>
                <input type="text" id='edit-form__name' defaultValue={this.props.name ? this.props.name : ""} ref={this.setNewNameRef} />
            </div>

            <div className="edit-form__row">
                <label htmlFor="edit-form__secondname">Secondname</label>
                <input type="text" id='edit-form__secondname' defaultValue={this.props.secondname ? this.props.secondname : ""} ref={this.setNewSecondnameRef} />
            </div>

            <div className="edit-form__row">
                <label htmlFor="edit-form__balance">Balance</label>
                <input type="text" id='edit-form__balance' defaultValue={this.props.balance ? this.props.balance : 0} ref={this.setNewBalanceRef} />
            </div>

            <input type="button" value="Save" onClick = {this.setNewState} />
            <input type="button" value="Del" onClick = {()=>this.props.cbRemoveClient(this.state.id)} />
            <input type="button" value="Cancel" onClick = {()=>this.props.cbDeactivateEditMode()} />
        </div>
    );

  }

}

export default EditMode;
