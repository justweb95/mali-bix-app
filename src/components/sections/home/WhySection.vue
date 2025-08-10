<script setup>
  import LabelComponet from '@/components/sections/home/partials/LabelComponet.vue';
</script>

<template>
  <section class="why-section">
    <div class="why-section-holder container">
      <article class="why-single-card">
        <LabelComponet label="Problemi" />
        <h3 class="why-card-title">Zašto univerzalna rešenja NE funkcionišu?</h3>
        <p class="why-card-description">Zato što svako preduzeće ima jedinstvene potrebe i izazove.</p>
        <ul class="why-card-list">
          <li>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 1.50049L2 15.5005" stroke="#FF3344" stroke-width="3"/>
              <path d="M2 1.50049L16 15.5005" stroke="#FF3344" stroke-width="3"/>
            </svg>
            <span>Nepreglednim interfejsom koji vas usporava..</span>
          </li>
          <li>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 1.50049L2 15.5005" stroke="#FF3344" stroke-width="3"/>
              <path d="M2 1.50049L16 15.5005" stroke="#FF3344" stroke-width="3"/>
            </svg>
            <span>Alatima koji nisu prilagođeni vašem poslu..</span>
          </li>
          <li>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 1.50049L2 15.5005" stroke="#FF3344" stroke-width="3"/>
              <path d="M2 1.50049L16 15.5005" stroke="#FF3344" stroke-width="3"/>
            </svg>
            <span> Slabom podrškom kada vam je pomoć najpotrebnija...</span>
          </li>
        </ul>
      </article>

        <article class="why-single-card">
        <LabelComponet label="Rešenja" />
        <h3 class="why-card-title">Kako nasa aplikacija i menja pravila igre</h3>
        <p class="why-card-description">MaliBizApp je jednostavno, prilagođeno rešenje koje sadrži samo ono što vam je zaista potrebno — ništa više, ništa manje.</p>
        <ul class="why-card-list">
          <li>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5.38938L8.06897 11.5005L18 1.50049" stroke="#0AF89D" stroke-width="3"/>
            </svg>
            <span>Nepreglednim interfejsom koji vas usporava..</span>
          </li>
          <li>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5.38938L8.06897 11.5005L18 1.50049" stroke="#0AF89D" stroke-width="3"/>
            </svg>
            <span>Direktna komunikacija sa klijentima putem SMS-a</span>
          </li>
          <li>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5.38938L8.06897 11.5005L18 1.50049" stroke="#0AF89D" stroke-width="3"/>
            </svg>
            <span>Automatizacija zakazivanja, računa i izveštaja</span>
          </li>
          <li>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5.38938L8.06897 11.5005L18 1.50049" stroke="#0AF89D" stroke-width="3"/>
            </svg>
            <span>Fokusirano na vaše potrebe, ne generička rešenja</span>
          </li>
          <li>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5.38938L8.06897 11.5005L18 1.50049" stroke="#0AF89D" stroke-width="3"/>
            </svg>
            <span>Ljudska podrška koja razume vaš posao</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
  .why-section {
    padding: 60px 0;
    background: var(--Dark, #0D1B2E);
    .why-section-holder {
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: stretch;
      gap: 20px;
      border-radius: 12px;
      background: var(--Dark-blue, #0E1F34);
      
      .why-single-card {
        padding: 40px;
        flex: 1 0 48%;
        border-radius: 4px;
        background: var(--Dark, #0D1B2E);
        .why-card-title {
          margin: 24px 0px;
          font-size: 32px;
          font-weight: 700;
          line-height: 140%; /* 44.8px */
        }
        .why-card-description {
          color: var(--Text, #C3D3E8);
          font-size: 18px;
          font-weight: 400;
          line-height: 150%; /* 27px */
        }
        .why-card-list {
          list-style: none;
          margin-top: 32px;
          li {
            margin: 20px 0px;
            display: flex;
            align-items: center;
            gap: 12px;

            font-size: 18px;
            font-weight: 700;
            line-height: 150%; /* 27px */
          }
        }
      }
    }
  }
</style>