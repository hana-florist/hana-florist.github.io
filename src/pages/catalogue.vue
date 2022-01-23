<script setup>
import CatalogueItem from "~/components/misc/CatalogueItem.vue";

import Cny1 from "~/assets/img/cny/cny-1.jpg";
import Cny2 from "~/assets/img/cny/cny-2.jpg";
import Cny3 from "~/assets/img/cny/cny-3.jpg";
import Cny4 from "~/assets/img/cny/cny-4.jpg";
import Cny5 from "~/assets/img/cny/cny-5.jpg";
import Cny6 from "~/assets/img/cny/cny-6.jpg";
import Val1 from "~/assets/img/valentine/valentine-1.jpg";
import Val2 from "~/assets/img/valentine/valentine-2.jpg";
import Val3 from "~/assets/img/valentine/valentine-3.jpg";
import Val4 from "~/assets/img/valentine/valentine-4.jpg";
import Val5 from "~/assets/img/valentine/valentine-5.jpg";
import Val6 from "~/assets/img/valentine/valentine-6.jpg";
import Val7 from "~/assets/img/valentine/valentine-7.jpg";
import catalogueData from "~/assets/json/catalogue.json";

const cnyData = catalogueData.cny;
const cnyImages = [Cny1, Cny2, Cny3, Cny4, Cny5, Cny6];
const valData = catalogueData.valentine;
const valImages = [Val1, Val2, Val3, Val4, Val5, Val6, Val7];
</script>

<template>
	<div class="container flex flex-col gap-12 mx-auto">
		<div>
			<h1 class="py-12 text-4xl text-center text-red-800">
				Chinese New Year
			</h1>
			<div class="grid grid-cols-2 gap-6 md:grid-cols-4 mx-6">
				<CatalogueItem
					:key="cnyImages[i - 1]"
					v-for="i in cnyImages.length"
					:src="cnyImages[i - 1]"
					:name="cnyData[i - 1].name"
					:price="cnyData[i - 1].price"
					:description="cnyData[i - 1].description"
				/>
			</div>
		</div>
		<div>
			<h1 class="py-12 text-4xl text-center text-red-800">
				Valentine's Day
			</h1>
			<div class="grid grid-cols-2 gap-6 md:grid-cols-4 mx-6">
				<CatalogueItem
					:key="valImages[i - 1]"
					v-for="i in valImages.length"
					:src="valImages[i - 1]"
					:name="valData[i - 1].name"
					:price="valData[i - 1].price"
					:description="valData[i - 1].description"
				/>
			</div>
		</div>
	</div>
</template>
