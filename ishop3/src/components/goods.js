import React from 'react';
import PropTypes from 'prop-types';
import './goods.css';

class Goods extends React.Component {

    static propTypes = {
        code: PropTypes.number.isRequired,
        choose: PropTypes.bool.isRequired,
        cbChooseGood: PropTypes.func.isRequired,        
        cbRemoveGood: PropTypes.func.isRequired,
        left: PropTypes.number.isRequired,
        imageLink: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        cost: PropTypes.number.isRequired, 
    }
  
    chooseGood = () => {
      this.props.cbChooseGood( this.props );
    }
  
    removeGood = (e) => {
        e.stopPropagation();
        this.props.cbRemoveGood( this.props );
    }
  
    render() {
      return (
        <div className = {this.props.choose ? "good__description choosed__good" : "good__description"} onClick = {this.chooseGood}>
          <img className = "good_img" src = {this.props.imageLink} alt = {this.props.name + " image"}/>
          <span className = "good_name">{this.props.name}</span>
          <span className = "good_cost">{this.props.cost} $</span>
          <span className = "good_left">{this.props.left} pcs.</span>
          <input className = "good_del" type = "button" value = "Delete" onClick = {this.removeGood} />
        </div>
      )
    }
  }

  export default Goods;
