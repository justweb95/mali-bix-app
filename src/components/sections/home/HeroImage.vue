<script setup>
import heroImage from '@images/home/hero-image.webp';
</script>

<template>
  <div class="hero-image-container">
    <img :src="heroImage" alt="Hero Image" class="hero-image">
  </div>
</template>

<style scoped>
  .hero-image-container {
    margin: 60px 0px;
    max-width: 100%;
    perspective: 1000px; 
    .hero-image {
      transform: rotateX(20deg);
      transform-style: preserve-3d; 

      box-shadow: 0 0 240px -40px rgba(0, 132, 255, 0.80);

      max-width: 100%;
      width: 90%;
      height: auto;
      display: block;
      margin: 0px auto;
      object-fit: cover;

      animation-name: rotateXScroll;
      animation-timeline: view();
      animation-duration: 1;
      animation-fill-mode: forwards;
      animation-timing-function: linear;
    }
    @media (max-width: 550px) {
      margin: 48px auto 40px;
      .hero-image {
        width: 100%;
      }
    }
  }

  
@keyframes rotateXScroll {
  0% {
    transform: rotateX(20deg);
  }
  50% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(-20deg);
  }
}
</style>
