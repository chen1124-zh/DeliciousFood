<template>
	<view>
		<view class="zzc">
			<view class="tanchuan">
				<view class="tb">
					<view class="wc">
						<view>午餐</view>
						<image src="../../static/014.png"></image>
					</view>
					<view class="cpu">一周菜谱</view>
					<view class="gb">关闭</view>
				</view>
				
				
				<view class="xqj">
					<view>周一</view>
					<view>周二</view>
					<view>周三</view>
					<view>周四</view>
				</view>
				
				
				<view class="cptj1">
					<view class="c1">
						<view class="cpt"><image src="../../static/009.png"></image></view>
						<view class="cpbt">肥牛+水果+青菜1人餐大份 <span style="color: #DF0902 ;margin-left: 5px;">¥4.5</span></view>
					</view>
					
					<view class="c1">
						<view class="cpt"><image src="../../static/009.png"></image></view>
						<view class="cpbt">肥牛+水果+青菜1人餐大份 <span style="color: #DF0902 ;margin-left: 5px;">¥4.5</span></view>
					</view>
					
					<view class="c1">
						<view class="cpt"><image src="../../static/009.png"></image></view>
						<view class="cpbt">肥牛+水果+青菜1人餐大份 <span style="color: #DF0902 ;margin-left: 5px;">¥4.5</span></view>
					</view>
					
					<view class="c1">
						<view class="cpt"><image src="../../static/009.png"></image></view>
						<view class="cpbt">肥牛+水果+青菜1人餐大份 <span style="color: #DF0902 ;margin-left: 5px;">¥4.5</span></view>
					</view>
					
					<view class="c1">
						<view class="cpt"><image src="../../static/009.png"></image></view>
						<view class="cpbt">肥牛+水果+青菜1人餐大份 <span style="color: #DF0902 ;margin-left: 5px;">¥4.5</span></view>
					</view>
					
					<view class="c1">
						<view class="cpt"><image src="../../static/009.png"></image></view>
						<view class="cpbt">肥牛+水果+青菜1人餐大份 <span style="color: #DF0902 ;margin-left: 5px;">¥4.5</span></view>
					</view>
					
					<view class="c1">
						<view class="cpt"><image src="../../static/009.png"></image></view>
						<view class="cpbt">肥牛+水果+青菜1人餐大份 <span style="color: #DF0902 ;margin-left: 5px;">¥4.5</span></view>
					</view>
					
					<view class="c1">
						<view class="cpt"><image src="../../static/009.png"></image></view>
						<view class="cpbt">肥牛+水果+青菜1人餐大份 <span style="color: #DF0902 ;margin-left: 5px;">¥4.5</span></view>
					</view>
					
					<view class="c1">
						<view class="cpt"><image src="../../static/009.png"></image></view>
						<view class="cpbt">肥牛+水果+青菜1人餐大份 <span style="color: #DF0902 ;margin-left: 5px;">¥4.5</span></view>
					</view>
					
					<view class="c1">
						<view class="cpt"><image src="../../static/009.png"></image></view>
						<view class="cpbt">肥牛+水果+青菜1人餐大份 <span style="color: #DF0902 ;margin-left: 5px;">¥4.5</span></view>
					</view>
					
					<view class="c1">
						<view class="cpt"><image src="../../static/009.png"></image></view>
						<view class="cpbt">肥牛+水果+青菜1人餐大份 <span style="color: #DF0902 ;margin-left: 5px;">¥4.5</span></view>
					</view>
					
					<view class="c1">
						<view class="cpt"><image src="../../static/009.png"></image></view>
						<view class="cpbt">肥牛+水果+青菜1人餐大份 <span style="color: #DF0902 ;margin-left: 5px;">¥4.5</span></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.c1{
		width: 99px;
		height: 118px;
		border: 1px solid #F4F4F4;
		padding-top: 11px;
		/* padding-left: 6px; */
	}
	.cpbt{
		font-size: 13px;
		font-family: SourceHanSansSC-regular;
		color: #101010;
		font-weight: 600;
		text-align: left;
	}
	.cpt image{
		width: 57px;
		height: 59px;
	}
	.cptj1{
		display: flex;
		margin-left: 7px;
		    flex-wrap: wrap;
	}
	.xqj{
		display: inline-flex;
		margin-left: 7px;
		margin-top: 18px;
	}
	.xqj view{
		width: 107px;
		height: 31px;
		font-size: 15px;
		line-height: 2;
		text-align: center;
		font-family: Microsoft Yahei;
		background: #028EFF ;
		color: #FFFFFF;
		margin-right: 2px;
	}
	.tb{
		display: flex;
		    justify-content: space-between;
	}
	.gb{
		font-size: 18px;
		color: #C7C7C7 ;
		font-family: SourceHanSansSC-regular;
		font-weight: 700;
		margin-right: 24px;
	}
	.cpu{
		font-size: 18px;
		font-family: SourceHanSansSC-bold;
		color: #858585 ;
		font-weight: 700;
	}
	.wc image{
		width: 20px;
		height: 20px;
		margin-top: 5px;
	}
	.wc{
		width: 82px;
		height: 27px;
		background: #F0F0F0 ;
		font-size: 15px;
		color: #000000;
		display: flex;
		margin-left: 19px;
		justify-content: space-around;
		font-weight: 600;
		line-height: 2;
		
	}
	.zzc {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0px;
		background-color: #000;
		background: rgba(0, 0, 0, 0.5);
		text-align: center
	}
	.tanchuan{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		border-top-left-radius: 30px;
		border-top-right-radius: 30px;
		margin-top: 190px;
		padding-top: 15px;
	}
</style>
