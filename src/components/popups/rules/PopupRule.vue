<template>
  <app-popup>
    <div class="popup-rule">
      <div class="left">
        <div class="title">
          {{ getCurrentData.title }}
        </div>
        <div class="number">
          {{ getCurrentData.number }}
        </div>
        <div class="text" v-html="getCurrentData.text" />
        <app-button
          class="next-button"
          :type="getCurrentData.buttonType === 'next' ? 'blue' : 'red'"
          @click="nextStep(getCurrentData.nextStep)"
        >
          {{ getCurrentData.buttonType === 'next' ? 'Далее' : 'Начать игру' }}
        </app-button>
      </div>
      <div class="right">
        <img :src="getCurrentData.image" :alt="getCurrentData.text">
      </div>
    </div>
  </app-popup>
</template>

<script setup>
import { ref, computed, defineEmits } from 'vue';
import { getNoun } from 'nouns-number';
import { popMethods } from '@/store/popup';
import AppButton from '@/components/general/AppButton.vue';
import AppPopup from '@/components/general/AppPopup.vue';
import { mainState } from '@/store/data';
import getImage from '../../../composibles/getImg';

const timeNouns = ['минуту', 'минуты', 'минут'];
const questionNouns = ['вопрос', 'вопроса', 'вопросов'];

const emit = defineEmits(['start-game']);
const currentStep = ref('first');

const popups = {
  first: {
    nextStep: 'second',
    title: 'Как играть',
    number: '01',
    text: 'Свайпайте влево или жмите красную кнопку, если перед вами миф. Свайпайте право или жмите синюю кнопку, если это правда.',
    image: getImage('img/popup-rule/popup-first-rule.png'),
    buttonType: 'next',
  },
  second: {
    nextStep: 'third',
    title: 'Как играть',
    number: '02',
    text: `Ответьте на&nbsp;все ${mainState.state.questionsList.length}&nbsp;${getNoun(questionNouns, mainState.state.questionsList.length)} за&nbsp;${mainState.state.timeMinutes.value}&nbsp;${getNoun(timeNouns, mainState.state.timeMinutes.value)}.`,
    image: getImage('img/popup-rule/popup-second-rule.png'),
    buttonType: 'next',
  },
  third: {
    title: 'Как играть',
    number: '03',
    text: `<p style="margin-bottom: 14px;">Получите до&nbsp;${mainState.state.maxPossibleScore.value} баллов и&nbsp;участвуйте в&nbsp;розыгрыше призов.</p><p>У&nbsp;вас&nbsp;есть&nbsp;только&nbsp;одна&nbsp;попытка!</p>`,
    image: getImage('img/popup-rule/popup-third-rule.png'),
    buttonType: 'play',
  },
};

const getCurrentData = computed(() => popups[currentStep.value]);

const nextStep = (step) => {
  if (step) {
    currentStep.value = step;
  } else {
    popMethods.setPopupName('');
    emit('start-game');
  }
};
</script>

<style lang="scss" scoped>
.popup-rule {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 760px;
  height: 510px;
  color: #fff;

  .left {
    position: relative;
    width: 370px;
    padding: 45px 0 0 96px;
  }

  .right {
    display: flex;
    align-items: center;
  }

  .title {
    font-size: 50px;
    line-height: 60px;
    font-weight: 500;
  }

  .number {
    margin: 43px 0 0 0;
    font-size: 60px;
    line-height: 72px;
    font-weight: 300;
  }

  .text {
    max-width: 265px;
    font-size: 22px;
    line-height: 28px;
    font-weight: 300;
  }

  p {
    margin-bottom: 14px;
  }

  .image {
    position: relative;
    right: 80px;
  }

  .next-button {
    position: absolute;
    top: 375px;
    left: 96px;
    width: 260px;
    height: 70px;
    border: 0;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, .4);
    font-size: 26px;
  }
}
</style>
