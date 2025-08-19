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
    background: var(--dark, #0C1625);
    @media (max-width: 550px) {
      padding: 40px 0;
    }
  }
</style>