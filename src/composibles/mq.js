import { computed, ref } from 'vue';

const wWidth = ref(window.innerWidth);
const onWidthChange = () => {
	wWidth.value = window.innerWidth;
};

window.addEventListener('resize', onWidthChange);

const mq = computed(() => {
	if (wWidth.value <= 1100) return 'md';
	return 'lg';
});

export default mq;
