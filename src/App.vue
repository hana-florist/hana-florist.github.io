<script setup>
import "@splidejs/splide/dist/css/splide.min.css";

import BottomNavbar from "~/components/navbar/BottomNavbar.vue";
import Footer from "~/components/misc/Footer.vue";
import TopNavbar from "~/components/navbar/TopNavbar.vue";
import WhatsApp from "~/components/misc/WhatsApp.vue";
</script>

<template>
	<TopNavbar />
	<router-view />
	<BottomNavbar />
	<Footer />
	<WhatsApp />
</template>
