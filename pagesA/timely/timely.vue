<template>
	<view class="contact" >
		<view class="bar">
			
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
				<view class="han">
					<view class="">
						<view class="position">
							<image src="../../static/locationIcon.png" mode="widthFix" class="icon" style="width: 60rpx;"></image> 
							<text class="positionName">{{siteList[siteIndex].siteName || ''}}</text> 
							<view class="switchs">切换服务点 <uni-icons type="arrowdown" color='#2697F4'></uni-icons> </view>
						</view>
						<view class="">
							{{siteList[siteIndex].address}}
						</view>
						<view class="system">
							系统自动为您选择就近站点
						</view>
					</view>
					<view class="distance">
						<view class="distanceStr">
							距您{{siteList[siteIndex].distance}} <uni-icons type="arrowright" color='#2697F4'></uni-icons>
						</view>
						<image src="../../static/distance.png" mode="widthFix" class="distanceIcon"></image>
						
					</view>
					
				</view>
				<view class="han">
					<view class="title">
						预留电话
					</view>
					<view class="" style="display: flex;" @click="userShow = true,tempNickName = nickName,tempMobile = mobile">
						<view class="user_name">
							{{nickName}}
						</view>
						<view class="lan font_crude">
							{{mobile}}
						</view>
						<view class="">
							<uni-icons type="compose"></uni-icons>
						</view>
					</view>
				</view>
				<view class="han">
					<view class="title">
						预订时间
					</view>
					<view class="">
						<picker mode="multiSelector" @change="changeTime" @columnchange='confirms' :value="ptimes" :range="ptime">
							<view class="lan font_crude">{{time.getMonth()+1}}月{{time.getDate()}}日 周{{time.getDay() | Day()}} {{time.getHours()}}:{{time.getMinutes()}}<uni-icons type="arrowright" color='#999'></uni-icons></view>
						</picker>
						
					</view>
				</view>
				<view class="han">
					<view class="title">
						订座
					</view>
					<view class="people">
						12人 01包厢<uni-icons type="arrowright"></uni-icons>
					</view>
				</view>
			
				<view class="invitation" v-if="type!=0">
					邀请好友
				</view>
				<view class="cancel" v-if="type!=0">
					取消拼团
				</view>
			</view>
		
			<view class="" v-if="index == 1">
				<view class="han">
					<view class="">
						
						<view class="Hress" @click="Tdi">
							地址
						</view>
						<view class="" style="display: flex;font-size: 28rpx;color: #999;">
							<view class="">
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
						预订时间
					</view>
					<view class="">
						<picker mode="multiSelector" @change="changeTime" @columnchange='confirms' :value="ptimes" :range="ptime">
							<view class="lan font_crude">{{time.getMonth()+1}}月{{time.getDate()}}日 周{{time.getDay() | Day()}} {{time.getHours()}}:{{time.getMinutes()}}<uni-icons type="arrowright" color='#999'></uni-icons></view>
						</picker>
						
					</view>
				</view>
			</view>
		
			<view class="" v-if="index == 2">
				<view class="han" style="display: flex;justify-content: space-between;">
					<view style="font-size: 40rpx;font-weight: bold;">
						{{store.area}}{{store.address}}
						
					</view>
					<view class="distance">
						<view class="distanceStr">
							距您{{siteList[siteIndex].distance}} <uni-icons type="arrowright" color='#2697F4'></uni-icons>
						</view>
						<image src="../../static/distance.png" mode="widthFix" class="distanceIcon"></image>
						
					</view>
					
				</view>
				<view class="han" style="display: flex;justify-content: space-between;">
					<view class="title" style="font-weight: bold;">
						预留电话
					</view>
					<view class="" style="display: flex;">
						<view class="user_name" >
							{{user.nickName}}
							
						</view>
						<view class="lan font_crude" style="color: #007AFF;">
							{{user.mobile}}
						</view>
						<view class="">
							<uni-icons type="compose"></uni-icons>
						</view>
					</view>
				</view>
				<view class="han">
					<view class="title">
						取餐时间
					</view>
					<view class="">
						<picker mode="multiSelector" @change="changeTime" @columnchange='confirms' :value="ptimes" :range="ptime">
							<view class="lan font_crude">{{time.getMonth()+1}}月{{time.getDate()}}日 周{{time.getDay() | Day()}} {{time.getHours()}}:{{time.getMinutes()}}<uni-icons type="arrowright" color='#999'></uni-icons></view>
						</picker>
					</view>
				</view>
			</view>
		
			<view class="" v-if="index == 3">
				<view class="han" style="display: flex;justify-content: space-between;">
					<view style="font-size: 40rpx;font-weight: bold;">
						{{store.area}}{{store.address}}
					</view>
					<view class="distance">
						<view class="distanceStr">
							距您{{siteList[siteIndex].distance}} <uni-icons type="arrowright" color='#2697F4'></uni-icons>
						</view>
						<image src="../../static/distance.png" mode="widthFix" class="distanceIcon"></image>
						
					</view>
					
				</view>
				<view class="han" style="display: flex;justify-content: space-between;">
					<view class="title" style="font-weight: bold;">
						预留电话
					</view>
					<view class="" style="display: flex;">
						<view class="user_name">
							{{user.nickName}}
							
						</view>
						<view class="lan font_crude" >
							{{user.mobile}}
						</view>
						<view class="">
							<uni-icons type="compose"></uni-icons>
						</view>
					</view>
				</view>
				<view class="han">
					<view class="title">
						取餐时间
					</view>
					<view class="">
						<picker mode="multiSelector" @change="changeTime" @columnchange='confirms' :value="ptimes" :range="ptime">
							<view class="lan font_crude">{{time.getMonth()+1}}月{{time.getDate()}}日 周{{time.getDay() | Day()}} {{time.getHours()}}:{{time.getMinutes()}}<uni-icons type="arrowright" color='#999'></uni-icons></view>
						</picker>
					</view>
				</view>
				<view class="han">
					<view class="title">
						订座
					</view>
					<view class="people">
						12人 01包厢<uni-icons type="arrowright" color='#999'></uni-icons>
					</view>
				</view>
			</view>
		</view>
		
		<view class="single_shop" style="padding-bottom: 20rpx;">
			
			<view class="participate"  v-if="type!=0">
				参团记录
			</view>
			
			<view class="title" v-if="type==0">
				{{store.storeName}}
			</view>
			<view class="shop_good" v-for="(itemd,indexd) in userCatList" :key='indexd'>
				
				<view class="userContent" style="margin: 30rpx 20rpx;" v-if="type!=0">
					<view class="user">
						<view class="userImg">
							<image :src="itemd.userImg" mode="widthFix"></image>
						</view>
						<view class="userName">
							{{itemd.userName}}
						</view>
						<view class="my" v-if="indexd == 0">
							我
						</view>
					</view>
					<view class="addGood" v-if="indexd == 0">
						添加商品
					</view>
				</view>
				
				<view class="shop_item"  v-for="(item,index) in itemd.userCat.shoppingCarts" :key="index">
					<view class="shop_item_introduce">
						<view class="shop_item_img">
							<image :src="item.urlImages" mode="widthFix" ></image>
						</view>
						<view class="he">
							<view class="productName">
								{{item.productName}}
							</view>
							<view class="gg">
								<text v-for="(items,indexs) in item.specObj" :key='indexs'>{{items.name}}</text>
							</view>
							
						</view>
					</view>
					
					<view class="num">
						x {{item.num}}
					</view>
					<view class="tiem_total">
						￥{{item.total}}
					</view>
				</view>
				
				<view class="Subtotal">
					小计：￥{{itemd.total}}
				</view>
				
				<view class="money" v-if="type==0">
					<view class="surplus">
						<view class="packing" >
							包装费
						</view>
						<view class="">
							餐盒
						</view>
					</view>
					<view style="font-weight: bold;">
						￥{{itemd.total}}
					</view>
				</view>
				
			</view>
			
			
			
			<view class="total"  v-if="type!=0">
				<view class="total_name">
					合计
				</view>
				<view class="">
					<view class="totalForehead">
						￥{{total}}
					</view>
					<view class="discount">
						已优惠￥0
					</view>
				</view>
				
			</view>
			
			
		</view>
		
		
		<view class="single_shop">
			<view class="unified">
				<view class="title">
					支付方式
				</view>
				
				<view class=""  style="color: #999;">
					在线支付
				</view>
				
			</view>
			<view class="unified">
				<view class="title">
					订单备注
				</view>
				
				<view class="" style="color: #999;" @click="show = true,tempOrderRemarks = orderRemarks">
					{{orderRemarks||"口味、偏好"}}
				</view>
				
			</view>
			
			<view class="unified" v-if="index == 1 || index == 2">
				<view class="title">
					餐具分量
				</view>
				
				<view class="" style="color: #999;">
					<picker mode="selector" :range="tableware" @change="changeTableware">
						<view>{{tablewareIndex == -1?'未选择':tableware[tablewareIndex]}}</view>
					</picker>
				</view>
				
			</view>
		</view>
		
		<view class="agreement" v-if="index == 0">
			<view 
			@click="g = !g"
			style="width: 30rpx;height: 30rpx; border: 1rpx solid #999;margin-right: 10rpx;display: flex;justify-content: center;align-items: center;">
				<uni-icons type="checkmarkempty" style="font-size: 30rpx;" v-if="g"></uni-icons>
			</view> 我已阅读并同意 <text style="color: #007AFF;" @click="Jagreement">《站点服务协议》</text>
		</view>
		
		<view class="submit"  v-if="type!=0">
			提交订单
		</view>
		
		<view class="payment"  v-if="type==0">
			<view class="" style="flex: 1;background: #49453A;color: #fff;padding-left: 10rpx;display: flex;align-items: center;">
				<view class="" style="font-size: 36rpx;">
					￥{{total}}
				</view>
			</view>
			<view class=""style="width: 30%;background: #289EFF;color: #fff;padding: 30rpx;text-align: center;">
				确认支付
			</view>
		</view>
		
		
		<u-modal v-model="show" title='订单备注' :show-cancel-button='true' @cancel='orderQX' @confirm='orderQR'>
			<textarea v-model="tempOrderRemarks" placeholder="可输入口味、偏好等信息" class="orderRemarks"/>
		</u-modal>
		
		<u-modal v-model="userShow" title='预留电话' :show-cancel-button='true' @cancel='userQX' @confirm='userQR'>
			<view class="moneyBox">
				称呼：<input type="text" v-model="tempNickName" />
			</view>
			<view class="moneyBox">
				电话：<input type="text" v-model="tempMobile" />
			</view>
			
		</u-modal>
		
	</view>
</template>

<script>
	import Api from '@/common/http.js'
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
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
		components:{
			uniIcons
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				nickName:'',
				mobile:'',
				tempMobile:'',
				tempNickName:'',
				userShow:false,
				
				
				tempOrderRemarks:'',
				orderRemarks:'',
				show:false,
				ptime:[
					[],
					[],
					[],
					[]
				],
				userCatList:[],
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
				orderId:'',
				siteList:[],
				siteIndex:0,
				type:0,
				tableware:[
					'不需要餐具','1份','2份','3份','4份','5份','6份','7份','8份','9份','10份',
					'11份','12份','13份','14份','15份','16份','17份','18份','19份','20份',
					'21份','22份','23份','24份','25份','26份','27份','28份','29份','30份'
				],
				tablewareIndex:-1
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
			
			this.getSiteList()
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
			
			// this.type = op.type
			
			if(this.type == 0){
				this.userCatList = [
					{
						total:10,
						userImg:'https://thirdwx.qlogo.cn/mmopen/vi_32/KUgrrhKwibDJ4j9WkE9aOH7nWFh0S3c5d4KMsBicKCwBialAatr2icfQ8RC6Y0iaJmweQl3FiaMxjHe8UGnib746OZSBw/132',
						userName:'名字',
						userCat:{
							
							shoppingCarts:[
								{
									createTime: 1630565326000,
									discounted: "0",
									id: "CAFE3928F10A4DCFE0531D02A8C0DF8D",
									meunId: "CADBD6BC7A8CC165E0531D02A8C0D1C0",
									num: 1,
									price: 1,
									productId: "CADBD6BC7A8DC165E0531D02A8C0D1C0",
									productName: "商品名称1",
									spec: "[{'name':'名称','price':'1','select':true}]",
									status: 0,
									storeId: "42",
									storeName: "测试店铺1",
									total: 1,
									updateTime: 1630565326000,
									urlImages: "../../static/tempGood2.png",
									userId: "CAE67C56C43F4C20E0531D02A8C00D2D",
								},
								{
									createTime: 1630565326000,
									discounted: "0",
									id: "CAFE3928F10A4DCFE0531D02A8C0DF8D",
									meunId: "CADBD6BC7A8CC165E0531D02A8C0D1C0",
									num: 1,
									price: 1,
									productId: "CADBD6BC7A8DC165E0531D02A8C0D1C0",
									productName: "商品名称1",
									spec: "[{'name':'名称','price':'1','select':true}]",
									status: 0,
									storeId: "42",
									storeName: "测试店铺1",
									total: 1,
									updateTime: 1630565326000,
									urlImages: "../../static/tempGood2.png",
									userId: "CAE67C56C43F4C20E0531D02A8C00D2D",
								},
								{
									createTime: 1630565326000,
									discounted: "0",
									id: "CAFE3928F10A4DCFE0531D02A8C0DF8D",
									meunId: "CADBD6BC7A8CC165E0531D02A8C0D1C0",
									num: 1,
									price: 1,
									productId: "CADBD6BC7A8DC165E0531D02A8C0D1C0",
									productName: "商品名称1",
									spec: "[{'name':'名称','price':'1','select':true}]",
									status: 0,
									storeId: "42",
									storeName: "测试店铺1",
									total: 1,
									updateTime: 1630565326000,
									urlImages: "../../static/tempGood2.png",
									userId: "CAE67C56C43F4C20E0531D02A8C00D2D",
								}
							],
							storeId: "42",
							storeName: "测试店铺1",
							total: 1,
							userId: "CAE67C56C43F4C20E0531D02A8C00D2D",
							message: "成功",
							
						}
					}
				]
			}else{
				this.userCatList = [
					{
						total:10,
						userImg:'https://thirdwx.qlogo.cn/mmopen/vi_32/KUgrrhKwibDJ4j9WkE9aOH7nWFh0S3c5d4KMsBicKCwBialAatr2icfQ8RC6Y0iaJmweQl3FiaMxjHe8UGnib746OZSBw/132',
						userName:'名字',
						userCat:{
							
							shoppingCarts:[
								{
									createTime: 1630565326000,
									discounted: "0",
									id: "CAFE3928F10A4DCFE0531D02A8C0DF8D",
									meunId: "CADBD6BC7A8CC165E0531D02A8C0D1C0",
									num: 1,
									price: 1,
									productId: "CADBD6BC7A8DC165E0531D02A8C0D1C0",
									productName: "商品名称1",
									spec: "[{'name':'名称','price':'1','select':true}]",
									status: 0,
									storeId: "42",
									storeName: "测试店铺1",
									total: 1,
									updateTime: 1630565326000,
									urlImages: "../../static/tempGood2.png",
									userId: "CAE67C56C43F4C20E0531D02A8C00D2D",
								}
							],
							storeId: "42",
							storeName: "测试店铺1",
							total: 1,
							userId: "CAE67C56C43F4C20E0531D02A8C00D2D",
							message: "成功",
							
						}
					},
					{
						total:10,
						userImg:'https://thirdwx.qlogo.cn/mmopen/vi_32/KUgrrhKwibDJ4j9WkE9aOH7nWFh0S3c5d4KMsBicKCwBialAatr2icfQ8RC6Y0iaJmweQl3FiaMxjHe8UGnib746OZSBw/132',
						userName:'名字',
						userCat:{
							
							shoppingCarts:[
								{
									createTime: 1630565326000,
									discounted: "0",
									id: "CAFE3928F10A4DCFE0531D02A8C0DF8D",
									meunId: "CADBD6BC7A8CC165E0531D02A8C0D1C0",
									num: 1,
									price: 1,
									productId: "CADBD6BC7A8DC165E0531D02A8C0D1C0",
									productName: "商品名称1",
									spec: "[{'name':'名称','price':'1','select':true}]",
									status: 0,
									storeId: "42",
									storeName: "测试店铺1",
									total: 1,
									updateTime: 1630565326000,
									urlImages: "../../static/tempGood2.png",
									userId: "CAE67C56C43F4C20E0531D02A8C00D2D",
								}
							],
							storeId: "42",
							storeName: "测试店铺1",
							total: 1,
							userId: "CAE67C56C43F4C20E0531D02A8C00D2D",
							message: "成功",
							
						}
					}
				]
			}
			
			
			
			
			
			
			this.user = uni.getStorageSync('user')
			
			this.nickName = this.user.nickName
			this.mobile = this.user.mobile
			
			
			
			this.getStor()
			// this.getShoppingCartList()
			
			
			
		},
		methods: {
			Jagreement(){
				uni.navigateTo({
					url:'../agreement/agreement'
				})
			},
			getSiteList() {
				var data = {
					siteName: ''
				}
			
				Api.getSite(data).then(res => {
					this.siteList = res.data.data
					// console.log()
					this.siteList.map(item=>{
						item.distance = "0m"
					})
					// this.getDistance()
					
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			
			getDistance() {
				
				this.siteList.map((item,index)=>{					 
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
							if(res.data.status == 0){
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
							}else{
								item.distance = "0m"
							}
							
						}
					});
				
				})
				
				
			},
			
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
			
			changeTableware(e){
				this.tablewareIndex =  e.target.value
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
					item.shoppingCarts.map((items)=>{
						realBalance+=items.total
						shoppingCartId +=items.id+','
						orderItemList.push({
							productName:items.productName,
							spec:items.spec,
							productId:items.productId,
							amount:items.total,
							num:items.num,
							price:items.price,
							productImg:items.urlImages,
							mealType:'',
							
						})
					})
					
				})
				
				shoppingCartId = shoppingCartId.substring(0,shoppingCartId.length-1)
				var data = {
					addIncome:0,
					people:1,
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
			
				Api.addOrder(data).then(res => {
					
					this.orderId = res.data.data.id
					console.log('ressdfasdfsdaf',res)
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
					this.store = res.data[0]
					
					
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
				
					this.cat = res.data.data
					this.cat.map((item,index)=>{
						item.shoppingCarts.map((items)=>{
							this.total += items.total
							items.specObj = JSON.parse(items.spec) 
						})
						
					})
						
					this.addorder()
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
		
			orderQR(){
				this.orderRemarks = this.tempOrderRemarks
			},
			orderQX(){
				this.tempOrderRemarks = ''
			},
			
			userQR(){
				if(this.tempNickName==''||this.tempMobile == ''){
					uni.showToast({
						title:'请补充完整',
						icon:'none'
					})
					this.userShow = true
					return
				}
				this.nickName = this.tempNickName
				this.mobile = this.tempMobile
			},
			userQX(){
				tempNickName
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.contact{
		background: #F8F8F8;
		padding-bottom: 120rpx;
		
		image{
			width: 100%;
		}
		
		.lan{
			color: #007AFF;
		}
		
		.title{
			font-weight: bold;
		}
		
		.font_crude{
			font-weight: bold;
		}
		
		.bar{
			position: fixed;
			top: 0;
			height: 290rpx;
			background: #1093FF;
			width: 100%;
			z-index: 0;
		}
		
		.bao{
			display: flex;
			margin: 20rpx;
			margin-bottom: 0;
			position: relative;
			view{
				flex: 1;
				border-radius: 10rpx 10rpx 0 0;
				background: #fff;
				padding: 10rpx;
				text-align: center;
			}
		}
		
		.shop{
			margin: 0 20rpx;
			background: #FFF;
			padding: 20rpx;
			position: relative;
			border-radius: 0 0 20rpx 20rpx;
			.han{
				display: flex;
				justify-content: space-between;
				font-size: 28rpx;
				padding: 20rpx 0;
				margin: 10rpx 0;
				border-bottom: 1rpx solid #ccc;
			}
			
			.han:last-child{
				border: 0;
			}
			
			.invitation{
				margin: 30rpx;
				border-radius: 40rpx;
				padding: 20rpx 30rpx;
				// width: 100%;
				background: #289EFF;
				color: #fff;
				text-align: center;
			}
			
			.cancel{
				color: #999;
				text-align: center;
			}
		}
		
		
		.single_shop{
			position: relative;
			margin: 20rpx;
			// box-shadow: 0 0 20rpx #f0f0f0;	
			border-radius: 10rpx;
			
			font-size: 28rpx;
			background: #fff;
			overflow: hidden;
			
			
			.participate{
				padding: 10rpx;
				color: #fff;
				// width: 100%;
				text-align: center;
				background: #FF8D00;
			}
			
			.shop_good{
				border-bottom: 1rpx solid #f0f0f0;
				.userContent{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 20rpx;
					.user{
					
						display: flex;
						align-items: center;
						.userImg{
							width: 70rpx;
							height: 70rpx;
							border-radius: 50%;
							overflow: hidden;
						}
						
						.userName{
							margin-left: 20rpx;
							font-size: 34rpx;
							font-weight: bold;
						}
						
						.my{
							background: #EBF5FF;
							padding: 10rpx 20rpx;
							color: #26B0F8;
							font-size: 28rpx;
							margin-left: 20rpx;
							border-radius: 10rpx;
						}
					}
					
					.addGood{
						display: flex;
						align-items: center;
						justify-content: center;
						width: 140rpx;
						height: 50rpx;
						border-radius: 10rpx;
						border: 1rpx solid #FF8D00;
						color: #FF8D00;
					}
				}
				
				
				.shop_item{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin:10rpx 20rpx;
					.shop_item_introduce{
						display: flex;
						
						.shop_item_img{
							width: 100rpx;
							height: 100rpx;
							background: #000000;
							margin-right: 20rpx;
						}
						
						.he{
							display: flex;
							flex-direction: column;
							justify-content: center;
							.productName{
								font-size: 30rpx;
							}
							
							.gg{
								font-size: 24rpx;
								color: #999;
							}
							
							.num{
								font-size: 24rpx;
							}
						}
					}
				
				
					.tiem_total{
						font-size: 32rpx;
						font-weight: bold;
					}
				}
				
				.Subtotal{
					text-align: right;
					margin: 20rpx;
					font-size: 32rpx;
					font-weight: bold;
				}
			}
			
			.shop_good:last-child{
				border-bottom:0;
			}
			
			
			.total{
				display: flex;
				justify-content: space-between;
				margin:20rpx;
				.total_name{
					font-size: 28rpx;
				}
				.totalForehead{
					font-size: 45rpx;
					font-weight: bold;
					text-align: right;
				}
				
				.discount{
					font-size: 24rpx;
					color: #999;
					text-align: right;
				}
			}
		
			.unified{
				margin: 20rpx;
				padding:10rpx 0rpx;
				display: flex;
				justify-content: space-between;
			}
		}
		
		.money{
			display: flex;
			justify-content: space-between;
			margin: 10rpx 20rpx;
			
			.surplus{
				display: flex;font-size: 28rpx;
				.packing{
					margin: 0 10rpx;
					color: #2697F4;
					background: #EBF5FF;
				}
			}
		}
		
		
		.payment{
			display: flex;
			position: fixed;
			bottom: 0;
			width: 100%;
		}
		
		.index{
			background: #FF8D00 !important;
			color: #fff;
		}
		
		.position{
			display: flex;
			align-items: center;
			.icon{
				width: 60rpx;
			}
			.positionName{
				font-weight: bold;
				margin: 0 10rpx;
			}
			.switchs{
				display: inline-block;
				background: #EBF5FF;
				color: #2697F5;
				padding: 5rpx;
				border-radius: 10rpx;
			}
		}
		
		.distance{
			display: flex;
			flex-direction: column;
			align-items: center;
			.distanceStr{
				display: inline-block;
				background: #EBF5FF;
				color: #2697F5;
				padding: 5rpx;
				border-radius: 10rpx;
			}
			
			.distanceIcon{
				width: 60rpx;
			}
		}
		
		
		.system{
			font-size: 24rpx;
			color: #999;
		}
		
		.agreement{
			display: flex;
			margin: 20rpx;
		}
		
		.submit{
			margin: 30rpx;
			border-radius: 10rpx;
			background: #289EFF;
			color: #fff;
			text-align: center;
			padding: 20rpx;
		}
	
		.user_name{
			margin-right: 20rpx;
		}
		
		.people{
			color: #999;
		}
	}
	
	
	.orderRemarks{
		width: 86%;
		border: 1rpx solid #F0F0F0;
		margin: 30rpx;
		border-radius: 10rpx;
		padding: 10rpx;
	}
	
	.moneyBox{
		display: flex;
		align-items: center;
		margin: 20rpx;
		font-size: 26rpx;
		input{
			flex: 1;
			border: 1rpx solid #F0F0F0;
			border-radius: 10rpx;
			padding: 10rpx;
			margin: 10rpx;
		}
	}
	
	.Hress{
		font-size: 45rpx;
	}
	
	
	
</style>
