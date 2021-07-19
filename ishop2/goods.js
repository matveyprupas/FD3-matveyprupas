let shopName = "IShop";
// let goodsArray = [
//     {name: 'iPhone', code: 1, cost: 749, imageLink: "https://www.ideal.lt/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone12_white.png", left: 5}, 
//     {name: 'iPad', code: 2, cost: 949, imageLink: "https://www.ideal.lt/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/i/p/ipad_pro_12_9-in_wi-fi_space_gray_2-up_screen__usen_5.jpg", left: 16}, 
//     {name: 'MacBook', code: 3, cost: 1449, imageLink: "https://www.ideal.lt/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/m/b/mbp13_m1_space_3.png", left: 958}, 
//     {name: 'iMac', code: 4, cost: 1949, imageLink: "https://www.ideal.lt/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/i/m/imac21non_3.png", left: 666}, 
//     {name: 'iWatch', code: 5, cost: 449, imageLink: "https://www.ideal.lt/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_watch_series_6_gps_40mm_gold_aluminum_pink_sand_sport_band_34r_screen__usen.png", left: 222}, 
//     {name: 'iCat', code: 6, cost: "666", imageLink: "https://petsi.net/images/catbreed/kanadskiy-sfinks.jpg", left: 0}, 
    
// ];

let Goods = React.createClass({

    displatName: "Goods",

    getInitialState: function() {
        return {isChoosed: false};
    },

    chooseGood: function(e) {
        if (e.target.className === "goods__wrap" || e.target.className === "good_del") return;

        document.querySelectorAll(".choosed__good").forEach( (el) => el.classList.remove("choosed__good") );

        if (e.target.className !== "good__description") {
            e.target.parentNode.classList.add("choosed__good");
            // console.log(e.target.parentNode.className);

        } else {
            e.target.classList.add("choosed__good");
            // console.log(e.target.className);
        }
    },

    removeGood: function(e) {
        if (e.target.parentNode.className.includes("choosed__good")) {
            e.target.parentNode.remove();
        }
    },

    render: function() {

        // console.log(this.props);

        let goodsArrayDOM = [];
        for (let key in this.props) {
            let goodDOM = React.DOM.div ({key: this.props[key].code, className: "good__description"},
                React.DOM.img({className: "good_img", src: this.props[key].imageLink}, ),
                React.DOM.span({className: "good_name"}, this.props[key].name),
                React.DOM.span({className: "good_cost"}, this.props[key].cost + "$"),
                React.DOM.span({className: "good_left"}, this.props[key].left + "pcs"),
                React.DOM.input({className: "good_del", type: "button", value: "Delete", onClick: this.removeGood})
            );
            goodsArrayDOM.push(goodDOM);
        }

        return React.DOM.div ( {key: goodsArrayDOM.code, className: "goods__wrap", onClick: this.chooseGood}, goodsArrayDOM );
    },
}); 