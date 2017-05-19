import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state :{
		productList : [],
		carList : [],
		currentMsg :"",
		cartNub :0,
	},
	getters : {
		productList : state => state.productList ,
		currentMsg : state => state.currentMsg,
		carList : state => state.carList,
		
		cartNub : state => state.cartNub,
		
	},
	actions : {//actions中接受一个context对象  context对象具有跟store相同的属性和方法
		//封装一个ajax方法 使用axios
		productMsg (context){
			axios.get('./static/data.json').then(function (res){
				context.state.productList= res.data.result.list;
			})
		}
	},
	mutations: {
		currentList : function(state,msg){
			state.currentMsg = msg
		},
		computeCartnub: function(state){
			state.carList.forEach(function(item,index) {
				state.cartNub += item.productQuentity					
			});
		},
		addCart : function(state,msg){
			var index=state.carList.indexOf(msg);
			alert(index)
			if(index<0){			
				state.carList.push(msg)
			}else{
				state.carList[index].productQuentity +=1;
			}
		},
	}
	
})
