<template>
  <div class="app-input">
    <input
      :class="['input', { '_input-error' : errorText }]"
      :type="type"
      :placeholder="placeholder"
      :value="getValue"
      :autocomplete="getAutocomplete"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="$emit('clear-error')"
    >

    <transition name="fade">
      <div v-show="errorText" class="error-text" v-html="errorText" />
    </transition>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  errorText: {
    type: String,
    default: '',
  },
  rule: {
    type: Function,
    default: undefined,
  },
  maxLength: {
    type: Number,
    default: Infinity,
    validator(val) {
      return Infinity || val > 0;
    },
  },
});

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['update:modelValue', 'clear-error']);

const getValue = computed(() => {
  let newVal = props.modelValue;

  if (props.rule) {
    newVal = props.rule(newVal);
  }

  if (props.maxLength) {
    newVal = newVal.slice(0, props.maxLength);
  }

  return newVal;
});

const getAutocomplete = computed(() => {
  if (props.type === 'password') {
    return 'current-password';
  }

  if (props.type === 'email') {
    return 'email';
  }

  return null;
});
</script>

<style lang="scss" scoped>
.app-input {
  position: relative;

  .input {
    width: 310px;
    height: 70px;
    border-radius: 30px;
    border: 1px solid #7393D2;
    box-sizing: border-box;
    background-color: transparent;
    font-size: 26px;
    line-height: 30px;
    text-align: center;
    color: white;

    &._input-error {
      border: 1px solid #C67793;
    }

    &::placeholder {
      font-size: 26px;
      line-height: 30px;
      text-align: center;
      color: white;
    }
  }

  .error-text {
    position: absolute;
    bottom: -20px;
    left: 0;
    color: #C67793;
  }
}

@media screen and (max-width:800px) {
  .app-input {
    .input {
      max-width: 420px;
      width: 420px;
    }
  }
}

@media screen and (max-width:660px) {
  .app-input {
    display: flex;
    justify-content: center;
    max-width: 100%;
    width: 100%;

    .input {
      max-width: 100%;
      width: 100%;
    }
  }
}
</style>
