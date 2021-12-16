<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

defineProps({
	images: Array,
	imgClass: Array
});

const options = {
	type: "loop",
	gap: "3rem",
	arrows: false
};
</script>

<template>
	<Splide :options="options">
		<SplideSlide v-for="i in images" :key="i">
			<img
				:class="imgClass"
				:src="i"
			/>
		</SplideSlide>
	</Splide>
</template>
