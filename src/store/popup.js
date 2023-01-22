import { reactive } from 'vue';
import mq from '@/composibles/mq';

const state = reactive({
  name: mq.value === 'lg' ? '' : '',
  data: [],
});

const methods = {
  setPopupName(payload) {
    state.name = payload;
  },
  setPopupData(payload) {
    state.data = payload;
  },
};

export { state as popState, methods as popMethods };
