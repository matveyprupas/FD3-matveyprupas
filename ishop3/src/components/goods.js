import React from 'react';
import PropTypes from 'prop-types';
import './goods.css';

class Goods extends React.Component {

    static propTypes = {
        code: PropTypes.number.isRequired,
        choose: PropTypes.bool.isRequired,
        cbChooseGood: PropTypes.func.isRequired,        
        cbRemoveGood: PropTypes.func.isRequired,
        cbActivateEditMode: PropTypes.func.isRequired,
        left: PropTypes.oneOfType([
          PropTypes.string.isRequired,
          PropTypes.number.isRequired
        ]),
        cost: PropTypes.oneOfType([
          PropTypes.string.isRequired,
          PropTypes.number.isRequired
        ]),
        imageLink: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        editMode: PropTypes.bool.isRequired, 
    }
  
    chooseGood = () => {
      this.props.cbChooseGood( this.props );
    }
  
    removeGood = (e) => {
      e.stopPropagation();
      this.props.cbRemoveGood( this.props );
    }

    activateEditMode = (e) => {
      e.stopPropagation();
      this.props.cbActivateEditMode( this.props );
    }
  
    render() {
      return (
        <div className = {this.props.choose ? "good__description choosed__good" : "good__description"} onClick = {this.chooseGood}>
          <img className = "good_img" src = {this.props.imageLink} alt = {this.props.name + " image"}/>
          <span className = "good_name">{this.props.name}</span>
          <span className = "good_cost">{this.props.cost} $</span>
          <span className = "good_left">{this.props.left} pcs.</span>
          <input className = "good_del" type = "button" value = "Edit" onClick = {this.activateEditMode} disabled = {this.props.editMode ? true : false} />
          <input className = "good_del" type = "button" value = "Delete" onClick = {this.removeGood} disabled = {this.props.editMode ? true : false} />
        </div>
      )
    }
  }

  export default Goods;
