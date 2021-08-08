let Shop2 = React.createClass({

    displayName: "Shop2",

    propTypes: {
        shopName: React.PropTypes.string.isRequired,
        goodsArr: React.PropTypes.array.isRequired,
      },

    getInitialState: function() {
        let state = {};
        for (let key in this.props.goodsArr) {
            state[`good_${this.props.goodsArr[key].code}`] = this.props.goodsArr[key];
            state[`good_${this.props.goodsArr[key].code}`].show = true;
            state[`good_${this.props.goodsArr[key].code}`].choose = false;
            state[`good_${this.props.goodsArr[key].code}`].className = "good__description";
        };
        return state;
    },

    chooseGood: function(obj) {
        let keyGood = `good_${obj.code}`;
        
        for (let key in this.state) {
            this.setState({[key]: {...this.state[key], className: "good__description"}});
        }
        
        if (obj.choose) {
            this.setState({[keyGood]: {...this.state[keyGood], className: "good__description choosed__good"}});
        } else {
            this.setState({[keyGood]: {...this.state[keyGood], className: "good__description"}});
        }
    },

    removeGood: function(obj) {
        let keyGood = `good_${obj.code}`;
        
        this.setState({[keyGood]: {...this.state[keyGood], show: false}});
    },

    render: function() {
        let goodsArrayDOM = [];

        for(let key in this.state) {
            if(!this.state[key].show) continue;
            goodsArrayDOM.push( React.createElement(Goods, {...this.state[key], cbChooseGood: this.chooseGood, cbRemoveGood: this.removeGood, key: this.state[key].code}) );
        }

        return React.DOM.div( {className: "goods__frame"},
            React.DOM.h1( {className: "goods__title"}, this.props.shopName ),
            React.DOM.div( {className: "goods__wrap"}, goodsArrayDOM ),
        );
    },
}); 