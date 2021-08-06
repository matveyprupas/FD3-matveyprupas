let Filter = React.createClass({
    displayName: "Filter",

    propTypes: {
        string: React.PropTypes.array.isRequired
      },

    getInitialState: function() {
        return {string: this.props.string,
                sortText: "", // text for sort textarea
                reload: false,
                checkbox: false, 
                nonFilteredStr: "", };
    },

    textChanged: function(EO) { 
        let sortText = EO ? EO.target.value : this.state.sortText; 
        // console.log(sortText);
        this.setState( {sortText: sortText}, this.arrayOfStringChanging(sortText) );
        // console.log(this.state);
    },

    arrayOfStringChanging: function(findStr) {
        let strArr = this.props.string.slice();
        // console.log("attrobute:", findStr);
        // console.log("state:", this.state.sortText);

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
            this.textChanged();
            this.setState( {checkbox: false}, );
        }
        // this.textChanged(EO);
    },

    textareaChanged: function(EO) {
        // console.log(EO.type, EO.target.value);
        this.setState( {string: EO.target.value.split("\n")} );

    },

    reset: function() {
        this.setState( {string: this.props.string, checkbox: false, sortText: ""}, this.render );
        
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