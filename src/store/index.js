import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productData: [
      {
        image:
          "https://www.sunrisemarian.com/mm5/graphics/00000001/Holy-Water-flask.png",
        title: "Holy Water",
        tag: 40,
        number: 0
      },
      {
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81DzcnQCcVL._AC_UL1500_.jpg",
        title: "Rosary",
        tag: 25,
        number: 0
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1617/0387/products/holy-communion-candle-2_1024x1024.jpg?v=1542078085",
        title: "Holy Candles",
        tag: 80,
        number: 0
      },
      {
        image:
          "https://ae01.alicdn.com/kf/HTB123b_pMoQMeJjy0Fpq6ATxpXa9/2019-Mens-100-T-Believer-Jesus-Christ-Faith-Born.jpg",
        title: "T shirt",
        tag: 250,
        number: 0
      },
      {
        image:
          "https://sc01.alicdn.com/kf/HTB1BcOjX6nuK1RkSmFPq6AuzFXaF/224518253/HTB1BcOjX6nuK1RkSmFPq6AuzFXaF.jpg",
        title: "Ring Jesus",
        tag: 50,
        number: 0
      },
      {
        image:
          "https://i5.walmartimages.com/asr/61a32982-4547-4812-941f-67021e46f859_1.ad6d1bf148b12c602de8242e8336d8dc.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        title: "Watch Jesus",
        tag: 190,
        number: 0
      },
      {
        image:
          "https://i0.wp.com/ae01.alicdn.com/kf/HTB1wasOPVXXXXaiaXXXq6xXFXXXt/Holy-Bible-CROSS-%E0%B8%88-%E0%B8%AA%E0%B8%A3-%E0%B8%AD%E0%B8%A2%E0%B8%84%E0%B8%AD%E0%B8%A5-%E0%B8%81%E0%B8%9B-%E0%B8%94%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3-%E0%B8%9A%E0%B8%9C-%E0%B8%AB%E0%B8%8D-%E0%B8%87%E0%B8%9C-%E0%B8%8A%E0%B8%B2%E0%B8%A2-316L-%E0%B8%AA%E0%B9%81%E0%B8%95%E0%B8%99%E0%B9%80%E0%B8%A5%E0%B8%AA%E0%B8%AA%E0%B8%A3-%E0%B8%AD%E0%B8%A2%E0%B8%84%E0%B8%AD%E0%B9%80%E0%B8%87-%E0%B8%99%E0%B8%97%E0%B8%AD%E0%B8%87%E0%B8%AA.jpg",
        title: "Cross Holy",
        tag: 30,
        number: 0
      },
      {
        image:
          "https://static1.koorong.com/images/p/18/kop/d/9323078030450_1362837@2x.jpg",
        title: "Cap Jesus",
        tag: 100,
        number: 0
      }
    ],
    product: [],
    totalprice: 0
  },
  getters: {
    sendData: state => {
      return state.productData;
    },
    sendShop: state => value => {
      state.product.push(value);
    },
    sendSelect: state => {
      return state.product;
    },
    sendTotal: state => {
      return state.totalprice;
    }
  },
  mutations: {
    sum(state) {
      state.totalprice = 0;
      for (let i = 0; i < state.product.length; i++) {
        state.totalprice = state.totalprice + state.product[i].Price;
      }
    },
    clear(state) {
      state.totalprice = 0;
      state.product = [];
    }
  },
  actions: {},
  modules: {}
});
