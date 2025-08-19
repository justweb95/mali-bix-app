<script setup>
import logo1 from '@images/home/klijent-1.svg'
import logo2 from '@images/home/klijent-2.svg'
import logo3 from '@images/home/klijent-3.svg'
import logo4 from '@images/home/klijent-4.svg'
import logo5 from '@images/home/klijent-5.svg'
</script>

<template>
  <div class="hero-carousel-wrapper">
    <p class="carousel-text-info">Preduzeća koja su nam ukazala poverenje:</p>
    <div class="hero-carousel-holder">
      <!-- Original logos -->
      <img :src="logo1" alt="Logo 1" loading="lazy" />
      <img :src="logo2" alt="Logo 2" loading="lazy" />
      <img :src="logo3" alt="Logo 3" loading="lazy" />
      <img :src="logo4" alt="Logo 4" loading="lazy" />
      <img :src="logo5" alt="Logo 5" loading="lazy" />
      <!-- Duplicate logos -->
      <img :src="logo1" alt="Logo 1 duplicate" loading="lazy" />
      <img :src="logo2" alt="Logo 2 duplicate" loading="lazy" />
      <img :src="logo3" alt="Logo 3 duplicate" loading="lazy" />
      <img :src="logo4" alt="Logo 4 duplicate" loading="lazy" />
      <img :src="logo5" alt="Logo 5 duplicate" loading="lazy" />
    </div>
  </div>
</template>

<style scoped>
.hero-carousel-wrapper {
  overflow: hidden;
  width: 100%;
}

.carousel-text-info {
  margin: 32px 0px 32px;
  color: var(--White, #FFF);
  text-align: center;
  font-family: "Red Hat Display";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.hero-carousel-holder {
  display: flex;
  gap: 20px;
  width: max-content; /* shrink to fit content */
  animation: scrollLeft 20s linear infinite;
}

.hero-carousel-holder img {
  max-width: 205px;
  height: 80px;
  margin-right: 40px;
  object-fit: contain;
  flex-shrink: 0; /* prevent shrinking */
}

@media (max-width: 550px) {
  .hero-carousel-holder {
    img {
      height: auto;
      max-width: 170px;
      margin-right: 24px;
    }
  }
}

@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    /* translate by half the total width of all logos (original set) */
    transform: translateX(calc(-50%));
  }
}
</style>
