<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

defineProps({
	images: Array,
	imgClass: Array
});

const options = {
	type: "loop",
	breakpoints: {
		639: {
			arrows: false
		}
	}
};
</script>

<template>
	<Splide :options="options">
		<SplideSlide v-for="i in images" :key="i">
			<img
				alt="placeholder flower image"
				:class="imgClass"
				:src="i"
			/>
		</SplideSlide>
	</Splide>
</template>
