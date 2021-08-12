import React from 'react';
import PropTypes from 'prop-types';
import './goodEdit.css';

class GoodEdit extends React.Component {

    static propTypes = {
        code: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired,
        imageLink: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        cost: PropTypes.number.isRequired, 
    }

    state = {
      name: this.props.name,
      code: this.props.code,
      left: this.props.left,
      imageLink: this.props.imageLink,
      cost: this.props.cost,
      verify: true,
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.name !== this.props.name) this.setState( {name: this.props.name} );
      if (prevProps.code !== this.props.code) this.setState( {code: this.props.code} );
      if (prevProps.left !== this.props.left) this.setState( {left: this.props.left} );
      if (prevProps.imageLink !== this.props.imageLink) this.setState( {imageLink: this.props.imageLink} );
      if (prevProps.cost !== this.props.cost) this.setState( {cost: this.props.cost} );
    }

    editInputValue = (e) => {
      // console.log(e.target.id);
      switch (e.target.id) {
        case "form__name":
          this.setState( {name: e.target.value} );
          break;
        case "form__price":
          this.setState( {cost: e.target.value} );
          break;
        case "form__url":
          this.setState( {imageLink: e.target.value} );
          break;
        case "form__quantity":
          this.setState( {left: e.target.value} );
          break;
        default:
          break;

      }
    }
  
  
    render() {
      // console.log(this.state.name);

      return (
        <div className = "good__edit">
            <h2>Edit existing product</h2>

            <div className = "form">
              <div className = "form__column">
                <span>ID:</span>
                <label htmlFor = "form__name">Name:</label>
                <label htmlFor = "form__price">Price:</label>
                <label htmlFor = "form__url">URL:</label>
                <label htmlFor = "form__quantity">Quantity:</label>
              </div>

              <div className = "form__column">
                <span>{this.state.code}</span>
                <input type = "text" id = "form__name" value = {this.state.name} onChange = {this.editInputValue} />
                <input type = "text" id = "form__price" value = {this.state.cost} onChange = {this.editInputValue} />
                <input type = "text" id = "form__url" value = {this.state.imageLink} onChange = {this.editInputValue} />
                <input type = "text" id = "form__quantity" value = {this.state.left} onChange = {this.editInputValue} />
              </div>
            </div>
            <div className = "form__buttons">
              <input className = "good_del" type = "button" value = "Save" disabled = {!this.state.verify ? true : false} />
              <input className = "good_del" type = "button" value = "Cancel" />
            </div>


        </div>
      )
    }
  }

  export default GoodEdit;
