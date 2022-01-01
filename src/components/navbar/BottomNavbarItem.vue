<script setup>
defineProps({
	href: String,
	text: String
});
</script>

<template>
	<router-link class="basis-1/4 text-red-200" :to="href">
		<div class="pt-2 pb-1.5">
			<slot></slot>
			<p class="mt-1.5 text-sm text-center">
				{{ text }}
			</p>
		</div>
	</router-link>
</template>

<style scoped>
.router-link-active {
	@apply text-red-400;
}
</style>
