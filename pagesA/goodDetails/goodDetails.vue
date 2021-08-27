<template>
	<view>
		<view :style="{'width':'100%','height':navigation.height+'px','paddingTop': navigation.top + 'px','paddingBottom':'10rpx','position': 'fixed','top':'0','background': 'rgba(0,0,0,.3)','z-index':'101'}" >
			<view :style="{'height':navigation.height+'px','width':navigation.left+'px'}" class="topNavigation">
				<view class="search" style="height: 100%;display: flex;align-items: center;justify-content: space-between;">
					<view class="" @click="fang" 
					style="width: 50rpx;height: 50rpx;border-radius: 50%;background: rgba(0,0,0,.5);display: flex;justify-content: center;align-items: center;">
						<uni-icons type="arrowleft" color="#fff"></uni-icons>
					</view>
					<view class="">
						<uni-icons type="star"></uni-icons>
						
					</view>
					<!-- <view class="">
						s
					</view> -->
				</view>
			</view>
		</view>
		
		<view class="">
			<view class="">
				<image :src="store.storeIntroductImg" mode="" style="width: 100%;"></image>
			</view>
			
			
		</view>
		
		
		<view class="box" style="position: relative;top: -100rpx;">
			<view class="shop_information">
				<view class="shop_img">
					<image :src="store.storeLogo" mode="" style="width: 100%;height: 100%;"></image>
				</view>
				
				<view class="shop_name">
					{{store.storeName}}
				</view>
			</view>
			
			<view class="evaluate">
				<view class="">
					4.8
				</view>
				
				<view class="">
					月售{{store.addOrderNum||0}}
				</view>
				
				<view class="">
					配送约{{store.deliveryTime}}分钟
				</view>
				<view class="">
					￥{{store.startingPrice}}
				</view>	
			</view>
			
			<view class="businessTime">
				营业时间{{store.businessTime}}
			</view>
			
			<view class="relation">
				<view class="">
					{{store.area}}{{store.address}}
				</view>
				<view class="">
					联系商家
				</view>
			</view>
			<view class="" style="display: flex;">
				<view class="optimization"  v-for="(item,index) in store.servuceConfigurationList" :key="index">
					{{item}}
				</view>
			</view>
			
			<view class="" style="display: flex;">
				<view class="lableBox" v-for="(item,index) in store.foodSortList" :key="index">
					{{item}}
				</view>
			</view>
			
			
			<view class="option">
				<view class="" style="display: flex;">
					<view :class="branch==1?'branch_select':''" @click="branch = 1" style="margin: 20rpx;">
						点餐
					</view>
					<view :class="branch==2?'branch_select':''" @click="branch = 2"  style="margin: 20rpx;">
						评价
					</view>
					<view :class="branch==3?'branch_select':''" @click="branch = 3"  style="margin: 20rpx;">
						商家
					</view>
				</view>
				
				
				<view class="" style="margin: 20rpx;color: #0293FF;" @click="weeks">
					一周菜谱
				</view>
			</view>
			
			<view class="time" v-if="branch == 1">
				<view class="times">
					<picker mode="selector" :range="cs" range-key="name" @change="cschange">
						<view>{{cs[csIndex].name}}</view>
					</picker>
				</view>
				<view class="week">
					
					<view :class="week==1?'weekSelect':''" @click="week=1;">
						周一
					</view>
					<view :class="week==2?'weekSelect':''" @click="week=2;">
						周二
					</view>
					<view :class="week==3?'weekSelect':''" @click="week=3;">
						周三
					</view>
					<view :class="week==4?'weekSelect':''" @click="week=4;">
						周四
					</view>
					<view :class="week==5?'weekSelect':''" @click="week=5;">
						周五
					</view>
					<view :class="week==6?'weekSelect':''" @click="week=6;getGoodData()">
						周六
					</view>
					<view :class="week==0?'weekSelect':''" @click="week=0;getGoodData()">
						周日
					</view>
				</view>
			</view>
			
			<view class="business_box" v-if="branch == 3">
				<view class="business_describe">
					本店
				</view>
				
				<view class="describe_img_box">
					<view class="describe_img" v-for="(item,index) in store.storeIntroductImgList" :key="index">
						<image :src="item" mode="" style="width: 100%;height: 100%;"></image>
					</view>
				</view>
				
				<view class="about" @click="food">
					食品安全
	 			</view>
				<view class="about">
					配送服务：商家配送
				</view>
				<view class="about">
					配送时间：9:00-22:00
				</view>
				<view class="about">
					共1家分店
				</view>
				
				<view class="">
					举报商家
				</view>
			</view>
			
			
			<view class="good_box" style="margin-bottom: 100rpx;" v-if="branch == 1">
				<view class="good_left">
					
					<view class="good_title_select">
						<view :class="index == selectClassifi?'selectMenu':''"
						style="position: relative;"
						 v-for="(item,index) in classifiList" :key="index">
							<text >{{item.menuName}}</text>
							<view class="" style="position: absolute;right: 0;top: 0;background: red;" v-if="item.num">
								{{item.num}}
							</view>
						</view>
						<!-- <view class="">
							<text>特色菜</text>
						</view>
						<view class="">
							<text>特色菜</text>
						</view>
						<view class="">
							<text>特色菜</text>
						</view>
						<view class="">
							<text>特色菜</text>
						</view> -->
					</view>
				</view>
				<view class="good_right">
					<view class="good_title" style="text-align: center;">
						{{classifiList[selectClassifi].menuName}}
					</view>
					<view class="good_item_box">
						<view class="good_item" v-for="(item,index) in goodList" :key='index'>
							<view class="good_img">
								<image :src="item.img" mode="" style="width: 100%;height: 100%;"></image>
							</view>
							<view class="good_content" style="flex: 1;padding-right: 20rpx;">
								<view class="good_name">
									{{item.productName}}
								</view>
								<view class="good_describe">
									{{item.productDetails}}
								</view>
								<view class="operation">
									<view class="price_discount">
										<view class="discount" v-if="false">
											9.8
										</view>
										<view class="price">
											<text style="font-size: 34rpx;">￥</text> <text style="font-size: 36rpx;">{{item.productPrice}}</text> 
										</view>
									</view>
									
									<view class="" v-if="item.num==0">
										<view class="" @click="gauge(index)" v-if="item.specification!=''">
											选规格
										</view>
										<view class="" v-else>
											+
										</view>
										
										<!-- <text class="">
											修改
										</text>
										<text class="">
											下架
										</text> -->
									</view>
									<view class="stepper" v-else>
										<view class="an" @click="reduce(index)">
											-
										</view>
										<view class="" style="margin: 0 20rpx;">
											{{item.num}}
										</view>
										<view class="an" @click="add(index)" style="background: #007AFF;color: #fff;">
											+
										</view>
									</view>
									
								</view>
								
							</view>
						</view>
					</view>
				</view>
			</view>
			
			
			
			
		</view>
		
		
		<view class="Submit">
			<view class="">
				<view class="">
					
				</view>
				<view class="">
					<view class="" style="color: red;font-size: 32rpx;">
						<text>￥</text> {{allJia}}
					</view>
					<view class="" style="color: #898888;font-size: 24rpx;">
						已优惠￥20
					</view>
				</view>
			</view>
			<view class="op" @click="opa()">
				提交订单
			</view>
		</view>
		
		
		<view class="Merit" v-if="g == true || y == true">
			<view class="Specifications" v-if="g==true">
				<view class="Specifications_box" >
					<view class="food_name">
						菜品名称
					</view>
					<view style="margin: 20rpx 0; display: flex;flex-wrap: wrap;">
						<view :class="item.select == true?	'gaugeSelectItem':'gaugeItem'" 
						 v-for="(item,index) in gaugeData.c" :key='index' @click="Xgauge(index)">
							{{item.name}}
						</view>
					</view>
					<view class="" style="display: flex;justify-content: space-between;">
						<view class="">
							总价<text style="color: red;font-size: 34rpx;">￥</text> <text style="color: red;font-size: 36rpx;">{{jia}}</text>
						</view>
						<view class="" @click="addCat" style="padding: 10rpx 20rpx;background: #21A0FF;color: #fff;border-radius: 10rpx;">
							加入购物车
						</view>
					</view>
				</view>
				<view class="x" @click="x">
					x
				</view>
			</view>
		
			<view class="Aweek" v-if="y == true">
				<view class="" style="display: flex;justify-content: space-between;">
					<view class="">
						午餐
					</view>
					<view class="">
						一周
					</view>
					<view class="">
						关闭
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import Api from '@/common/http.js'
	export default {
		data() {
			return {
				cs:[
					{
						name:'早茶',
						value:'zc'
					},
					{
						name:'早餐',
						value:'zcn'
					},
					{
						name:'午餐',
						value:'wc'
					},
					{
						name:'下午茶',
						value:'xwc'
					},
					{
						name:'晚餐',
						value:'wcn'
					},
					{
						name:'夜宵',
						value:'yx'
					}
				],
				csIndex:0,
				navigation:'',
				storeId:'',
				store:'',
				classifiList:[],
				selectClassifi:0,
				branch:1,
				week:1,
				goodList:[],
				g:false,
				y:false,
				jia:0,
				tempJia:0,
				gaugeData:{},
				cat:[],
				user:'',
				allJia:0
			}
		},
		components:{
			uniIcons
		},
		onLoad(op) {
			this.storeId = op.id
			this.getStroeData()
			this.user = uni.getStorageSync('user')
		},
		created() {
			this.navigation = this.$store.getters.getNavigation
		},
		methods: {
			opa(){
				uni.navigateTo({
					url:'../timely/timely?sid='+this.storeId
				})
			},
			reduce(index){
				this.goodList[index].num--
				this.$forceUpdate()
				this.allJia = 0
				
				
				
				this.cat.map((item)=>{
					
					if(this.goodList[index].id == item.productId){
						item.num--
						var data = item
						
						Api.updateShoppingCar(data).then(res => {
							// this.classifiList[this.selectClassifi].num --
							// this.$forceUpdate()
						}).catch(err => {
							uni.showToast({
								title: err.msg,
								icon: 'none'
							})
						});
						
					}
					this.allJia += item.total*item.num
				})
				
				if(this.goodList[index].num == 0){
					
					this.cat.map((item)=>{
						if(this.goodList[index].id == item.productId){
							var data = {
								id:item.id
							}
							
							Api.deleteShoppingCar(data).then(res => {
								this.classifiList[this.selectClassifi].num --
								this.$forceUpdate()
							}).catch(err => {
								uni.showToast({
									title: err.msg,
									icon: 'none'
								})
							});
							
						}
					})
				}
				
				
			},
			add(index){
				this.goodList[index].num++
				this.$forceUpdate()
				this.allJia = 0
				this.cat.map((item)=>{
					if(this.goodList[index].id == item.productId){
						item.num++
						var data = item
						
						Api.updateShoppingCar(data).then(res => {
							// this.classifiList[this.selectClassifi].num --
							// this.$forceUpdate()
						}).catch(err => {
							uni.showToast({
								title: err.msg,
								icon: 'none'
							})
						});
						
					}
					
					this.allJia += item.total*item.num
				})
			},
			getShoppingCartList(){
				var data = {
					userId:this.user.id,
					storeId:this.storeId
				}
				this.allJia = 0
				Api.getShoppingCart(data).then(res => {
					console.log(res)
					this.cat = res.data.data
					this.cat.map((item,index)=>{
						
						
						this.classifiList.map((items,indexs)=>{
							if(items.id == item.meunId){
								items.num ++
							}
						})
						this.allJia += item.total*item.num
					})
					
					this.getGoodData()
					console.log('this.classifiList',this.classifiList)
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			food(){
				uni.navigateTo({
					url:'../security/security'
				})
			},
			fang(){
				uni.navigateBack({
					delta:-1
				})
			},
			cschange(e){
				this.csIndex = e.detail.value;
				this.getGoodData()
			},
			Xgauge(index){
				this.jia = this.tempJia
				if(this.gaugeData.c[index].select == undefined){
					this.gaugeData.c[index].select = true
				}else{
					this.gaugeData.c[index].select = !this.gaugeData.c[index].select
				}
				
				this.gaugeData.c.map((item)=>{
					if(item.select == true){
						this.jia += parseFloat(item.price) 
					}
					
				})
				
				
				
			},
			
			
			addCat(){
				
				
				// private String userId;     //用户id
				// private String storeId;    //商店id
				// private Integer num;       //数量
				// private BigDecimal price;  //价格
				// private BigDecimal total; //总价
				// private String urlImages;   //图片
				// private String productName;  //商品名称
				// 		   private  String spec;   //规格
				// private String remark;       //备注
				var tempGauge = []
				
				
				var urlImages = ''
				var productName = ''
				var price = ''
				
				for(var i=0;i<this.gaugeData.c.length;i++){
					if(this.gaugeData.c[i].select == true){
						tempGauge.push(this.gaugeData.c[i])
					}
				}
				
				for(var i = 0;i<this.goodList.length;i++){
					if(this.gaugeData.i == this.goodList[i].id){
						price = this.goodList[i].linedPrice;
						urlImages = this.goodList[i].productImg;
						productName = this.goodList[i].productName
					}
				}
				
				var data = {
					userId:this.user.id,
					storeId:this.storeId,
					num:1,
					price:price,
					urlImages:urlImages||'',
					productName:productName,
					total:this.jia,
					spec:JSON.stringify(tempGauge),
					productId:this.gaugeData.i,
					meunId:this.classifiList[this.selectClassifi].id,
					status:0,
					remark:''	
				}
				Api.addShoppingCart(data).then(res => {
					this.classifiList[this.selectClassifi].num++
					this.goodList.map((item,index)=>{
						if(item.id == this.gaugeData.i){
							item.num++
						}
						
					})
					this.cat.push(res.data.data)
					this.allJia = 0
					this.cat.map((item,index)=>{
						this.allJia = item.total
					})
					this.g = false
					
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
				
				
				
			},
			getStroeData(){
				
				Api.getStoreList({id:this.storeId}).then(res => {
					// console.log('res',res);
					this.store = res.data[0]
					
					// this.storeList.map((item)=>{
						this.store.storeIntroductImgList = this.store.storeIntroductImg.split(",")
						console.log('this.store',this.store)
						this.store.foodSortList = this.store.foodLabel.split(",")
						this.store.appraiseManagerList = this.store.appraiseManager.split(",")
						this.store.servuceConfigurationList = this.store.servuceConfiguration.split(",")
						
					// })
					// this.storeList.foodSortList = this.storeList
					// console.log('this.storeList.foodSortList',this.storeList)
					
					
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});	
				
				var data = {
					 storeId:this.storeId
				}
				Api.getMenuTypeList(data).then(res => {
					this.classifiList = res.data.data
					
					this.classifiList.map((item,index)=>{
						item.num = 0
					})
					this.getShoppingCartList()
					
					
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});	
			},
			gauge(index){
				this.g = true;
				if(this.goodList[index].specification == ''){
					
				}else{
					this.tempJia = this.goodList[index].productPrice
					this.jia = this.goodList[index].productPrice
					this.gaugeData.i = this.goodList[index].id
					this.gaugeData.c = JSON.parse(this.goodList[index].specification) 
					
				}
				
				// console.log(this.goodList[index]);
			},
			x(){
				this.g = false
			},
			weeks(){
				
			},
			getGoodData(){
				// this.shopData = uni.getStorageSync('shopData');
				
				var data = {
					 storeId:this.storeId,
					 menuType:this.classifiList[this.selectClassifi].id,
					 week1: this.week==1?1:'',
					 week2: this.week==2?1:'',
					 week3: this.week==3?1:'',
					 week4: this.week==4?1:'',
					 week5: this.week==5?1:'',
					 week6: this.week==6?1:'',
					 week7: this.week==0?1:'',
					 zc: this.cs[this.csIndex].value == 'zc'?1:'',
					 zcn: this.cs[this.csIndex].value == 'zcn'?1:'',
					 wc: this.cs[this.csIndex].value == 'wc'?1:'',
					 xwc: this.cs[this.csIndex].value == 'xwc'?1:'',
					 wcn: this.cs[this.csIndex].value == 'wcn'?1:'',
					 xy: this.cs[this.csIndex].value == 'xy'?1:'',
				}
				
				
				Api.getProductList(data).then(res => {
					this.goodList = res.data.data
					this.goodList.map((item)=>{
						item.num = 0
						if(item.productImg != undefined){
							item.img = item.productImg.split(',')[0]
						}
					})
					
					this.cat.map((item,index)=>{
						this.goodList.map((items,indexs)=>{
							if(item.productId == items.id){
								items.num = item.num
							}
						})
						
					})
					
					console.log('this.goodList',this.goodList)
					
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

<style>
	.shop_information{
		position: relative;
		padding: 20rpx;
	}
	
	.shop_img{
		position: absolute;
		bottom: 20rpx;
		right: 20rpx;
		width: 130rpx;
		height: 130rpx;
		background: #007AFF;
		overflow: hidden;
	}
	
	.shop_name{
		font-size: 40rpx;
	}
	
	.evaluate{
		display: flex;
		padding: 0 20rpx;
	}
	
	.box{
		background: #fff;
		border-radius: 30rpx 30rpx 0 0;
	}
	
	.businessTime{
		padding: 0 20rpx;
	}
	
	.relation{
		padding: 0 20rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.optimization{
		padding: 0 20rpx;
	}
	
	.lableBox{
		display: flex;
		padding: 0 20rpx;
	}
	
	.option{
		display: flex;
		padding: 0 20rpx;
		justify-content: space-between;
		align-items: center;
	}
	
	.time{
		display: flex;
		padding: 0 20rpx;
	}
	
	.good_box{
		display: flex;
	}
	
	.time{
		margin: 20rpx;
		padding:10rpx 20rpx;
		/* background: #999; */
	}
	.good_title_select{
		width: 190rpx;
		background: #F8F8F8;
		height: 100vh;
	}
	
	.good_title_select view{
		width: auto;
		padding: 0 6rpx;
		
	}
	
	.good_title_select view text{
		display: block;
		text-align: center;
		padding: 10rpx 0;
		margin: 10rpx 0;
	}
	
	.good_title_select .selectMenu text{
		display: block;
		text-align: center;
		padding: 10rpx 0;
		margin: 10rpx 0;
		border-left: 4rpx solid #007AFF;
	}	
	
	.good_right{
		margin-left: 30rpx;
		flex: 1;
	}
	.good_title{
		margin: 20rpx 0;
		font-size: 30rpx;
	}
	
	
	.good_item{
		margin: 20rpx 0;
		display: flex;
		align-items: center;
	}
	
	.good_img{
		width: 200rpx;
		height: 200rpx;
		background: #000000;
		margin-right: 10rpx;
		overflow: hidden;
	}
	
	.good_name{
		font-size: 30rpx;
		font-weight: 800;
	}
	
	.good_describe{
		font-size: 28rpx;
		color: #D4C3CE;
	}
	
	.operation{
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}
	
	.Submit{
		width: 100%;
		height: 110rpx;
		position: fixed;
		justify-content: space-between;
		align-items: center;
		bottom: 0;
		display: flex;
		background: #fff;
	}
	
	.Merit{
		position: fixed;
		top: 0;
		z-index: 101;
		height: 100%;
		width: 100%;
		background: rgba(0,0,0,0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		/* display: none;	 */
	}
	.Specifications{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.Specifications_box{
		width: 90%;
		background: #fff;
		border-radius: 20rpx;
		padding: 20rpx;
	}
	
	.food_name{
		font-size: 40rpx;
		color: #333;
	}
	
	
	.Aweek{
		position: absolute;
		bottom: 0;
		background: #fff;
		width: 90%;
		height: 70%;
		padding: 5%;
		border-radius: 30rpx 30rpx 0 0;
	}
	
	
	.business_box{
		padding: 20rpx;
	}
	
	.business_describe{
		font-size: 24rpx;
		color: #333;
		margin: 20rpx 0;
	}
	
	.describe_img_box{
		display: flex;
	}
	
	.describe_img{
		width: 220rpx;
		height: 220rpx;
		background: #007AFF;
		margin-right: 10rpx;
	}
	
	.about{
		padding: 30rpx 0;
		border-bottom: 1rpx solid #ccc;
		font-size: 36rpx;
	}
	
	.branch_select{
		padding-bottom: 10rpx;
		color: #DB7878;
		font-weight: bold;
		border-bottom: 6rpx solid #DB7878;
	}
	
	.times{
		background: #F0F0F0;
		padding: 10rpx 20rpx;
		margin-right: 20rpx;
		border-radius: 20rpx;
	}
	
	.week{
		overflow-x: auto;
		display: flex;
		/* margin: 20rpx; */
		flex-wrap: wrap;
		flex: 1;
	}
	
	.week view{
		width: 120rpx;
		text-align: center;
		flex: 1;
		padding: 10rpx 0;
		border-radius: 15rpx 15rpx 0 15rpx;
		box-shadow: 0rpx 0rpx 5rpx #ccc;
	}
	
	.weekSelect{
		color: #fff;
		background: #028EFF;
	}
	
	
	.op{
		padding: 0 50rpx;
		background: #289EFF;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-weight: bold;
		/* line-height: 100%; */
	}
	
	.gaugeItem{
		padding: 10rpx;
		border-radius: 10rpx;
		border: 1rpx solid #999;
		color: #999;
	}
	
	.gaugeSelectItem{
		padding: 10rpx;
		border-radius: 10rpx;
		border: 1rpx solid #007AFF;
		color: #007AFF;
	}
	
	.x{
		margin-top: 20rpx;
		font-size: 34rpx;
		width: 50rpx;
		height: 50rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		border: 4rpx solid #000;
	}
	
	.price{
		color: red;
	}
	
	.stepper{
		display: flex;
		align-items: center;
	}
	
	.an{
		width: 30rpx;
		height: 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		/* padding: 10rpx; */
		border-radius: 50%;
		border: 4rpx solid #007AFF;
		color: #007AFF;
	}
	
</style>
