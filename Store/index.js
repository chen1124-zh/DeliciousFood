import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		Navigation:{
			top:0,
			height:0
		},
		orderList:[]
	},
	getters:{
		getNavigation:(state)=>{
			return state.Navigation
		}
	},
    mutations: {
		setOrder(state,order){
			state.orderList.push(order)
		},
		setNavigation(state,NavigationData){
			
			state.Navigation = NavigationData
		}
	},
    actions: {}
})
export default store