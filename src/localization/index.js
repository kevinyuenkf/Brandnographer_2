import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
import Vue from "vue";
import EN from './en'
import TC from './tc'

export default new VueI18n({
    locale: 'EN',
    messages:{
        EN,
        TC
    }
})
