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
