<template>
	<div id="detail">
		<img :src='currentMsg.productImage' />
		<h4>{{currentMsg.productName}}</h4>
		<h5>介绍</h5>
		<p>{{currentMsg.productDescrip}}</p>
		<div class="carNub">
			<!--<div class="addToCart">
				<h4>{{currentMsg.productName}}</h4>
				<div>数量：<a href="javascript:;">+</a>
					<input type="text" value="1" v-model="" />
					<a href="javascript:;">-</a>
				</div>
			</div>-->
			<div class="car-number">
				<router-link to="/Cart">购物车<span class="number">{{cartNub}}</span></router-link>
				<a href="javascript:;" @click ='addCart(currentMsg)'>加入购物车</a><a href="javascript:;">立即购买</a>
			</div>			
		</div>
	</div>
</template>
<script>
	import { mapGetters,mapActions} from 'vuex'
	export default {
		data (){
			return{
				
			}
		},
		computed:mapGetters([
			'currentMsg',
			'carList','cartNub'
		]),
		
		methods:{
			addCart : function(currentMsg){
				this.$store.commit('addCart',currentMsg);
				this.$store.commit('computeCartnub');
				
			}
		}
	}
	
</script>
<style>
	.car-number a{margin-left: 15px;}
	#detail img{width: 200px;height: 150px;}
</style>