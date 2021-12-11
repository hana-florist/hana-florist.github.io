<script setup>
import BottomNavbar from "~/components/navbar/BottomNavbar.vue";
import TopNavbar from "~/components/navbar/TopNavbar.vue";
</script>

<template>
	<TopNavbar />
	<router-view />
	<BottomNavbar />
</template>
