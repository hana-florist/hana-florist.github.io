<script setup>
defineProps({
	external: Boolean,
	href: String,
	text: String
});
</script>

<template>
	<div class="mx-6">
		<router-link :to="href" v-if="!external">
			<span class="text-xl text-red-800">
				{{ text }}
			</span>
		</router-link>
		<a :href="href" v-else>
			<span class="text-xl text-red-800">
				{{ text }}
			</span>
		</a>
	</div>
</template>
