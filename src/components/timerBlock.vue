<template>
  <div
    v-if="props.isTimerVisible"
    class="inform-block"
  >
    <div class="time">
      0{{ time.minutes }}:{{ time.seconds >= 10 ? time.seconds : `0${time.seconds}` }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { time } from '@/composibles/timer';

const props = defineProps({
  isTimerVisible: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.inform-block {
  display: flex;

  .score {
    margin-right: 11px;
    padding: 6px 15px 6px 20px;
    border-radius: 43px 0 0 43px;
    border: 1px solid #2D65B7;
    font-size: 43px;
    line-height: 51px;
    font-weight: 500;
    text-align: center;
    color: #2D65B7;

    .small {
      display: block;
      margin-top: -10px;
      font-size: 20px;
      line-height: 26px;
      text-align: center;
      color: #2D65B7;
    }
  }

  .time {
    padding: 14px 15px;
    border-radius: 43px;
    border: 1px solid #2D65B7;
    font-size: 43px;
    line-height: 51px;
    font-weight: 500;
    text-align: center;
    color: #2D65B7;
  }
}

@include tablet {
  .inform-block {
    display: flex;

    .score {
      margin-right: 8px;
      padding: 1px 17px 0 20px;
      font-size: 30px;
      line-height: 35px;

      .small {
        font-size: 14px;
        line-height: 28px;
      }
    }

    .time {
      padding: 9px 10px;
      font-size: 30px;
      line-height: 35px;
    }
  }
}
</style>
