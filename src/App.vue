<template>
  <div class="wrapper">
    <popup-rule v-if="popState.name === 'rules'" @start-game="rulesBlockClickHandler" />
    <email-popup v-if="popState.name === 'email'" />
    <main class="main">
      <header :class="['app-container', 'header', {_game : state.isGameActive}]">
        <a href="https://github.com/NicholasSolo" class="logo-link" target="_blank">
          <img src="@/assets/img/logo.png" class="logo" alt="logo">
        </a>
        <timer-block
          :is-timer-visible="state.isGameActive"
        />
      </header>
      <div class="app-container container">
        <info-block v-show="isInfoShown" :btn-disabled="state.isGameActive" @click="infoBlockClickHandler" />
        <the-rules v-show="isRulesShown" @click="rulesBlockClickHandler" />
        <the-game v-if="isGameShown" :list="questions" :is-game-active="state.isGameActive" />
      </div>
    </main>
    <app-footer />
  </div>
</template>

<script setup>
import {
  reactive,
  computed,
} from 'vue';

import mq from '@/composibles/mq';
import startTimer, { time } from '@/composibles/timer';
import { popState, popMethods } from '@/store/popup';
import { mainState, mainMethods } from '@/store/data';

import AppFooter from '@/components/general/AppFooter.vue';
import TheGame from '@/components/TheGame.vue';
import InfoBlock from '@/components/InfoBlock.vue';
import TheRules from '@/components/TheRules.vue';
import PopupRule from '@/components/popups/rules/PopupRule.vue';
import EmailPopup from '@/components/popups/EmailPopup.vue';
import timerBlock from '@/components/timerBlock.vue';

mainMethods.setState(window.state);
time.minutes = mainState.state.timeMinutes.value;
time.seconds = mainState.state.timeSeconds.value;

const state = reactive({
  isRulesActive: false,
  isGameActive: false,
});

const questions = mainState.state.questionsList;

const isInfoShown = computed(() => (!state.isRulesActive && !state.isGameActive && mq.value !== 'lg') || mq.value === 'lg');
const isRulesShown = computed(() => state.isRulesActive);
const isGameShown = computed(() => (mq.value === 'lg' || state.isGameActive) && !!questions.length);

const infoBlockClickHandler = () => {
  if (mq.value === 'lg') {
    popMethods.setPopupName('rules');
  } else if (mq.value === 'md') {
    state.isRulesActive = true;
  }
};

const rulesBlockClickHandler = () => {
  if (mq.value !== 'lg') {
    state.isRulesActive = false;
  }

  state.isGameActive = true;
  startTimer(() => {
    popMethods.setPopupName('email');
    document.body.style.overflowY = 'hidden';
  });
};
</script>

<style lang="scss" scoped>
.main {
  flex-grow: 1;
  padding: 75px 0 0 0 ;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 125px;

    &._game {
      margin-bottom: 80px;
    }

    .logo-link {
      display: block;

      .logo {
        display: block;
        max-width: 140px;
      }

      &:hover {
        transform: scale(1.05);
      }
    }
  }
}

@include pre-tablet {
  .main {
    .container {
      justify-content: center;
    }

    .header {
      justify-content: center;
      margin-bottom: 40px;

      &._game {
        justify-content: space-between;
        margin-bottom: 0;
      }
    }
  }
}

@include tablet {
  .main {
    padding: 50px 0;

    .header {
      align-items: center;

      .logo-link {
        .logo {
          max-width: 100px;
        }
      }
    }
  }
}

@include mobile {
  .main {
    padding: 40px 0;
  }
}
</style>
