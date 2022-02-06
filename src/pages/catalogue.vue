<script setup>
import CatalogueItem from "~/components/misc/CatalogueItem.vue";

import Cny1 from "~/assets/img/cny/cny-1.jpg";
import Cny2 from "~/assets/img/cny/cny-2.jpg";
import Cny3 from "~/assets/img/cny/cny-3.jpg";
import Cny4 from "~/assets/img/cny/cny-4.jpg";
import Cny5 from "~/assets/img/cny/cny-5.jpg";
import Cny6 from "~/assets/img/cny/cny-6.jpg";
import Val01 from "~/assets/img/valentine/valentine-01.jpg";
import Val02 from "~/assets/img/valentine/valentine-02.jpg";
import Val03 from "~/assets/img/valentine/valentine-03.jpg";
import Val04 from "~/assets/img/valentine/valentine-04.jpg";
import Val05 from "~/assets/img/valentine/valentine-05.jpg";
import Val06 from "~/assets/img/valentine/valentine-06.jpg";
import Val07 from "~/assets/img/valentine/valentine-07.jpg";
import Val08 from "~/assets/img/valentine/valentine-08.jpg";
import Val09 from "~/assets/img/valentine/valentine-09.jpg";
import Val10 from "~/assets/img/valentine/valentine-10.jpg";
import Val11 from "~/assets/img/valentine/valentine-11.jpg";
import catalogueData from "~/assets/json/catalogue.json";

const cnyData = catalogueData.cny;
const cnyImages = [Cny1, Cny2, Cny3, Cny4, Cny5, Cny6];
const valData = catalogueData.valentine;
const valImages = [Val01, Val02, Val03, Val04, Val05, Val06, Val07, Val08, Val09, Val10, Val11];
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
