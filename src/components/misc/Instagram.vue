<script setup>
import Image01 from "~/assets/img/instagram/img-01.jpg";
import Image02 from "~/assets/img/instagram/img-02.jpg";
import Image03 from "~/assets/img/instagram/img-03.jpg";
import Image04 from "~/assets/img/instagram/img-04.jpg";
import Image05 from "~/assets/img/instagram/img-05.jpg";
import Image06 from "~/assets/img/instagram/img-06.jpg";
import Image07 from "~/assets/img/instagram/img-07.jpg";
import Image08 from "~/assets/img/instagram/img-08.jpg";
import Image09 from "~/assets/img/instagram/img-09.jpg";
import Image10 from "~/assets/img/instagram/img-10.jpg";
import links from "~/assets/json/instagram.json";

const images = [Image01, Image02, Image03, Image04, Image05, Image06, Image07, Image08, Image09, Image10];
</script>

<template>
	<div class="container mx-auto">
		<div class="flex justify-center items-center my-3 md:my-9">
			<img
				alt="instagram logo"
				class="mr-3 md:mr-6 w-12 md:w-20"
				src="~~/assets/img/instagram-logo.svg"
			/>
			<a
				href="https://instagram.com/hana.floristry/"
				rel="noreferrer"
				target="_blank"
			>
				<div class="flex flex-col text-red-800">
					<p class="text-lg md:text-2xl text-center">
						Follow us on Instagram
					</p>
					<p class="text-xl md:text-3xl text-center">
						@hana.floristry
					</p>
				</div>
			</a>
		</div>
		<div class="hidden md:grid grid-cols-5 grid-rows-2">
			<div
				class="hover:brightness-50 transition-all duration-300"
				v-for="i in 10"
				:key="i"
			>
				<a
					:href="links[i - 1]"
					rel="noreferrer"
					target="_blank"
				>
					<img alt="flower image" :src="images[i - 1]" />
				</a>
			</div>
		</div>
		<div class="grid md:hidden grid-cols-3 grid-rows-3">
			<div
				class="hover:brightness-50 transition-all duration-300"
				v-for="i in 9"
				:key="i"
			>
				<a
					:href="links[i - 1]"
					rel="noreferrer"
					target="_blank"
				>
					<img alt="flower image" :src="images[i - 1]" />
				</a>
			</div>
		</div>
	</div>
</template>
