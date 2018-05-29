<template>
	<div class="text-xs-center">
		<img src="../assets/logo.png" alt="vue-logo" class="logo">
		<p class="display-3">
			{{msg}}
		</p>
		<p class="headline">{{content}}</p>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: () => ({
			msg: 'Hello World!',
			content: 'A simple Parcel + Vue setup for quick prototyping'
		})
	}
</script>

<style type="css">
	.logo {
		width: 20%;
	}
</style>