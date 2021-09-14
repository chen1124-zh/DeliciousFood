<template>
	<view class="content">

		<view :style="{'height':navigation.height+'px',
						'paddingTop': navigation.top + 'px',
						'paddingBottom':'10rpx',
						'backgroundColor':'#0D92FF',
						'color':'#fff'}">
			<view :style="{'height':navigation.height+'px'}" class="topNavigation">
				<view class="address" @click="region">
					{{pcaList[4].list[pcaList[4].qselectIndex].name || diq}}
				</view>
				<view style="text-align: center;">
					美食天下
				</view>
			</view>
		</view>

		<view class="search" @click="Tsearch">
			<view class="search_box">
				<view class="search_icon">
					<image src="../../static/search_icon.png" mode=""></image>
				</view>
				<view class="">
					水煮牛肉
				</view>
			</view>
		</view>

		<view class="Carousel">
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :circular='true' :interval="2000"
				:duration="500" indicator-color='#fff' indicator-active-color='#0D92FF'>
				<swiper-item v-for="(item,index) in lbList" :key='index'>
					<image :src="item.images" mode=""></image>
				</swiper-item>
			</swiper>
		</view>

		<view class="back">
			<view class="Merit">
				<view class="Merit_item">
					<view class="Merit_icon" style="background: #F84819;">
						团餐
					</view>
					<view class="Merit_name">
						团餐
					</view>
				</view>

				<view class="Merit_item">
					<view class="Merit_icon" style="background: #FFA443;">
						拼餐
					</view>
					<view class="Merit_name">
						拼餐
					</view>

				</view>

				<view class="Merit_item">
					<view class="Merit_icon" style="background: #9540CE;">
						贵宾
					</view>
					<view class="Merit_name">
						贵宾
					</view>
				</view>
			</view>




			<view class="screen_box">


				<view class="screen_left">
					<view class="select_item">
						<picker mode="selector" :range="cs" range-key="name" @change="cschange">
							<view style="font-weight: bold;font-size: 30rpx;color: #000000;">{{cs[csIndex].name}}
								<uni-icons type="arrowdown"></uni-icons>
							</view>
						</picker>
					</view>
					<view class="select_item">
						<!-- <picker mode="selector" :range="sorte" range-key="name" @change="sortchange">
							
						</picker> -->
						<view style="font-weight: bold;font-size: 30rpx;color: #007AFF;" @click="xian = !xian">
							{{sorte[storeIndex].name}}
							<uni-icons type="arrowdown" color='#007AFF'></uni-icons>
						</view>

					</view>


					<view class="select_item">
						距离
					</view>
					<view class="select_item">
						销量
					</view>
				</view>
				<view class="screen" @click="sai =! sai">
					筛选 <image src="../../static/screen.png" mode="" style="width: 28rpx;height: 28rpx;"></image>
				</view>

				<view class="drop_down_box" v-if="xian">
					<view class="choice" v-for="(item,index) in sorte" :key='index'
						@click="storeIndex = index,xian = false">
						<view :class="index == storeIndex?'choiceselect':''">
							{{item.name}}
						</view>
						<view class="" v-if="index == storeIndex">
							<uni-icons type="checkmarkempty" size="20" color='#007AFF'></uni-icons>
						</view>
					</view>
				</view>
				
				
				<view class="drop_down_box temp_deop" v-if="sai">
					<view class="title">
						商家服务
					</view>
					<view class="tc_box">
						<view class="tc_item">
							<view class="tc_img">
								<image src="../../static/camera.png" mode="widthFix"></image>
							</view>
							<view class="tc_str">
								商家配送
							</view>
						</view>
						<view class="tc_item">
							<view class="tc_img">
								<image src="../../static/store.png" mode="widthFix"></image>
							</view>
							<view class="tc_str">
								支持配送
							</view>
						</view>
						<view class="tc_item">
							<view class="tc_img">
								<image src="../../static/home.png" mode="widthFix"></image>
							</view>
							<view class="tc_str">
								到店自取
							</view>
						</view>
						<view class="tc_item">
							<view class="tc_img">
								<image src="../../static/Be.png" mode="widthFix"></image>
							</view>
							<view class="tc_str">
								贵宾服务
							</view>	
						</view>
					</view>
				
					<view class="title">
						人均价格
					</view>
					
					<view class="slide">
						
						
						<u-slider v-model="value">
							<!-- 这里外面需要多一层view，否则".badge-button"样式可能不生效 -->
							<view class="">
								<view class="badge-button">
									{{value}}
								</view>
							</view>
						</u-slider>
						
						
						
					</view>
					
					<view class="button">
						<view class="close" @click="saiClick(1)">
							清空
						</view>
						<view class="ss" @click="ssClick(1)">
							搜索
						</view>
					</view>
				</view>
			</view>


			<view class="setMeal_box">
				<view class="setMeal_item" :style="{'color': selectPackage == 1?'#028EFF':'#999'}"
					@click="selectPackage = 1">
					行政套餐
				</view>
				<view class="setMeal_item" :style="{'color': selectPackage == 2?'#028EFF':'#999'}"
					@click="selectPackage = 2">
					自选套餐
				</view>
				<view class="setMeal_item" :style="{'color': selectPackage == 3?'#028EFF':'#999'}"
					@click="selectPackage = 3">
					会务套餐
				</view>
			</view>

			<view class="label_box">
				<view class="label_item" v-for="(item,index) in foodLabel" :key='index'>
					{{item.menuName}}
				</view>
			</view>
			<view class="shop_all_box">
				<view class="shop_item_box" v-for="(item,index) in storeList" :key='index' @click="rGoog(index)">
					<view class="shopImgBox">
						<image :src="item.storeLogo" mode="" style="width: 100%;height: 100%;"></image>
					</view>
					<view class="shop_item_describe">
						<view class="shop_name_mueu">
							<view class="shop_name">
								{{item.storeName}}
							</view>
							<view class="shop_mueu">
								...
							</view>
						</view>

						<view class="shop_describe">
							<view class="shop_score">
								<uni-icons type="star-filled" color='#F8621E' size='20'></uni-icons>4.8
							</view>
							<view class="shop_sale">
								月售{{item.saleNum||0}}
							</view>
						</view>

						<view class="shop_performance" v-if="item.startingPrice">
							<view class="shop_start_price">
								起送{{item.startingPrice}}
							</view>
							<view class="good_distance_time" v-if="item.deliveryTime && item.deliveryRange">
								{{item.deliveryTime}}分钟 {{item.deliveryRange}}km
							</view>
						</view>

						<view class="shop_describe_label_box">

							<view class="shop_item_describe_label" v-for="(foods,i) in item.appraiseManagerList"
								:key='i'>
								{{foods}}
							</view>
						</view>
						<view class="shop_taste_label_box">
							<view style="flex: 1;overflow-x: auto;display: flex;margin-right: 10rpx;">
								<view class="shop_item_taste_label_box" v-for="(food,i) in item.foodSortList" :key='i'>
									{{food}}
								</view>
							</view>

							<view class="shop_reserve">
								支持预订
							</view>

						</view>



					</view>
				</view>

			</view>

		</view>

		<view class="back">
			<view class="member_box" v-if="false">
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
					<view class="setMeal_item" :style="{'color': selectNearby == 1?'#028EFF':'#999'}"
						@click="selectNearby = 1">
						附近商家
					</view>
					<view class="setMeal_item" :style="{'color': selectNearby == 2?'#028EFF':'#999'}"
						@click="selectNearby = 2">
						新品推荐
					</view>

				</view>
				<view class="screen_box">
					<view class="screen_left">

						<view class="select_item">
							<!-- <picker mode="selector" :range="sorte" range-key="name" @change="sortchange">
								
							</picker> -->
							<view style="font-weight: bold;font-size: 30rpx;color: #007AFF;" @click="xians = !xians">
								{{sortes[storeIndexs].name}}
								<uni-icons type="arrowdown" color='#007AFF'></uni-icons>
							</view>
						
						</view>
						<view class="select_item">
							距离
						</view>
						<view class="select_item">
							销量
						</view>
					</view>
					<view class="screen" @click="sais =! sais">
						筛选 <image src="../../static/screen.png" mode="" style="width: 28rpx;height: 28rpx;"></image>
					</view>
					
					<view class="drop_down_box" v-if="xians">
						<view class="choice" v-for="(item,index) in sortes" :key='index'
							@click="storeIndexs = index,xians = false">
							<view :class="index == storeIndexs?'choiceselect':''">
								{{item.name}}
							</view>
							<view class="" v-if="index == storeIndexs">
								<uni-icons type="checkmarkempty" size="20" color='#007AFF'></uni-icons>
							</view>
						</view>
					</view>
					
					
					<view class="drop_down_box temp_deop" v-if="sais">
						<view class="title">
							商家服务
						</view>
						<view class="tc_box">
							<view class="tc_item">
								<view class="tc_img">
									<image src="../../static/camera.png" mode="widthFix"></image>
								</view>
								<view class="tc_str">
									商家配送
								</view>
							</view>
							<view class="tc_item">
								<view class="tc_img">
									<image src="../../static/store.png" mode="widthFix"></image>
								</view>
								<view class="tc_str">
									支持配送
								</view>
							</view>
							<view class="tc_item">
								<view class="tc_img">
									<image src="../../static/home.png" mode="widthFix"></image>
								</view>
								<view class="tc_str">
									到店自取
								</view>
							</view>
							<view class="tc_item">
								<view class="tc_img">
									<image src="../../static/Be.png" mode="widthFix"></image>
								</view>
								<view class="tc_str">
									贵宾服务
								</view>	
							</view>
						</view>
					
						<view class="title">
							人均价格
						</view>
						
						<view class="slide">
							
							
							<u-slider v-model="values">
								<!-- 这里外面需要多一层view，否则".badge-button"样式可能不生效 -->
								<view class="">
									<view class="badge-button">
										{{values}}
									</view>
								</view>
							</u-slider>
							
							
							
						</view>
						
						<view class="button">
							<view class="close" @click="saiClick(2)">
								清空
							</view>
							<view class="ss" @click="ssClick(2)">
								搜索
							</view>
						</view>
					</view>
				</view>

				<view class="label_box">
					<view class="label_item" v-for="(item,index) in foodLabel" :key='index'>
						{{item.menuName}}
					</view>
				</view>

				<view class="shop_all_box" v-if="selectNearby == 1">
					<view class="shopBox" v-for="(item,index) in nearbyStoreList" :key='index' @click="rGoog(index)">
						<view class="shop_item_box">
							<view class="shopImgBox">
								<image :src="item.storeLogo" mode="" style="width: 100%;height: 100%;"></image>
							</view>
							<view class="shop_item_describe">
								<view class="shop_name_mueu">
									<view class="shop_name">
										{{item.storeName}}
									</view>
									<view class="shop_mueu">
										...
									</view>
								</view>

								<view class="shop_describe">
									<view class="shop_score">
										<uni-icons type="star-filled" color='#F8621E' size='20'></uni-icons>4.8
									</view>
									<view class="shop_sale">
										月售{{item.saleNum||0}}
									</view>
								</view>

								<view class="shop_performance" v-if="item.startingPrice">
									<view class="shop_start_price">
										起送{{item.startingPrice}}
									</view>
									<view class="good_distance_time" v-if="item.deliveryTime && item.deliveryRange">
										{{item.deliveryTime}}分钟 {{item.deliveryRange}}km
									</view>
								</view>

								<view class="shop_describe_label_box">

									<view class="shop_item_describe_label" v-for="(foods,i) in item.appraiseManagerList"
										:key='i'>
										{{foods}}
									</view>
								</view>
								<view class="shop_taste_label_box">
									<view style="flex: 1;overflow-x: auto;display: flex;margin-right: 10rpx;">
										<view class="shop_item_taste_label_box" v-for="(food,i) in item.foodSortList"
											:key='i'>
											{{food}}
										</view>
									</view>
									<view class="shop_reserve">
										支持预订
									</view>
								</view>
							</view>
						</view>
						<view class="good_mune_box">
							<view class="good_item_mune_box" v-for="(items,indexs) in item.goodLists" v-if="indexs <3"
								:key='indexs'>

								<view class="good_mune_img">
									<image :src="items.productImg||'../../static/tempGood2.png'" mode=""></image>
								</view>
								<view class="good_mune_name">
									{{items.productName}}
								</view>
								<view class="good_mune_price">
									￥{{items.productPrice}}
								</view>
							</view>

						</view>
					</view>


				</view>
				
				

			</view>

		</view>
		
		<view class="goodList" v-if="selectNearby == 2">
			<view class="goodItem" v-for="(item,index) in goodList" :key='index' @click="rGoogs(index)">
				<view class="good_img">
					<image src="../../static/tempGood2.png" mode=""></image>
				</view>
				<view class="goodRight">
					<view class="goodName">
						{{item.productName}}
						
					</view>
					<view class="goodTime">
						<text>{{item.deliveryTime||0}}分钟</text> <text>{{item.deliveryRange||0}}km</text> <text>起送{{item.startingPrice||0}}</text>
					</view>
					<view class="good_p">
						￥{{item.p||0}}
					</view>
					<view class="good_shop">
						<view class="good_shop_img">
							<image :src="item.storeLogo" mode=""></image>
						</view>
						<view class="good_shop_name">
							{{item.storeName||"店铺名称"}}
						</view>
						<view class="good_shop_P">
							<uni-icons type="star-filled" color='#F8621E' size='18'></uni-icons>4.8
						</view>
					</view>
				</view>
			</view>
		</view>


		<view class="ShoppingCart" @click="jumpCat">
			<image src="../../static/car.png" style="width: 50%;height: 50%;" mode=""></image>
		</view>

		<popup-layer ref="popupRef" :direction="'top'" v-model="boolShow">
			<view class="zidingyiBox">
				<view class="title">
					选择站点
				</view>
				<view class="close" @click="close">
					关闭
				</view>

				<view class="siteBox">
					<view class="siteItem" v-for="(item,index) in siteList" :key="index"
						v-if="item.siteName&&item.address" @click="switchSite(index)">
						<view class="">
							<text class="siteName">{{item.siteName}}</text><text
								class="distances">距离{{item.distance||"0m"}}</text>
						</view>
						<view class="siteAddress">
							{{item.address}}
						</view>
					</view>
				</view>
			</view>
		</popup-layer>
	</view>
</template>

<script>
	import popupLayer from '@/components/popup-layer/popup-layer.vue';
	import Api from '@/common/http.js'
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import QQMapWX from '@/components/qqmap-wx-jssdk/qqmap-wx-jssdk.js'
	export default {
		data() {
			return {
				siteList: [],
				siteIndex: 0,
				xian: false,
				selectNearby: 1,
				foodLabel: [],
				selectPackage: 1,
				lbList: [],
				cs: [{
						name: '早茶',
						value: 'zc'
					},
					{
						name: '早餐',
						value: 'zcn'
					},
					{
						name: '午餐',
						value: 'wc'
					},
					{
						name: '下午茶',
						value: 'xwc'
					},
					{
						name: '晚餐',
						value: 'wcn'
					},
					{
						name: '夜宵',
						value: 'yx'
					}
				],
				csIndex: 0,
				sorte: [{
						name: '综合排序',
					},
					{
						name: '销量最高',
					},
					{
						name: '距离最近'
					},
					{
						name: '好评优先'
					},
					{
						name: '起送价最低'
					},
					{
						name: '配送最快'
					},
					{
						name: '人均从低到高'
					},
					{
						name: '人均从高到低'
					}
				],
				storeIndex: 0,
				storeList: [],
				nearbyStoreList: [],
				navigation: '',
				latitude: '',
				longitude: '',
				goodList:[],
				diq:'',
				pcaList: [],
				
				sortes: [{
						name: '综合排序',
					},
					{
						name: '销量最高',
					},
					{
						name: '距离最近'
					},
					{
						name: '好评优先'
					},
					{
						name: '起送价最低'
					},
					{
						name: '配送最快'
					},
					{
						name: '人均从低到高'
					},
					{
						name: '人均从高到低'
					}
				],
				storeIndexs: 0,
				xians:false,
				sai:false,
				sais:false,
				value: 30,
				values:30
			}
		},
		async onLoad() {
			await this.getLogLat()
			await this.getStore()
			await this.queryList()
			await this.getMenuTypeList()
			await this.getGoodList()

		},
		onShow() {

		},
		created() {
			this.navigation = this.$store.getters.getNavigation
		},
		components: {
			popupLayer
		},
		methods: {
			ssClick(type){
				if(type == 1){
					this.sai = false
				}else{
					this.sais = false
				}
			},
			saiClick(type){
				if(type == 1){
					this.sai = false
				}else{
					this.sais = false
				}
			},
			
			switchSite(index) {
				this.siteIndex = index;
				this.close()
			},
			jumpCat() {

				uni.navigateTo({
					url: '../../pagesA/shoppingCart/shoppingCart'
				})
			},
			// show() {
			// 	this.$refs.popupRef.show(); // 或者 boolShow = rue
			// },
			// close() {
			// 	this.$refs.popupRef.close() // 或者 boolShow = rue
			// },
			getDistance() {
				
				return

				this.siteList.map((item, index) => {
					uni.request({
						url: 'https://apis.map.qq.com/ws/distance/v1/matrix', //仅为示例，并非真实接口地址。
						method: 'GET',
						data: {
							mode: 'walking',
							from: this.latitude + ',' + this.longitude,
							to: item.latitude + ',' + item.longitude,
							key: '6HXBZ-NCJKU-OA7VM-2YK6B-BYNHJ-LAFLA' //获取key
						},
						success: (res) => {
							console.log(res)
							if (res.data.status == 0) {
								let hw = res.data.result.rows[0].elements[0].distance; //拿到距离(米)
								if (hw && hw !== -1) {
									if (hw < 1000) {
										hw = hw + 'm';
									}
									//转换成公里
									else {
										hw = (hw / 2 / 500).toFixed(2) + 'km'
									}
								} else {
									hw = "距离太近或请刷新重试"
								}
								item.distance = hw
							} else {
								item.distance = "0m"
							}

						}
					});


					console.log(item)
				})


			},
			getSiteList() {
				var data = {
					siteName: ''
				}

				Api.getSite(data).then(res => {
					this.siteList = res.data.data
					// console.log()
					this.siteList.map(item => {
						item.distance = "0m"
					})
					this.getDistance()

				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			getMenuTypeList() {
				this.foodLabel = []
				var data = {
					id: '',
					productId: ''
				}
				Api.getMenuTypeList(data).then(res => {
					res.data.data.map((item) => {
						if (item.type == 1) {
							this.foodLabel.push(item)
						}
					})
					// this.lbList = res.data.list
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			queryList() {
				var data = {
					id: '',
					pageNo: 1,
					pageSize: 10,
					name: '',
					location: ''
				}
				Api.queryList(data).then(res => {
					// console.log('res',res);
					this.lbList = res.data.list
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			cschange(e) {
				this.csIndex = e.detail.value;
			},
			sortchange(e) {
				this.storeIndex = e.detail.value;
			},
			Tsearch() {
				uni.navigateTo({
					url: "../../pagesA/search/search"
				})
			},
			getLogLat() {
				const tMap = new QQMapWX({
					key: '6HXBZ-NCJKU-OA7VM-2YK6B-BYNHJ-LAFLA' //开发者密钥
				});
				uni.getLocation({
					type: 'wgs84',
					geocode: true, //设置该参数为true可直接获取经纬度及城市信息
					success: (res) => {

						this.latitude = res.latitude
						this.longitude = res.longitude

						
						tMap.reverseGeocoder({
							location: {
								latitude: this.latitude,
								longitude: this.longitude
							},
							success:(res) => {
								
								
								this.diq = res.result.address_component.street
								
								
								
								//保存缓存
								// uni.setStorage({
								// 	key:'local',
								// 	data:res.result.address,
								// 	success() {
								// 		console.log("用户地址信息已缓存")
								// 	}
								// })
							},
							fail: function(res) {
								uni.showToast({
									title: '定位失败',
									duration: 2000,
									icon: "none"
								})
								console.log(res);
							},
							complete: function(res) { //无论成功失败都会执行
								// wx.switchTab({
								// 	url: '../appointment/appointment'
								// })
							}
						})
						
					},
					fail: function() {
						uni.showToast({
							title: '获取地址失败，将导致部分功能不可用',
							icon: 'none'
						});
					}
				});
			},
			region(){
				uni.navigateTo({
					url:'../../pagesA/hometown/hometown?pcaList='+JSON.stringify(this.pcaList)
				})
			},
			getStore() {
				Api.getStoreList({}).then((res) => {
					this.storeList = res.data
						this.nearbyStoreList = res.data 
						this.storeList.map((item) => {
						item.foodSortList = []
						var foodLabelObj = JSON.parse(item.foodLabel)

						foodLabelObj.system.map((items) => {
							item.foodSortList.push(items.name)
						})

						foodLabelObj.custom.map((items) => {
							item.foodSortList.push(items)
						})

						item.appraiseManagerList = []
						var appraiseManagerObj = JSON.parse(item.appraiseManager)
						appraiseManagerObj.system.map((items) => {
							item.appraiseManagerList.push(items.name)
						})

						appraiseManagerObj.custom.map((items) => {
							item.appraiseManagerList.push(items)
						})


					})
					
				
					this.nearbyStoreList.map((item) => {
						item.foodSortList = []
						var foodLabelObj = JSON.parse(item.foodLabel)

						foodLabelObj.system.map((items) => {
							item.foodSortList.push(items.name)
						})

						foodLabelObj.custom.map((items) => {
							item.foodSortList.push(items)
						})

						item.appraiseManagerList = []
						var appraiseManagerObj = JSON.parse(item.appraiseManager)
						appraiseManagerObj.system.map((items) => {
							item.appraiseManagerList.push(items.name)
						})

						appraiseManagerObj.custom.map((items) => {
							item.appraiseManagerList.push(items)
						})


						this.getnearbyStoreGoodList()


					})

				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});


			},
			rGoog(index) {
				uni.navigateTo({
					url: '../../pagesA/goodDetails/goodDetails?id=' + this.storeList[index].id
				})
			},
			rGoogs(index){
				uni.navigateTo({
					url: '../../pagesA/goodDetails/goodDetails?id=' + this.goodList[index].storeId
				})
			},
			async getnearbyStoreGoodList() {
				for (var i = 0; i < this.nearbyStoreList.length; i++) {

					var datas = {
						productSet: '',
						storeId: this.nearbyStoreList[i].id
					}
					await Api.getProductList(datas).then(ress => {
						this.nearbyStoreList[i].goodLists = ress.data.data
					}).catch(err => {
						uni.showToast({
							title: err.msg,
							icon: 'none'
						})
					});
				}
				this.$forceUpdate()
			},
			getGoodList(){
				Api.getProductList({}).then(ress => {
					this.goodList = ress.data.data
					
					this.goodList.map(item=>{
						var d = JSON.parse(item.specification) 
						item.p = d[0].content[0].price
						
						
						Api.getStoreList({id:item.storeId}).then(res => {
							
							item.deliveryTime = res.data[0].deliveryTime
							item.deliveryRange = res.data[0].deliveryRange
							item.storeName = res.data[0].storeName
							item.storeLogo = res.data[0].storeLogo
							item.startingPrice = res.data[0].startingPrice
						}).catch(err => {
							uni.showToast({
								title: err.msg,
								icon: 'none'
							})
						});
						
						
						
						
						
					})
					// this.nearbyStoreList[i].goodLists = ress.data.data
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
	image {
		width: 100%;
		height: 100%;
	}

	.content {
		background: #F8F8F8;
	}

	.address {
		position: absolute;
		left: 25rpx;
		font-size: 28rpx;
		width: 112rpx;
		white-space: nowrap;
		overflow: hidden;
	}

	.topNavigation {
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
	}

	.swiper {
		height: 240rpx;
	}

	.search {
		background-color: #0D92FF;
		padding: 12rpx 25rpx;
	}

	.search_box {
		display: flex;
		align-items: center;
		width: 100%;
		color: #ccc;
		background-color: #fff;
		border-radius: 38rpx;
	}

	.search_icon {
		width: 40rpx;
		height: 40rpx;
		padding: 20rpx;
	}

	.Carousel {
		padding: 10rpx 25rpx;
		padding-bottom: 20rpx;
		background-color: #0D92FF;
	}

	.Merit {
		display: flex;
		justify-content: space-around;
		margin-bottom: 20rpx;
		background: #fff;
	}

	.Merit_icon {
		width: 90rpx;
		height: 90rpx;
		margin: 20rpx;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-size: 30rpx;
	}

	.Merit_name {
		font-size: 24rpx;
		text-align: center;
		color: #8A8A8A;
	}

	.screen_box {
		position: relative;
		margin: 0 10rpx;
		display: flex;
		justify-content: space-between;
		/* background: #fff; */
	}

	.screen_left {
		display: flex;
		align-items: center;
	}

	.screen {
		font-size: 28rpx;
		margin-right: 10rpx;
		color: #999;
	}

	.select_item {
		position: relative;
		margin: 0 10rpx;
		font-size: 24rpx;
		color: #999;
	}

	.setMeal_box {
		display: flex;
		margin: 10rpx;
	}


	.setMeal_item {
		margin: 0 26rpx;
		font-size: 28rpx;
		font-weight: bold;
	}


	.label_box {
		display: flex;
		overflow-x: auto;
	}

	.label_item {
		padding: 14rpx 20rpx;
		margin: 0 20rpx;
		background: #F8F8F8;
		font-size: 24rpx;
		border-radius: 10rpx;
		color: #333;
		white-space: nowrap;
	}

	.shop_all_box {
		margin-bottom: 30rpx;
	}

	.shop_item_box {
		display: flex;
		margin: 20rpx;
	}

	.shopImgBox {
		width: 170rpx;
		height: 170rpx;
		border-radius: 10rpx;
		background: #007AFF;
		margin-right: 20rpx;
		overflow: hidden;
	}

	.shop_item_describe {
		flex: 1;
		overflow: hidden;
	}

	.shop_name_mueu {
		display: flex;
		justify-content: space-between;
	}

	.shop_name {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: bold;
		font-size: 30rpx;
		color: #000;
	}

	.shop_describe {
		display: flex;
		margin: 5rpx 0;
		align-items: center;
	}

	.shop_score {
		margin-right: 20rpx;
		font-size: 28rpx;
		color: #F8621E;
		display: flex;
		align-items: center;
	}

	.shop_sale {
		font-size: 28rpx;
		color: #999;
	}

	.shop_start_price,
	.good_distance_time,
	.shop_describe_label_box,
	.shop_taste_label_box {
		font-size: 24rpx;
		color: #999;
		margin-top: 10rpx;
	}

	.shop_performance {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.shop_describe_label_box {
		display: flex;
		overflow-x: auto;
	}

	.shop_item_describe_label {
		color: #E19D58;
		background: #FEF4E9;
		margin-right: 16rpx;
		padding: 2rpx 20rpx;
		border-radius: 1rpx;
		white-space: nowrap;
	}

	.shop_item_taste_label_box {
		color: #EEACAA;
		border: 1rpx solid #FCFCFC;
		margin-right: 16rpx;
		padding: 2rpx 20rpx;
		border-radius: 1rpx;
		white-space: nowrap;
	}

	.shop_taste_label_box {
		display: flex;
		margin-top: 10rpx;
		overflow: hidden;
	}

	.shop_reserve {
		padding: 5rpx 10rpx;
		border: 1rpx solid #999;
	}



	.member_box {
		padding: 0 20rpx;

	}

	.ShoppingCart {
		position: fixed;
		bottom: 80rpx;
		right: 40rpx;
		width: 100rpx;
		height: 100rpx;
		background: #fff;
		box-shadow: 0 0 10rpx #ccc;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.bac_img {
		margin-bottom: 20rpx;
		padding-bottom: 30rpx;
		background: #4CD964;
		border-radius: 10rpx;
	}

	.bac_title {
		display: inline-block;
		padding: 10rpx 52rpx;
		background: #F8621E;
		color: #fff;
		font-size: 24rpx;
		margin-left: 22rpx;
		border-radius: 0 0 10rpx 10rpx;
		margin-bottom: 10rpx;
	}

	.food_box {
		display: flex;
		margin-left: 26rpx;
	}

	.food_item {
		border-radius: 10rpx;
		margin-right: 16rpx;
		overflow: hidden;
	}



	.food_img {
		width: 340rpx;
		height: 120rpx;
		background: #ccc;
	}

	.food_describe {
		background: #EAF6DE;
		padding: 10rpx;
	}

	.food_name {
		margin: 10rpx;
	}

	.price {
		margin: 10rpx;
	}

	.distance {
		display: flex;
		justify-content: space-between;
		margin: 10rpx;
	}

	.distance view {
		font-size: 24rpx;
	}

	.shop_box {
		display: flex;
		justify-content: space-between;
	}

	.shop {
		display: flex;
	}

	.good_mune_box {
		display: flex;
	}

	.good_item_mune_box {
		margin: 0 30rpx;
	}

	.good_mune_img {
		width: 170rpx;
		height: 170rpx;
		background: #007AFF;

	}

	.good_mune_name {
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.good_mune_price {
		font-size: 26rpx;
		color: red;
	}

	.back {
		background: #fff;
		padding: 20rpx 0;
		margin-bottom: 30rpx;
	}

	.drop_down_box {
		position: absolute;
		z-index: 101;
		top: 100%;
		/* left: -130rpx; */
		background: #fff;
		width: 100vw;
		
		.choice {
			display: flex;
			justify-content: space-between;
			font-size: 30rpx;
			padding: 30rpx;
			color: #999;
		}
		
		.choiceselect {
			color: #007AFF;
			font-weight: bold;
		}
	}
	
	.temp_deop{
		.title{
			margin: 20rpx;
			font-size: 24rpx;
			color: #999;
		}
		
		.tc_box{
			margin: 20rpx;
			display: flex;
			flex-wrap: wrap;
			.tc_item{
				margin:0 20rpx 20rpx 0;
				display: flex;
				padding: 20rpx;
				background: #F8F8F8;
				
				.tc_img{
					width: 40rpx;
				}
				
				.tc_str{
					font-size: 30rpx;
				}
			}
		}
	
		.slide{
			width: 90%;
			margin: 50rpx 20rpx;
		}
		
		.button{
			display: flex;
			view{
				flex: 1;
				text-align: center;
				padding: 20rpx;
			}
			
			.close{
				background: #fff;
				color: #333;
			}
			
			.ss{
				background: #2697F4;
				color: #fff;
			}
		}
	}

	


	.zidingyiBox {
		position: relative;
		padding: 20rpx;
		border-radius: 20rpx 20rpx 0 0;

		.title {
			font-size: 36rpx;
			font-weight: bold;
			color: #999;
			text-align: center;

		}

		.close {
			position: absolute;
			top: 20rpx;
			right: 20rpx;
			color: #ccc;
		}
	}

	.siteBox {
		height: 900rpx;
		overflow-y: auto;

		.siteItem {
			padding: 30rpx;
			border-bottom: 1rpx solid #f0f0f0;

			.siteName {
				font-size: 34rpx;
			}

			.distances {
				background: #EBF5FF;
				color: #6CA1F4;
				padding: 0 10rpx;
				font-size: 28rpx;
				border-radius: 10rpx;
			}

			.siteAddress {
				font-size: 28rpx;
				color: #999;
			}
		}
	}
	
	
	
	.goodList{
		
		.goodItem{
			display: flex;
			padding: 20rpx;
			margin-bottom: 20rpx;
			background: #fff;
			.good_img{
				width: 150rpx;
				height: 150rpx;
			}
			.goodRight{
				margin-left: 10rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.goodName{
					font-size: 30rpx;
					font-weight: bold;
				}
				.goodTime{
					text{
						font-size: 24rpx;
						color: #999;
						margin-right: 10rpx;
					}
				}
				.good_p{
					font-size: 28rpx;
					color: red;
				}
				.good_shop{
					display: flex;
					align-items: center;
					.good_shop_img{
						overflow: hidden;
						width: 50rpx;
						height: 50rpx;
						border-radius: 50%;
					}
					.good_shop_name{
						font-size: 24rpx;
					}
					.good_shop_P{
						margin-left: 50rpx;
						color: #F8621E;
						font-size: 24rpx;
					}
				}
			}
		}
		
	}
	
	
	
	.wrap {
		padding: 30rpx;
	}
	
	.badge-button {
		padding: 4rpx 6rpx;
		background-color: #007AFF;
		color: #fff;
		border-radius: 10rpx;
		font-size: 22rpx;
		line-height: 1;
	}
	
	
</style>
