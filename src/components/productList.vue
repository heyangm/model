<template>
	<div id="product">
		<ul>
			<li v-for='item in productList' @click="getDetail(item)">
				<router-link to="/productDetail">
				<img :src='item.productImage'  alt="" />
				<div>
					<h4>{{item.productName}}</h4>
					<p>{{item.productDescrip}}</p>
				</div>
				</router-link>
			</li>
		</ul>
		
	</div>
</template>
<style>
	#product li div{display: inline-block;vertical-align: middle;}
	#product li img{width: 115px;height: 75px;vertical-align: middle;}
</style>
<script>
	import { mapGetters,mapActions} from 'vuex'
	export default {
		data (){
			return{
				
			}
		},
		computed:mapGetters([
			'productList','currentMsg'
		]),
		mounted:function(){
		this.$nextTick(function(){
			this.productMsg();
			})
		},
		methods:{
			productMsg : function(){				
				this.$store.dispatch('productMsg') 
			},
			getDetail : function(item){
				this.$store.state.currentMsg = item;
				var index=this.productList.indexOf(this.currentMsg);
				
			},
		}
	}
</script>