<template>
	<div id="Carts">
		<h3>购物车</h3>
			<div class="cart">
				<div class="cart-tit">
					<ul>
						<li>商品信息</li>
						<li>商品金额</li>
						<li>商品数量</li>
						<li>总金额</li>
						<li>编辑</li>
					</ul>
				</div>
				<ul>
					<li class="list" v-for="item in carList">	
						<div class="cart-list">
							<div class="cart-check">
								<a href="javascript:;" class="check-but" v-bind:class="{'check':item.checked}" @click="selectProduct(item)"></a>
							</div>
							<div class="cart-pic"><img :src="item.productImage" alt="" /></div>
							<div class="cart-title" v-text="item.productName"></div>
							<div class="cart-include">
								<dl>
									<dt>赠送:</dt>
									<dd v-for="part in item.parts" v-text="part.partsName"></dd>
								</dl>
							</div>
							<div class="item-price">{{item.productPrice | formatMoney}}</div>
							<div class="item-quenity">
								<div class="quentity">
									<a href="javascript:;" @click="changeMoney(item,-1)">-</a>
									<input v-model="item.productQuentity" type="text" value="0" disabled=""/>
									<a href="javascript:;" v-on:click="changeMoney(item,1)">+</a>
								</div>
							</div>
							<div class="total">{{item.productPrice*item.productQuentity | formatMoney}}</div>
							<div><a href="javascript:;" class="delect" @click="delConfirm(item)">X</a></div>
						</div>
					</li>
				</ul>
			</div>
			<div class="confirm" v-bind:class="{'md-show':delFlag}">
				<h3>确定删除？</h3>
				<button @click="delProduct()">yes</button>
				<button @click="delFlag=false">no</button>
			</div>
			<div class="choose-all">
				<a href="javascript:;" class="check-but" :class="{'check':checkAllFlag}" @click="checkAll"></a>
			</div>
			<div class="itemtotal">{{totalMoney | formatMoney}}</div>
			<div><a href="">结算</a></div>
	</div>
</template>
<script>
	import { mapGetters,mapActions} from 'vuex'
	export default {
		data (){
			return{
				totalMoney:0,
			}
		},
		filters:{//formatMoney 为过滤器名称  
		formatMoney:function(value){
			return "￥"+value;
		}		
	},
		computed:mapGetters([
			'carList','delFlag','checkAllFlag'
		]),
		methods:{
			changeMoney:function(product,way){
			if(way>0){
				product.productQuentity++;
			}else{
				product.productQuentity--;
				if(product.productQuentity<1){
					product.productQuentity=1;
				}
			}
			this.caleMoney()
		},
		selectProduct: function(item){
			if(typeof item.checked == "undefined"){
				//Vue.set(item,'checked',true);//全局注册
				this.$set(item,'checked',true);//局部注册
			}else{
				item.checked = !item.checked;
			}
			this.caleMoney()
		},
		checkAll : function(){
				this.checkAllFlag= !this.checkAllFlag;
				var _this=this;
				this.carList.forEach(function(item,index) {
						if(typeof item.checked == "undefined"){
							//Vue.set(item,'checked',true);//全局注册
							_this.$set(item,'checked',_this.checkAllFlag);//局部注册
						}else{
							item.checked = _this.checkAllFlag;
						}
				})
				this.caleMoney()
		},
		caleMoney : function(){
			var _this= this;
			this.totalMoney = 0;
			this.carList.forEach(function(item,index) {
				if(item.checked){
					_this.totalMoney += item.productPrice*item.productQuentity
					
				}
			});
		},
		delConfirm: function(item){
			this.delFlag=true;
			this.carProduct = item;
		},
		delProduct: function(){
			var index=this.productList.indexOf(this.carProduct);
			this.productList.splice(index,1);
			this.delFlag=false;
		}
	}
}
</script>
<style>
		.cart-tit li{display: inline-block;}
	.list div{display: inline-block;vertical-align: top;}	
	.quentity input {width: 50px;}
	.check-but{display: inline-block;width: 15px;height: 15px;border-radius: 50%;border:1px #333 solid;}
	.check{background: #CC9900;}
	.confirm{display: none;padding: 20px;background: #000000;color: #fff;}
	.md-show{display: block;}
	.cart-pic img{width: 200px;height: 150px;}
	</style>