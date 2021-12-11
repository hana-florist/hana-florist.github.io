<script setup>
import {
	BookOpenIcon,
	HomeIcon,
	PhoneIcon,
	ShoppingCartIcon
} from "@heroicons/vue/outline";

import BottomNavbarItem from "~/components/BottomNavbarItem.vue";
</script>

<template>
	<div class="md:hidden fixed bottom-0 px-3 pb-3 w-full">
		<div class="flex justify-evenly bg-red-900 rounded">
			<BottomNavbarItem href="/" text="Home">
				<HomeIcon class="mx-auto w-6 h-6" />
			</BottomNavbarItem>
			<BottomNavbarItem href="/catalogue" text="Catalogue">
				<BookOpenIcon class="mx-auto w-6 h-6" />
			</BottomNavbarItem>
			<BottomNavbarItem href="/cart" text="Cart">
				<ShoppingCartIcon class="mx-auto w-6 h-6" />
			</BottomNavbarItem>
			<BottomNavbarItem href="/contact" text="Contact">
				<PhoneIcon class="mx-auto w-6 h-6" />
			</BottomNavbarItem>
		</div>
	</div>
</template>
