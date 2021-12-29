<script setup>
defineProps({
	href: String,
	text: String
});
</script>

<template>
	<div class="mx-6">
		<router-link :to="href">
			<span class="text-xl text-red-800">
				{{ text }}
			</span>
		</router-link>
	</div>
</template>
