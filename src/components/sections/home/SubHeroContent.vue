<script setup>
import { onMounted, ref } from "vue";
import animateCharacters from "@/helpers/AnimatedHeadings.js";

const container = ref(null);

onMounted(() => {
  const h2 = container.value.querySelector("h2");
  if (!h2) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCharacters(h2);
          obs.unobserve(h2); 
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(h2);
});
</script>

<template>
  <section ref="container" class="sub-hero-container">
    <h2 class="sub-hero-title"
      aria-label="Zašto da se zadovoljavate prosečnim kad možete imati alat koji raste zajedno sa vašim poslovanjem?">
      Zašto da se zadovoljavate prosečnim kad možete imati alat koji raste zajedno sa vašim poslovanjem?
    </h2>
  </section>
</template>

<style scoped>
.sub-hero-container {
  padding: 60px 0;
  width: 100%;
  background: var(--dark, #0C1625);
}

.sub-hero-title {
  width: 95%;
  max-width: 908px;
  margin: 0 auto;
  color: var(--White, #FFF);
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: 140%;
}

/* use :deep() so scoped styles apply to dynamically-created spans */
.sub-hero-title :deep(span.char) {
  display: inline-block;
  opacity: 0;
  transform: translateY(7px);
  filter: blur(4px);
  transition: opacity .4s ease, transform .4s ease, filter .4s ease;
  will-change: opacity, transform, filter;
}

.sub-hero-title :deep(span.char.visible) {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

.sub-hero-title  :deep(span.word) {
  display: inline-block;
  white-space: nowrap; /* keep letters of a word together */
}

@media (max-width: 550px) {
  .sub-hero-container { padding: 40px 0; }
  .sub-hero-title { font-size: 1.5rem; }
}
</style>

