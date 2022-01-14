<template>
	<h1 class="my-12 text-3xl text-center">
		Redirecting...
	</h1>
</template>

<script>
import { onMounted } from "vue";

export default {
	setup() {
		function redirect() {
			window.location.href = "/";
		}

		onMounted(redirect);

		return {
			redirect
		};
	}
};
</script>
