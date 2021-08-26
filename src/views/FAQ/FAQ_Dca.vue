<template>
  <div class="content-div">
    <h1>{{$t('faq.digital_certificates_and_authentication')}}</h1>
    <v-expansion-panels multiple >
      <OlsExpansion v-for="(item,i) in items" :key="i" :order="i+1" :title="item.title" :type="0"><div v-html="item.content"></div></OlsExpansion>
    </v-expansion-panels>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import OlsExpansion from '../../components/misc/ols-expansion'

export default {
  name: 'FAQDca',
  components: {
    BoldLine,
    OlsExpansion,
  },
  data: function () {
    return {}
  },
  computed: {
    items() {
      return [
        {
          title: this.$t('faq.d_title_1'),
          content: '<p class="expansion">'+this.$t('faq.d_content_1')+'</p>',
        }, {
          title: this.$t('faq.d_title_2'),
          content: '<p class="expansion">'+this.$t('faq.d_content_2')+'</p>',
        }, {
          title: this.$t('faq.d_title_3'),
          content: '<p class="expansion">'+this.$t('faq.d_content_3')+'</p>',
        }, {
          title: this.$t('faq.d_title_4'),
          content: '<p class="expansion">'+this.$t('faq.d_content_4')+'</p>',
        }, {
          title: this.$t('faq.d_title_5'),
          content: '<p class="expansion">'+this.$t('faq.d_content_5')+'</p>',
        },
      ];
    }
  }
}
</script>

<style scoped lang="scss">
p.expansion{
  margin-left:60px;
}

a{
      text-decoration: none !important;
    p{
      color:$ols-primary !important;
    }
}
//md and down
@media screen and (max-width: 1263px) {

}

</style>
