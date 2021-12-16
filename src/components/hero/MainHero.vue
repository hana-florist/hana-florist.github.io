<script setup>
import ImageSlider from "~/components/slider/ImageSlider.vue";
import Placeholder0 from "~/assets/img/placeholder-5-2.png";
import Placeholder1 from "~/assets/img/placeholder-1-1.png";
</script>

<template>
	<ImageSlider
		class="hidden md:block"
		:images="[Placeholder0, Placeholder0, Placeholder0]"
		:img-class="['mx-auto w-full']"
	/>
	<ImageSlider
		class="md:hidden"
		:images="[Placeholder1, Placeholder1, Placeholder1]"
		:img-class="['mx-auto w-full']"
	/>
</template>
