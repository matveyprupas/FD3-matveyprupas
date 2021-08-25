import React from 'react';
import PropTypes from 'prop-types';
import MobileClient from './MobileClient.js';
import EditMode from './editMode';
import {mobileEvents} from './events';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        lastname: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        secondname: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    allClients: this.props.clients,
    clientsID: this.props.clients.map( el => el.id),
    editMode: false,
    showMode: "all",
    editedClient: null,
  };

  showAllClients = () => {
    this.setState( {showMode: "all"} );
  };

  showActiveClients = () => {
    this.setState( {showMode: "active"} );
  };

  showDeactiveClients = () => {
    this.setState( {showMode: "deactive"} );
  };

  activateEditMode = (obj) => {
    this.setState( {editMode: true, editedClient: obj} );
  };

  deactivateEditMode = () => {
    this.setState( {editMode: false} );
  };

  addNewClient = (obj) => {
    if (!this.state.clientsID.includes(obj.id)) {
      this.setState( {allClients: [...this.state.allClients, obj], clientsID: [...this.state.clientsID, obj.id]} );
    }
  };

  removeClient = (id) => {
    console.log(this.state);
    if (this.state.clientsID.includes(id)) {
      let sortedClients = this.state.allClients.filter( el => el.id !== id);
      let sortedClientsID = this.state.clientsID.filter( el => el !== id);
      this.setState( {allClients: sortedClients, clientsID: sortedClientsID}, ()=> console.log(this.state) );
    }
    this.deactivateEditMode();
  };

  componentDidMount = () => {
    mobileEvents.addListener('editedClientInfo',this.addNewClient);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('editedClientInfo',this.addNewClient);
  };

  render() {

    console.log("MobileCompany render");

    var clientsCode = [];

    if (this.state.showMode === "all") {
      clientsCode=this.state.allClients.map( c =>
        <MobileClient key={c.id} clientInfo={c} cbActivateEditMode = {this.activateEditMode} />
      );
    } else if (this.state.showMode === "active") {
      clientsCode=this.state.allClients.filter(el => el.balance > 0).map( c =>
        <MobileClient key={c.id} clientInfo={c} cbActivateEditMode = {this.activateEditMode} />
      );
    } else if (this.state.showMode === "deactive") {
      clientsCode=this.state.allClients.filter(el => el.balance <= 0).map( c =>
        <MobileClient key={c.id} clientInfo={c} cbActivateEditMode = {this.activateEditMode} />
      );
    }


    return (
      <div className='mobile-company'>
        <h1 className='mobile-company__name'>Компания &laquo;{this.state.name}&raquo;</h1>
        <hr />

        <input type="button" value="All" className="all-btn" onClick={this.showAllClients} />
        <input type="button" value="Active" onClick={this.showActiveClients} />
        <input type="button" value="Deactive" onClick={this.showDeactiveClients} />
        <hr />

        <div className='mobile-company__client'>
          <div className="mobile-client__row">
            <div className='mobile-client__lastname'>{"Фамилия"}</div>
            <div className='mobile-client__name'>{"Имя"}</div>
            <div className='mobile-client__fathername'>{"Отчество"}</div>
            <div className='mobile-client__balance'>{"Баланс"}</div>
            <div className='mobile-client__status'>{"Статус"}</div>
            <div className='mobile-client__edit'>{"Редактировать"}</div>
          </div>

          {clientsCode}
        </div>
        <input type="button" value="Add client" onClick= {()=>this.activateEditMode({newClient: true})}/>
        {
          this.state.editMode &&
          <EditMode  key={this.state.editedClient.id} id={this.state.editedClient.id} lastname={this.state.editedClient.lastname} name={this.state.editedClient.name} secondname={this.state.editedClient.secondname} balance={this.state.editedClient.balance} newClient={this.state.editedClient.newClient} clientsID={this.state.clientsID} cbDeactivateEditMode = {this.deactivateEditMode} cbRemoveClient = {this.removeClient} />
        }
      </div>
    );

  }

}

export default MobileCompany;
