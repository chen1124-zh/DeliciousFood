<template>
	<view class="content">
		<view :style="{'height':navigation.height+'px',
						'paddingTop': navigation.top + 'px',
						'paddingBottom':'10rpx',
						'backgroundColor':'#0D92FF',
						'color':'#fff',
						'position':'sticky',
						'top':'0',
						'z-index':'101'}" >
			<view :style="{'height':navigation.height+'px'}" class="topNavigation">
				<view class="address">
					街道
				</view>
				<view style="text-align: center;">
					美食天下
				</view>
			</view>
		</view>
		<view class="search">
			<view class="search_box">
				<view class=".search_icon">
					<image src="../../static/search_icon.png" mode=""></image>
				</view>
				<view class="">
					水煮牛肉
				</view>
			</view>
		</view>
		
		<view class="Carousel">
			<swiper class="swiper" :indicator-dots="true" 
					:autoplay="true"
					:circular = 'true'
					:interval="2000"
					:duration="500"
					indicator-color='#fff'
					indicator-active-color='#0D92FF'>
				<swiper-item>
					<view style="width: auto;height: 240rpx;background-color: #007AFF;">A</view>
				</swiper-item>
				<swiper-item>
					<view style="width: auto;height: 240rpx;background-color: #3F536E;">B</view>
				</swiper-item>
				<swiper-item>
					<view style="width: auto;height: 240rpx;background-color: #4CD964;">C</view>
				</swiper-item>
			</swiper>
		</view>
		
		
		<view class="Merit">
			<view class="Merit_item">
				<view class="Merit_icon">
					
				</view>
				<view class="Merit_name">
					团餐
				</view>
			</view>
			
			<view class="Merit_item">
				<view class="Merit_icon">
					
				</view>
				<view class="Merit_name">
					拼餐
				</view>
			</view>
			
			<view class="Merit_item">
				<view class="Merit_icon">
					
				</view>
				<view class="Merit_name">
					贵宾
				</view>
			</view>
		</view>
		
		<view class="screen_box">
			<view class="screen_left">
				<view class="select_item" style="font-weight: 800;color: #000;">
					午餐
				</view>
				<view class="select_item" 
					@click="selectItem(0)" 
					:style="{'color': userSelect.time == 0?'#9CCCFE':'#999'}">
					综艺排序
				</view>
				<view class="select_item" 
					@click="selectItem(1)" 
					:style="{'color': userSelect.time == 1?'#9CCCFE':'#999'}">
					距离
				</view>
				<view class="select_item" 
					@click="selectItem(2)" 
					:style="{'color': userSelect.time == 2?'#9CCCFE':'#999'}">
					销量
				</view>
			</view>
			<view class="screen">
				筛选
			</view>
		</view>
		<view class="setMeal_box">
			<view class="setMeal_item"
				:style="{'color': userSelect.setMeal == 0?'#9CCCFE':'#999'}">
				行政套餐
			</view>
			<view class="setMeal_item"
				:style="{'color': userSelect.setMeal == 1?'#9CCCFE':'#999'}">
				自选套餐
			</view>
			<view class="setMeal_item"
				:style="{'color': userSelect.setMeal == 2?'#9CCCFE':'#999'}">
				会务套餐
			</view>
		</view>
		
		<view class="label_box">
			<view class="label_item">
				香辣川味
			</view>
			<view class="label_item">
				清淡粤菜
			</view>
			<view class="label_item">
				精致甜品
			</view>
			<view class="label_item">
				水果配送
			</view>
		</view>
		<view class="good_all_box">
			<view class="good_item_box">
				<view class="googImgBox">
					
				</view>
				<view class="good_item_describe">
					<view class="good_name_mueu">
						<view class="good_name">
							111111
						</view>
						<view class="good_mueu">
							...
						</view>
					</view>
					
					<view class="good_describe">
						<view class="good_score">
							1
						</view>
						<view class="good_sale">
							2
						</view>
					</view>
					
					<view class="good_performance">
						<view class="good_start_price">
							1
						</view>
						<view class="good_distance_time">
							1
						</view>
					</view>
					
					<view class="good_describe_label_box">
						<view class="good_item_describe_label">
							配送
						</view>
						<view class="good_item_describe_label">
							配送
						</view>
						<view class="good_item_describe_label">
							配送
						</view>
						<view class="good_item_describe_label">
							配送
						</view>
					</view>
					<view class="good_taste_label_box">
						<view class="good_item_taste_label_box">
							香辣
						</view>
						<view class="good_item_taste_label_box">
							香辣
						</view>
						<view class="good_item_taste_label_box">
							香辣
						</view>
						<view class="good_reserve">
							预定
						</view>
							
					</view>
					
					
					
				</view>
			</view>
				
			
			<view class="good_item_box">
				<view class="googImgBox">
					
				</view>
				<view class="good_item_describe">
					<view class="good_name_mueu">
						<view class="good_name">
							111111
						</view>
						<view class="good_mueu">
							...
						</view>
					</view>
					
					<view class="good_describe">
						<view class="good_score">
							1
						</view>
						<view class="good_sale">
							2
						</view>
					</view>
					
					<view class="good_performance">
						<view class="good_start_price">
							1
						</view>
						<view class="good_distance_time">
							1
						</view>
					</view>
					
					<view class="good_describe_label_box">
						<view class="good_item_describe_label">
							配送
						</view>
						<view class="good_item_describe_label">
							配送
						</view>
						<view class="good_item_describe_label">
							配送
						</view>
						<view class="good_item_describe_label">
							配送
						</view>
					</view>
					<view class="good_taste_label_box">
						<view class="good_item_taste_label_box">
							香辣
						</view>
						<view class="good_item_taste_label_box">
							香辣
						</view>
						<view class="good_item_taste_label_box">
							香辣
						</view>
						<view class="good_reserve">
							预定
						</view>
							
					</view>
					
					
					
				</view>
			</view>
			
			
			
		</view>
		
		<view class="member_box">
			<view class="title">
				会员专区
			</view>
			
			<view class="bac_img">
				<view class="bac_title">
					品质午餐
				</view>
				<view class="food_box">
					<view class="food_item">
						<view class="food_img">
							
						</view>
						<view class="food_describe">
							<view class="food_name">
								菜品名称
							</view>
							<view class="distance">
								<view class="">
									30分钟
								</view>
								<view class="">
									1.4km
								</view>
								<view class="">
									起送13
								</view>
							</view>
							<view class="price">
								56
							</view>
							<view class="shop_box">
								<view class="shop">
									<view class="shop_logo">
										logo
									</view>
									<view class="shop_name">
										店铺名称
									</view>
								</view>
								<view class="evaluate">
									4.8
								</view>
							</view>
						</view>
					</view>
					
					<view class="food_item">
						<view class="food_img">
							
						</view>
						<view class="food_describe">
							<view class="food_name">
								菜品名称
							</view>
							<view class="distance">
								<view class="">
									30分钟
								</view>
								<view class="">
									1.4km
								</view>
								<view class="">
									起送13
								</view>
							</view>
							<view class="price">
								56
							</view>
							<view class="shop_box">
								<view class="shop">
									<view class="shop_logo">
										logo
									</view>
									<view class="shop_name">
										店铺名称
									</view>
								</view>
								<view class="evaluate">
									4.8
								</view>
							</view>
						</view>
					</view>
					
				</view>
			</view>
		
			<view class="bac_img">
					<view class="bac_title">
						品质午餐
					</view>
					<view class="food_box">
						<view class="food_item">
							<view class="food_img">
								
							</view>
							<view class="food_describe">
								<view class="food_name">
									菜品名称
								</view>
								<view class="distance">
									<view class="">
										30分钟
									</view>
									<view class="">
										1.4km
									</view>
									<view class="">
										起送13
									</view>
								</view>
								<view class="price">
									56
								</view>
								<view class="shop_box">
									<view class="shop">
										<view class="shop_logo">
											logo
										</view>
										<view class="shop_name">
											店铺名称
										</view>
									</view>
									<view class="evaluate">
										4.8
									</view>
								</view>
							</view>
						</view>
						
						<view class="food_item">
							<view class="food_img">
								
							</view>
							<view class="food_describe">
								<view class="food_name">
									菜品名称
								</view>
								<view class="distance">
									<view class="">
										30分钟
									</view>
									<view class="">
										1.4km
									</view>
									<view class="">
										起送13
									</view>
								</view>
								<view class="price">
									56
								</view>
								<view class="shop_box">
									<view class="shop">
										<view class="shop_logo">
											logo
										</view>
										<view class="shop_name">
											店铺名称
										</view>
									</view>
									<view class="evaluate">
										4.8
									</view>
								</view>
							</view>
						</view>
						
					</view>
				</view>
			
		
		</view>
		
		
		<view class="select_box">
			<view class="setMeal_box">
				<view class="setMeal_item">
					附近商家
				</view>
				<view class="setMeal_item">
					新品推荐
				</view>
			</view>
			<view class="screen_box">
				<view class="screen_left">
					
					<view class="select_item">
						综艺排序
					</view>
					<view class="select_item">
						距离
					</view>
					<view class="select_item">
						销量
					</view>
				</view>
				<view class="screen">
					筛选
				</view>
			</view>
			
			<view class="label_box">
				<view class="label_item">
					香辣川味
				</view>
				<view class="label_item">
					清淡粤菜
				</view>
				<view class="label_item">
					精致甜品
				</view>
				<view class="label_item">
					水果配送
				</view>
			</view>
		
			<view class="good_all_box">
				<view class="goodBox">
					
				
					<view class="good_item_box">
						<view class="googImgBox">
							
						</view>
						<view class="good_item_describe">
							<view class="good_name_mueu">
								<view class="good_name">
									111111
								</view>
								<view class="good_mueu">
									...
								</view>
							</view>
							
							<view class="good_describe">
								<view class="good_score">
									1
								</view>
								<view class="good_sale">
									2
								</view>
							</view>
							
							<view class="good_performance">
								<view class="good_start_price">
									1
								</view>
								<view class="good_distance_time">
									1
								</view>
							</view>
							
							<view class="good_describe_label_box">
								<view class="good_item_describe_label">
									配送
								</view>
								<view class="good_item_describe_label">
									配送
								</view>
								<view class="good_item_describe_label">
									配送
								</view>
								<view class="good_item_describe_label">
									配送
								</view>
							</view>
							<view class="good_taste_label_box">
								<view class="good_item_taste_label_box">
									香辣
								</view>
								<view class="good_item_taste_label_box">
									香辣
								</view>
								<view class="good_item_taste_label_box">
									香辣
								</view>
								<view class="good_reserve">
									预定
								</view>
									
							</view>
							
							
							
						</view>
					</view>
					<view class="good_mune_box">
						<view class="good_item_mune_box">
							
							<view class="good_mune_img">
								
							</view>
							<view class="good_mune_name">
								菜品
							</view>
							<view class="good_mune_price">
								56
							</view>
						</view>
						<view class="good_item_mune_box">
							
							<view class="good_mune_img">
								
							</view>
							<view class="good_mune_name">
								菜品
							</view>
							<view class="good_mune_price">
								56
							</view>
						</view>
						<view class="good_item_mune_box">
							
							<view class="good_mune_img">
								
							</view>
							<view class="good_mune_name">
								菜品
							</view>
							<view class="good_mune_price">
								56
							</view>
						</view>
					</view>	
				</view>
				
				<view class="goodBox">
					
				
					<view class="good_item_box">
						<view class="googImgBox">
							
						</view>
						<view class="good_item_describe">
							<view class="good_name_mueu">
								<view class="good_name">
									111111
								</view>
								<view class="good_mueu">
									...
								</view>
							</view>
							
							<view class="good_describe">
								<view class="good_score">
									1
								</view>
								<view class="good_sale">
									2
								</view>
							</view>
							
							<view class="good_performance">
								<view class="good_start_price">
									1
								</view>
								<view class="good_distance_time">
									1
								</view>
							</view>
							
							<view class="good_describe_label_box">
								<view class="good_item_describe_label">
									配送
								</view>
								<view class="good_item_describe_label">
									配送
								</view>
								<view class="good_item_describe_label">
									配送
								</view>
								<view class="good_item_describe_label">
									配送
								</view>
							</view>
							<view class="good_taste_label_box">
								<view class="good_item_taste_label_box">
									香辣
								</view>
								<view class="good_item_taste_label_box">
									香辣
								</view>
								<view class="good_item_taste_label_box">
									香辣
								</view>
								<view class="good_reserve">
									预定
								</view>
									
							</view>
							
							
							
						</view>
					</view>
					<view class="good_mune_box">
						<view class="good_item_mune_box">
							
							<view class="good_mune_img">
								
							</view>
							<view class="good_mune_name">
								菜品
							</view>
							<view class="good_mune_price">
								56
							</view>
						</view>
						<view class="good_item_mune_box">
							
							<view class="good_mune_img">
								
							</view>
							<view class="good_mune_name">
								菜品
							</view>
							<view class="good_mune_price">
								56
							</view>
						</view>
						<view class="good_item_mune_box">
							
							<view class="good_mune_img">
								
							</view>
							<view class="good_mune_name">
								菜品
							</view>
							<view class="good_mune_price">
								56
							</view>
						</view>
					</view>	
				</view>
				
				
				
				
			</view>
		
		</view>
		
		
		<view class="ShoppingCart">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navigation:'',
				userSelect:{
					time:0,
					setMeal:0
				},
			}
		},
		onLoad() {

		},
		created() {
			this.navigation = this.$store.getters.getNavigation
		},
		methods: {
			selectItem(index){
				this.userSelect.time = index
			}
		}
	}
</script>

<style scoped>
	
	.content{
		background:#F8F8F8;
	}
	.address{
		position: absolute;
		left: 25rpx;
		font-size: 28rpx;
	}
	.topNavigation{
		/* padding: 0 20rpx; */
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
	}
	
	.swiper{
		height: 240rpx;
	}
	
	.search{
		background-color: #0D92FF;
		padding: 12rpx 25rpx;
	}
	
	.search_box{
		display: flex;
		align-items: center;
		width: 100%;
		color: #ccc;
		/* height: 0; */
		background-color: #fff;
		border-radius: 38rpx;
	}
	
	.search_icon{
		width: 40rpx;
		height: 40rpx;
		padding: 20rpx;
	}
	
	.search_icon image{
		width: 40rpx;
		height: 40rpx;
	}
	
	.Carousel{
		padding: 10rpx 25rpx;
		padding-bottom: 20rpx;
		background-color: #0D92FF;
	}
	
	.Merit{
		display: flex;
		justify-content: space-around;
		margin-bottom: 20rpx;
	}
	
	.Merit_icon{
		width: 90rpx;
		height: 90rpx;
		margin: 20rpx;
		background-color: #007AFF;
		border-radius: 50%;
	}
	
	.Merit_name{
		font-size: 24rpx;
		text-align: center;
		color: #8A8A8A;
	}
	
	.screen_box{
		margin: 0 10rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.screen_left{
		display: flex;
	}
	
	.select_item{
		color: #999;
		margin: 0 10rpx;
		font-size: 24rpx;
	}
	
	.setMeal_box{
		display: flex;
	}
	
	
	.setMeal_item{
		margin: 0 26rpx;
		font-size: 28rpx;
	}
	
	
	.label_box{
		display: flex;
	}
	
	.label_item{
		padding:14rpx 20rpx;
		margin: 0 20rpx;
		background: #F8F8F8;
		font-size: 24rpx;
		color: #333;
	}
	
	.good_all_box{
		margin-bottom: 30rpx;
	}
	
	.good_item_box{
		display: flex;
		margin: 20rpx;
	}
	
	.googImgBox{
		width: 170rpx;
		height: 170rpx;
		border-radius: 10rpx;
		background: #007AFF;
		margin-right: 20rpx;
	}
	.good_item_describe{
		flex: 1;
	}
	
	.good_name_mueu{
		display: flex;
		justify-content: space-between;
	}
	
	.good_name{
		font-size: 30rpx;
		color: #000;
	}
	.good_describe{
		display: flex;
		margin: 5rpx 0;
	}
	
	.good_score{
		margin-right: 20rpx;
		font-size: 28rpx;
	}
	
	.good_sale{
		font-size: 28rpx;
	}
	
	.good_start_price,.good_distance_time,.good_describe_label_box,.good_taste_label_box{
		font-size: 24rpx;
	}
	
	.good_performance{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	
	.good_describe_label_box{
		display: flex;
		
	}
	
	.good_item_describe_label{
		color: #E19D58;
		background: #FEF4E9;
		margin-right: 16rpx;
		padding: 2rpx 20rpx;
		border-radius: 1rpx;
	}
	
	.good_item_taste_label_box{
		color: #EEACAA;
		border: 1rpx solid #FCFCFC;
		margin-right: 16rpx;
		padding: 2rpx 20rpx;
		border-radius: 1rpx;
	}
	
	.good_taste_label_box{
		display: flex;
	}
	
	.good_reserve{
		padding: 10rpx;
		border: 1rpx solid #999;
	}
	
	
	
	.member_box{
		padding: 0 20rpx;
		
	}
	
	.ShoppingCart{
		position: fixed;
		bottom: 80rpx;
		right: 40rpx;
		width: 100rpx;
		height: 100rpx;
		background: #ccc;
		border-radius: 50%;
	}
	
	.bac_img{
		margin-bottom: 20rpx;
		padding-bottom: 30rpx;
		background: #4CD964;
		border-radius: 10rpx;
	}
	
	.bac_title{
		display: inline-block;
		padding:10rpx 52rpx;
		background: #F8621E;
		color: #fff;
		font-size: 24rpx; 
		margin-left: 22rpx;
		border-radius:  0 0 10rpx 10rpx;
		margin-bottom: 10rpx;
	}
	
	.food_box{
		display: flex;
		margin-left: 26rpx;
	}
	
	.food_item{
		border-radius: 10rpx;
		margin-right: 16rpx;
		overflow: hidden;
	}
	
	
	
	.food_img{
		width: 340rpx;
		height: 120rpx;
		background: #ccc;
	}
	
	.food_describe{
		background: #EAF6DE;
		padding: 10rpx;
	}
	
	.food_name{
		margin: 10rpx;
	}
	
	.price{
		margin: 10rpx;
	}
	
	.distance{
		display: flex;
		justify-content: space-between;
		margin: 10rpx;
	}
	
	.distance view{
		font-size: 24rpx;
	}
	
	.shop_box{
		display: flex;
		justify-content: space-between;
	}
	
	.shop{
		display: flex;
	}
	
	.good_mune_box{
		display: flex;
	}
	
	.good_item_mune_box{
		margin: 0 30rpx;
	}
	
	.good_mune_img{
		width: 170rpx;
		height: 170rpx;
		background: #007AFF;
		
	}
	
	.good_mune_price{
		font-size: 26rpx;
	}
	
	
	
</style>
