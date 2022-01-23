<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

defineProps({
	images: Array
});

const options = {
	type: "loop",
	autoWidth: true,
	start: 1,
	focus: "center",
	gap: "3rem",
	arrows: true,
	pagination: false,
	autoplay: true,
	interval: 3600,
	pauseOnHover: false,
	pauseOnFocus: false,
	breakpoints: {
		767: {
			arrows: false,
			pagination: true
		}
	}
};
</script>

<template>
	<div class="py-24 text-center bg-red-900">
		<Splide class="bg-red-900" :options="options">
			<SplideSlide v-for="i in images" :key="i">
				<img
					alt="placeholder flower image"
					:src="i"
					style="height: 450px"
				/>
			</SplideSlide>
		</Splide>
	</div>
</template>
