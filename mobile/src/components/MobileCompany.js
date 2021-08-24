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
    showedClients: this.props.clients,
    clientsID: this.props.clients.map( el => el.id),
    editMode: false,
    editedClient: null,
  };

  setName = (str) => {
    this.setState( {name: str} );
  };

  setName1 = () => {
    this.setName("MTC");
  };

  setName2 = () => {
    this.setName("Velcom");
  };

  showAllClients = () => {
    this.setState( {showedClients: this.state.allClients} );
  };

  showActiveClients = () => {
    let sortedClients = [...this.state.allClients].filter( el => el.balance > 0 );
    console.log(sortedClients);
    this.setState( {showedClients: sortedClients} );
  };

  showDeactiveClients = () => {
    let sortedClients = [...this.state.allClients].filter( el => el.balance <= 0 );
    console.log(sortedClients);
    this.setState( {showedClients: sortedClients} );
  };

  activateEditMode = (obj) => {
    this.setState( {editMode: true, editedClient: obj} );
  };

  deactivateEditMode = () => {
    this.setState( {editMode: false} );
  };

  addNewClient = (obj) => {
    if (!this.state.clientsID.includes(obj.id)) {
      this.setState( {showedClients: [...this.state.showedClients, obj], clientsID: [...this.state.clientsID, obj.id]} );
    }
  };

  componentDidMount = () => {
    mobileEvents.addListener('editedClientInfo',this.addNewClient);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('editedClientInfo',this.addNewClient);
  };

  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.showedClients.map( c =>
      <MobileClient key={c.id} clientInfo={c} cbActivateEditMode = {this.activateEditMode} />
    );

    return (
      <div className='mobile-company'>
        <input type="button" value="=МТС" onClick={this.setName1} />
        <input type="button" value="=Velcom" onClick={this.setName2} />

        <h1 className='mobile-company__name'>Компания &laquo;{this.state.name}&raquo;</h1>
        <hr />

        <input type="button" value="All" onClick={this.showAllClients} />
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
          <EditMode  key={this.state.editedClient.id} id={this.state.editedClient.id} lastname={this.state.editedClient.lastname} name={this.state.editedClient.name} secondname={this.state.editedClient.secondname} balance={this.state.editedClient.balance} newClient={this.state.editedClient.newClient} clientsID={this.state.clientsID} cbDeactivateEditMode = {this.deactivateEditMode} />
        }
      </div>
    );

  }

}

export default MobileCompany;
