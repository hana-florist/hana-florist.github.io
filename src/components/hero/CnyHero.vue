<script setup>
import Cny2 from "~/assets/img/cny/cny-2.jpg";
import Cny3 from "~/assets/img/cny/cny-3.jpg";
import Cny4 from "~/assets/img/cny/cny-4.jpg";
import ImageSlider from "~/components/gallery/ImageSlider.vue";

const images = [Cny2, Cny3, Cny4];

const options = {
	type: "fade",
	rewind: true,
	autoHeight: true,
	arrows: false,
	pagination: false,
	autoplay: true,
	interval: 2400,
	pauseOnHover: false,
	pauseOnFocus: false
};
</script>

<template>
	<div class="container lg:flex py-12 md:py-24 mx-auto">
		<div class="basis-2/5 px-6 md:px-16 mb-12 md:mb-24">
			<h1 class="mb-6 text-5xl md:text-7xl text-red-800">
				Flowers of
				<span class="font-bold text-red-600">Prosperity</span>
			</h1>
			<p class="mb-6 font-lexend text-lg md:text-2xl text-red-800">
				Auspicious decorative flowers for your Chinese New Year celebrations
			</p>
		</div>
		<ImageSlider
			class="basis-3/5"
			:images="images"
			:options="options"
		/>
	</div>
</template>
