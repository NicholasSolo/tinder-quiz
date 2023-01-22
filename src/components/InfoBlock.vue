<template>
  <div class="info-block">
    <h1 class="title" v-text="mainState.state.h1.value" />
    <p class="text" v-text="mainState.state.description.value" />

    <app-button class="button" :btn-disabled="props.btnDisabled" @click="emit('click')">
      Как играть?
    </app-button>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';
import { mainState } from '@/store/data';
import AppButton from '@/components/general/AppButton.vue';

const props = defineProps({
  btnDisabled: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['click']);
</script>

<style lang="scss" scoped>
.info-block {
  max-width: 612px;

  .title {
    margin-bottom: 10px;
    font-size: 55px;
    line-height: 60px;
    font-weight: 500;
  }

  .text {
    margin-bottom: 50px;
    font-size: 28px;
    line-height: 36px;
    color: #A6BBED;
  }

  .list {
    max-width: 530px;

    .item {
      position: relative;
      display: flex;
      align-items: center;
      height: 100px;
      padding-right: 10px;
      padding-left: 105px;
      border-radius: 20px;
      background: linear-gradient(295.5deg, #1c2860 4.97%, #357fff 99.82%);

      &:not(:last-child) {
        margin-bottom: 25px;
      }

      .item-image {
        position: absolute;
        bottom: 0;
        left: -15px;
        display: block;
      }

      .item-text {
        font-size: 28px;
        line-height: 34px;
      }
    }
  }

  .button {
    margin-top: 50px;
  }

  .rules-link {
    display: inline-block;
    margin-top: 20px;
    font-size: 20px;
    line-height: 36px;
    font-weight: 300;
    color: #A6BBED;
    text-decoration: underline;
  }
}

@include pre-tablet {
  .info-block {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      text-align: center;
    }

    .text {
      text-align: center;
    }
  }
}

@include tablet {
  .info-block {
    .title {
      margin-bottom: 15px;
      font-size: 40px;
      line-height: 40px;
    }

    .text {
      max-width: 400px;
      font-size: 24px;
      line-height: 28px;
    }

    .list {
      max-width: 470px;

      .item {
        height: 90px;

        &:not(:last-child) {
          margin-bottom: 30px;
        }

        .item-image {
          width: 104px;
          height: 104px;
        }

        .item-text {
          font-size: 24px;
          line-height: 28px;
        }
      }
    }

    .button {
      margin-top: 40px;
    }
  }
}

@include mobile {
  .info-block {
    .title {
      margin-bottom: 10px;
      font-size: 32px;
      line-height: 36px;
    }

    .text {
      max-width: 300px;
      font-size: 20px;
      line-height: 24px;
    }

    .list {
      max-width: 340px;

      .item {
        height: 110px;
        padding-left: 120px;

        &:not(:last-child) {
          margin-bottom: 15px;
        }

        .item-image {
          bottom: 10px;
          left: 5px;
          width: 90px;
          height: 90px;
        }

        .item-text {
          font-size: 20px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
