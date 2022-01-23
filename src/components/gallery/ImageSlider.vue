<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

defineProps({
	images: Array,
	options: Object
});

</script>

<template>
	<div class="py-24 text-center">
		<Splide :options="options">
			<SplideSlide v-for="i in images" :key="i">
				<img
					alt="placeholder flower image"
					class="mx-auto"
					:src="i"
					style="height: 450px"
				/>
			</SplideSlide>
		</Splide>
	</div>
</template>
