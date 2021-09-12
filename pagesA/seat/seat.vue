<template>
	<view>
		<view class="peopleBox">
			<view class="peopleItem"
			:style="{'background': peopleIndex==index?'#FF8D00':'#fff','color': peopleIndex==index? '#fff':'#FF8D00'}"
			v-for="(item,index) in peopleNum" :key='index' @click="peopleIndex = index">
				{{item}}
			</view>
		</view>
		
		
		<view class="seat_type" style="color: ;">
			<view :class="seat_type==0?'select_seat_type':''" @click="seat_type = 0">
				大厅
			</view>
			<view :class="seat_type==1?'select_seat_type':''" @click="seat_type = 1">
				包厢
			</view>
			<view :class="seat_type==2?'select_seat_type':''" @click="seat_type = 2">
				卡座
			</view>
		</view>
		
		<view class="seatList">
			<view class="seatItem" 
			:style="{'top': item.left+'%','left':item.left+'%','color':item.color}"
			 v-for="(item,index) in seatList" :key='index' @click="xz(index)">
				{{item.seatName}}
			</view>
			<view class="">
				<image :src="seatList[0].seatImg" mode="widthFix" style="width: 100%;"></image>
			</view>
			
		</view>
		
		<view class="tips">
			<view class="">
				起订人数：6人
			</view>
			<view class="">
				介绍：xxxx
			</view>
			<view class="">
				注：超时自动取消
			</view>
			
		</view>
		
		<view class="qr" @click="qr">
			确认
		</view>
	</view>
</template>

<script>
	import Api from '@/common/http.js'
	export default {
		data() {
			return {
				seat_type:0,
				peopleNum:[
					'1人','2人','3人','4人','5人','6人','7人','8人','9人','10人',
					'11人','12人','13人','14人','15人','16人','17人','18人','19人','20人',
					'21人','22人','23人','24人','25人','26人','27人','28人','29人','30人'
				],
				peopleIndex:-1,
				storeId:'',
				seatList:[]
			};
		},
		onLoad(op) {
			this.storeId = op.storeId
			this.getSeatList()
		},
		methods:{
			qr(){
				
				this.seatList.map((item,index)=>{
					if(item.select == 1){
						item.r = this.peopleIndex+1
						uni.$emit('seatData', item)
						uni.navigateBack({
							delta:1
						})
					}
				})
				
				
				
			},
			xz(i){
				
				this.seatList.map((item,index)=>{
					if(index == i){
						item.select = 1
						item.color = '#E06C75'
						this.$forceUpdate()
					}else{
						item.select = 0
						item.color = "#000"
					}
				})
			},
			getSeatList(){
				var data = {
					id:'',
					storeId:this.storeId
				}
				Api.getSeatList(data).then(res => {
					console.log(res)
					this.seatList = res.data.data
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

<style lang="scss" scoped>
	
	.peopleBox{
		display: flex;
		overflow-x: auto;
		margin: 30rpx;
		margin-bottom: 50rpx;
		.peopleItem{
			padding: 10rpx 50rpx;
			border: 1rpx solid #FF8D00;
			color: #FF8D00;
			margin-right: 20rpx;
			white-space: nowrap;
			border-radius: 50rpx;
		}
	}
	
	.seat_type{
		display: flex;
		margin: 20rpx;
		view{
			font-size: 35rpx;
			margin-right: 20rpx;
		}
		
		.select_seat_type{
			font-weight: bold;
		}
		
	}
	
	.tips{
		margin: 20rpx;
		font-size: 28rpx;
		color: #999;
	}
	
	.seatList{
		position: relative;
		.seatItem{
			padding: 10rpx;
			background: rgba($color: #000000, $alpha: .3);
			position:absolute;
		}
	}
	
	.qr{
		width: 90%;
		background: #007AFF;
		color: #fff;
		padding: 20rpx 0;
		text-align: center;
		margin: 0 auto;
	}
	
</style>
