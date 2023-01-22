<template>
  <app-popup>
    <div :class="['email-popup', { '_success' : userScore }]">
      <img
        v-show="userScore"
        src="@/assets/img/email-popup/envelope.png"
        alt="конверт"
        class="envelope"
      >

      <h2 class="title" v-html="getMainTitleText" />

      <div :class="['form-block', { '_isOld' : userScore.isOld }]">
        <div v-show="!userScore" class="get-email-block">
          <div class="input">
            <app-input
              v-model:modelValue="emailData.email"
              :rule="emailData.rule"
              :errorText="emailData.error === true ? 'Введите верный адрес' : ''"
              placeholder="Введите свой email"
              type="text"
              @clear-error="emailData.error = false"
            />
            <app-button
              class="submit"
              :disabled="!emailData.adsCheck || !emailData.agreementCheck"
              @click="submitEmail"
            >
              Подписаться на рассылку
            </app-button>
          </div>

          <div class="legal">
            <label :class="['label', {'_checked' : emailData.agreementCheck }]">
              Я&nbsp;подтверждаю, что согласен на&nbsp;обработку персональных данных.
              <input v-model="emailData.agreementCheck" type="checkbox" class="check">
            </label>
            <label :class="['label', {'_checked' : emailData.adsCheck}]">
              Согласен получать рекламную информацию и&nbsp;специальные предложения любыми путями, в&nbsp;том числе с&nbsp;использованием средств связи.
              <input v-model="emailData.adsCheck" type="checkbox" class="check">
            </label>
          </div>
        </div>

        <div v-show="userScore" class="result-block">
          <div class="text-block">
            <p
              class="result-subtitle"
              v-html="getResultSubtitle"
            />
          </div>
        </div>
      </div>

      <div v-if="emailData.serverError" class="server-error">
        Что-то пошло не так... Попробуйте позже
      </div>
    </div>
  </app-popup>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import { popState } from '@/store/popup';
import submitAnswers from '@/composibles/sendAnswers';
import AppButton from '@/components/general/AppButton.vue';
import AppInput from '@/components/general/AppInput.vue';
import AppPopup from '@/components/general/AppPopup.vue';

const emailData = reactive({
  email: '',
  error: false,
  agreementCheck: false,
  adsCheck: true,
  rule: (value) => value.replace(/\s/g, ''),
  serverError: false,
});

const userScore = ref('');
const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// eslint-disable-next-line
const getMainTitleText = computed(() => {
  if (userScore.value && userScore.value.isOld) {
    return 'Вы&nbsp;уже&nbsp;играли!';
  }

  if (userScore.value && !userScore.value.isOld) {
    return 'Спасибо за участие!';
  }
  return 'Оставьте свою почту, чтобы получить подарок!';
});

const getResultSubtitle = computed(() => (!userScore.value.isOld ? 'Проверьте письмо с&nbsp;инструкцией на&nbsp;вашей почте.' : 'Проверьте свою почту: мы&nbsp;отправили вам письмо с&nbsp;призом.'));

const submitEmail = () => {
  emailData.serverError = false;

  if (regexp.test(emailData.email.trim())) {
    submitAnswers({
      email: emailData.email.trim(),
      answers: popState.data,
    }).then((data) => {
      if (data) {
        userScore.value = data;
      } else {
        emailData.serverError = true;
      }
    });
  } else {
    emailData.error = true;
  }
};
</script>

<style lang="scss" scoped>
.email-popup {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 760px;
  padding: 47px 40px 34px 40px;
  border-radius: 20px;

  .envelope {
    position: absolute;
    top: -40px;
  }

  .title {
    max-width: 630px;
    margin-bottom: 44px;
    font-size: 50px;
    line-height: 60px;
    font-weight: 500;
    text-align: center;
  }

  .subtitle {
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 24px;
  }

  .form-block {
    width: 680px;
    margin-bottom: 10px;
    padding: 35px 30px 30px 30px;
    border-radius: 20px;
    background: linear-gradient(322.21deg, #1C2860 9.99%, #357FFF 115.68%);

    .get-email-block {
      .input {
        display: flex;
        align-items: center;
        gap: 18px;
        margin-bottom: 25px;

        .submit {
          width: 290px;
          height: 70px;
          font-size: 26px;
          line-height: 30px;

          &:disabled {
            opacity: .5;
          }
        }
      }

      .legal {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .label {
          position: relative;
          padding-left: 60px;
          font-size: 15px;
          line-height: 18px;
          color: #93a8d6;

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 20px;
            width: 20px;
            height: 20px;
            border-radius: 3px;border: 1px solid #C67793;
          }

          &::after {
            content: "";
            position: absolute;
            top: 7px;
            left: 27px;
            width: 8px;
            height: 8px;
            border-radius: 2px;
            background-color: #93a8d6;
            opacity: 0;
          }

          &._checked {
            &::before {
              border: 1px solid #93a8d6;
            }

            &::after {
              opacity: 1;
            }
          }

          .check {
            display: none;
          }
        }
      }
    }

    .result-block {
      display: flex;
      flex-direction: column;
      align-items: center;

      .result-subtitle {
        text-align: center;
      }

      .text-block {
        .result-subtitle {
          font-size: 26px;
          line-height: 28px;
        }

        .result-answers {
          margin-bottom: 30px;
          text-align: center;
          font-size: 35px;
          line-height: 45px;
          font-weight: 500;

          .answers-link {
            font-weight: 500;
            text-decoration: underline;
          }
        }
      }
    }
  }

  .server-error {
    font-size: 20px;
    text-align: center;
    color: #ff0b85;
  }

  &._success {
    padding-top: 130px;

    .title {
      margin-bottom: 13px;
    }
  }
}

@media screen and (max-width:800px) {
  .email-popup {
    width: 640px;

    .envelope {
      top: -100px;
    }

    .title {
      font-size: 40px;
      line-height: 60px;
    }

    .subtitle {
      font-size: 22px;
      line-height: 28px;
    }

    .form-block {
      width: 540px;

      .get-email-block {
        .input {
          flex-direction: column;
          gap: 25px;

          .submit {
            max-width: 420px;
            width: 420px;
          }
        }
      }
    }

    &._success {
      padding-top: 50px;
    }
  }
}

@media screen and (max-width:660px) {
  .email-popup {
    width: 100%;

    .form-block {
      width: 100%;

      .get-email-block {
        .input {
          .submit {
            max-width: 100%;
            width: 100%;
          }
        }
      }
    }
  }
}

@media screen and (max-width:480px) {
  .email-popup {
    padding-right: 20px;
    padding-left: 20px;

    .envelope {
      top: -60px;
    }

    .title {
      max-width: 300px;
      font-size: 30px;
      line-height: 36px;
    }

    .subtitle {
      font-size: 20px;
      line-height: 24px;
    }

    .form-block {
      padding: 30px 25px;

      .result-block {
        .text-block {
          .result-subtitle {
            font-size: 22px;
            line-height: 36px;
          }

          .result-answers {
            margin-bottom: 18px;
            font-size: 32px;
            line-height: 36px;
          }
        }

        .share-title {
          max-width: 290px;
          text-align: center;
          font-size: 30px;
          line-height: 36px;
          color: #A6BBED;
        }
      }

      &._isOld {
        padding-top: 50px;
        padding-bottom: 50px;
      }
    }

    &._success {
      padding-top: 100px;
    }
  }
}
</style>
