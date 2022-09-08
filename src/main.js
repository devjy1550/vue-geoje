import { createApp } from 'vue'
import App from './App.vue'
//vue프로그램이 실행되면 자동으로 시작되는.js = main.js(엔트리포인트, 진입시점!!)

import router from './router/index'
//확장자js는 생략가능

import store from './store/store'

createApp(App).use(router).use(store).mount('#app')
