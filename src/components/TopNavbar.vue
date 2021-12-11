<script setup>
import TopNavbarItem from "~/components/TopNavbarItem.vue";
</script>

<template>
	<div class="md:hidden w-full">
		<div class="flex justify-center py-3 mx-auto">
			<img
				class="w-24"
				src="~~/assets/img/logo.svg"
				alt="hana floristry logo"
			/>
		</div>
	</div>

	<div class="hidden md:block w-full">
		<div class="container flex justify-between items-center px-6 py-9 mx-auto">
			<div>
				<img
					class="w-28"
					src="~~/assets/img/logo.svg"
					alt="hana floristry logo"
				/>
			</div>
			<div class="flex justify-between">
				<TopNavbarItem href="/" text="Home" />
				<TopNavbarItem href="/catalogue" text="Catalogue" />
				<TopNavbarItem href="/contact" text="Contact" />
			</div>
			<div>
				<TopNavbarItem href="/cart" text="Cart" />
			</div>
		</div>
	</div>
</template>
