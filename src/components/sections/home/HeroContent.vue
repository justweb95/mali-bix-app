<script setup>

</script>

<template>
    <span class="hero-label">
      <p class="hero-new-label">NOVO</p>
      <p class="hero-text-label">10-dnevna besplatna proba!</p>
    </span>
    <h1>Sve-u-jednom poslovno rešenje za Vaš biznis</h1>
    <p class="hero-text-info">Povežite se sa klijentima, ubrzajte poslovanje i razvijajte svoj biznis bez stresa.</p>
    <a class="hero-cta" href="#">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_357_705)">
        <path d="M19.8337 14C18.5219 15.3117 13.417 19.25 13.417 19.25M19.8337 14C23.3337 10.5 23.3337 8.16667 23.3337 4.66667C19.8337 4.66667 17.5003 4.66667 14.0003 8.16667M19.8337 14L20.4755 17.2094C20.8034 18.8487 20.2903 20.5434 19.1082 21.7255L17.2711 23.5626C16.8013 24.0324 16.0125 23.9219 15.6898 23.3411L13.417 19.25M14.0003 8.16667L8.75033 14.5833M14.0003 8.16667L10.7909 7.52479C9.15165 7.19693 7.45695 7.71004 6.27483 8.89216L4.43776 10.7292C3.96797 11.199 4.07845 11.9878 4.65922 12.3105L8.75033 14.5833M8.75033 14.5833L13.417 19.25M18.0837 9.91724L16.917 11.0839M3.50033 24.5L7.72589 23.6549C8.66074 23.4679 9.33366 22.6471 9.33366 21.6937L9.33366 20.6667C9.33366 19.5621 8.43823 18.6667 7.33366 18.6667L6.3066 18.6667C5.35324 18.6667 4.53241 19.3396 4.34544 20.2744L3.50033 24.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_357_705">
        <rect width="28" height="28" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      Započni Odmah
    </a>
</template>

<style scoped>
  .hero-label {
    padding: 6px 16px 6px 6px;
    border-radius: 8px;
    border: 1px solid var(--Green, #0AF89D);

    width: fit-content;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    .hero-new-label {
      padding: 3.5px 14px;
      color: var(--Dark, #0D1B2E);
      text-align: center;
      font-family: "Red Hat Display";
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
      border-radius: 4px;
      background: var(--Green, #0AF89D);
    }
    .hero-text-label {
      color: var(--White, #FFF);
      text-align: center;
      font-family: "Red Hat Display";
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
    }
  }

  h1 {
    max-width: 1000px;
    margin: 24px auto 24px;
    color: var(--White, #FFF);
    text-align: center;
  }

  .hero-text-info {
    color: #C3D3E8;
    text-align: center;
    font-family: "Red Hat Display";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .hero-cta {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;  
    gap: 10px;
    margin: 40px auto 60px;
    padding: 15px 32px;
    border-radius: 8px;
    background: var(--Blue---Main-Color, #0084FF);
    color: var(--White, #FFF);
    font-family: "Red Hat Display";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.8px;
    text-decoration: none;
  }
</style>