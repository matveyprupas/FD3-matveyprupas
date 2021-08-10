let Shop2 = React.createClass({

    displayName: "Shop2",

    propTypes: {
        shopName: React.PropTypes.string.isRequired,
        goodsArr: React.PropTypes.array.isRequired,
      },

    getInitialState: function() {
        return {
            goodsArr: this.props.goodsArr,
            choosedCode: 0,
        };
    },

    chooseGood: function(obj) {
        this.setState({choosedCode: obj.code});
    },

    removeGood: function(obj) {
        this.setState({goodsArr: this.state.goodsArr.filter(el => obj.code !== el.code)});
    },

    render: function() {
        let goodsArrayDOM = this.state.goodsArr.map(el => {
            return React.createElement(Goods, {...el, cbChooseGood: this.chooseGood, cbRemoveGood: this.removeGood, key: el.code, choose: this.state.choosedCode === el.code ? true : false})
        });
        return React.DOM.div( {className: "goods__frame"},
            React.DOM.h1( {className: "goods__title"}, this.props.shopName ),
            React.DOM.div( {className: "goods__wrap"}, goodsArrayDOM ),
        );
    },
}); 