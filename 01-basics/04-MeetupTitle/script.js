import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение
createApp({
  data() {
    return {
      meetupId: 1,
      title: '',
    };
  },

  watch: {
    meetupId: {
      immediate: true,
      async handler() {
        const meetup = await fetchMeetupById(this.meetupId);
        this.title = meetup.title;
      },
    },
  },
}).mount('#app');
