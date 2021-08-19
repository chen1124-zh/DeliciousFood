import request from './request.js'; // 引入封装好的request

// 获取订单列表
function getOrderList (data) {
	return request({
		method: "POST", // 请求方式
		url: 'order/getOrderList', // 请求url
		data: data // 参数
	})
}

// 获取店铺
function getStoreList (data) {
	return request({
		method: "POST", // 请求方式
		url: 'store/getStoreList', // 请求url
		data: data // 参数
	})
}


// 获取店铺菜单
function getMenuTypeList (data) {
	return request({
		method: "POST", // 请求方式
		url: 'mentType/getMenuTypeList', // 请求url
		data: data // 参数
	})
}


// 查询商品
function getProductList (data) {
	return request({
		method: "POST", // 请求方式
		url: 'product/getProductList', // 请求url
		data: data // 参数
	})
}















export default{
	getOrderList,
	getStoreList,
	getMenuTypeList,
	getProductList
}