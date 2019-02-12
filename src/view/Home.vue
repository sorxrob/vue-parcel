<template>
	<div class="text-xs-center">
		<div><Logos /></div>
		<p class="display-3" v-html="message"></p>
		<p class="headline" v-html="content"></p>
	</div>
</template>

<script>
	import Logos from '../components/Logos.vue';
	
	export default {
		data: () => ({
			message: 'Hello World!',
			content: 'A simple Vue + Parcel setup for quick prototyping'
		}),
		components: {
			Logos
		}
	}
</script>