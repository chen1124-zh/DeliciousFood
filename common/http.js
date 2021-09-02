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


// 添加购物车
function addShoppingCart (data) {
	return request({
		method: "POST", // 请求方式
		url: 'shoppcart/addShoppingCart', // 请求url
		data: data // 参数
	})
}


// 查询购物车
function getShoppingCart (data) {
	return request({
		method: "POST", // 请求方式
		url: 'shoppcart/getShoppingCart', // 请求url
		data: data // 参数
	})
}


// 删除购物车
function deleteShoppingCar (data) {
	return request({
		method: "get", // 请求方式
		url: 'shoppcart/deleteShoppingCar', // 请求url
		data: data // 参数
	})
}


// 修改购物车
function updateShoppingCar (data) {
	return request({
		method: "POST", // 请求方式
		url: 'shoppcart/updateShoppingCar', // 请求url
		data: data // 参数
	})
}


// 生成订单
function addOrder (data) {
	return request({
		method: "POST", // 请求方式
		url: 'order/addOrder', // 请求url
		data: data // 参数
	})
}


// 地址列表
function getAddressList (data) {
	return request({
		method: "POST", // 请求方式
		url: 'address/getAddressList', // 请求url
		data: data // 参数
	})
}


// 新增地址
function addAddress (data) {
	return request({
		method: "POST", // 请求方式
		url: 'address/addAddress', // 请求url
		data: data // 参数
	})
}



// 获取轮播图
function queryList (data) {
	return request({
		method: "POST", // 请求方式
		url: 'rotationImages/queryList', // 请求url
		data: data // 参数
	})
}

// 获取轮播图
function getSite (data) {
	return request({
		method: "POST", // 请求方式
		url: 'site/getSite', // 请求url
		data: data // 参数
	})
}


// 支付接口
function payOrder (data) {
	return request({
		method: "POST", // 请求方式
		url: 'order/payOrder', // 请求url
		data: data // 参数
	})
}




export default{
	getOrderList,
	getStoreList,
	getMenuTypeList,
	getProductList,
	addShoppingCart,
	getShoppingCart,
	deleteShoppingCar,
	updateShoppingCar,
	addOrder,
	getAddressList,
	addAddress,
	queryList,
	getSite,
	payOrder
}