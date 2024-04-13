<script setup>
import { onMounted } from "vue";
import { Fireworks } from "fireworks-js";

onMounted(() => {
  const container = document.querySelector("#container");
  const fireworks = new Fireworks(container, {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 50,
    traceLength: 3,
    traceSpeed: 10,
    explosion: 5,
    intensity: 30,
    flickering: 50,
    lineStyle: "round",
    hue: {
      min: 0,
      max: 360,
    },
    delay: {
      min: 30,
      max: 60,
    },
    rocketsPoint: {
      min: 50,
      max: 50,
    },
    lineWidth: {
      explosion: {
        min: 1,
        max: 3,
      },
      trace: {
        min: 1,
        max: 2,
      },
    },
    brightness: {
      min: 50,
      max: 80,
    },
    decay: {
      min: 0.015,
      max: 0.03,
    },
    mouse: {
      click: true,
      move: false,
      max: 3,
    },
    sound: {
      enabled: true,
      files: [
        "https://fireworks.js.org/sounds/explosion0.mp3",
        "https://fireworks.js.org/sounds/explosion1.mp3",
        "https://fireworks.js.org/sounds/explosion2.mp3",
      ],
      volume: { min: 0, max: 50 },
    },
  });
  fireworks.start();
});

defineProps({
  msg: String,
});
</script>

<template>
  <div id="container" class="absolute h-dvh w-full z-20"></div>
  <div class="flex flex-col items-center justify-center h-dvh bg-white dark:bg-gray-900">
    <h1 class="text-4xl font-bold select-none text-gray-900 dark:text-gray-100">{{ msg }}</h1>
    <h2 class="text-2xl font-bold select-none mt-5 text-gray-900 dark:text-gray-100">Pasindu Kavinda</h2>
  </div>
</template>

<style scoped></style>
