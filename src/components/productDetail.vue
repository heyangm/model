<template>
	<div id="detail">
		<img :src='currentMsg.productImage' />
		<h4>{{currentMsg.productName}}</h4>
		<h5>介绍</h5>
		<p>{{currentMsg.productDescrip}}</p>
		<div class="carNub">
			<div class="car-number">
				<a href="javascript:;">购物车<span class="number">{{cartNub}}</span></a>
				<a href="javascript:;" @click ='addCart(currentMsg)'>加入购物车</a><a href="javascript:;">结算</a>
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