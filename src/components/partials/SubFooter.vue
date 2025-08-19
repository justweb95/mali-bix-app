<script setup>
  import subFooterImage from '@images/home/sub-footer-phone-img.webp';
  import googlePlayBadge from '@images/home/google-play-badge.svg';
  import appStoreBadge from '@images/home/app-store-badge.svg';

</script>

<template>
  <section class="sub-footer">
    <div class="sub-footer-holder container">
      <div class="sub-footer-content">
        <h3 class="sub-footer-heading">Preuzmi MaliBizApp na svom telefonu</h3>
        <p class="sub-footer-description"><span>Nosite svoj biznis u džepu</span> — zakazivanja, fiskalni računi, izveštaji i podsetnici, sve dostupno u pokretu. Mobilna aplikacija radi besprekorno na Android i iOS uređajima.
        </p>
        <div class="sub-footer-cta">
          <a class="cta-holder" href="">
            <img :src="googlePlayBadge" alt="Google Play Badge">
          </a>
          <a class="cta-holder" href="">
            <img :src="appStoreBadge" alt="App Store Badge">
          </a>
        </div>
      </div>
      <div class="sub-footer-image">
        <img :src="subFooterImage" alt="Sub Footer Image">
      </div>
    </div>
  </section>
</template>

<style scoped>
  .sub-footer {
    padding: 60px 0;
    background: var(--dark, #0C1625);
    .sub-footer-holder {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 60px 80px;
      background-image: url('@images/home/sub-footer-bg.webp');
      background-position: center;
      background-size: cover;
      overflow: hidden;
      border-radius: 12px;
      .sub-footer-content {
        max-width: 490px;
        .sub-footer-heading {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 140%; /* 56px */
        }
        .sub-footer-description {
          margin: 20px 0px 40px;
          font-family: "Red Hat Display";
          font-size: 1.125rem;
          font-weight: 400;
          line-height: 150%;
          span {
            font-family: "Red Hat Display";
            font-size: 1.125rem;
            font-weight: 700;
            line-height: 150%; /* 27px */
          }
        }
        .sub-footer-cta {
          max-width: 100%;
          display: flex;
          gap: 24px;
        }
      }
      .sub-footer-image {
        flex: 1 0 35%;
        img {
          max-width: 100%;
        }
      }
    }
    @media (max-width: 768px) {
      .sub-footer-holder {
        flex-direction: column;
        align-items: center;
        padding: 40px 60px;
        .sub-footer-content {
          max-width: 100%;
        }
        .sub-footer-image {
          width: 80%;
          margin-top: 40px;
          img {
            max-width: 100%;
          }
        }
      }
    }
    @media (max-width: 550px) {
      padding: 40px 0px;
      .sub-footer-holder {
        padding: 32px 20px;
        .sub-footer-content {
          max-width: 100%;
          .sub-footer-heading {
            font-size: 2rem;
          }
          .sub-footer-description {
            margin: 16px 0px 32px;
            font-size: 1rem;
          }
          .sub-footer-cta {
            .cta-holder {
              flex: 1 0 45%;
              img {
                display: block;
                max-width: 100%;
              }
            }
          }
        }
        .sub-footer-image {
          width: 100%;
          margin-top: 40px;
        }
      }
    }
  }
</style>