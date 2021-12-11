<script setup>
import BottomNavbar from "~/components/BottomNavbar.vue";
import TopNavbar from "~/components/TopNavbar.vue";
</script>

<template>
	<TopNavbar />
	<router-view />
	<BottomNavbar />
</template>
