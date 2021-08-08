// let goodsArr = [
//     {name: 'iPhone', code: 1, cost: 749, imageLink: "https://www.ideal.lt/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone12_white.png", left: 5}, 
//     {name: 'iPad', code: 2, cost: 949, imageLink: "https://www.ideal.lt/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/i/p/ipad_pro_12_9-in_wi-fi_space_gray_2-up_screen__usen_5.jpg", left: 16}, 
//     {name: 'MacBook', code: 3, cost: 1449, imageLink: "https://www.ideal.lt/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/m/b/mbp13_m1_space_3.png", left: 958}, 
//     {name: 'iMac', code: 4, cost: 1949, imageLink: "https://www.ideal.lt/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/i/m/imac21non_3.png", left: 666}, 
//     {name: 'iWatch', code: 5, cost: 449, imageLink: "https://www.ideal.lt/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_watch_series_6_gps_40mm_gold_aluminum_pink_sand_sport_band_34r_screen__usen.png", left: 222}, 
//     {name: 'iCat', code: 6, cost: "666", imageLink: "https://petsi.net/images/catbreed/kanadskiy-sfinks.jpg", left: 0}, 
//   ];

let Goods = React.createClass({

    displatName: "Goods",

    propTypes: {
        className: React.PropTypes.string.isRequired,
        code: React.PropTypes.number.isRequired,
        choose: React.PropTypes.bool.isRequired,
        show: React.PropTypes.bool.isRequired,
        cbChooseGood: React.PropTypes.func.isRequired,
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
        if(e.target.className === "good_del") return;
        
        this.state.choose = !this.state.choose;
        // console.log("goods: ");
        // console.log(this.state);
        this.props.cbChooseGood(this.state);

    },

    render: function() {
        // console.log(this.props);

        return React.DOM.div ({key: this.props.code, className: this.props.className, onClick: this.chooseGood},
            React.DOM.img({className: "good_img", src: this.props.imageLink}, ),
            React.DOM.span({className: "good_name"}, this.props.name),
            React.DOM.span({className: "good_cost"}, this.props.cost + "$"),
            React.DOM.span({className: "good_left"}, this.props.left + "pcs"),
            React.DOM.input({className: "good_del", type: "button", value: "Delete", onClick: this.removeGood})
        );
    },
}); 