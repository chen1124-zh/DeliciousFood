<template>
	<view>
		<view style="position: fixed;top: 0; height: 290rpx;background: #1093FF;width: 100%;z-index: -1;">
			
		</view>
		<view class="bao">
			<view :class="index==0?'index':''" @click="index = 0">
				国社餐厅
			</view>
			<view :class="index==1?'index':''" @click="index = 1">
				送货上门
			</view>
			<view :class="index==2?'index':''" @click="index = 2">
				到店取货
			</view>
			<view :class="index==3?'index':''" @click="index = 3">
				到店就餐
			</view>
		</view>
		<view class="shop">
			
			
			
			<view class="" v-if="index == 0">
				<view class="han" style="display: flex;justify-content: space-between;">
					<view class="">
						<view class="">
							name
						</view>
						<view class="">
							{{store.area}}{{store.address}}
						</view>
						<view class="" style="font-size: 28rpx;color: #999;">
							系统自动为您选择就近站点
						</view>
					</view>
					<view class="">
						距离 
					</view>
					
				</view>
				<view class="han" style="display: flex;justify-content: space-between;">
					<view class="title" style="font-weight: bold;">
						预定电话
					</view>
					<view class="" style="display: flex;">
						<view class="" style="margin-right: 20rpx;">
							{{user.nickName}}
							
						</view>
						<view class="" style="color: #007AFF;">
							{{user.mobile}}
						</view>
						
					</view>
				</view>
				<view class="han">
					<view class="title">
						预定时间
					</view>
					<view class="">
						 <!-- <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker> -->
						<picker mode="multiSelector" @change="changeTime" @columnchange='confirms' :value="ptimes" :range="ptime">
							<view class="uni-input">{{time.getMonth()+1}}月{{time.getDate()}}日 周{{time.getDay() | Day()}} {{time.getHours()}}:{{time.getMinutes()}}</view>
						</picker>
						
					</view>
					<!-- <view class="">
						座位
					</view> -->
				</view>
				
				<view class="han">
					<view class="title">
						订座
					</view>
					<view class="">
						12人 01包厢
					</view>
				</view>
			
		
			</view>
		
		
			<view class="" v-if="index == 1">
				<view class="han">
					<view class="">
						
						<view class="" @click="Tdi">
							地址
						</view>
						<view class="" style="display: flex;font-size: 28rpx;color: #999;">
							<view class="" style="margin-right: 10rpx;">
								{{user.nickName}}
								
							</view>
							
							<view class="">
								{{user.mobile}}
							</view>
						</view>
					</view>
					
				</view>
				
				<view class="han">
					<view class="title">
						预定时间
					</view>
					<view class="">
						5月5日 周三 12:45
					</view>
				</view>
			</view>
		
			<view class="" v-if="index == 2">
				<view class="han" style="display: flex;justify-content: space-between;">
					<view class="">
						
						<view class="">
							{{store.area}}{{store.address}}
						</view>
					</view>
					<view class="">
						距离 
					</view>
					
				</view>
				<view class="han" style="display: flex;justify-content: space-between;">
					<view class="title" style="font-weight: bold;">
						预定电话
					</view>
					<view class="" style="display: flex;">
						<view class="" style="margin-right: 20rpx;">
							{{user.nickName}}
							
						</view>
						<view class="" style="color: #007AFF;">
							{{user.mobile}}
						</view>
						
					</view>
				</view>
				<view class="han">
					<view class="title">
						取餐时间
					</view>
					<view class="">
						5月5日 周三 12:45
					</view>
				</view>
			</view>
		
			<view class="" v-if="index == 3">
				<view class="han" style="display: flex;justify-content: space-between;">
					<view class="">
						
						<view class="">
							{{store.area}}{{store.address}}
						</view>
					</view>
					<view class="">
						距离 
					</view>
					
				</view>
				<view class="han" style="display: flex;justify-content: space-between;">
					<view class="title" style="font-weight: bold;">
						预定电话
					</view>
					<view class="" style="display: flex;">
						<view class="" style="margin-right: 20rpx;">
							{{user.nickName}}
							
						</view>
						<view class="" style="color: #007AFF;">
							{{user.mobile}}
						</view>
						
					</view>
				</view>
				<view class="han">
					<view class="title">
						取餐时间
					</view>
					<view class="">
						5月5日 周三 12:45
					</view>
				</view>
				<view class="han">
					<view class="title">
						订座
					</view>
					<view class="">
						12人 01包厢
					</view>
				</view>
			</view>
		</view>
		
		<view class="single_shop">
			<view class="title" style="margin-bottom: 30rpx;">
				{{store.storeName}}
			</view>
			<view class="shop_good">
				<view class="shop_item"  v-for="(item,index) in cat" :key="index">
					<view class="shop_item_introduce">
						<view class="shop_item_img">
							<image :src="item.urlImages" mode="" style="width: 100%;height: 100%;"></image>
						</view>
						<view class="" style="display: flex;flex-direction: column;justify-content: center;">
							<view class="" style="font-size: 30rpx;">
								{{item.productName}}
							</view>
							<view class="" style="font-size: 24rpx;color: #999;" >
								<text v-for="(items,indexs) in item.specObj" :key='indexs'>{{items.name}}</text>
							</view>
							
						</view>
					</view>
					
					<view class="" style="font-size: 24rpx;">
						x {{item.num}}
					</view>
					<view class="">
						{{item.total}}
					</view>
				</view>
				
				
				
			</view>
			
			<view class="" style="display: flex;justify-content: space-between;margin: 10rpx 0;">
				<view class="" style="display: flex;font-size: 28rpx;">
					<view class="" style="margin: 0 10rpx;color: #2697F4;background: #EBF5FF;">
						包装费
					</view>
					<view class="">
						餐盒
					</view>
				</view>
				<view class="">
					￥{{total}}
				</view>
			</view>
		</view>
		
		
		<view class="single_shop" style="font-size: 28rpx;">
			<view class="" style="padding:10rpx 0rpx; display: flex;justify-content: space-between;">
				<view class="title">
					支付方式
				</view>
				
				<view class=""  style="color: #999;">
					在线支付
				</view>
				
			</view>
			<view class="" style="padding:10rpx 0rpx; display: flex;justify-content: space-between;">
				<view class="title">
					订单备注
				</view>
				
				<view class="" style="color: #999;">
					口味.偏好
				</view>
				
			</view>
		</view>
		
		<view class="" style="display: flex;margin: 20rpx;">
			<view 
			@click="g = !g"
			style="width: 30rpx;height: 30rpx; border: 1rpx solid #999;margin-right: 10rpx;display: flex;justify-content: center;align-items: center;">
				<uni-icons type="checkmarkempty" style="font-size: 30rpx;" v-if="g"></uni-icons>
			</view> 我已阅读并同意 <text style="color: #007AFF;">《站点服务协议》</text>
		</view>
		
		<view class="payment">
			<view class="" style="flex: 1;background: #49453A;color: #fff;padding-left: 10rpx;display: flex;align-items: center;">
				<view class="" style="font-size: 36rpx;">
					￥{{total}}
				</view>
				<!-- <view class="">
					20
				</view> -->
			</view>
			<view class=""style="width: 30%;background: #289EFF;color: #fff;padding: 30rpx;text-align: center;">
				确认支付
			</view>
		</view>
		
	</view>
</template>

<script>
	import Api from '@/common/http.js'
	export default {
		filters:{
			Day(time){
				var d = {
					0:'日',
					1:'一',
					2:'二',
					3:'三',
					4:'四',
					5:'五',
					6:'六'
				}
				return d[time]
			}
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				ptime:[
					[],
					[],
					[],
					[]
				],
				ptimes:[0,0,0,0],
				time:new Date(),
				index:0,
				g:true,
				total:0,
				storeId:'',
				user:'',
				store:'',
				cat:'',
				date: currentDate,
				
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		onLoad(op) {
			
			
			this.ptime[0] = [
				1,2,3,4,5,6,7,8,9,10,11,12
			]
			
			this.ptimes[0] = this.time.getMonth()
			
			var tempptime1 = this.getDayNumByYearMonth(this.time.getFullYear(),this.time.getMonth()+1)
			for(var i = 1;i<=tempptime1;i++){
				this.ptime[1].push(i)
				if(this.time.getDate() == i-1){
					this.ptimes[1] = i
				}
			}
			
			this.ptime[2] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
			
			
			this.ptimes[2] = this.time.getHours()
			
			
			for(var i = 0;i<60;i++){
				this.ptime[3].push(i)
			}
			
			this.ptimes[3] = this.time.getMinutes()
			
			
			
			this.storeId = op.sid
			
			this.user = uni.getStorageSync('user')
			this.getStor()
			this.getShoppingCartList()
			
			
			
		},
		methods: {
			changeTime(event){
				this.ptimes = event.detail.value
				var d = `${this.time.getFullYear()}-${this.ptime[0][this.ptimes[0]]}-${this.ptime[1][this.ptimes[1]]} ${this.ptime[2][this.ptimes[2]]}:${this.ptime[3][this.ptimes[3]]}`
				
				console.log(d)
				var tempDate = new Date(d)
				
				this.time = tempDate
				
			},
			confirms(event){
				if(event.detail.column == 0){
					var d = []
					var tempptime1 = this.getDayNumByYearMonth(this.time.getFullYear(),event.detail.value+1)
					for(var i = 1;i<=tempptime1;i++){
						d.push(i)
						// if(this.time.getDate() == i-1){
						// 	this.ptimes[1] = i
						// }
					}
					console.log
					this.ptime[1] = d
					this.ptimes[1] = 0
					
					this.$forceUpdate()
				}
				console.log(event)
			},
			
			/**
			 * 判断某年是否闰年
			 */
			isRuinian(year){
			      if((year%4==0 && year%100!=0)||(year%400==0)){
					  return 29;
				  }
				  return 28;
			},
			 
			/**
			 * 根据年和月获取该月有几天
			 */
			getDayNumByYearMonth(year,month){
			        switch (month) {
			               case 1:
			               case 3:
			               case 5:
			               case 7:
			               case 8:
			               case 10:
			               case 12:
			                      return 31;
			                      break;
			               case 4:
			               case 6:
			               case 9:
			               case 11:
			                      return 30;
			                      break;
			               case 2:
			                     return this.isRuinian(year);
			       }
			},
			
			
			
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			addorder(){
				
				var orderItemList = []
				
				var realBalance = 0
				var shoppingCartId=''
				this.cat.map((item,index)=>{
					realBalance+=item.total
					shoppingCartId +=item.id+','
					orderItemList.push({
						productName:item.productName,
						spec:item.spec,
						productId:item.productId,
						amount:item.total,
						num:item.num,
						price:item.price,
						productImg:item.urlImages,
						mealType:''
					})
					
				})
				shoppingCartId = shoppingCartId.substring(0,shoppingCartId.length-1)
				var data = {
					storeId:this.storeId,
					orderStatus:0,
					total:realBalance,
					packing:0,
					orderNo:'',
					appointmentTime:'5月5日 周三 12:45',
					payType:1,
					mealType:1,
					userId:this.user.id,
					mobile:this.user.mobile,
					orderName:this.user.name,
					remarks:'',
					orderType:0,
					deliveryClerk:'',
					deliveryClerkNum:'',
					shoppingCartId:shoppingCartId,
					address:'',
					realBalance:realBalance,
					orderItemList:orderItemList
				}
				// String id;   //订单id                                                             
				// 											 String storeId;   //商铺id
				// 											 Integer orderStatus;   //订单状态
				// 											 BigDecimal total;      //总价
				// 											 BigDecimal packing;    //包装费
				// 											 String orderNo;      //订单号
				// 											 String appointmentTime;    //预约时间
				// 											 Integer payType;            //支付方式
				// 											 String  mealType;       //就餐方式
				// 											 String userId;          //用户ID
				// 											 String mobile;             //手机号码
				// 											 String orderName;           //下单名字
				// 											 String remarks;           //备注
				// 											 Integer orderType;           //订单类型
				// 											 String deliveryClerk;        //配送方式
				// 											 String deliveryClerkNum;       //配送员电话
				// 											 String shoppingCartId;         //购物车id   用逗号分隔
				// 											 String address;              //收货地址 
				//                                              List<OrderItem> orderItemList;   //订单详情				
				// 											   订单详情的参数: 	 String productName;      //商品名称
			
				Api.addOrder(data).then(res => {
					console.log('res',res)
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});	
			},
			Tdi(){
				uni.navigateTo({
					url:'../receiving/receiving'
				})
			},
			getStor(){
				Api.getStoreList({id:this.storeId}).then(res => {
					// console.log('res',res);
					this.store = res.data[0]
					
					// this.storeList.map((item)=>{
						this.store.storeIntroductImgList = this.store.storeIntroductImg.split(",")
						// console.log('this.store',this.store)
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
			},
			getShoppingCartList(){
				var data = {
					userId:this.user.id,
					storeId:this.storeId
				}
				this.allJia = 0
				Api.getShoppingCart(data).then(res => {
					// console.log(res)
					this.cat = res.data.data
					
					this.cat.map((item,index)=>{
						this.total += item.total*item.num
						item.specObj = JSON.parse(item.spec) 
					})
						
						this.addorder()
					// 	this.classifiList.map((items,indexs)=>{
					// 		if(items.id == item.meunId){
					// 			items.num ++
					// 		}
					// 	})
					// 	this.allJia += item.total*item.num
					// })
					
					// this.getGoodData()
					// console.log('this.classifiList',this.classifiList)
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
		}
	}
</script>

<style>
	
	.title{
		font-weight: bold;
	}
	
	.bao{
		display: flex;
		margin: 20rpx;
		margin-bottom: 0;
	}
	
	.bao view{
		flex: 1;
		border-radius: 10rpx 10rpx 0 0;
		background: #fff;
		padding: 10rpx;
		text-align: center;
	}
	
	.shop{
		margin: 0 20rpx;
		background: #FFF;
		padding: 20rpx;
	}
	
	.single_shop{
		margin: 30rpx;
		box-shadow: 0 0 20rpx #f0f0f0;
		/* background: #007AFF; */
		border-radius: 10rpx;
		padding: 20rpx;
	}
	
	.shop_item{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.shop_item_img{
		width: 100rpx;
		height: 100rpx;
		background: #000000;
		margin-right: 20rpx;
	}
	
	.shop_item_introduce{
		display: flex;
	}
	
	.payment{
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		/* padding: 30rpx 0 30rpx 0; */
		
	}
	
	.han{
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		padding: 20rpx 0;
		margin: 10rpx 0;
		border-bottom: 1rpx solid #ccc;
	}
	
	.index{
		background: #FF8D00 !important;
		color: #fff;
	}
	
</style>
