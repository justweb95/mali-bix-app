<script setup lang="ts">
  import footerLogo from '@images/mba-logo-desktop.svg';

  import googlePlayBadge from '@images/home/google-play-badge.svg';
  import appStoreBadge from '@images/home/app-store-badge.svg';

  const currentYear: number = new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="footer-holder container">
      <div class="footer-content">
        <img :src="footerLogo" alt="Mali Biz App Logo">
        <p class="footer-description">Povežite se sa klijentima, ubrzajte poslovanje i razvijajte svoj biznis bez stresa.</p>
        <div class="footer-social-icons">
          <a href="https://www.twitter.com/" class="social-icon">
            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.974609" width="36" height="36" rx="18" fill="#0E1F34"/>
              <path d="M23.3674 11.7754H25.9894L20.2609 17.8758L27.0004 26.1754H21.7236L17.5911 21.1411L12.8615 26.1754H10.2381L16.3656 19.6502L9.90039 11.7761H15.3111L19.0468 16.3776L23.3674 11.7754ZM22.4475 24.7137H23.9003L14.5217 13.1608H12.9627L22.4475 24.7137Z" fill="white"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/" class="social-icon">
            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.974609" width="36" height="36" rx="18" fill="#0E1F34"/>
              <path d="M19.2004 20.0554H20.9147L21.6004 17.1754H19.2004V15.7354C19.2004 14.9938 19.2004 14.2954 20.5718 14.2954H21.6004V11.8762C21.3768 11.8452 20.5327 11.7754 19.6413 11.7754C17.7796 11.7754 16.4575 12.9684 16.4575 15.1594V17.1754H14.4004V20.0554H16.4575V26.1754H19.2004V20.0554Z" fill="white"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/" class="social-icon">
            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.974609" width="36" height="36" rx="18" fill="#0E1F34"/>
              <path d="M20.3038 18.9754C20.3038 19.4311 20.1687 19.8765 19.9155 20.2554C19.6623 20.6343 19.3025 20.9296 18.8815 21.104C18.4605 21.2784 17.9972 21.324 17.5503 21.2351C17.1034 21.1462 16.6929 20.9268 16.3706 20.6046C16.0484 20.2823 15.829 19.8718 15.7401 19.4249C15.6512 18.9779 15.6968 18.5147 15.8712 18.0937C16.0456 17.6727 16.3409 17.3129 16.7198 17.0597C17.0987 16.8065 17.5441 16.6714 17.9998 16.6714C18.6103 16.6733 19.1952 16.9166 19.6269 17.3483C20.0586 17.78 20.3019 18.3649 20.3038 18.9754ZM25.1998 15.8074V22.1434C25.1998 23.2127 24.775 24.2383 24.0189 24.9944C23.2627 25.7506 22.2372 26.1754 21.1678 26.1754H14.8318C13.7625 26.1754 12.7369 25.7506 11.9808 24.9944C11.2246 24.2383 10.7998 23.2127 10.7998 22.1434V15.8074C10.7998 14.738 11.2246 13.7125 11.9808 12.9563C12.7369 12.2002 13.7625 11.7754 14.8318 11.7754H21.1678C22.2372 11.7754 23.2627 12.2002 24.0189 12.9563C24.775 13.7125 25.1998 14.738 25.1998 15.8074ZM21.4558 18.9754C21.4558 18.2919 21.2531 17.6237 20.8734 17.0553C20.4936 16.487 19.9539 16.044 19.3224 15.7825C18.6909 15.5209 17.996 15.4524 17.3256 15.5858C16.6552 15.7191 16.0394 16.0483 15.556 16.5316C15.0727 17.015 14.7436 17.6308 14.6102 18.3012C14.4769 18.9716 14.5453 19.6664 14.8069 20.2979C15.0685 20.9294 15.5114 21.4692 16.0798 21.8489C16.6481 22.2287 17.3163 22.4314 17.9998 22.4314C18.9164 22.4314 19.7954 22.0673 20.4436 21.4192C21.0917 20.771 21.4558 19.892 21.4558 18.9754ZM22.6078 15.2314C22.6078 15.0605 22.5571 14.8935 22.4622 14.7514C22.3673 14.6093 22.2323 14.4986 22.0744 14.4332C21.9166 14.3678 21.7428 14.3507 21.5752 14.384C21.4076 14.4173 21.2537 14.4996 21.1329 14.6205C21.012 14.7413 20.9297 14.8952 20.8964 15.0628C20.8631 15.2304 20.8802 15.4042 20.9456 15.562C21.011 15.7199 21.1217 15.8548 21.2638 15.9498C21.4059 16.0447 21.5729 16.0954 21.7438 16.0954C21.973 16.0954 22.1927 16.0044 22.3547 15.8423C22.5168 15.6803 22.6078 15.4605 22.6078 15.2314Z" fill="white"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/" class="social-icon">
            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.974609" width="36" height="36" rx="18" fill="#0E1F34"/>
              <path d="M10.7998 12.6523C10.7998 12.1371 10.9822 11.7121 11.3471 11.3773C11.712 11.0424 12.1863 10.875 12.7701 10.875C13.3434 10.875 13.8073 11.0398 14.1618 11.3695C14.5266 11.7095 14.7091 12.1526 14.7091 12.6986C14.7091 13.1932 14.5319 13.6053 14.1774 13.935C13.8126 14.275 13.333 14.445 12.7388 14.445H12.7232C12.1498 14.445 11.6859 14.275 11.3315 13.935C10.977 13.595 10.7998 13.1674 10.7998 12.6523ZM11.0031 26.175V15.8514H14.4745V26.175H11.0031ZM16.3979 26.175H19.8693V20.4105C19.8693 20.0498 19.911 19.7717 19.9944 19.5759C20.1403 19.2256 20.3619 18.9294 20.659 18.6873C20.9561 18.4451 21.3288 18.3241 21.777 18.3241C22.9446 18.3241 23.5284 19.102 23.5284 20.6577V26.175H26.9998V20.2559C26.9998 18.7311 26.6349 17.5745 25.9052 16.7864C25.1755 15.9982 24.2112 15.6041 23.0124 15.6041C21.6676 15.6041 20.6199 16.1759 19.8693 17.3195V17.3505H19.8537L19.8693 17.3195V15.8514H16.3979C16.4187 16.1811 16.4291 17.2062 16.4291 18.9268C16.4291 20.6474 16.4187 23.0635 16.3979 26.175Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>

      <ul class="footer-quick-links">
        <li><h5>Brzi linkovi</h5></li>
        <li><a href="/">Home</a></li>
        <li><a href="/">Registruj se</a></li>
        <li><a href="/">Prijavi se</a></li>
        <li><a href="/">Kontakt</a></li>
      </ul>
      
      <ul class="footer-other-links">
        <li><h5>Ostalo</h5></li>
        <li><a href="/">Pitanja korisnika</a></li>
        <li><a href="/">O nama</a></li>
        <li><a href="/">Terms & Conditions</a></li>
        <li><a href="/">Privacy Policy</a></li>
      </ul>
      
      <ul class="footer-download-links">
        <li><h5>Preuzmi aplikaciju</h5></li>
        <li><a href=""><img :src="googlePlayBadge" alt="Get it on Google Play"></a></li>
        <li><a href=""><img :src="appStoreBadge" alt="Download on the App Store"></a></li>
      </ul>
      <div class="more-info">
        <p class="copy-right"><span>©</span>{{ currentYear }} SmsWebApp <span>|</span> All rights reserved.</p>
        <p class="creator">Website by: <a href="https://justweb.rs/">Just Web</a></p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    background: var(--Dark, #0D1B2E);
    .footer-holder {
      display: flex;
      flex-wrap: wrap;
      gap: 80px;
      .footer-content {
        margin-right: auto;
        max-width: 313px;
        .footer-description {
          margin: 24px 0px 32px;
          color: #C3D3E8;
          font-family: "Red Hat Display";
          font-size: 1rem;
          font-weight: 400;
          line-height: 150%; /* 24px */
        }
        .footer-social-icons {
          display: flex;
          gap: 12px;
          .social-icon {
            transition: 0.3s ease;
            &:hover {
              cursor: pointer;
              transform: scale(1.3);
            }
          }
        }
      }
      .footer-quick-links, .footer-other-links, .footer-download-links {
        list-style: none;
        li {
          h5 {
            margin-bottom: 20px;
            color: #FFF;
            font-family: "Red Hat Display";
            font-size: 1rem;
            font-weight: 500;
          }
          a {
            position: relative;
            display: block;
            width: fit-content;
            margin: 16px 0px;
            text-decoration: none;
            color: #C3D3E8;
            font-family: "Red Hat Display";
            font-size: 1rem;
            font-weight: 400;
            &::before {
              position: absolute;
              content: '';
              display: inline-block;
              bottom: -5px;
              left: -.5rem;
              width: 0%;
              height: 2px;
              background-color: var(--Blue---Main-Color, #0084FF);
              transition: width 0.3s ease;
            }
            &:hover {
              &::before {
                width: calc(100% + 1rem);
              }
            }
          }
        }
      }
      .footer-download-links {
        li {
          a {
            &::before {
              all: unset;
            }
          }
        }
      }
      .more-info {
        padding: 20px 0px;
        flex: 1 0 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 0.6px solid #172942;

        .copy-right {
          color: var(--text, #C3D3E8);
          font-family: "Red Hat Display";
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 145%;
          span {
            color: var(--green, #0AF89D);
          }
        }
        .creator {
          color: var(--text, #C3D3E8);
          font-family: "Red Hat Display";
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 145%;
          a {
            text-decoration: none;
            color: var(--green, #0AF89D);
          }
        }
      }
    }
    @media (max-width: 768px) {
      .footer-holder {
        gap: 60px;
        .footer-other-links {
          flex: 1 0 50%;
        }
      }
    }
    @media (max-width: 550px) {
      .footer-holder {
        gap: 40px;
        .footer-content {
          flex: 1 0 100%;
          margin-right: 0px;
          max-width: 100%;

        }
        .footer-other-links, .footer-quick-links {
          flex: 1 0 35%;
        }
        .footer-download-links {
          flex: 1 0 100%;
          display: flex; 
          flex-wrap: wrap;
          gap: 12px;
          li {
            flex: 1 0 100%;
            h5 {
              margin-bottom: 24px;
            }
            &:nth-of-type(2), &:nth-of-type(3) {
              flex: 1 0 40%;
              a {
                margin: 0px;
                img {
                  display: block;
                  max-width: 100%;
                }
              }
            }
          }         
        }
        .more-info {
          flex-wrap: wrap;
          gap: 8px;
          p {
            flex: 1 0 100%;
          }
        }
      }
    }
  }
</style>