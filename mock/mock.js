window.state = {
  /*
  * главный экран и мета-данные
  * */
  h1: {
    type: 'text',
    title: 'Введите заголовок',
    placeholder: 'Заголовок',
    value: 'Угадайте, где правда, а где миф. Выигрывайте призы.',
  },
  description: {
    type: 'text',
    title: 'Введите описание',
    placeholder: 'Описание',
    value: 'Отвечайте на вопросы викторины. Сколько ответов вы успеете дать за отведенное время?',
  },
  gameRulesLink: {
    type: 'text',
    title: 'Правила розыгрыша',
    placeholder: 'Ссылка на правила',
    value: 'https://www.youtube.com/watch?v=RN8Li7kYNnw',
  },
  gamePolicyLink: {
    type: 'text',
    title: 'Политика обработки перс. данных',
    placeholder: 'Ссылка на политику',
    value: 'https://www.youtube.com/watch?v=RN8Li7kYNnw',
  },
  maxPossibleScore: {
    type: 'text',
    title: 'Максимальное кол-во баллов',
    placeholder: 'Укажите максимально возможное кол-во баллов',
    value: '30000',
  },
  footerPhone: {
    type: 'text',
    title: 'Телефон службы поддержки',
    placeholder: 'Телефон службы поддержки',
    value: '8 800 555 35 35',
  },
  footerEmail: {
    type: 'text',
    title: 'Email службы поддержки',
    placeholder: 'Email службы поддержки',
    value: 'info@info.ucoz.net',
  },
  footerLegalInfo: {
    type: 'text',
    title: 'Юридическая информация',
    placeholder: 'Юридическая информация',
    value: 'ООО «Зеленоглазое такси» 115162, Россия, г. Москва, ул. Зеленая, д. 31г ОГРН 10477777709510',
  },
  /*
  * Игровое поле и время игры
  * */
  timeMinutes: {
    type: 'text',
    title: 'Количество минут',
    placeholder: 'Минуты',
    value: 1,
  },
  timeSeconds: {
    type: 'text',
    title: 'Количество секунд',
    placeholder: 'Секунды',
    value: 0,
  },
  questionsList: [
    {
      text: {
        type: 'text',
        title: 'Введите вопрос',
        placeholder: 'Вопрос',
        value: 'Вопрос другой',
      },
      image: {
        type: 'file',
        title: 'Изображение',
        description: 'Выберите картинку для вопроса',
        value: 'https://www.freeiconspng.com/thumbs/question-mark-icon/3d-question-mark-icon-blue-color-picture-6.png',
      },
    },
    {
      text: {
        type: 'text',
        title: 'Введите вопрос',
        placeholder: 'Вопрос',
        value: 'Вопрос один',
      },
      image: {
        type: 'file',
        title: 'Изображение',
        description: 'Выберите картинку для вопроса',
        value: 'https://www.freeiconspng.com/thumbs/question-mark-icon/3d-question-mark-icon-blue-color-picture-6.png',
      },
    },
    {
      text: {
        type: 'text',
        title: 'Введите вопрос',
        placeholder: 'Вопрос',
        value: 'Вопросов может быть очень много',
      },
      image: {
        type: 'file',
        title: 'Изображение',
        description: 'Выберите картинку для вопроса',
        value: 'https://www.freeiconspng.com/thumbs/question-mark-icon/3d-question-mark-icon-blue-color-picture-6.png',
      },
    },
  ],
};
