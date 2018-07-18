import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		count:0,
		name :'菠菜',
	},
	getters:{
		mergeName: state => {
			return '我是第'+state.count+'个'+state.name
		}
	},
	mutations:{
		add:(state) => {
			state.count++	
		},
		reduce: state=> state.count--
	},
	actions:{
		addAction (context){
			context.commit('increment');
		},
		// 参数解构
		reduceAction ({commit}){
			setTimeout(()=>{
				commit('reduce');
			},1000)
		}
	}
})

export default store;