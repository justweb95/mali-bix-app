<script setup lang="ts">
  import { ref } from 'vue';
  const isMenuOpen = ref<boolean>(false);

  const toggleMenu = (): void => {
    isMenuOpen.value = !isMenuOpen.value;
    console.log(`Menu is now ${isMenuOpen.value ? 'open' : 'closed'}`);
  };
</script>

<template>
  <header>
    <ul class="container nav-list">
      <li class="header-logo"><img src="@images/mba-logo-desktop.svg" alt="Mali Biz App Logo"></li>

      <li class="header-item"><a href="/">Početak</a></li>
      <li class="header-item"><a href="#benefiti">Benefiti</a></li>
      <li class="header-item"><a href="#cenovnik">Cenovnik</a></li>
      <li class="header-item"><a href="#cesta-pitanja">Česta Pitanja</a></li>

      <li class="header-login"><a href="/about">Login</a></li>
      <li class="header-register"><a href="/about">Registruj se</a></li>

      <li class="burger-icon" @click="toggleMenu">
        <svg v-if="!isMenuOpen" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="4" fill="#0E1F34"/>
          <path d="M28 28H20V26H28V28ZM28 21H12V19H28V21ZM28 14H12V12H28V14Z" fill="white"/>
        </svg>

        <svg v-else width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="4" fill="#0D1B2E"/>
          <path d="M12 12L28 28" stroke="white" stroke-width="2"/>
          <path d="M28 12L12 28" stroke="white" stroke-width="2"/>
        </svg>
      </li>
      <li class="dropdown-menu-container" v-if="isMenuOpen">
        <ul class="dropdown-menu">
          <li><a href="/">Početak</a></li>
          <li><a href="#benefiti">Benefiti</a></li>
          <li><a href="#cenovnik">Cenovnik</a></li>
          <li><a href="#cesta-pitanja">Česta Pitanja</a></li>
          <li><span class="drop-donw-devider"></span></li>          
          <li><a class="drop-down-login" href="#login">Login</a></li>
          <li><a class="drop-down-register" href="#registruj-se">Registruj se</a></li>
        </ul>
      </li>
    </ul>
  </header>
</template>

<style scoped>
  header {
    position: relative;
    width: 100%;
    padding: 1.5rem 0;
    background-color: var(--dark, #0d1b2e);

    .nav-list {
      display: flex;
      align-items: center;
      justify-content: space-between;

      list-style: none;

      li {
        a {
          position: relative;
          text-decoration: none;
          color: var(--White, #FFF);
          font-family: "Red Hat Display";
          font-size: 1.125rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 0.72px;
          transition: 0.3s ease;
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
      
      .header-logo {
        margin-right: auto;
      }

      .header-item {
        padding: 0.9rem 1.5rem;
      }

      .header-login {
        margin-left: auto;
        margin-right: .0.75rem;
        padding: 0.9rem 2rem;
      }

      .header-register {
        padding: 0.9rem 1.5rem;
        border-radius: 4px;
        border: 1px solid var(--Blue---Main-Color, #0084FF);
        transition: .3s ease;
        &:hover {
          background-color: var(--Blue---Main-Color, #0084FF);
          cursor: pointer;
        }
        a {
          &:hover {
            &::before {
              width: 0%;
            }
          }
        }
      }

      .burger-icon {
        display: none;
      }

      .dropdown-menu-container {
        width: 100%;
        position: absolute;
        top: 100px;
        left: 0px;

        .dropdown-menu {
          padding: 1.5rem;
          list-style: none;
          background: var(--Dark-blue, #0E1F34);
          li {
            width: 100%;
            text-align: center;
            a {
              display: block;
              padding: 0.938rem 0;
              color: var(--White, #FFF);
              text-align: center;
              font-family: "Red Hat Display";
              font-size: 1.125rem;
              font-style: normal;
              font-weight: 600;
              line-height: normal;
              text-decoration: none;
              transition: color 0.3s ease;

              &:hover {
                color: var(--Blue---Main-Color, #0084FF);
              }
            }
            .drop-down-login, .drop-down-register {
              &:hover {
                color: var(--Blue---Main-Color, #0084FF);
                &::before {
                  width: 0%;
                }
              }
            }
            .drop-down-register {
              display: block;
              width: 100%;
              border-radius: 4px;
              border: 1px solid var(--Blue---Main-Color, #0084FF);
            }
            .drop-donw-devider {
              width: 100%;
              height: 1px;
              background: var(--stroke, #1E2E45);
            }
          }
        }
      }
    }
    @media (max-width: 1280px) {
      .nav-list {
        .header-item, .header-login, .header-register {
          display: none;
        }
        .burger-icon {
          display: block;
        }
      }
    }
  }
</style>