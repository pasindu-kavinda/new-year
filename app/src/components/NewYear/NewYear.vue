<script setup>
import { onMounted } from "vue";
import { initializeWireworks } from "./FireWorks";
import { initializeParty } from "./Party";

onMounted(() => {
  initializeWireworks();
  initializeParty();

  const urlParams = new URLSearchParams(window.location.search);
  const wish = urlParams.get('wish');

  console.log(wish);
  document.getElementById("wish").innerHTML = atob(wish);
});

defineProps({
  msg: String,
});
</script>

<template>
  <div id="container" class="absolute h-dvh w-full z-20"></div>
  <img class="fixed w-[300px] -right-40 -top-10 z-10 select-none animate-pulse" src="./../../assets/moon.png" alt="">
  <div class="flex flex-col items-center justify-center h-dvh bg-gray-900">
    <h1 class="text-center px-6 text-4xl font-bold select-none text-gray-100 font-ubuntu party">
      {{ msg }}
    </h1>
    <h2 class="text-2xl font-bold select-none mt-8 text-gray-100 party" id="wish">
    </h2>
  </div>
  <a class="fixed m-5 w-[30px] right-0 bottom-0 z-30" href="https://github.com/pasindu-kavinda/new-year">
    <img src="./../../assets/github.png" alt="" />
  </a>
</template>

<style scoped></style>
