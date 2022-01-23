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
	<div class="container lg:flex gap-12 px-6 mx-auto">
		<div class="mb-12 lg:mb-24 w-full lg:w-2/5">
			<h1 class="mb-6 text-5xl md:text-7xl text-red-800">
				Flowers of
				<span class="font-bold text-red-600">Prosperity</span>
			</h1>
			<p class="mb-6 font-lexend text-lg md:text-2xl text-red-800">
				Auspicious decorative flowers for your Chinese New Year celebrations
			</p>
			<router-link
				class="px-6 py-2 text-lg md:text-2xl text-red-100 bg-red-900 rounded-md"
				to="/catalogue"
			>
				Browse
			</router-link>
		</div>
		<ImageSlider
			class="mx-auto lg:ml-auto lg:mr-0 w-fit"
			:images="images"
			:options="options"
		/>
	</div>
</template>
