import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#4e45d1', // #E53935
        primary_tint: '#6960e1',
        secondary: '#FF6785',
        tDark: '#1d1d1d',
        tLightGrey: '#C2C2C2'
      },
    },
  },
});
