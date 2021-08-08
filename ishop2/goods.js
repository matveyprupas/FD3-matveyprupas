let Goods = React.createClass({

    displatName: "Goods",

    propTypes: {
        className: React.PropTypes.string.isRequired,
        code: React.PropTypes.number.isRequired,
        choose: React.PropTypes.bool.isRequired,
        show: React.PropTypes.bool.isRequired,
        cbChooseGood: React.PropTypes.func.isRequired,        cbRemoveGood: React.PropTypes.func.isRequired,
        left: React.PropTypes.number.isRequired,
        imageLink: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        cost: React.PropTypes.number.isRequired, // ошибка вылазит. не могу понять почему
    },

    getInitialState: function() {
        return {
            code: this.props.code,
            choose: this.props.choose,
            show: this.props.show,
        };
    },

    chooseGood: function(e) {
        if(e.target.className === "good_del") return; // такая работа с дом допустима?

        this.setState({choose: !this.state.choose}, ()=>this.props.cbChooseGood(this.state));
    },

    removeGood: function(e) {
        this.setState({show: !this.state.show}, ()=>{
            if(this.state.choose) this.props.cbRemoveGood(this.state);
        });
    },

    render: function() {
        return React.DOM.div ({key: this.props.code, className: this.props.className, onClick: this.chooseGood},
            React.DOM.img({className: "good_img", src: this.props.imageLink}, ),
            React.DOM.span({className: "good_name"}, this.props.name),
            React.DOM.span({className: "good_cost"}, this.props.cost + "$"),
            React.DOM.span({className: "good_left"}, this.props.left + "pcs"),
            React.DOM.input({className: "good_del", type: "button", value: "Delete", onClick: this.removeGood})
        );
    },
}); 