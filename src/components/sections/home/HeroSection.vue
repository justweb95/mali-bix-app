<script setup lang="ts">
  import HeroContent from '@/components/sections/home/HeroContent.vue';
  import HeroImage from '@/components/sections/home/HeroImage.vue';
  import HeroCarousel from '@/components/sections/home/HeroCarousel.vue';

</script>

<template>
  <section class="hero-section">
    <div class="container">
      <HeroContent />
      <HeroImage />
      <HeroCarousel />
    </div>
  </section>
</template>

<style scoped>
  .hero-section {
    padding: 60px 0px;
    background: var(--Dark, #0D1B2E);
    @media (max-width: 550px) {
      padding: 40px 0;
    }
  }
</style>