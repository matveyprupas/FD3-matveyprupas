let Filter = React.createClass({
    displayName: "Filter",

    propTypes: {
        string: React.PropTypes.array.isRequired
      },

    getInitialState: function() {
        return {string: this.props.string,
                sortText: "",
                reload: false,
                checkbox: false, 
                nonFilteredStr: "", };
    },

    textChanged: function(EO) {
        // console.log(EO.type); 
        this.setState( {sortText: EO.target.value}, this.arrayOfStringChanging(EO.target.value) );
        // console.log(this.state);
    },

    arrayOfStringChanging: function(findStr) {
        let strArr = this.props.string.slice();
        // console.log(strArr);

        this.setState( {string: strArr.filter( str => str.includes(findStr) )} );
    },

    sortActivated: function(EO) {
        // console.log(this.props.string);
        // let oldStrArr = this.state.string.slice();
        let strArr = this.state.string.slice();
        let sortStrArr = strArr.slice().sort();
        // console.log(strArr);

        if(EO.target.checked) {
            this.setState( {string: sortStrArr, checkbox: true} );
            // console.log(this.props.string);
        } else {
            this.setState( {string: strArr, checkbox: false} );
        }
        // this.textChanged(EO);
    },

    reset: function() {
        this.setState( {string: this.props.string, checkbox: false, sortText: ""}, this.render );
        
    },

    textareaChanged: function(EO) {
        // console.log(EO.type, EO.target.value);
        this.setState( {string: EO.target.value.split("\n")} );

    },

    render: function() {
        return React.DOM.div( {className:"filter__frame"},
            
            React.DOM.div( {className: "filter__row"},
                React.DOM.input( {className: "filter__checkbox", type: "checkbox", onChange: this.sortActivated, checked: this.state.checkbox}),
                React.DOM.input( {className: "filter__input", type: "text", onChange: this.textChanged, value: this.state.sortText}),
                React.DOM.input( {className: "filter__btn", type: "button", value: "Сброс", onClick: this.reset}),
            ),
            React.DOM.textarea( {className: "filter__textarea", value: this.state.string.join("\n"), onChange: this.textareaChanged, }),
        );
    },
});