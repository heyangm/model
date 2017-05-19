<template>
	<div id="addrContainer">
		<div class="addr-list-wrap">
			<div class="addr-list">
				<ul>
					<li v-for="(item,index) in filterAddr" :class="{'check':index==currentIndex}" @click="currentIndex=index">
						<dl>
							<dt>{{item.userName}}</dt>
							<dd class="address">{{item.streetName}}</dd>
							<dd class="tel">{{item.tel}}</dd>
						</dl>
						<div class="edit">编辑</div>
						<div class="del">删除</div>
						<div class="set-addr" v-if="!item.isDefault"><a href="javascript:;" @click="setDefault(item.addressId)">设为默认</a></div>
						<div class="default" v-if="item.isDefault">默认地址</div>
					</li>
					<li class="addr-new">
						<div class="add-addr">
							<p>添加新地址</p>
						</div>
					</li>
				</ul>
				<a href="javascript:;" @click="addAll">more</a>
			</div>
		</div>		
	</div>
</template>
<style>
		.addr-list li{display:inline-block;margin: 0 10px;padding: 10px;border: 1px #999 solid;vertical-align: middle;}
		.addr-list li div{display: inline-block;margin: 10px;}
		.addr-list .check{border-color: #D84C29;}
	</style>
	<script>
		export default{
			data:{
		addrList:[],
		limitNub:3,
		currentIndex:0,
	},
	computed:{
		filterAddr: function(){
			return this.addrList.slice(0,this.limitNub)//js中数组方法 取3个
		}
	},
	mounted:function(){
		this.$nextTick(function(){
			this.addrView();
			})
	},
	methods:{
		addrView: function(){
			var _this= this;
			this.$http.get("data/address.json").then(function(res){
				_this.addrList = res.body.result;
			})
		},
		addAll: function(){
			this.limitNub = this.addrList.length
		},
		setDefault: function (addressId) {
			this.addrList.forEach(function (address,index) {
				if(address.addressId == addressId){
					address.isDefault = true;
				}else{
					address.isDefault = false
				}
			});
		}
	}
		}
	</script>
