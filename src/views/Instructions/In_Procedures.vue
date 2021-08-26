<template>
  <div class="content-div">
    <h1>{{ $t('applicationProcedure.title_1') }}</h1>
    <h3 class="em-34">{{ $t('applicationProcedure.a_1') }}</h3>
    <BoldLine class="mt-10" :options="{color:'#CEC3F0',height:'3px',width:'100%'}"></BoldLine>
    <v-expansion-panels class="mb-8" multiple >
      <OlsExpansion :order="special.order" :title="$t('applicationProcedure.a_2')" :type="1">
        <p style="max-width:700px"><strong>{{ $t('applicationProcedure.a_3') }}</strong></p>
        <ol type="a" class="expansion" style="margin-left: unset;">
          <li><p>{{ $t('applicationProcedure.a_4') }}</p></li>
          <li><p>{{ $t('applicationProcedure.a_5') }}</p></li>
          <li><p>{{ $t('applicationProcedure.a_6') }}</p></li>
          <li><p>{{ $t('applicationProcedure.a_7') }}</p></li>
          <li><p>{{ $t('applicationProcedure.a_8') }}</p></li>
          <li><p>{{ $t('applicationProcedure.a_9') }}</p></li>
          <li><p>{{ $t('applicationProcedure.a_10') }}</p></li>
          <li><p>{{ $t('applicationProcedure.a_11') }}</p></li>
          <li>
            <p>{{ $t('applicationProcedure.a_12') }}.</p>
          </li>
          <p class="mt-6"><strong>{{ $t('applicationProcedure.a_13') }}</strong></p>
          <li><p>{{ $t('applicationProcedure.a_14') }}</p></li>
          <li><p>{{ $t('applicationProcedure.a_15') }}</p></li>
          <li><p>{{ $t('applicationProcedure.a_16') }}</p></li>
        </ol>
      </OlsExpansion>
      <OlsExpansion :order="special.order" :title="$t('applicationProcedure.title_2')" :type="1">
        <p style="max-width:700px"><strong>{{ $t('applicationProcedure.b_2a') }}</strong></p>
        <p style="max-width:700px"><strong>{{ $t('applicationProcedure.b_2b') }}</strong></p>
        <ol type="a" class="expansion" style="margin-left: unset;">
          <li><p>{{ $t('applicationProcedure.b_3') }}</p>
          <ol type="i" class="expansion" style="margin-left: unset;">
            <li><p>{{ $t('applicationProcedure.b_4') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_5') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_6') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_7') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_8') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_9') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_10') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_11') }}.</p></li>
          </ol>
        </li>
        <li><p>{{ $t('applicationProcedure.b_12') }}</p>
          <ol type="i" class="expansion" style="margin-left: unset;">
            <li><p>{{ $t('applicationProcedure.b_13') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_14') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_15') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_16') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_17') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_18') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_19') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_20') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_21') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_22') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_23') }}</p></li>
          </ol>
        </li>
        <li><p>{{ $t('applicationProcedure.b_24') }}</p>
          <ol type="i" class="expansion" style="margin-left: unset;">
            <li><p>{{ $t('applicationProcedure.b_25') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_26') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_27') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_28') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_29') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_30') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_31') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_32') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_33') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_34') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_35') }}</p></li>
            <li><p>{{ $t('applicationProcedure.b_36') }}</p></li>
          </ol>
        </li>
        </ol>
        </ol>
      </OlsExpansion>
    </v-expansion-panels>
    <h3 class="em-34 mt-16">{{ $t('applicationProcedure.title_3') }}</h3>
    <BoldLine class="mt-10" :options="{color:'#CEC3F0',height:'3px',width:'100%'}"></BoldLine>
    <v-expansion-panels class="mb-8" multiple >
      <OlsExpansion :order="special.order" :title="$t('applicationProcedure.c_1')" :type="1">
        <p>{{ $t('applicationProcedure.c_2') }}</p>
        <p>{{ $t('applicationProcedure.c_3') }}</p>
        <p>{{ $t('applicationProcedure.c_4') }}</p>
        <p style="max-width:700px"><strong>{{ $t('applicationProcedure.c_5') }}</strong></p>
        <ul class="expansion" style="margin-left: unset;">
          <li><p>{{ $t('applicationProcedure.c_6') }}</p></li>
          <li><p>{{ $t('applicationProcedure.c_7') }}</p></li>
          <ol type="a" class="expansion" style="margin-left: unset;">
            <li><p>{{ $t('applicationProcedure.c_8') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_9') }}</p></li>
          </ol>
          <li><p>{{ $t('applicationProcedure.c_10') }}</p></li>
          <li><p><strong>{{ $t('applicationProcedure.c_11') }}</strong></p></li>
        </ul>
      </OlsExpansion>
      <OlsExpansion :order="special.order" :title="$t('applicationProcedure.c_12a')" :type="1">
        <p>{{ $t('applicationProcedure.c_12b') }}<strong>{{ $t('applicationProcedure.c_12c') }}</strong>{{ $t('applicationProcedure.c_12d') }}</p>
        <p>{{ $t('applicationProcedure.c_13') }}</p>
        <ol type="a" class="expansion" style="margin-left: unset;">
          <li><p>{{ $t('applicationProcedure.c_14') }}</p></li>
          <li><p>{{ $t('applicationProcedure.c_15') }}</p></li>
          <li><p>{{ $t('applicationProcedure.c_16') }}</p></li>
          <li><p>{{ $t('applicationProcedure.c_17') }}</p></li>
          <li><p>{{ $t('applicationProcedure.c_18') }}</p></li>
        </ol>
        <p>{{ $t('applicationProcedure.c_19') }}</p>
        <p style="max-width:700px"><strong>{{ $t('applicationProcedure.c_20') }}</strong></p>
        <ul class="expansion" style="margin-left: unset;">
          <li><p>{{ $t('applicationProcedure.c_21') }}</p></li>
          <li><p>{{ $t('applicationProcedure.c_22') }}</p></li>
          <li><p><strong>{{ $t('applicationProcedure.c_23') }}</strong></p></li>
        </ul>
      </OlsExpansion>
      <OlsExpansion :order="special.order" :title="$t('applicationProcedure.c_24')" :type="1">
        <p>{{ $t('applicationProcedure.c_25') }}</p>
        <p>{{ $t('applicationProcedure.c_26') }}</p>
        <p style="max-width:700px"><strong>{{ $t('applicationProcedure.c_27') }}</strong></p>
        <ul class="expansion" style="margin-left: unset;">
          <li><p>{{ $t('applicationProcedure.c_28') }}</p></li>
          <li><p><strong>{{ $t('applicationProcedure.c_29') }}</strong></p></li>
        </ul>
      </OlsExpansion>
      <OlsExpansion :order="special.order" :title="$t('applicationProcedure.c_30')" :type="1">
        <ul class="expansion" style="margin-left: unset;">
          <li><p>{{ $t('applicationProcedure.c_31') }}</p></li>
          <li><p>{{ $t('applicationProcedure.c_32') }}</p></li>
          <li><p>{{ $t('applicationProcedure.c_33a') }}</p></li>
          <li><p>{{ $t('applicationProcedure.c_33b') }}</p></li>
        </ul>
        <p><strong>{{ $t('applicationProcedure.c_34') }}</strong></p>
        <ul class="expansion" style="margin-left: unset;">
          <li><p><strong>{{ $t('applicationProcedure.c_35a') }}</strong>{{ $t('applicationProcedure.c_35b') }}</p></li>
          <li><p>{{ $t('applicationProcedure.c_36') }}</p></li>
          <li><p>{{ $t('applicationProcedure.c_37') }}</p></li>
        </ul>
        <p><strong>{{ $t('applicationProcedure.c_38') }}</strong></p>
        <ul class="expansion" style="margin-left: unset;">
          <li><p>{{ $t('applicationProcedure.c_39') }}</p></li>
          <ol type="1" class="expansion" style="margin-left: unset;">
            <li><p>{{ $t('applicationProcedure.c_40') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_41') }}</p></li>
          </ol>
          <p>{{ $t('applicationProcedure.c_42') }}</p>
          <li><p>{{ $t('applicationProcedure.c_43') }}</p></li>
          <li><p>{{ $t('applicationProcedure.c_44') }}</p></li>
        </ul>
      </OlsExpansion>
      <OlsExpansion :order="special.order" :title="$t('applicationProcedure.c_45')" :type="1">
        <ul class="expansion" style="margin-left: unset;">
          <li><p>{{ $t('applicationProcedure.c_46') }}</p></li>
          <ol type="a" class="expansion" style="margin-left: unset;">
            <li><p>{{ $t('applicationProcedure.c_47') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_48') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_49') }}</p></li>
          </ol>
          <li><p>{{ $t('applicationProcedure.c_50') }}</p></li>
          <li><p>{{ $t('applicationProcedure.c_51') }}</p></li>
        </ul>
      </OlsExpansion>
    </v-expansion-panels>
    <h3 class="em-34 mt-16">{{ $t('applicationProcedure.title_4') }}</h3>
    <BoldLine class="mt-10" :options="{color:'#CEC3F0',height:'3px',width:'100%'}"></BoldLine>
    <v-expansion-panels class="mb-8" multiple >
      <OlsExpansion :order="special.order" :title="$t('applicationProcedure.c_52')" :type="1">
        <ol type="1" class="expansion" style="margin-left: unset;">
            <li><p>{{ $t('applicationProcedure.c_53') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_54') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_55') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_56') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_57') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_58') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_59') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_60') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_61') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_62') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_63') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_64') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_65') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_66') }}</p></li>
          </ol>
      </OlsExpansion>
      <OlsExpansion :order="special.order" :title="$t('applicationProcedure.c_67')" :type="1">
        <ol type="1" class="expansion" style="margin-left: unset;">
            <li><p>{{ $t('applicationProcedure.c_68') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_69') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_70') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_71') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_72') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_73') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_74') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_75') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_76') }}</p></li>
            <li><p>{{ $t('applicationProcedure.c_77') }}</p></li>
          </ol>
      </OlsExpansion>

    </v-expansion-panels>

  </div>

</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import OlsExpansion from '../../components/misc/ols-expansion'

export default {
  name: 'InProcedures',
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

.content-div h3{
  font-size:2.125em;
}

ol.expansion ul.expansion{
  margin-left:0;
  padding-left: 0;

  li{
    margin-bottom:12px;
    p{
      margin:0;
      margin-left: 24px;
      span{
        word-wrap: break-word;
      }
    }
    &::marker{
      font-size:1.1em;
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

ol.expansion{
  li{
    margin-left: 60px;
  }
  padding-left: 0 !important;
}

</style>
