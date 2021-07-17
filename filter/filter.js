let Filter = React.createClass({
    displayName: "Filter",

    propTypes: {
        string: React.PropTypes.array.isRequired
      },

    render: function() {
        return React.DOM.div( {className:"filter__frame"},
            
            React.DOM.div( {className: "filter__row"},
                React.DOM.input( {className: "filter__checkbox", type: "checkbox"}),
                React.DOM.input( {className: "filter__input", type: "text"}),
                React.DOM.input( {className: "filter__btn", type: "button", value: "Сброс"}),
            ),
            React.DOM.textarea( {className: "filter__textarea", value: this.props.string.join("\n")}),            
        );
    },
});