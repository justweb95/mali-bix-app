<script setup lang="ts">
  import LabelComponent from '@/components/ui/LabelComponent.vue'
</script>

<template>
  <section class="faq">
    <div class="container">
      <LabelComponent label="FAQ" />
      <h3 class="faq-title">Često postavljana pitanja</h3>
      <p class="faq-description">Pronađite odgovore na uobičajena pitanja u nastavku</p>
      
      <ul class="faq-list-holder">
        <li>
          <h4 class="faq-question">
            Da li mogu da isprobam aplikaciju pre plaćanja?
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0L8 16" stroke="white" stroke-width="2"/>
              <path d="M16 8L3.27826e-07 8" stroke="white" stroke-width="2"/>
            </svg>
          </h4>
          <p class="faq-answer">Možete nas kontaktirati putem email-a ili telefona.</p>
        </li>
        <li>
          <h4 class="faq-question">
            Da li je aplikacija fiskalno usklađena sa zakonima u Srbiji?
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0L8 16" stroke="white" stroke-width="2"/>
              <path d="M16 8L3.27826e-07 8" stroke="white" stroke-width="2"/>
            </svg>
          </h4>
          <p class="faq-answer">Da, MaliBizApp podržava elektronsku fiskalizaciju u skladu sa propisima Poreske uprave Republike Srbije.</p>
        </li>
        <li>
          <h4 class="faq-question">
            Na kojim uređajima mogu koristiti aplikaciju?
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0L8 16" stroke="white" stroke-width="2"/>
              <path d="M16 8L3.27826e-07 8" stroke="white" stroke-width="2"/>
            </svg>
          </h4>
          <p class="faq-answer">Možete nas kontaktirati putem email-a ili telefona.</p>
        </li>
        <li>
          <h4 class="faq-question">
            Kako funkcionišu SMS poruke?
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0L8 16" stroke="white" stroke-width="2"/>
              <path d="M16 8L3.27826e-07 8" stroke="white" stroke-width="2"/>
            </svg>
          </h4>
          <p class="faq-answer">Možete nas kontaktirati putem email-a ili telefona.</p>
        </li>
        <li>
          <h4 class="faq-question">
            Da li mogu da šaljem fiskalne račune direktno iz aplikacije?
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0L8 16" stroke="white" stroke-width="2"/>
              <path d="M16 8L3.27826e-07 8" stroke="white" stroke-width="2"/>
            </svg>
          </h4>
          <p class="faq-answer">Možete nas kontaktirati putem email-a ili telefona.</p>
        </li>
        <li>
          <h4 class="faq-question">Šta se dešava ako ne produžim pretplatu?</h4>
          <p class="faq-answer">Možete nas kontaktirati putem email-a ili telefona.</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>

</style>