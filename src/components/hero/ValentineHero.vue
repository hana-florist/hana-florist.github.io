<script setup>
import ImageSlider from "~/components/gallery/ImageSlider.vue";
import Val01 from "~/assets/img/valentine/valentine-01.jpg";
import Val03 from "~/assets/img/valentine/valentine-03.jpg";
import Val05 from "~/assets/img/valentine/valentine-05.jpg";

const images = [Val01, Val03, Val05];

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
		<div class="mb-12 lg:mb-24 w-full lg:w-2/5 lg:text-right">
			<h1 class="mb-6 text-5xl md:text-7xl text-red-800">
				<span class="font-bold text-red-600">Love</span>
				Is in the Air
			</h1>
			<p class="mb-6 font-lexend text-lg md:text-2xl text-red-800">
				Endearing bouquets and ornaments to surprise your special someone on Valentine's Day
			</p>
			<router-link
				class="px-6 py-2 text-lg md:text-2xl text-red-100 bg-red-900 rounded-md"
				to="/catalogue"
			>
				Browse
			</router-link>
		</div>
		<ImageSlider
			class="order-first mx-auto lg:ml-0 lg:mr-auto w-fit"
			:images="images"
			:options="options"
		/>
	</div>
</template>
