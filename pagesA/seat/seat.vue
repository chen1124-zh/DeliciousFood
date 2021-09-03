<template>
	<view>
		<view class="peopleBox">
			<view class="peopleItem"
			:style="{'background': peopleIndex==index?'#FF8D00':'#fff','color': peopleIndex==index? '#fff':'#FF8D00'}"
			v-for="(item,index) in peopleNum" :key='index' @click="peopleIndex = index">
				{{item}}
			</view>
		</view>
		
		
		<view class="seat_type">
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
		
		<view class="">
			<view class="">
				
			</view>
			<view class="">
				<image src="" mode="widthFix"></image>
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				seat_type:0,
				peopleNum:[
					'1人','2人','3人','4人','5人','6人','7人','8人','9人','10人',
					'11人','12人','13人','14人','15人','16人','17人','18人','19人','20人',
					'21人','22人','23人','24人','25人','26人','27人','28人','29人','30人'
				],
				peopleIndex:-1
			};
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
</style>
