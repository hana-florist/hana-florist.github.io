<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

defineProps({
	images: Array,
	imgClass: Array
});

const options = {
	type: "loop",
	arrows: true,
	pagination: false,
	autoplay: true,
	interval: 3600,
	pauseOnHover: false,
	pauseOnFocus: false,
	breakpoints: {
		767: {
			arrows: false,
			pagination: true,
			autoplay: false
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
