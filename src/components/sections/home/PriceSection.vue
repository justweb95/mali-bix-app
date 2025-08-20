<script setup>
import { onMounted, ref } from "vue";
  import LabelComponent from '@/components/sections/home/partials/LabelComponent.vue';
  import PriceCardComponent from '@/components/sections/home/partials/PriceCardComponent.vue';

  import animateCharacters from "@/helpers/AnimatedHeadings.js";

  const headingRef = ref(null);

  onMounted(() => {
    const h3 = headingRef.value;
    if (!h3) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCharacters(h3);
            obs.unobserve(h3);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    observer.observe(h3);
  });

</script>

<template>
  <section id="cenovnik" class="price">
    <div class="price-container container">
      <LabelComponent label="Cenovnik" />
      <h3 ref="headingRef" class="price-title">Paketi i cene prilagođeni svakom biznisu!</h3>
      <p class="price-description">Fleksibilni planovi dizajnirani da odgovaraju vašim poslovnim ciljevima.</p>
      <div class="price-card-holder">
        <PriceCardComponent
          label="Demo"
          heading="BESPLATNO"
          description="10-dnevna proba!"
          x_count=2
          redirect_url="#"
        />
        <PriceCardComponent
          label="Basic"
          heading="2.500,00"
          description="dinara/ mesečno"
          x_count=3
          redirect_url="#"
        />
        <PriceCardComponent
          label="Standard"
          heading="3.500,00"
          description="dinara/ mesečno"
          x_count=2
          redirect_url="#"
        />
        <PriceCardComponent
          label="Premium"
          heading="5.000,00"
          description="dinara/ mesečno"
          x_count=0
          redirect_url="#"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.price {
  padding: 60px 0;
  background: var(--dark, #0C1625);
  .price-container {
    .label {
      display: block;
      width: fit-content;
      margin: 0px auto;
    }
    .price-title {
      margin: 24px 0;
      text-align: center;
      font-size: 3rem;
      font-weight: 700;
      line-height: 120%; /* 57.6px */
      &:deep(span.char) {
        display: inline-block;
        opacity: 0;
        transform: translateY(7px);
        filter: blur(4px);
        transition: opacity .4s ease, transform .4s ease, filter .4s ease;
        will-change: opacity, transform, filter;
      }

      &:deep(span.char.visible) {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
      }

      &:deep(span.word) {
        display: inline-block;
        white-space: nowrap;
      }
    }
    .price-description {
      color: var(--Text, #C3D3E8);
      text-align: center;
      font-family: "Red Hat Display";
      font-size: 1.125rem;
      font-weight: 400;
    }
    .price-card-holder {
      margin-top: 60px;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      flex-wrap: wrap;
      gap: 20px;
    }
  }
  @media (max-width: 550px) {
    padding: 40px 0px;
    .price-container {
      .price-title {
        font-size: 2rem;
      }
      .price-description {
        font-size: 1rem;
      }
    }
  }
}
</style>