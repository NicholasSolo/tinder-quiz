<template>
  <div class="the-rules">
    <ul class="list">
      <li
        v-for="(item, index) in rules"
        :key="index"
        class="item"
      >
        <p class="number">
          0{{ index+1 }}
        </p>
        <p
          class="text"
          v-html="item"
        />
      </li>
    </ul>
    <h4 class="one-attempt">
      У&nbsp;вас есть только одна попытка!
    </h4>
    <app-button class="button" @click="emit('click')">
      Начать игру
    </app-button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import { getNoun } from 'nouns-number';
import { mainState } from '@/store/data';
import AppButton from '@/components/general/AppButton.vue';

const timeNouns = ['минуту', 'минуты', 'минут'];
const questionNouns = ['вопрос', 'вопроса', 'вопросов'];
const emit = defineEmits(['click']);

const rules = [
  'Свайпайте влево или жмите красную кнопку, если перед вами миф. Свайпайте право или жмите синюю кнопку, если это правда.',
  `Ответьте на&nbsp; ${mainState.state.questionsList.length}&nbsp;${getNoun(questionNouns, mainState.state.questionsList.length)} за&nbsp;${mainState.state.timeMinutes.value}&nbsp;${getNoun(timeNouns, mainState.state.timeMinutes.value)}`,
  `Получите до&nbsp;${mainState.state.maxPossibleScore.value} баллов и&nbsp;участвуйте в&nbsp;розыгрыше призов.`,
];
</script>

<style lang="scss" scoped>
.the-rules {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 100px;

  .list {
    margin-bottom: 75px;

    .item {
      display: flex;
      gap: 25px;
      max-width: 470px;
      padding: 16px 25px 16px 18px;
      border-radius: 20px;
      background: linear-gradient(270deg, #111A48 -10.15%, #283884 76.47%);
      backdrop-filter: blur(10px);

      .number {
        font-size: 60px;
        line-height: 72px;
      }

      .text {
        font-size: 22px;
        line-height: 28px;
      }

      &:not(:first-child) {
        align-items: center;
      }

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }

  .one-attempt {
    margin-bottom: 35px;
    font-size: 40px;
    line-height: 40px;
    font-weight: 500;
    text-align: center;
  }
}

@media screen and (max-width:560px) {
  .the-rules {
    margin-top: 0;
    margin-bottom: 80px;

    .list {
      gap: 15px;
      margin-bottom: 30px;

      .item {
        gap: 15px;
        padding-right: 20px;
        font-size: 20px;
        line-height: 24px;

        .text {
          font-size: 20px;
          line-height: 24px;
        }
      }
    }

    .one-attempt {
      margin-bottom: 50px;
    }
  }
}
</style>
