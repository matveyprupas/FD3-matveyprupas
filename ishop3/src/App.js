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
    idArr: [],
  }

  chooseGood = (obj) => {
    this.setState( {choosedCode: obj.code, editMode: false} );
  }

  removeGood = (obj) => {
    this.setState({goodsArr: this.state.goodsArr.filter(el => obj.code !== el.code)});
  }

  activateEditMode = (obj) => {
    this.setState({choosedCode: obj.code, editMode: true});
  }

  activateEditModeWithoutObj = () => {
    let code;
    for (let i = 1; i < this.state.idArr.length+2; i++ ) {
      if(!this.state.idArr.includes(i)) {
        code = i;
      }
    }
    
    console.log(this.state.choosedCode, this.state.editMode);
    
    debugger;
    
    this.setState({choosedCode: code, editMode: true}, ()=>console.log(this.state.choosedCode, this.state.editMode));
  }

  deactivateEditMode = () => {
    // console.log(obj);
    this.setState({choosedCode: 0, editMode: false});
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.goodsArr.length !== prevState.goodsArr.length) this.setState( {idArr: this.state.goodsArr.map(el => el.code)} );
  }

  componentDidMount = () => {
    this.setState( {idArr: this.state.goodsArr.map(el => el.code)} );
  }

  render() {

    // console.log(this.state);

    let goodsArrJSX = this.state.goodsArr.map(el => {
      return (
        <Goods key = {el.code} code = {el.code} name = {el.name} cost = {el.cost} imageLink = {el.imageLink} left = {el.left} cbChooseGood = {this.chooseGood} cbRemoveGood = {this.removeGood} cbActivateEditMode = {this.activateEditMode} choose = {this.state.choosedCode === el.code ? true : false}/>
      ); 
    });

    let goodCardProduct = this.state.goodsArr.filter ( el => el.code === this.state.choosedCode )[0];
    
    let goodEditProduct = {...goodCardProduct};

    if(!Object.keys(goodEditProduct).length) goodEditProduct = {
      code: this.state.choosedGood,
      name: undefined, 
      cost: undefined, 
      imageLink: undefined, 
      left: undefined,
    };
    console.log("this.state.choosedGood: " + this.state.choosedGood);
    console.log("this.state.editMode: " + this.state.editMode);

    return (
      <div className="goods__frame">
        <h1 className="goods__title">{this.props.shopName}</h1>
        <div className="goods__wrap">{goodsArrJSX}</div>
        {
          !this.state.editMode &&
          <input className = "good_del" type = "button" value = "Add product" onClick = {this.activateEditModeWithoutObj} />
        }
        {
          goodCardProduct &&
          !this.state.editMode &&
          <GoodCard code = {goodCardProduct.code} name = {goodCardProduct.name} cost = {goodCardProduct.cost} imageLink = {goodCardProduct.imageLink} left = {goodCardProduct.left} />
        }
        {
          goodEditProduct &&
          this.state.editMode &&
          <GoodEdit code = {goodEditProduct.code || this.state.choosedGood} name = {goodEditProduct.name} cost = {goodEditProduct.cost} imageLink = {goodEditProduct.imageLink} left = {goodEditProduct.left} idArr = {this.state.idArr} cbDeactivateEditMode = {this.deactivateEditMode} />
        }
      </div>
    )
  }
}

export default Shop3;
