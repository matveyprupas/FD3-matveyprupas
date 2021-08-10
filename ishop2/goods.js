let Goods = React.createClass({

    displatName: "Goods",

    propTypes: {
        code: React.PropTypes.number.isRequired,
        choose: React.PropTypes.bool.isRequired,
        cbChooseGood: React.PropTypes.func.isRequired,        
        cbRemoveGood: React.PropTypes.func.isRequired,
        left: React.PropTypes.number.isRequired,
        imageLink: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        cost: React.PropTypes.number.isRequired, 
    },

    chooseGood: function() {
        this.props.cbChooseGood(this.props);
    },

    removeGood: function(e) {
        e.stopPropagation();
        this.props.cbRemoveGood(this.props);
    },

    render: function() {
        return React.DOM.div ({key: this.props.code, className: this.props.choose ? "good__description choosed__good" : "good__description", onClick: this.chooseGood},
            React.DOM.img({className: "good_img", src: this.props.imageLink}, ),
            React.DOM.span({className: "good_name"}, this.props.name),
            React.DOM.span({className: "good_cost"}, this.props.cost + "$"),
            React.DOM.span({className: "good_left"}, this.props.left + "pcs"),
            React.DOM.input({className: "good_del", type: "button", value: "Delete", onClick: this.removeGood})
        );
    },
}); 