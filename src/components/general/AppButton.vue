<template>
  <button
    v-if="!linkHref"
    :class="`app-button app-button--${type}`"
    :disabled="btnDisabled"
  >
    <slot />
  </button>

  <a
    v-else
    role="button"
    class="app-button"
    :href="linkHref"
    target="_blank"
  >
    <slot>
      Перейти
    </slot>
  </a>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  type: {
    type: String,
    default: 'red',
    validator(val) {
      return ['blue', 'red', 'game_no', 'game_yes'].includes(val);
    },
  },
  linkHref: {
    type: String,
    default: '',
  },
  btnDisabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.app-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 80px;
  border-radius: 40px;
  box-shadow: 0 5px 24px #000;
  font-size: 32px;
  line-height: 32px;
  font-weight: 500;
  text-align: center;
  color: #fff;

  &:hover {
    box-shadow: 0 0 0 transparent;
    opacity: .8;
  }

  &--red {
    border: 1px solid #c67793;
    background: linear-gradient(180deg, #d07e9a 0%, #79435e 80.48%);

    &:hover {
      background: linear-gradient(180deg, #d07e9a 0%, #79435e 80.48%);
      color: #c67793;
    }

    &:active {
      background: linear-gradient(0deg, #D07E9A 13.13%, #79435E 102.16%);
      color: #fff;
      opacity: 1;
    }
  }

  &--blue {
    background: linear-gradient(348.47deg, #1C2860 10.99%, #357FFF 166.7%);
    box-shadow: 0 4px 20px rgba(0, 0, 0, .4);

    &:hover {
      background: linear-gradient(358.23deg, rgba(28, 40, 96, .5) 7.46%, rgba(53, 127, 255, .5) 85.94%);
      color: #2d65b7;
    }

    &:active {
      background: linear-gradient(185.95deg, #1C2860 5.74%, #357FFF 100.89%);
      color: #fff;
      opacity: 1;
    }
  }

  &--game_no,
  &--game_yes {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: #0A0F2B;

    &::before {
      content: "";
      width: 20px;
      height: 20px;
      background-size: cover;
    }
  }

  &--game_no {
    border: 1px solid #c67793;

    &::before {
      background: url("~@/assets/img/game/no-icon.svg") center no-repeat;
    }

    &:hover {
      background: linear-gradient(180deg, #D07e9a 0%, #79435e 80.48%);
    }

    &:active {
      background: linear-gradient(180deg, #D07E9A 0%, #79435E 80.48%);

      &::before {
        background: url("~@/assets/img/game/no-icon-white.svg") center no-repeat;
      }
    }
  }

  &--game_yes {
    border: 1px solid #2d65b7;

    &::before {
      background: url("~@/assets/img/game/yes-icon.svg") center no-repeat;
    }

    &:hover {
      background: linear-gradient(358.23deg, #1c2860 7.46%, #357fff 85.94%);
    }

    &:active {
      background: linear-gradient(358.23deg, #1C2860 7.46%, #357FFF 85.94%);

      &::before {
        background: url("~@/assets/img/game/yes-icon-white.svg") center no-repeat;
      }
    }
  }
}

@include tablet {
  .app-button {
    max-width: 340px;
    width: 100%;
    height: 70px;
    font-size: 26px;
    line-height: 30px;

    &--game_no,
    &--game_yes {
      width: 65px;
      height: 65px;

      &:hover {
        background: initial;
      }

      &:active {
        background: initial;

        &::before {
          background: initial;
        }
      }
    }
  }
}

@media screen and (max-width:500px) {
  .app-button {
    &--game_no,
    &--game_yes {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
