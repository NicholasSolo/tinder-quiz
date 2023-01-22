<template>
  <footer class="the-footer">
    <div class="contacts-block">
      <div class="left">
        <a
          :href="mainState.state.gameRulesLink.value"
          class="rules-link"
          target="_blank"
        >
          Правила акции
        </a>
        <a
          :href="mainState.state.gamePolicyLink.value"
          class="rules-link"
          target="_blank"
        >
          Политика обработки персональных данных
        </a>
        <p v-if="mainState.state.footerLegalInfo.value" class="client-info">
          {{ mainState.state.footerLegalInfo.value }}
        </p>
      </div>
      <div class="right">
        <p>
          Служба поддержки:
        </p>
        <a :href="`tel:${mainState.state.footerPhone.value}`" class="support-link phone" v-text="mainState.state.footerPhone.value" />
        <a :href="`mailto:${mainState.state.footerEmail.value}`" class="support-link" v-text="mainState.state.footerEmail.value" />
        <p class="ooc-copyright">
          &copy; {{ currentYear }}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { mainState } from '@/store/data';

const currentYear = computed(() => {
  const now = new Date();
  return now.getFullYear();
});

</script>

<style lang="scss" scoped>
.the-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  padding: 49px 100px 46px 100px;
  background: #252937;
  color: #868EA5;

  a {
    color: #868EA5;
  }

  .contacts-block {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;

    .left {
      .rules-link {
        display: block;
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 140.88%;
        text-decoration-line: underline;
      }

      .client-info {
        max-width: 340px;
        margin-bottom: 15px;
        font-size: 16px;
        line-height: 18px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;

      p {
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 18px;
      }

      .support-link {
        font-size: 24px;
        line-height: 26px;

        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }
}

@media screen and (max-width:900px) {
  .the-footer {
    margin-top: 0;
    padding: 25px 61px 22px 57px;

    .contacts-block {
      flex-direction: column;
      margin: 0 0 20px 0;

      .left {
        margin-bottom: 15px;
      }
    }
  }
}

@media screen and (max-width:768px) {
  .the-footer {
    padding: 25px 25px 22px 25px;
  }
}

</style>
