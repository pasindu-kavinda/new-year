<script setup>
import { onMounted } from "vue";
import { initializeWireworks } from "./FireWorks";
import { initializeParty } from "./Party";

onMounted(() => {
  initializeWireworks();
  initializeParty();
});

defineProps({
  msg: String,
});
</script>

<template>
  <div id="container" class="absolute h-dvh w-full z-20"></div>
  <div class="flex flex-col items-center justify-center h-dvh bg-white dark:bg-gray-900">
    <h1 class="text-5xl font-bold select-none text-gray-900 dark:text-gray-100 font-ubuntu party">
      {{ msg }}
    </h1>
    <h2 class="text-3xl font-bold select-none mt-5 text-gray-900 dark:text-gray-100 party">
      Pasindu Kavinda
    </h2>
  </div>
</template>

<style scoped></style>
