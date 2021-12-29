<script setup>
defineProps({
	href: String,
	text: String
});
</script>

<template>
	<div class="basis-1/4 pt-2 pb-1.5">
		<router-link :to="href" class="text-red-200">
			<slot></slot>
			<p class="basis-1/4 mt-1.5 text-sm text-center">
				{{ text }}
			</p>
		</router-link>
	</div>
</template>

<style scoped>
.router-link-active {
	@apply text-red-400;
}
</style>
