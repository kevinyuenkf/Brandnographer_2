<template>
  <div class="base-div">
    <div class="tabs-item" v-ripple v-for="(item,i) in tabs" :key="i" :class="selected == i?'active':''" @click="$emit('itemOnclick',item.path,i)" >
      {{$t(item.title)}}
    </div>
    <BoldLine id="bold-line" class="my-7" :options="{color:'#eaeaea',height:'3px',width:'100%'}"></BoldLine>
    <h5>{{ $t('please_choose_form') }}</h5>
    <div v-ripple class="open-list-btn mt-0" @click="active=!active">
      <h3>{{ $t('select_services') }}</h3>
      <v-icon :class="active? 'rotate-90':'rotate-0'" v-text="'mdi-menu-right'" color="#4e45d1"></v-icon>
    </div>
    <transition name="fade">
      <div class="ml-4 mt-n3" v-show="active">
        <div v-ripple class="list-subbtn">{{ $t('new_lic') }}</div>
        <div v-ripple class="list-subbtn">{{ $t('lic_renew') }}</div>
        <div v-ripple class="list-subbtn">{{ $t('lic_transfer') }}</div>
        <div v-ripple class="list-subbtn" @click="active_sub=!active_sub">
          <div>{{ $t('nom_res_li') }}</div>
          <v-icon :class="active_sub? 'rotate-90':'rotate-0'" v-text="'mdi-menu-right'" color="#4e45d1"></v-icon>
        </div>
        <transition name="fade">
          <div class="my-2 ml-4" v-show="active_sub" >
            <div v-ripple class="list-subbtn sub">
              <div class="mr-2">•</div>
              <div>{{ $t('nom_res_li_a') }}</div>
            </div>
            <div v-ripple class="list-subbtn sub">
              <div class="mr-2">•</div>
              <div>{{ $t('nom_res_li_b') }}</div>
            </div>
          </div>
        </transition>
        <div v-ripple class="list-subbtn">{{ $t('temp_abs') }}</div>
        <div v-ripple class="list-subbtn">{{ $t('lic_amend') }}</div>
        <div v-ripple class="list-subbtn">{{ $t('change_info') }}</div>
      </div>
    </transition>
  </div>
</template>
<style scoped lang="scss">

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .base-div{
    height:100%;
    min-width: 405px;
    max-width: 405px;
    flex:1 0;
    padding:60px 47px 0px 78px;
    background:#F7F7F7;
    display: flex;
    flex-direction: column;
    color:#4A4A4A;
    .tabs-item{
      cursor: pointer;
      font-size:1.4375em;
      font-weight:600;
      padding:4px 10px 4px 24px ;
      margin-bottom:8px;
      border-radius:5px;
      &.active{
        color:$ols-primary;
        padding:4px 10px 4px 20px ;
        border-left:4px solid $ols-secondary;
        border-radius: 0px 5px 5px 0px;
      }
    }
    h5{
      color:#B0B0B0;
      font-size:1.125em;
      font-weight: 400;
    }
  }

  .open-list-btn{
    cursor: pointer;
    padding:10px 14px;
    margin:8px -14px;
    display:flex;
    color:$ols-primary;
    border-radius: 5px;
    font-size:1.228637em;
  }

  .list-subbtn{
    cursor: pointer;
    padding:6px 12px;
    margin:2px -12px;
    display:flex;
    color:#4A4A4A;
    border-radius: 5px;
    font-size:1.125em;
    &.sub{
      font-size:1em;
  }
  }
</style>
<script>
import BoldLine from '../misc/bold-line'
export default {
    name: 'AccMenuLarge',
    components: {
      BoldLine
    },
    props: {
      tabs: Array,
      services:Array,
      toggle:Number,
    },
    data: function () {
      return {
          selected: this.toggle,
          active: false, active_sub: false,
      }
    },
    watch:{
      toggle(){
        this.selected = this.toggle;
      }
    }
  }
</script>