import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Goods from './components/goods';
import GoodCard from './components/goodCard';
import GoodEdit from './components/goodEdit';


class Shop3 extends React.Component {

  static propTypes = {
    shopName: PropTypes.string.isRequired,
    goodsArr: PropTypes.array.isRequired,
  }

  state = {
    goodsArr: this.props.goodsArr,
    choosedCode: 0,
    editMode: false,
  }

  chooseGood = (obj) => {
    this.setState( {choosedCode: obj.code, editMode: false} );
  }

  removeGood = (obj) => {
    this.setState({goodsArr: this.state.goodsArr.filter(el => obj.code !== el.code)});
  }

  activateEditMode = (obj) => {
    // console.log(obj);
    this.setState({choosedCode: obj.code, editMode: true});
  }

  render() {
    let goodsArrJSX = this.state.goodsArr.map(el => {
      return (
        <Goods key = {el.code} code = {el.code} name = {el.name} cost = {el.cost} imageLink = {el.imageLink} left = {el.left} cbChooseGood = {this.chooseGood} cbRemoveGood = {this.removeGood} cbActivateEditMode = {this.activateEditMode} choose = {this.state.choosedCode === el.code ? true : false}/>
      ); 
    });

    let goodCardProduct = this.state.goodsArr.filter ( el => el.code === this.state.choosedCode )[0];

    return (
      <div className="goods__frame">
        <h1 className="goods__title">{this.props.shopName}</h1>
        <div className="goods__wrap">{goodsArrJSX}</div>
        <input className = "good_del" type = "button" value = "Add product" />
        {
          goodCardProduct &&
          !this.state.editMode &&
          <GoodCard code = {goodCardProduct.code} name = {goodCardProduct.name} cost = {goodCardProduct.cost} imageLink = {goodCardProduct.imageLink} left = {goodCardProduct.left} />
        }
        {
          goodCardProduct &&
          this.state.editMode &&
          <GoodEdit code = {goodCardProduct.code} name = {goodCardProduct.name} cost = {goodCardProduct.cost} imageLink = {goodCardProduct.imageLink} left = {goodCardProduct.left} />
        }
      </div>
    )
  }
}

export default Shop3;
