<template>
  <div :class="['app-container', fluid && 'app-container-fluid', fluidMd && 'app-container-fluid-md']">
    <slot />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  fluid: {
    type: Boolean,
    default: false,
  },
  fluidMd: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 45px;
}

@include tablet {
  .app-container-fluid-md {
    padding: 0;
  }
}

@include mobile {
  .app-container {
    padding: 0 30px;
  }

  .app-container-fluid,
  .app-container-fluid-md {
    padding: 0;
  }
}
</style>
