<script setup>
import { ref, onMounted } from 'vue'
import Typed from 'typed.js'

const el = ref(null)
const container = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fullText =
            "Zašto da se zadovoljavate prosečnim kad možete imati alat koji raste zajedno sa vašim poslovanjem?";

          // split last char
          const mainText = fullText.slice(0, -1);
          const lastChar = fullText.slice(-1);

          new Typed(el.value, {
            strings: [mainText],
            typeSpeed: 30,
            showCursor: false,
            loop: false,
            onComplete: () => {
              const span = document.createElement("span");
              span.classList.add("last-char");
              span.textContent = lastChar;
              el.value.appendChild(span);

              // trigger animation
              setTimeout(() => {
                span.classList.add("animate-last-char");
              }, 50);
            },
          });

          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  if (container.value) observer.observe(container.value);
});
</script>

<template>
  <section ref="container" class="sub-hero-container">
    <h2 class="sub-hero-title">
      <span ref="el"></span>
    </h2>
  </section>
</template>


<style scoped>
.sub-hero-container {
  padding: 60px 0px;
  width: 100%;
  background: var(--dark, #0C1625);
  .sub-hero-title {
    width: 95%;
    max-width: 908px;
    margin: 0px auto;
    color: var(--White, #FFF);
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    line-height: 140%; /* 56px */
  }
  @media (max-width: 550px) {
    padding: 40px 0;
    .sub-hero-title {
      font-size: 1.5rem;
    }
  }
}


/* initial state of the last char */
.last-char {
  display: inline-block;
  filter: blur(4px);
  opacity: 0;
  transform: translateY(20px);
}

/* animation for last char */
.animate-last-char {
  animation: dropIn 0.6s ease forwards;
}

@keyframes dropIn {
  0% {
    filter: blur(4px);
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    filter: blur(0);
    opacity: 1;
    transform: translateY(0);
  }
}
</style>