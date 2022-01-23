<script setup>
import CnyHero from "~/components/hero/CnyHero.vue";
import Insta from "~/components/misc/Instagram.vue";
import Location from "~/components/misc/Location.vue";
import MainHero from "~/components/hero/MainHero.vue";
import ValentineHero from "~/components/hero/ValentineHero.vue";
</script>

<template>
	<div class="flex flex-col gap-24">
		<MainHero />
		<CnyHero />
		<ValentineHero />
		<Insta />
		<Location />
	</div>
</template>
