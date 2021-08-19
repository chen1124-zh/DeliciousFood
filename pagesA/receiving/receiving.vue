<template>
	<view>
		<view class="addS" @click="addressT">
			+新增收货地址
		</view>
		
		<view class="">
			<view class="sItem" v-for="(item,index) in receivingList" :key='index'>
				<view class="specific">
					<view class="">
						{{item.address}}
					</view>
					<view class="" style="display: flex;justify-content: space-between;margin-top:10rpx;">
						<view class="" style="display: flex;flex: 1;justify-content: space-between;">
							<view class="">
								{{item.nickName}}
							</view>
							<view class="">
								{{item.mobile}}
							</view>
						</view>
						
						<view class="" style="flex: 1;text-align: right;">
							默认收货地址
						</view>
					</view>
				</view>
				<view class="edit">
					编辑
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navigation:null,
				user:'',
				receivingList:[]
			}
		},
		onShow() {
			var user = uni.getStorageSync('user');
			if(user == ''){
				
			}else{
				this.user = user
			}
			this.getReceiving()
		},
		methods: {
			addressT(){
				uni.navigateTo({
					url:'../address/address'
				})
			},
			getReceiving(){
				uni.request({
					url: 'http://47.113.217.251:8080/address/getAddressList ', //仅为示例，并非真实接口地址。
					method: "POST",
					data: {
						userId:this.user.open
					},
					success: (resdata) => {
						this.receivingList = resdata.data.data
						console.log(resdata)
						
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	
	.addS{
		background: #FF1F6C;
		border-radius: 20rpx;
		padding: 10rpx;
		margin: 30rpx;
		font-size: 24rpx;
		text-align: center;
		color: #fff;
	}
	
	.sItem{
		margin: 20rpx;
		padding: 10rpx;
		border-radius: 20rpx;
		display: flex;
		font-size: 30rpx;
		box-shadow: 0 0 20rpx #ccc;
		align-items: center;
		color: #888;
	}
	
	.specific{
		flex: 1;
		font-size: 26rpx;
		margin:0 30rpx;
		
	}
	
	
	.edit{
		padding: 30rpx;
		border-left: 1rpx solid #f0f0f0;
	}
	
</style>
