<script setup>
import Display1 from "~/assets/img/display/display-1.jpg";
import Display2 from "~/assets/img/display/display-2.jpg";
import Display3 from "~/assets/img/display/display-3.jpg";
import Display4 from "~/assets/img/display/display-4.jpg";
import Display5 from "~/assets/img/display/display-5.jpg";
import Display6 from "~/assets/img/display/display-6.jpg";
import Display7 from "~/assets/img/display/display-7.jpg";
import Display8 from "~/assets/img/display/display-8.jpg";
import ImageSlider from "~/components/gallery/ImageSlider.vue";

const images = [Display1, Display2, Display3, Display4, Display5, Display6, Display7, Display8];
</script>

<template>
	<ImageSlider
		class="mb-12 md:mb-24"
		:images="images"
	/>
</template>
