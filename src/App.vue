<template>
	<div id="app">
		<router-link to="/">Home</router-link>
		<router-link to="/about">About</router-link>
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'app',
};
</script>

<style lang="css">
/* can be css/less/sass */
</style>
