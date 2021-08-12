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
        idArr: PropTypes.array.isRequired, 
        cbDeactivateEditMode: PropTypes.func.isRequired,
    }

    state = {
      name: this.props.name,
      code: this.props.code,
      left: this.props.left,
      imageLink: this.props.imageLink,
      cost: this.props.cost,
      idArr: this.props.idArr,
      verify: {
        name: true,
        cost: true,
        left: true,
        imageLink: true,
      },
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.name !== this.props.name) this.setState( {name: this.props.name} );
      if (prevProps.code !== this.props.code) this.setState( {code: this.props.code} );
      if (prevProps.left !== this.props.left) this.setState( {left: this.props.left} );
      if (prevProps.imageLink !== this.props.imageLink) this.setState( {imageLink: this.props.imageLink} );
      if (prevProps.cost !== this.props.cost) this.setState( {cost: this.props.cost} );
      if (prevProps.idArr.length !== this.props.idArr.length) this.setState( {idArr: this.props.idArr} );
    }

    deactivateEditMode = () => {
      this.props.cbDeactivateEditMode();
    }

    verifyInputValue = (e, value) => {
      // console.log(value);
      switch (e.target.id) {
        case "form__name":
          let nameRE = /^[^а-я]+$/i;
          if(!nameRE.test(value)) this.setState( {verify: {...this.state.verify, name: false}} );
          else this.setState( {verify: {...this.state.verify, name: true}} );
          break;
        case "form__price":
          let priceRE = /^\d+$/i;
          if(!priceRE.test(value)) this.setState( {verify: {...this.state.verify, cost: false}});
          else this.setState( {verify: {...this.state.verify, cost: true}} );
          break;
        case "form__url":
          let urlRE = /^https?[^а-я\s]+$/i;
          if(!urlRE.test(value)) this.setState( {verify: {...this.state.verify, imageLink: false}});
          else this.setState( {verify: {...this.state.verify, imageLink: true}} );          
          break;
        case "form__quantity":
          let leftRE = /^\d+$/i;
          if(!leftRE.test(value)) this.setState( {verify: {...this.state.verify, left: false}});
          else this.setState( {verify: {...this.state.verify, left: true}} );
          break;
        default:
          break;
      }
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

      this.verifyInputValue(e, e.target.value);
    }

    render() {
      console.log(this.props);


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
                <div>
                  <input type = "text" id = "form__name" value = {this.state.name} onChange = {this.editInputValue} className = {this.state.verify.name ? "verify" : "not-verify" } />
                  <span>Only english and numbers</span>
                </div>
                <div>
                  <input type = "text" id = "form__price" value = {this.state.cost} onChange = {this.editInputValue} className = {this.state.verify.cost ? "verify" : "not-verify" }/>
                  <span>Only numbers</span>
                </div>
                <div>
                  <input type = "text" id = "form__url" value = {this.state.imageLink} onChange = {this.editInputValue} className = {this.state.verify.imageLink ? "verify" : "not-verify" }/>
                  <span>Start from "http" or "https" and english</span>
                </div>
                <div>
                  <input type = "text" id = "form__quantity" value = {this.state.left} onChange = {this.editInputValue} className = {this.state.verify.left ? "verify" : "not-verify" }/>
                  <span>Only numbers</span>
                </div>
              </div>
            </div>
            <div className = "form__buttons">
              <input className = "good_del" type = "button" value = "Save" disabled = {!this.state.verify.name || !this.state.verify.cost || !this.state.verify.left || !this.state.verify.imageLink ? true : false} />
              <input className = "good_del" type = "button" value = "Cancel" onClick = {this.deactivateEditMode} />
            </div>
        </div>
      )
    }
  }

  export default GoodEdit;
