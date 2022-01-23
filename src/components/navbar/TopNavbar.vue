<script setup>
import TopNavbarItem from "~/components/navbar/TopNavbarItem.vue";
</script>

<template>
	<div class="sticky top-0 z-10 md:hidden w-full bg-red-900">
		<div class="flex justify-center py-3 mx-auto">
			<img
				class="w-24"
				src="~~/assets/img/logo-light.svg"
				alt="hana floristry logo"
			/>
		</div>
	</div>

	<div class="hidden md:block w-full">
		<div class="container flex justify-between items-center px-6 py-9 mx-auto">
			<div>
				<img
					class="w-28"
					src="~~/assets/img/logo-dark.svg"
					alt="hana floristry logo"
				/>
			</div>
			<div class="flex justify-between">
				<TopNavbarItem href="/" text="Home" />
				<TopNavbarItem href="/catalogue" text="Catalogue" />
				<TopNavbarItem
					:external="true"
					href="https://api.whatsapp.com/send?phone=628153898399"
					text="Contact"
				/>
			</div>
			<div>
				<TopNavbarItem
					class="hidden"
					href="/cart"
					text="Cart"
				/>
			</div>
		</div>
	</div>
</template>
