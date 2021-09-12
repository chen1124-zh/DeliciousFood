<template>
	<view>
		<view class="addS" @click="addressT">
			+新增收货地址
		</view>
		
		<view class="">
			<view class="sItem" v-for="(item,index) in receivingList" :key='index'  @click="fan(item)">
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
						
						<view class="" style="flex: 1;text-align: right;" v-if="item.defaultAddress == 1">
							默认收货地址
						</view>
					</view>
				</view>
				<view class="edit" @click.stop="uRess(item.id)">
					编辑
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Api from '@/common/http.js'
	export default {
		data() {
			return {
				navigation:null,
				user:'',
				receivingList:[]
			}
		},
		async onShow() {
			var user = uni.getStorageSync('user');
			if(user == ''){
				
			}else{
				this.user = user
			}
			await this.getReceiving()
		},
		methods: {
			fan(item){
				uni.$emit('updateData', item)
				uni.navigateBack({
					delta:1
				})
			},
			uRess(id){
				uni.navigateTo({
					url:'../address/address?type=1?id='+id
				})
			},
			addressT(){
				uni.navigateTo({
					url:'../address/address'
				})
			},
			getReceiving(){
				Api.getAddressList({userId:this.user.id}).then(res => {
					this.receivingList = res.data
					
					
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
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
