<template>
  <div class="content-div">
    <h1>{{ $t('assessmentGuideline.title_1') }}</h1>
    <p class="mt-3">{{ $t('assessmentGuideline.content_1a') }}<a style="color:#4e45d1;font-weight:500;line-break:auto" target="_blank" href="https://www.fehd.gov.hk/english/LLB_web/assess_guide.pdf">{{ $t('assessmentGuideline.content_1b') }}</a>{{ $t('assessmentGuideline.content_1c') }}</p>
    <p class="mt-3">{{ $t('assessmentGuideline.content_2a') }}<a v-on:click="scrollToElement('tag-1')"><sup>1</sup></a>{{ $t('assessmentGuideline.content_2b') }}</p>
    <p class="mt-3">{{ $t('assessmentGuideline.content_3') }}</p>
    <p class="mt-3">{{ $t('assessmentGuideline.content_4') }}</p>
    <p class="mt-3">{{ $t('assessmentGuideline.content_5') }}<a v-on:click="scrollToElement('tag-2')"><sup>2</sup></a></p>
    <div class="s-li">
      <div>•</div>
      <p><strong>{{ $t('assessmentGuideline.content_6a') }}</strong><br/>{{ $t('assessmentGuideline.content_6b') }}<strong>{{ $t('assessmentGuideline.content_6c') }}</strong>{{ $t('assessmentGuideline.content_6d') }}</p>
    </div>
    <div class="s-li">
      <div>•</div>
      <p><strong>{{ $t('assessmentGuideline.content_7a') }}</strong><br/>{{ $t('assessmentGuideline.content_7b') }}<br/><br/>{{ $t('assessmentGuideline.content_7c') }}<strong>{{ $t('assessmentGuideline.content_7d') }}</strong>{{ $t('assessmentGuideline.content_7e') }}</p>
    </div>
    <p class="mt-3">{{ $t('assessmentGuideline.content_8') }}</p>
    <div class="s-li">
      <div>•</div>
      <p><strong>{{ $t('assessmentGuideline.content_9a') }}</strong><br/>{{ $t('assessmentGuideline.content_9b') }}<br/><br/>{{ $t('assessmentGuideline.content_9c') }}<strong>{{ $t('assessmentGuideline.content_9d') }}</strong>{{ $t('assessmentGuideline.content_9e') }}</p>
    </div>
    <p class="mt-3">{{ $t('assessmentGuideline.content_10') }}</p>
    <p><strong>{{ $t('assessmentGuideline.content_11a') }}<br/>{{ $t('assessmentGuideline.content_11b') }}</strong></p>
    <ol>
      <li class="tag-1">{{ $t('assessmentGuideline.content_12a') }}</li>
      <li class="mt-8 tag-2">{{ $t('assessmentGuideline.content_12b') }}</li>
    </ol>
  </div>

</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import OlsExpansion from '../../components/misc/ols-expansion'

export default {
  name: 'InGuideline',
  components: {
    BoldLine,
    OlsExpansion,
  },
  data: function () {
    return {
      items:[

      ],
      special:{
          order: 11,
          title:'I cannot use PPS for online payment recently. I have been using PPS payment in the past. Why does this happen and what can I do?',
          content:'<img :src="logo" alt="Error message in Internet Explorer" width="234" height="294">'
      },
    }
  },
  methods: {
    async scrollToElement(class_name) {
      const el = this.$el.getElementsByClassName(class_name)[0];
      await this.$nextTick();
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
    },
  }
}
</script>

<style lang="scss">

.color-sup{
  color:#4e45d1;
}

p.expansion{
  strong.i{
       font-style: italic;
  }
  span{
    word-wrap: break-word;
  }
}
a{
      text-decoration: none !important;
    p{
      color:$ols-primary !important;
    }
    line-break: anywhere;
}

.s-li{
    display: flex;
    align-items: flex-start;
    margin-bottom:12px;
    div:first-child{
        color: $ols-secondary;
        font-weight: bold;
        font-size:2em;
        margin:-6.5px 16px 0px 20px;
    }
}

.content-div h3{
  font-size:2.125em;
}

ul.expansion{
  margin-left:140px;

  li{
    margin-bottom:12px;
    p{
      margin:0px;
      span{
        word-wrap: break-word;
      }
    }
  }
}


img.expansion{
  margin-left:60px;
  margin-bottom:16px;
}
//md and down
@media screen and (max-width: 1263px) {


}

</style>
