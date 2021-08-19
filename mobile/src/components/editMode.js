import React from 'react';
import PropTypes from 'prop-types';

import './editMode.css';

class EditMode extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number,
    lastname: PropTypes.string,
    name: PropTypes.string,
    secondname: PropTypes.string,
    balance: PropTypes.number,
    cbDeactivateEditMode: PropTypes.func,
  };

  state = {
    lastname: this.props.lastname,
    name: this.props.name,
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
    let newState = {};

    if ( this.newLastnameRef ) {
        newState.lastname = this.newLastnameRef.value;
        this.setState(newState);
    }
    if ( this.newNameRef ) {
        newState.name = this.newNameRef.value
        this.setState(newState);
    }
    if ( this.newSecondnameRef ) {
        newState.secondname = this.newSecondnameRef.value
        this.setState(newState);
    }
    if ( this.newBalanceRef ) {
        newState.balance = this.newBalanceRef.value
        this.setState(newState);
    }

  };



  render() {

    console.log("EditMode id="+this.props.id+" render");
    // console.log(this.props.id+" render");
    
    return (
        <div className='edit-form'>
            <h2>Add new client</h2>

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
                <input type="text" id='edit-form__balance' defaultValue={this.props.balance ? this.props.balance : ""} ref={this.setNewBalanceRef} />
            </div>

            <input type="button" value="Save" onClick = {this.setNewState} />
            <input type="button" value="Cancel" onClick = {()=>this.props.cbDeactivateEditMode()} />
        </div>
    );

  }

}

export default EditMode;
