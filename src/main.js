// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'

import App from './App'
import router from './router'
import $ from 'jquery'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueI18n);
import store from './vuex/store'

Vue.config.productionTip = false
Vue.use(ElementUI);
const i18n = new VueI18n({
	locale: 'zh', // 语言标识
	messages: {
		'zh': require('./assets/lang/zh'), // 中文语言包
		'en': require('./assets/lang/en') // 英文语言包
	},
})
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	i18n,
	store,
	components: { App },
	template: '<App/>'
})

console.log(6666);