//import Vue from 'vue'

new Vue({
	el: '#app',
	data: {
		title: '百度外卖商业智能'
	},
	methods: {
		onCancel(){
			console.log('canceled')
		},
		onSuccess(){
			console.log('successed')
		}
	}
})