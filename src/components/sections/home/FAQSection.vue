<script setup lang="ts">
  import { ref } from 'vue';
  import LabelComponent from '@/components/sections/home/partials/LabelComponent.vue';

  const activeFAQ = ref<number | null>(null);
  interface FAQ {
    question: string;
    answer: string;
  }

  function toggleFAQ(index: number) {
    activeFAQ.value = activeFAQ.value === index ? null : index;
  }

  const faqs = ref<FAQ[]>([
    {
      question: "Da li mogu da isprobam aplikaciju pre plaćanja?",
      answer: "Naravno! Nudimo besplatan probni period od 10 dana bez potrebe za unosom kartice."
    },
    {
      question: "Da li je aplikacija fiskalno usklađena sa zakonima u Srbiji?",
      answer: "Da, MaliBizApp podržava elektronsku fiskalizaciju u skladu sa propisima Poreske uprave Republike Srbije."
    },
    {
      question: "Na kojim uređajima mogu koristiti aplikaciju?",
      answer: "Aplikacija radi na Android i iOS telefonima, kao i na računaru putem web preglednika."
    },
    {
      question: "Kako funkcionišu SMS poruke?",
      answer: "Možete automatski slati podsetnike za termine klijentima. U paketu imate određeni broj poruka, a dodatne se naplaćuju po potrebi."
    },
    {
      question: "Da li mogu da šaljem fiskalne račune direktno iz aplikacije?",
      answer: "Da, izdavanje i slanje fiskalnih računa je potpuno integrisano u aplikaciju i moguće je direktno iz nje."
    },
    {
      question: "Šta se dešava ako ne produžim pretplatu?",
      answer: "Vaš nalog ostaje sačuvan, ali nećete moći da koristite napredne funkcije dok ponovo ne aktivirate pretplatu."
    }
  ]);
</script>

<template>
  <section id="cesta-pitanja" class="faq">
    <div class="container">
      <LabelComponent label="FAQ" />
      <h3 class="faq-title">Često postavljana pitanja</h3>
      <p class="faq-description">Pronađite odgovore na uobičajena pitanja u nastavku</p>
      
      <ul class="faq-list-holder">
        <li 
          v-for="(faq, index) in faqs"
          @click="toggleFAQ(index)" 
          :key="index"
          :class="{
            'faq-item': true,
            'faq-active-item': activeFAQ === index
          }">
          <h4 class="faq-question">{{ faq.question }}</h4>
          <svg class="faq-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0L8 16" stroke="white" stroke-width="2"/>
            <path d="M16 8L3.27826e-07 8" stroke="white" stroke-width="2"/>
          </svg>
          <p class="faq-answer">{{ faq.answer }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
  .faq {
    padding: 60px 0;
    background: var(--dark, #0C1625);
    .container {
      .label {
        display: block;
        margin: 0px auto;
        width: fit-content;
      }
      .faq-title {
        text-align: center;
        margin: 24px 0;
        font-size: 3rem;
        font-weight: 700;
        line-height: 140%; /* 67.2px */
      }
      .faq-description {
        color: var(--Text, #C3D3E8);
        text-align: center;
        font-family: "Red Hat Display";
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 140%; /* 25.2px */
      }

      .faq-list-holder {
        margin: 0px auto;
        max-width: 850px;
        margin-top: 60px;
        list-style: none;
        .faq-item {
          position: relative;
          margin: 12px 0px;
          height: auto;
          max-height: 66px;
          padding: 20px 64px 20px 24px;
          border-radius: 8px;
          border: 1px solid var(--stroke, #1E2E45);
          background: var(--dark-blue, #0E1F34);
          overflow: hidden;
          transition: .3s ease-in-out;

          .faq-question {
            color: var(--white, #FFF);
            font-family: "Red Hat Display";
            font-size: 1.25rem;
            font-weight: 700;
            line-height: 140%; /* 28px */
          }

          .faq-icon {
            transition: .3s ease-in-out;
            position: absolute;
            top: 24px;
            right: 24px;
          }

          .faq-answer {
            margin-top: 24px;
            color: var(--text, #C3D3E8);
            font-family: "Red Hat Display";
            font-size: 1.125rem;
            font-weight: 400;
            line-height: 140%; /* 25.2px */
          }
          &:hover {
            cursor: pointer;
          }
        }
        .faq-active-item {
          max-height: 200px !important;
          border-radius: 8px;
          border: 1px solid var(--Blue---Main-Color, #0084FF);
          background: var(--dark-blue, #0E1F34);
          .faq-icon {
            transform: rotate(135deg);
            path {
              stroke: var(--green, #0af89d);
            }
          }
        }
      }
    }
    @media (max-width: 550px) {
      padding: 40px 0px;
      .container {
        .faq-title {
          font-size: 2rem;
        }
        .faq-description {
          font-size: 1rem;
        }
        .faq-list-holder {
          margin-top: 32px;
          .faq-item {
            &:nth-of-type(2), &:nth-of-type(5) {
              max-height: 85px;
              .faq-icon {
                top: 30px;
              }
            }
          }
        }
      }  
    }
    @media (max-width: 500px) {
      .container {
        .faq-list-holder {
          .faq-item {
            &:nth-of-type(1),
            &:nth-of-type(2),
            &:nth-of-type(3),
            &:nth-of-type(5),
            &:nth-of-type(6) {
              max-height: 85px;
              .faq-icon {
                top: 30px;
              }
            }
          }
        }
      }  
    }
    @media (max-width: 375px) {
      .container {
        .faq-list-holder {
          .faq-item {
            max-height: 85px;
            .faq-icon {
              top: 30px;
            }
          }
        }
      }  
    }
  }
</style>