import React from 'react';
import PropTypes from 'prop-types';
import './goodCard.css';

class GoodCard extends React.Component {

    static propTypes = {
        code: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired,
        imageLink: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        cost: PropTypes.number.isRequired, 
    }
  
  
    render() {
      return (
        <div className = "good__card">
            <h2>{this.props.name}</h2>
            <img className = "good__card_img" src = {this.props.imageLink} alt = {this.props.name + " card image"} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laboriosam consequuntur, ad vitae ab tempore ipsa voluptatibus voluptates illum voluptate adipisci libero molestiae quos soluta sed error, harum amet nisi.</p>
            <div className = "good__card_price">
                <span>{this.props.cost} $</span>
                <span>{this.props.left} pcs</span>
            </div>
        </div>
      )
    }
  }

  export default GoodCard;
