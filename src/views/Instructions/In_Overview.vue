<template>
  <div class="content-div">
    <h1>{{ $t('overview.title_1') }}</h1>
    <p>{{ $t('overview.a_1') }}</p>
    <p class="mt-3">{{ $t('overview.a_2') }}</p>
    <p class="mt-3 ">{{ $t('overview.a_2a') }}<strong>{{ $t('overview.a_2b') }}</strong>{{ $t('overview.a_2c') }}</p>
   
    
    <BoldLine class="mt-10" :options="{color:'#CEC3F0',height:'3px',width:'100%'}"></BoldLine>
    <v-expansion-panels multiple > 
      <OlsExpansion :order="special.order" :title="$t('overview.title_2')" :type="1">
      <p class="expansion">{{ $t('overview.b_1') }}</p>
        <div class="s-li">
            <div>•</div>
            <p>{{ $t('overview.b_2') }}</p>
        </div>
        <div class="s-li">
            <div>•</div>
            <p>{{ $t('overview.b_3') }}</p>
        </div>
        <div class="s-li">
            <div>•</div>
            <p>{{ $t('overview.b_4') }}</p>
        </div>
        <div class="s-li">
            <div>•</div>
            <p>{{ $t('overview.b_5') }}</p>
        </div>
        <div class="ml-16">
            <p class="ml-6">{{ $t('overview.b_6a') }}<br/>
              {{ $t('overview.b_6b') }}<br/>
              {{ $t('overview.b_6c') }}<br/>
              {{ $t('overview.b_6d') }}<br/>
              {{ $t('overview.b_6e') }}<br/>
              {{ $t('overview.b_6f') }}
            </p>
        </div>
        <div class="s-li">
            <div>•</div>
            <p>{{ $t('overview.b_7') }}<a href="http://www.adobe.com/products/acrobat/acrrasianfontpack.html" target="_blank">http://www.adobe.com/products/acrobat/acrrasianfontpack.html</a>.</p>
        </div>
        <div class="s-li">
            <div>•</div>
            <p>{{ $t('overview.b_8') }}<a href="http://www.info.gov.hk/digital21/chi/hkscs/download.html" target="_blank">http://www.info.gov.hk/digital21/chi/hkscs/download.html.</a>.</p>
        </div>
        <div class="s-li">
            <div>•</div>
            <p>{{ $t('overview.b_9') }}</p>
        </div>
        <div class="s-li">
            <div>•</div>
            <p>{{ $t('overview.b_10') }}</p>
        </div>
      </OlsExpansion>
      <OlsExpansion :order="special.order" :title="$t('overview.title_3')"  :type="1">
        <p class="expansion">{{ $t('overview.c_1') }}</p>
        <div class="s-li">
            <div>•</div>
            <p>{{ $t('overview.c_2') }}</p>
        </div>
        <div class="s-li">
            <div>•</div>
            <p>{{ $t('overview.c_3') }}</p>
        </div>
        <div class="s-li">
            <div>•</div>
            <p>{{ $t('overview.c_4') }}</p>
        </div>
        <div class="s-li">
            <div>•</div>
            <p>{{ $t('overview.c_5') }}</p>
        </div>
        <div class="s-li">
            <div>•</div>
            <p>{{ $t('overview.c_6') }}</p>
        </div>
        <div class="s-li">
            <div>•</div>
            <p>{{ $t('overview.c_7') }}</p>
        </div>
        <div class="s-li">
            <div>•</div>
            <p>{{ $t('overview.c_8') }}</p>
        </div>
        <div class="s-li">
            <div>•</div>
            <p>{{ $t('overview.c_9') }}</p>
        </div>
        <div class="s-li">
            <div>•</div>
            <p>{{ $t('overview.c_10') }}</p>
        </div>
        <div class="s-li">
            <div>•</div>
            <p>{{ $t('overview.c_11') }}</p>
        </div>
        <p class="expansion">{{ $t('overview.c_12') }}</p>
      </OlsExpansion>
    </v-expansion-panels>
  </div>
  
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import OlsExpansion from '../../components/misc/ols-expansion'

export default {
  name: 'InOverview',
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