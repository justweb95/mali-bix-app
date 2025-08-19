<script setup lang="ts">  

  interface props {
    label: string;
    heading: string;
    description: string;
    x_count: number;
    redirect_url: string;
  }

  const props = defineProps<props>();

  const package_data: Array<string> | null = [
    'Client Management',
    'Bills',
    'Invoices',
    'Fiscalization',
    'Analytics & Reports',
    'SMS Campaigns - Test',
    'Multi-User Calendar',
    'Appointments'
  ];
</script>

<template>
  <div class="single-price-card">
    <h4 class="price-card-label">
      {{ props.label }}
      <span 
        v-if="props.label === 'Standard'"
        class="popular-label"
        >POPULAR</span>
    </h4>
    <h4 class="price-card-heading">{{ props.heading }}</h4>
    <p class="price-card-description">{{ props.description }}</p>
    <span class="price-card-divider"></span>
    <ul class="price-card-info-list">
      <li v-for="(package_name, index) in package_data" class="price-card-info-item">
        <svg v-if="index < package_data.length - props.x_count" width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 5.88889L8.06897 12L18 2" stroke="#0084FF" stroke-width="3"/>
        </svg>
        <svg v-else width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2L2 16" stroke="#FF3344" stroke-width="3"/>
          <path d="M2 2L16 16" stroke="#FF3344" stroke-width="3"/>
        </svg>
        <p>{{ package_name }}</p>
      </li>
    </ul>
    <router-link :to="props.redirect_url" class="price-card-button">Izaberi {{props.label}}</router-link>
  </div>
</template>

<style scoped>
  .single-price-card {
    min-width: 265px;
    flex: 1 0 20%;
    display: flex;
    flex-direction: column;
    padding: 24px;
    border-radius: 8px;
    background: var(--dark-blue, #0E1F34);
    transition: .3s ease-in-out;
    .price-card-label {
      color: var(--Blue---Main-Color, #0084FF);
      font-family: "Red Hat Display";
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 150%; /* 27px */
      text-transform: uppercase;
      .popular-label {
        vertical-align: middle;
        margin-left: 14px;
        padding: 4px 12px;
        border-radius: 40px;
        background: linear-gradient(180deg, #0AF89D -14.59%, #00D081 102.08%);
        box-shadow: 0 2px 2px 0 #38FF95 inset;
        color: var(--dark, #0C1625);
        text-align: center;
        font-family: "Red Hat Display";
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
    .price-card-heading {
      margin: 4px 0;
      color: var(--White, #FFF);
      font-size: 2rem;
      font-weight: 700;
      line-height: 140%; /* 44.8px */
    }
    .price-card-description {
      color: var(--Text, #C3D3E8);
      font-family: "Red Hat Display";
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 140%; /* 25.2px */
      letter-spacing: 0.36px;
    }
    .price-card-divider {
      display: block;
      width: 100%;
      height: 1px;
      background: var(--Divider, #2F435E);
      margin: 24px 0;
    }
    .price-card-info-list {
      list-style: none;
      margin-bottom: 32px;
      .price-card-info-item {
        margin: 8px 0;
        display: flex;
        align-items: center;
        gap: 16px;
        p {
          color: var(--White, #FFF);
          font-family: "Red Hat Display";
          font-size: 1.125rem;
          font-weight: 500;
          line-height: 150%; /* 27px */
        }
      }
    }
    .price-card-button {
      text-decoration: none;
      margin-top: auto;
      border-radius: 4px;
      background: var(--Blue---Main-Color, #0084FF);
      border: 1px solid var(--Blue---Main-Color, #0084FF);
      padding: 15px 32px;
      color: var(--White, #FFF);
      text-align: center;
      font-family: "Red Hat Display";
      font-size: 1.125rem;
      font-weight: 500;
      letter-spacing: 0.72px;
      transition: .2s ease-in-out;
      &:hover {
        background: transparent;
      }
    }
    &:hover {
      transform: scale(1.03);
    }
  }
</style>