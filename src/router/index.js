import Vue from 'vue';
import Router from 'vue-router';
import Home from '../view/Home';
import About from '../view/About';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/about',
			name: 'About',
			component: About,
		},
	],
});
