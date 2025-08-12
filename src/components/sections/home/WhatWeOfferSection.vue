<script setup lang="ts">
  // Imports
  import { ref } from 'vue';
  // Components
  import LabelComponent from '@/components/sections/home/partials/LabelComponent.vue';
  // Images
  import wwe_image_1 from '@images/home/what-we-offer-1.webp';
  import wwe_image_2 from '@images/home/what-we-offer-2.webp';
  import wwe_image_3 from '@images/home/what-we-offer-3.webp';

  const dropDownState = ref<string | null>('professional-support');
  const wwe_image = ref<string | null>(wwe_image_1);

  const toggleDropDown =  (dropDown: string): void => {
    dropDownState.value = dropDownState.value === dropDown ? null : dropDown;

    switch (dropDown) {
      case 'professional-support':
        wwe_image.value = wwe_image_1;
        break;
      case 'innovative-solutions':
        wwe_image.value = wwe_image_2;
        break;
      case 'customer-satisfaction':
        wwe_image.value = wwe_image_3;
        break;
      default:
        wwe_image.value = wwe_image_1;
        break;
    }
  }
</script>

<template>
  <section class="what-we-offer">
    <div class="what-we-offer-container container">
      <div class="wwe-content-holder">
        <LabelComponent label="Šta vam pružamo?" />
        <h3 class="wwe-title">Za male biznise koji žele više kontrole i manje stresa</h3>
        <ul class="wwe-drop-down-list">
          <li @click="toggleDropDown('professional-support')" 
              :class="{
                'wwe-drop-down-item': true,
                'professional-support': true,
                'wwe-drop-down-item-open': dropDownState === 'professional-support'
              }">
            <div class="wwe-drop-down-item-heading">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_473_402)">
                <path d="M16 23.7778H16.0156M16 19.1111C17.3854 16.1458 20.6667 16.3646 20.6667 12.8889C20.6667 10.5556 19.1111 8.22222 16 8.22222C13.5922 8.22222 12.1162 9.6198 11.5718 11.3333M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z" stroke="#0084FF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_473_402">
                <rect width="32" height="32" fill="white"/>
                </clipPath>
                </defs>
              </svg>
              <p>Profesionalna podrška</p>
              <svg v-if="dropDownState === 'professional-support'" width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1.67773H0.00195312V0.320312H16V1.67773Z" fill="white"/>
              </svg>
              <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.67969 0V7.32129H16V8.67871H8.67969V15.998H7.32227V8.67871H0.00195312V7.32129H7.32227V0H8.67969Z" fill="white"/>
              </svg>
            </div>
            <p class="wwe-drop-down-content">Naš stručni tim vam je dostupan 24/7 kako biste u svakom trenutku imali pouzdanu podršku i jasne smernice za uspešno vođenje poslovanja.</p>
          </li>

          <li @click="toggleDropDown('innovative-solutions')" 
              :class="{
                'wwe-drop-down-item': true,
                'innovative-solutions': true,
                'wwe-drop-down-item-open': dropDownState === 'innovative-solutions'
              }">
            <div class="wwe-drop-down-item-heading">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 22.2222H11M20.1667 11.3333C20.1667 9.18556 18.3012 7.44444 16 7.44444M6 11.3333C6 14.788 8.01099 17.8043 11 19.418V27.5C11 28.8807 12.1193 30 13.5 30H18.5C19.8807 30 21 28.8807 21 27.5V19.418C23.989 17.8043 26 14.788 26 11.3333C26 6.17868 21.5228 2 16 2C10.4772 2 6 6.17868 6 11.3333Z" stroke="#0AF89D" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p>Inovativna rešenja</p>
              <svg v-if="dropDownState === 'innovative-solutions'" width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1.67773H0.00195312V0.320312H16V1.67773Z" fill="white"/>
              </svg>
              <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.67969 0V7.32129H16V8.67871H8.67969V15.998H7.32227V8.67871H0.00195312V7.32129H7.32227V0H8.67969Z" fill="white"/>
              </svg>
            </div>
            <p class="wwe-drop-down-content">Koristimo najsavremenije tehnologije kako bismo kreirali rešenja po meri vašeg biznisa – praktična, efikasna i spremna za budućnost.</p>
          </li>
          <li @click="toggleDropDown('customer-satisfaction')"
              :class="{
                'wwe-drop-down-item': true,
                'customer-satisfaction': true,
                'wwe-drop-down-item-open': dropDownState === 'customer-satisfaction'
              }">
            <div class="wwe-drop-down-item-heading">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 14.5L24.6667 17L30 12" stroke="#9975FF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.5 15C14.5376 15 17 12.5376 17 9.5C17 6.46243 14.5376 4 11.5 4C8.46243 4 6 6.46243 6 9.5C6 12.5376 8.46243 15 11.5 15Z" stroke="#9975FF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 28V25.3333C21 23.9188 20.4662 22.5623 19.516 21.5621C18.5658 20.5619 17.2771 20 15.9333 20H7.06667C5.7229 20 4.43418 20.5619 3.48399 21.5621C2.53381 22.5623 2 23.9188 2 25.3333V28" stroke="#9975FF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p>Zadovoljstvo korisnika</p>
              <svg v-if="dropDownState === 'customer-satisfaction'" width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1.67773H0.00195312V0.320312H16V1.67773Z" fill="white"/>
              </svg>
              <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.67969 0V7.32129H16V8.67871H8.67969V15.998H7.32227V8.67871H0.00195312V7.32129H7.32227V0H8.67969Z" fill="white"/>
              </svg>
            </div>            
            <p class="wwe-drop-down-content">Svaka interakcija sa nama je osmišljena tako da bude jednostavna, prijatna i korisna. Vaše zadovoljstvo je naš prioritet.</p>
          </li>
        </ul>
      </div>
      <div class="wwe-image-holder ">
        <img :src="wwe_image" alt="What We Offer Dynamic Image">
      </div>
    </div>
  </section>
</template>

<style scoped>
  .what-we-offer {
    padding: 60px 0;
    background: var(--Dark, #0D1B2E);
    .what-we-offer-container {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 60px;
      .wwe-content-holder {
        flex: 1 0 45%;
        .wwe-title{
          margin: 2rem 0px;
          color: var(--White, #FFF);
          font-size: 3rem;
          font-weight: 700;
          line-height: 140%; /* 67.2px */
        }
        .wwe-drop-down-list {
          list-style: none;
          min-height: 440px;
          .wwe-drop-down-item {
            padding: 2rem 0;
            height: auto;
            max-height: 93px;
            overflow: clip;
            transition: .3s ease-in-out;
            .wwe-drop-down-item-heading {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              gap: 20px;
              p {
                margin-right: auto;
                color: var(--White, #FFF);
                font-size: 1.5rem;
                font-weight: 700;
              }
              &:hover {
                cursor: pointer;
              }
            }
            .wwe-drop-down-content {
              margin-top: 1.5rem;
              font-size: 1.125rem;
              font-weight: 400;
              line-height: 150%; /* 27px */
            }
          }
          .professional-support {
            border-bottom: 0px solid var(--Blue---Main-Color, #0084FF);
          }
          .innovative-solutions {
            border-bottom: 0px solid var(--Green, #0AF89D);
          }
          .customer-satisfaction {
            border-bottom: 0px solid var(--Purple, #9975FF);
          }
        }
      }
      .wwe-image-holder {
        flex: 1 0 45%;
        border-radius: 8px;
        overflow: clip;
        img {
          object-fit: cover;
          display: block;
          max-width: 100%;
          height: auto;
          transition: .3s ease-in-out;
          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }
  }

.wwe-drop-down-item-open {
  max-height: 250px !important;
  border-bottom-width: 2px !important;
}
</style>