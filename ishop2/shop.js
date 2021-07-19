let shopName2 = "IShop2";

let Shop2 = React.createClass({

    displayName: "Shop2",

    render: function() {
        return React.DOM.div( {className: "goods__frame"},
            React.DOM.h1( {className: "goods__title"}, shopName2 ),
            React.createElement(Goods, this.props ),
            );
    },
}); 