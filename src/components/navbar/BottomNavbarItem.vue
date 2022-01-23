<script setup>
defineProps({
	external: Boolean,
	href: String,
	text: String
});
</script>

<template>
	<router-link
		class="basis-1/3 text-red-200"
		:to="href"
		v-if="!external"
	>
		<div class="pt-2 pb-1.5">
			<slot></slot>
			<p class="mt-1.5 text-sm text-center">
				{{ text }}
			</p>
		</div>
	</router-link>
	<a
		class="basis-1/3 text-red-200"
		:href="href"
		v-else
	>
		<div class="pt-2 pb-1.5">
			<slot></slot>
			<p class="mt-1.5 text-sm text-center">
				{{ text }}
			</p>
		</div>
	</a>
</template>

<style scoped>
.router-link-active {
	@apply text-red-400;
}
</style>
