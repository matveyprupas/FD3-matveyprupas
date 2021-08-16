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
    if (!this.state.editMode) this.setState( {choosedCode: obj.code, editMode: false} );
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
    this.setState({choosedCode: code, editMode: true});
  }

  deactivateEditMode = () => {
    this.setState({choosedCode: 0, editMode: false});
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.goodsArr.length !== prevState.goodsArr.length) this.setState( {idArr: this.state.goodsArr.map(el => el.code)} );
  }

  componentDidMount = () => {
    this.setState( {idArr: this.state.goodsArr.map(el => el.code)} );
  }

  saveNewProductValues = (obj) => {
    if (this.state.idArr.includes(obj.code)) {
      this.updateOldGood(obj);
    } else {
      this.addNewGood(obj);
    }
  }

  addNewGood = (obj) => {
    this.setState ( {goodsArr: [...this.state.goodsArr, obj], editMode: false} );
  }

  updateOldGood = (obj) => {
    let index = this.state.goodsArr.findIndex((el, i) => obj.code === el.code);

    let updatedGoodsArr = [...this.state.goodsArr];
    updatedGoodsArr[index] = obj;

    this.setState ( {goodsArr: updatedGoodsArr, editMode: false} );
  }

  render() {
    let goodsArrJSX = this.state.goodsArr.map(el => {
      return (
        <Goods key = {el.code} code = {el.code} name = {el.name} cost = {el.cost} imageLink = {el.imageLink} left = {el.left} cbChooseGood = {this.chooseGood} cbRemoveGood = {this.removeGood} cbActivateEditMode = {this.activateEditMode} choose = {this.state.choosedCode === el.code ? true : false} editMode = {this.state.editMode} />
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
          <GoodCard code = {goodCardProduct.code} name = {goodCardProduct.name} cost = {goodCardProduct.cost} imageLink = {goodCardProduct.imageLink} left = {goodCardProduct.left} editMode = {this.state.editMode} />
        }
        {
          goodEditProduct &&
          this.state.editMode &&
          <GoodEdit code = {goodEditProduct.code || this.state.choosedCode} name = {goodEditProduct.name} cost = {goodEditProduct.cost} imageLink = {goodEditProduct.imageLink} left = {goodEditProduct.left} idArr = {this.state.idArr} cbDeactivateEditMode = {this.deactivateEditMode} cbSaveNewProductValues = {this.saveNewProductValues} />
        }
      </div>
    )
  }
}

export default Shop3;
