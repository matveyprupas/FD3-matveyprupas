let Filter = React.createClass({
    displayName: "Filter",

    propTypes: {
        string: React.PropTypes.array.isRequired
      },

    getInitialState: function() {
        return {string: this.props.string,
                sortText: "", // text for sort textarea
                checkbox: false, // true - checkbox checked
                nonFilteredStr: "", };
    },

    filterTextUpdate: function(EO) {
        this.setState( {sortText: EO.target.value}, () => this.textareaUpdate(this.state.sortText, this.state.checkbox));
    },    
    
    checkboxUpdate: function() {
        this.setState( {checkbox: !this.state.checkbox}, () => this.textareaUpdate());
    },

    textareaUpdate: function() {
        let strArr = [...this.props.string].filter( str => str.includes(this.state.sortText) );

        if (this.state.checkbox) {
            strArr = strArr.sort();
        }

        this.setState( {string: strArr} );
        console.log(strArr, this.state.sortText, this.state.sortText, this.state.checkbox);
    },

    reset: function() {
        this.setState( {string: this.props.string, checkbox: false, sortText: ""}, this.render );
        
    },

    render: function() {
        return React.DOM.div( {className:"filter__frame"},
            
            React.DOM.div( {className: "filter__row"},
                React.DOM.input( {className: "filter__checkbox", type: "checkbox", onChange: this.checkboxUpdate, checked: this.state.checkbox}),
                React.DOM.input( {className: "filter__input", type: "text", onChange: this.filterTextUpdate, value: this.state.sortText}),
                React.DOM.input( {className: "filter__btn", type: "button", value: "Сброс", onClick: this.reset}),
            ),
            React.DOM.textarea( {className: "filter__textarea", value: this.state.string.join("\n"), }),
        );
    },
});