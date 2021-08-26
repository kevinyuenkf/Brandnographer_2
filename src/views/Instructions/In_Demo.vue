<template>
  <div class="content-div">
    <h1>{{ $t('videoDemo.title') }}</h1>
    <p>{{ $t('videoDemo.content_1') }}</p>
      <iframe style="width:80vw;height:45vw" id="video-frame" src="https://www.youtube.com/embed/x46dO7qIxoQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <h1 class="mt-8" >{{ $t('videoDemo.content_2') }}</h1>
    <p>{{ $t('videoDemo.content_3') }}</p>
    <div class="d-flex align-center flex-wrap t-wrap">
      <img class="mb-4 mt-2" src="../../assets/pdf.svg" />
      <h5 class="fw-400 em-18 ml-3 mb-3 "><a :href="publicPath+'fehb106_new form_filled.pdf'" target="_blank">{{ $t('videoDemo.content_4') }}</a></h5>
    </div>
    <div class="d-flex align-center flex-wrap t-wrap">
      <img class="mb-4 mt-2" src="../../assets/pdf.svg" />
      <h5 class="fw-400 em-18 ml-3 mb-3 "><a :href="publicPath+'fehb106_new form_filled.pdf'" target="_blank">{{ $t('videoDemo.content_5') }}</a></h5>
    </div>
    <div class="d-flex align-center flex-wrap t-wrap">
      <img class="mb-4 mt-2" src="../../assets/pdf.svg" />
      <h5 class="fw-400 em-18 ml-3 mb-3 "><a :href="publicPath+'fehb106_new form_filled.pdf'" target="_blank">{{ $t('videoDemo.content_6') }}</a></h5>
    </div>
  </div>
  
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import OlsExpansion from '../../components/misc/ols-expansion'

export default {
  name: 'InDemo',
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

.content-div{
  width:calc(100vw - 405px);
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
  
.t-wrap{
  img{
    width:44px;
  }
  h5{
    font-size:1em;
  }
}

.content-div{
  width:100vw;
}
}

</style>