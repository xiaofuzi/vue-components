//import Vue from 'vue'

new Vue({
	el: '#app',
	data: {
		total: 152,
		perPage: 10
	},
	methods: {
		onPageChange(page){
			console.log('pageNum: ', page)
		}
	}
})