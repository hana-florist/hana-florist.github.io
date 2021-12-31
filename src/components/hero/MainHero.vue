<script setup>
import ImageSlider from "~/components/gallery/ImageSlider.vue";
import Placeholder0 from "~/assets/img/placeholder-21-9.svg";
import Placeholder1 from "~/assets/img/placeholder-1-1.svg";
</script>

<template>
	<ImageSlider
		class="hidden md:block mb-12 md:mb-24"
		:images="[Placeholder0, Placeholder0, Placeholder0]"
		:img-class="['mx-auto w-full']"
	/>
	<ImageSlider
		class="md:hidden mb-12 md:mb-24"
		:images="[Placeholder1, Placeholder1, Placeholder1]"
		:img-class="['mx-auto w-full']"
	/>
</template>
