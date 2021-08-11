import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Goods from './components/goods';


class Shop3 extends React.Component {

  static propTypes = {
    shopName: PropTypes.string.isRequired,
    goodsArr: PropTypes.array.isRequired,
  }

  state = {
    goodsArr: this.props.goodsArr,
    choosedCode: 0,
  }

  chooseGood = (obj) => {
    this.setState( {choosedCode: obj.code} );
  }

  removeGood = (obj) => {
    this.setState({goodsArr: this.state.goodsArr.filter(el => obj.code !== el.code)});
  }

  render() {
    let goodsArrJSX = this.state.goodsArr.map(el => {
      return (
        <Goods key = {el.code} code = {el.code} name = {el.name} cost = {el.cost} imageLink = {el.imageLink} left = {el.left} cbChooseGood = {this.chooseGood} cbRemoveGood = {this.removeGood} choose = {this.state.choosedCode === el.code ? true : false}/>
      ); 
    });

    return (
      <div className="goods__frame">
        <h1 className="goods__title">{this.props.shopName}</h1>
        <div className="goods__wrap">{goodsArrJSX}</div>
      </div>
    )
  }
}

export default Shop3;
