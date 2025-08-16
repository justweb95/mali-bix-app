<script setup lang="ts">
  import Headers from '@/components/partials/Header.vue';
  import Footer from '@/components/partials/Footer.vue';
  
  import HeroSection from '@/components/sections/home/HeroSection.vue';
  import SubHeroContent from '@/components/sections/home/SubHeroContent.vue';
  import WhySection from '@/components/sections/home/WhySection.vue';
  import WhatWeOfferSection from '@/components/sections/home/WhatWeOfferSection.vue';
  import BenefitsSection from '@/components/sections/home/BenefitsSection.vue';
  import PriceSection from '@/components/sections/home/PriceSection.vue';
  import FAQSection from '@/components/sections/home/FAQSection.vue';
  import SubFooter from '@/components/partials/SubFooter.vue';

</script>

<template>
  <Headers />
    <main>
      <HeroSection />
      <SubHeroContent />
      <WhySection />
      <WhatWeOfferSection />
      <BenefitsSection />
      <PriceSection />
      <FAQSection />
      <SubFooter />
    </main>
  <Footer />
</template>

<style scoped>

</style>