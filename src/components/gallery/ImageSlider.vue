<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

defineProps({
	images: Array,
	options: Object
});

</script>

<template>
	<div class="text-center">
		<Splide :options="options">
			<SplideSlide v-for="i in images" :key="i">
				<img
					alt="placeholder flower image"
					class="mx-auto"
					:src="i"
				/>
			</SplideSlide>
		</Splide>
	</div>
</template>
