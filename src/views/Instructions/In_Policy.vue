<template>
  <div class="content-div">
    <h1>{{ $t('accountPolicy.title_1') }}</h1>
    <p>{{ $t('accountPolicy.content_1') }}</p>
    <p>{{ $t('accountPolicy.content_2') }}</p>
    <p>{{ $t('accountPolicy.content_3') }}</p>
    <v-expansion-panels class="mb-8" multiple > 
      <OlsExpansion :order="special.order" :title="$t('accountPolicy.content_4')" :type="1">
        <p>{{ $t('accountPolicy.content_5') }}</p>
        <div class="s-li">
          <div>•</div>
          <p>{{ $t('accountPolicy.content_6') }}</p>
        </div>
        <div class="s-li">
          <div>•</div>
          <p>{{ $t('accountPolicy.content_7') }}</p>
        </div>
        <div class="s-li">
          <div>•</div>
          <p>{{ $t('accountPolicy.content_8') }}</p>
        </div>
        <div class="s-li">
          <div>•</div>
          <p>{{ $t('accountPolicy.content_9') }}</p>
        </div>
        <p>{{ $t('accountPolicy.content_10') }}</p>
        <div class="s-li">
          <div>•</div>
          <p>{{ $t('accountPolicy.content_11') }}</p>
        </div>
        <div class="s-li">
          <div>•</div>
          <p>{{ $t('accountPolicy.content_12') }}</p>
        </div>
        <div class="s-li">
          <div>•</div>
          <p>{{ $t('accountPolicy.content_13') }}</p>
        </div>
        <div class="s-li">
          <div>•</div>
          <p>{{ $t('accountPolicy.content_14') }}</p>
        </div>
        <div class="s-li">
          <div>•</div>
          <p>{{ $t('accountPolicy.content_15') }}</p>
        </div>
        <div class="s-li">
          <div>•</div>
          <p>{{ $t('accountPolicy.content_16') }}</p>
        </div>
        <p>{{ $t('accountPolicy.content_17') }}</p>
        <p>{{ $t('accountPolicy.content_18') }}</p>

      </OlsExpansion>
      <OlsExpansion :order="special.order" :title="$t('accountPolicy.content_19')" :type="1">
        <p>{{ $t('accountPolicy.content_20') }}</p>
        <div class="s-li">
          <div>•</div>
          <p>{{ $t('accountPolicy.content_21') }}</p>
        </div>
        <div class="s-li">
          <div>•</div>
          <p>{{ $t('accountPolicy.content_22') }}</p>
        </div>
        <div class="s-li">
          <div>•</div>
          <p>{{ $t('accountPolicy.content_23') }}</p>
        </div>
        <div class="s-li">
          <div>•</div>
          <p>{{ $t('accountPolicy.content_24') }}</p>
        </div>
        <div class="s-li">
          <div>•</div>
          <p>{{ $t('accountPolicy.content_25') }}</p>
        </div>
        <div class="s-li">
          <div>•</div>
          <p>{{ $t('accountPolicy.content_26') }}</p>
        </div>
        <p>{{ $t('accountPolicy.content_27') }}</p>

      </OlsExpansion>
      <OlsExpansion :order="special.order" :title="$t('accountPolicy.content_28')" :type="1">
        <p>{{ $t('accountPolicy.content_29') }}</p>
        <div class="s-li">
          <div>•</div>
          <p>{{ $t('accountPolicy.content_30') }}<strong>{{ $t('accountPolicy.content_31') }}</strong>{{ $t('accountPolicy.content_32') }}<strong>{{ $t('accountPolicy.content_33') }}</strong>{{ $t('accountPolicy.content_34') }}<strong>{{ $t('accountPolicy.content_35') }}</strong><br>{{ $t('accountPolicy.content_36') }}</p>
        </div>
        <div class="s-li">
          <div>•</div>
          <p>{{ $t('accountPolicy.content_37') }}</p>
        </div>
      </OlsExpansion>
    </v-expansion-panels>
  
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import OlsExpansion from '../../components/misc/ols-expansion'

export default {
  name: 'InPolicy',
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
      publicPath: process.env.BASE_URL
    }
  },
}
</script>

<style lang="scss">
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

#video-frame{
  max-width:850px;
  max-height:480px;
  width:100%;
  height:100%;
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

ol,.expansion ul.expansion{
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

h5 a {
  text-decoration: underline !important;
}

img.expansion{
  margin-left:60px;
  margin-bottom:16px;
}
//md and down
@media screen and (max-width: 1263px) {
  

}

</style>