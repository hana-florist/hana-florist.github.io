<script setup>
defineProps({
	src: String,
	name: String,
	price: String,
	description: String
});
</script>

<template>
	<div class="flex flex-col text-red-800">
		<img
			:alt="name"
			class="mb-3 aspect-square"
			:src="src"
		/>
		<p class="text-4xl">{{ name }}</p>
		<p class="font-lexend text-base">Rp {{ price }}</p>
		<p class="font-lexend text-base" v-if="description">({{ description }})</p>
	</div>
</template>
