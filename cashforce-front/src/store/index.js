import { createStore } from 'vuex'
import axios from "axios"
export default createStore({
    state: {
        orders: [],
    },
    getters: {
        getOrders: (state) => state.orders
    },
    actions: {
        async getList({ commit }) {
            console.log('test')
            try{
               const data = await axios.get("https://cashforce-back.fly.dev/orders")
               commit("SET_ORDERS", data.data);
            } catch(e){
                console.log(e)
            };
          }
    },
    mutations: {
        SET_ORDERS(state, orders) {
            state.orders = orders;  
        }
    }
})