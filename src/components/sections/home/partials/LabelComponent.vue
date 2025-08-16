<script setup lang="ts">
  interface Props {
    label: String
  }
  
  const props = defineProps<Props>();
</script>

<template>
    <span class="label">{{ props.label }}</span>
</template>

<style scoped>
  .label {
    display: inline-block;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid var(--Green, #0AF89D);        
    color: var(--White, #FFF);

    font-size: 1.25rem;
    font-weight: 600;

    @media (max-width: 550px) {
      font-size: 1rem;
      padding: 6px 16px;
      
    }
  }
</style>