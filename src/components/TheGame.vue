<template>
  <img
    v-show="!props.isGameActive"
    src="@/assets/img/card.png"
    alt="game"
    class="fake-game"
  >
  <div v-show="props.isGameActive" class="the-game">
    <ul class="cards">
      <li
        v-for="(card, ind) in localQuestions"
        :key="ind"
        :class="['tinder--card', `_card${ind+1}`, { '_pink' : (ind % 2 !== 0), '_rotate' : ind !== 0 }]"
        :style="{zIndex: localQuestions.length - ind}"
      >
        <p class="card-number">
          {{ ind+1 >= 10 ? '' : 0 }}{{ ind + 1 }}
        </p>

        <img :src="card.image.value" alt="image" class="card-img">
      </li>
    </ul>

    <div class="bottom">
      <div
        class="text"
        v-html="localQuestions[questionCounter - 1].text.value"
      />
      <div class="controls">
        <app-button id="nope" type="game_no" @click="no" />
        <app-button id="love" type="game_yes" @click="yes" />
      </div>
      <div class="progress-bar-border">
        <div
          class="the-bar"
          :style="{width:`${questionCounter*(100/localQuestions.length)}%`}"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  onMounted,
  defineProps,
  ref,
} from 'vue';

import Hammer from 'hammerjs';
// import mq from '@/composibles/mq';
import { popMethods } from '@/store/popup';
import AppButton from '@/components/general/AppButton.vue';
import { pauseTimer } from '@/composibles/timer';

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  isGameActive: {
    type: Boolean,
    default: false,
  },
});

const localQuestions = ref([...props.list].sort(() => Math.random() - 0.5));
const questionCounter = ref(1);
const answers = ref([]);

const addAnswer = (item) => {
  const gameContainer = document.querySelector('.the-game');

  if (item.nextSibling.childNodes.length) {
    item.nextSibling.classList.remove('_rotate');
  }

  answers.value.push({
    questionId: localQuestions.value[questionCounter.value - 1].questionId,
    answer: gameContainer.classList.contains('tinder_love') ? 'yes' : 'no',
  });

  if (questionCounter.value < localQuestions.value.length) {
    questionCounter.value += 1;
  } else {
    pauseTimer();
    document.body.style.overflowY = 'hidden';
    popMethods.setPopupName('email');
    popMethods.setPopupData(answers.value);
  }
};

const initCards = () => {
  const cards = document.querySelectorAll('.tinder--card');
  const gameContainer = document.querySelector('.the-game');

  cards.forEach((item) => {
    const hammer = new Hammer(item);

    hammer.on('pan', (event) => {
      item.classList.add('moving');

      if (event.deltaX === 0) return;
      if (event.center.x === 0 && event.center.y === 0) return;

      gameContainer.classList.toggle('tinder_love', event.deltaX > 0);
      gameContainer.classList.toggle('tinder_nope', event.deltaX < 0);

      const xMulti = event.deltaX * 0.03;
      const yMulti = event.deltaY / 80;
      const rotate = xMulti * yMulti;

      // eslint-disable-next-line
      event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
    });

    hammer.on('panend', (event) => {
      item.classList.remove('moving');
      const moveOutWidth = document.body.clientWidth;

      const keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;
      event.target.classList.toggle('removed', !keep);

      if (keep) {
        // eslint-disable-next-line
        event.target.style.transform = '';
      } else {
        const endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
        const toX = event.deltaX > 0 ? endX : -endX;
        const endY = Math.abs(event.velocityY) * moveOutWidth;
        const toY = event.deltaY > 0 ? endY : -endY;
        const xMulti = event.deltaX * 0.03;
        const yMulti = event.deltaY / 80;
        const rotate = xMulti * yMulti;

        // eslint-disable-next-line
        event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';

        addAnswer(item);

        gameContainer.classList.remove('tinder_love');
        gameContainer.classList.remove('tinder_nope');
      }
    });
  });
};

// eslint-disable-next-line
const createButtonsListener = (arg) => {
  // eslint-disable-next-line consistent-return
  const listener = (event) => {
    const cards = document.querySelectorAll('.tinder--card');
    const gameContainer = document.querySelector('.the-game');
    const moveOutWidth = document.body.clientWidth * 1.5;

    if (!cards.length) return;

    const card = cards[questionCounter.value - 1];

    if (arg) {
      gameContainer.classList.add('tinder_love');
      card.style.transform = `translate(${moveOutWidth}px, -100px) rotate(-30deg)`;
    } else {
      gameContainer.classList.add('tinder_nope');
      card.style.transform = `translate(-${moveOutWidth}px, -100px) rotate(30deg)`;
    }

    addAnswer(card);

    gameContainer.classList.remove('tinder_love');
    gameContainer.classList.remove('tinder_nope');

    event.preventDefault();
  };

  return listener;
};

const yes = createButtonsListener(true);
const no = createButtonsListener(false);

onMounted(() => {
  initCards();
});

</script>

<style lang="scss" scoped>
.fake-game {
  width: 370px;
}

.the-game {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 370px;
  height: 640px;

  .cards {
    position: relative;
    top: -220px;

    .tinder--card {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 370px;
      height: 400px;
      border-radius: 30px;
      background: linear-gradient(160.5deg, #1C2860 12.4%, #357FFF 78.87%);
      cursor: grab;

      &._pink {
        background: linear-gradient(180deg, #D6819E 0%, #713E59 100%);

        .card-number {
          color: #E3A1B8;
        }
      }

      &._rotate {
        transform: rotate(-7deg) translate(10px, 0) scale(.95);
        transform-origin: left bottom;
      }

      .card-number {
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 60px;
        line-height: 71px;
        font-weight: 500;
        color: #CADBFF;
        pointer-events: none;
      }

      .card-img {
        max-width: 306px;
        max-height: 270px;
        pointer-events: none;
      }

      &.moving {
        cursor: grabbing;
        transition: none;
      }
    }
  }

  .bottom {
    z-index: 50;
    position: relative;
    top: 115px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 34px;
    min-height: 274px;
    width: 370px;
    padding: 30px 35px 22px 35px;
    border-radius: 32px 32px 22px 22px;
    background-color: #0A0F2B;

    .text {
      font-size: 26px;
      line-height: 31px;
      text-align: center;
    }

    .controls {
      display: flex;
      gap: 109px;
      padding-bottom: 30px;
      overflow: hidden;

      #nope::after {
        content: "Миф";
        position: absolute;
        top: -320px;
        left: 10px;
        width: fit-content;
        height: 20px;
        font-size: 26px;
        line-height: 31;
        font-weight: 500;
        color: #BD7F94;
      }

      #love::after {
        content: "Правда";
        position: absolute;
        top: -320px;
        left: 0;
        width: fit-content;
        height: 20px;
        font-size: 26px;
        line-height: 31;
        font-weight: 500;
        color: #2D65B7;
      }
    }

    .progress-bar-border {
      position: absolute;
      bottom: -50px;
      width: 100%;
      height: 7px;
      border-radius: 10px;
      background-color: #2D65B7;

      .the-bar {
        height: 100%;
        border-radius: 5px;
        background-color: white;
      }
    }
  }
}

@media screen and (max-width:1100px) {
  .the-game {
    position: relative;
    display: initial;
    width: 370px;
    height: 640px;
    margin: 0 auto 50px auto;

    .cards {
      position: relative;
      top: 31px;
    }

    .bottom {
      position: absolute;
      top: initial;
      bottom: 0;
    }
  }
}

@media screen and (max-width:500px) {
  .the-game {
    position: relative;
    width: 340px;
    height: 640px;

    .cards {
      .tinder--card {
        width: 340px;
      }
    }

    .bottom {
      width: 340px;
      padding: 28px 30px;

      .text {
        font-size: 24px;
        line-height: 28px;
      }

      .controls {
        padding: 0 20px 40px 20px;
      }
    }
  }
}

@media screen and (max-width:400px) {
  .the-game {
    position: relative;
    width: 100%;

    .cards {
      .tinder--card {
        width: 100%;

        .card-img {
          max-width: 260px;
        }
      }
    }

    .bottom {
      width: 100%;
      padding: 25px 25px;

      .controls {
        gap: 70px;
      }
    }
  }
}
</style>
