<script setup>
import {
	BookOpenIcon,
	HomeIcon,
	PhoneIcon
} from "@heroicons/vue/outline";

import BottomNavbarItem from "~/components/navbar/BottomNavbarItem.vue";
</script>

<template>
	<div class="md:hidden fixed bottom-0 z-50 px-3 pb-3 w-full">
		<div class="flex bg-red-900 rounded">
			<BottomNavbarItem href="/" text="Home">
				<HomeIcon class="mx-auto w-6 h-6" />
			</BottomNavbarItem>
			<BottomNavbarItem href="/catalogue" text="Catalogue">
				<BookOpenIcon class="mx-auto w-6 h-6" />
			</BottomNavbarItem>
			<BottomNavbarItem
				:external="true"
				href="https://api.whatsapp.com/send?phone=628153898399"
				text="Contact"
			>
				<PhoneIcon class="mx-auto w-6 h-6" />
			</BottomNavbarItem>
		</div>
	</div>
</template>
