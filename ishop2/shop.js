let Shop2 = React.createClass({

    displayName: "Shop2",

    propTypes: {
        shopName: React.PropTypes.string.isRequired,
        goodsArr: React.PropTypes.array.isRequired,
      },

    getInitialState: function() {
        let newStateGoodsArr = this.props.goodsArr.map(el => {
            el.className = "good__description";
            return el;
        });
        return {
            goodsArr: newStateGoodsArr,
        };
    },

    chooseGood: function(obj) {
        let clickedGood = this.state.goodsArr.filter(el => obj.code === el.code );

        let newStateGoodsArr = this.state.goodsArr.map(el => {
            if(el.code === clickedGood[0].code) {
                el.className = "good__description choosed__good";
            } else {
                el.className = "good__description";
            }
            return el;
        });

        this.setState({goodsArr: newStateGoodsArr});
    },

    removeGood: function(obj) {
        let clickedGood = this.state.goodsArr.filter(el => obj.code === el.code );

        let newStateGoodsArr = this.state.goodsArr.filter(el => el.code !== clickedGood[0].code);

        this.setState({goodsArr: newStateGoodsArr});
    },

    render: function() {
        let goodsArrayDOM = this.state.goodsArr.map(el => {
            return React.createElement(Goods, {...el, cbChooseGood: this.chooseGood, cbRemoveGood: this.removeGood, key: el.code, className: el.className, choose: false})
        });
        return React.DOM.div( {className: "goods__frame"},
            React.DOM.h1( {className: "goods__title"}, this.props.shopName ),
            React.DOM.div( {className: "goods__wrap"}, goodsArrayDOM ),
        );
    },
}); 