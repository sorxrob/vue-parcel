<template>
	<div class="text-xs-center">
		<img src="../assets/vue.png" alt="vue-logo" class="vue-logo">
		<img src="../assets/parcel.png" alt="parcel-logo" class="parcel-logo">
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
		content: 'A simple Vue + Parcel setup for quick prototyping'
	})
}
</script>

<style type="css">
.vue-logo {
	width: 18%;
}

.parcel-logo {
	width: 20%;
}
</style>