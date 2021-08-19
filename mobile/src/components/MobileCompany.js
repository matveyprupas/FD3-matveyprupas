import React from 'react';
import PropTypes from 'prop-types';
import MobileClient from './MobileClient.js';
import EditMode from './editMode';

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
        active: PropTypes.bool.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
    editMode: false,
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

  activateEditMode = () => {
    this.setState( {editMode: true} );
  };

  deactivateEditMode = () => {
    this.setState( {editMode: false} );
  };

  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map( c =>
      <MobileClient key={c.id} id={c.id} lastname={c.lastname} name={c.name} secondname={c.secondname} active={c.active} balance={c.balance} />
    );

    return (
      <div className='mobile-company'>
        <input type="button" value="=МТС" onClick={this.setName1} />
        <input type="button" value="=Velcom" onClick={this.setName2} />

        <h1 className='mobile-company__name'>Компания &laquo;{this.state.name}&raquo;</h1>
        <hr />

        <input type="button" value="All" />
        <input type="button" value="Active" />
        <input type="button" value="Deactive" />
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
        <input type="button" value="Add client" onClick= {this.activateEditMode}/>
        {
          this.state.editMode &&
          <EditMode id={1} lastname="Prupas" name="Matvey" secondname="Viktorovich" balance={100500} cbDeactivateEditMode = {this.deactivateEditMode} />
        }
      </div>
    )
    ;

  }

}

export default MobileCompany;
