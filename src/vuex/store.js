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
		checkAllFlag:false,
		delFlag:false,
		addrList:[],
		limitNub:3,
		currentIndex:0,
	},
	getters : {
		productList : state => state.productList ,
		currentMsg : state => state.currentMsg,
		carList : state => state.carList,
		cartNub : state => state.cartNub,
		checkAllFlag : state => state.checkAllFlag,
		delFlag : state => state.delFlag,
		
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
		currentList : function(state,msg){//获取当前点击了产品信息
			state.currentMsg = msg
		},
		computeCartnub: function(state){
			state.cartNub =0;//每次计算前清零 *
			state.carList.forEach(function(item,index) {//计算购物车数量
				state.cartNub += item.productQuentity;
				return state.cartNub
			});
		},
		addCart : function(state,msg){
			var index=state.carList.indexOf(msg);//判断该产品是否已存在于购物车列表里
			if(index<0){			
				state.carList.push(msg);//添加到购物车列表
				msg.productQuentity +=1;//且数量加一
			}else{
				state.carList[index].productQuentity +=1;//数量加一
			}
		},
	}
	
})
