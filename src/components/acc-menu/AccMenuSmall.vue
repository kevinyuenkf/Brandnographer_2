<template >
  <div class="base-div">
    <v-menu v-model="menu_active" :close-on-content-click="false" v-if="tabs.length>0" transition="slide-x-transition" offset-y >
      <template v-slot:activator="{ on, attrs }">
          <v-btn class="menu-btn" v-bind="attrs" v-on="on" depressed @click="menu_active=!menu_active" v-click-outside="onClickOutside">
              <BoldLine id="bold-line" :options="{color:$vuetify.theme.themes.light.secondary,height:'30px',width:'4px'}"></BoldLine>
              <h1>{{$t(tabs[selected].title)}}</h1>
              <v-spacer></v-spacer>
              <v-icon :class="menu_active? 'rotate-90':'rotate-0'" v-text="'mdi-chevron-right'" color="white"></v-icon>
          </v-btn>
      </template>
      <div class="py-4">
        <div class="tabs-item" v-ripple v-for="(item,i) in tabs" :key="i" :class="selected == i?'active':''" @click="$emit('itemOnclick',item.path,i)" >
          {{$t(item.title)}}
        </div>
        <BoldLine id="bold-line " class="my-4" :options="{color:'#eaeaea',height:'3px',width:'100%'}"></BoldLine>
        <h5>Please choose application form</h5>
        <div v-ripple class="open-list-btn mt-n1" @click="active=!active">
          <h3>Select Services</h3>
          <v-icon :class="active? 'rotate-90':'rotate-0'" v-text="'mdi-menu-right'" color="#4e45d1"></v-icon>
        </div>
        <transition name="fade">
          <div class="ml-4 mt-n3" v-show="active">
            <div v-ripple class="list-subbtn">New Licence</div>
            <div v-ripple class="list-subbtn">Licence Renewal</div>
            <div v-ripple class="list-subbtn">Licence Transfer</div>
            <div v-ripple class="list-subbtn" @click="active_sub=!active_sub">
              <div>Nominated Reserve Licensee</div>
              <v-icon :class="active_sub? 'rotate-90':'rotate-0'" v-text="'mdi-menu-right'" color="#4e45d1"></v-icon>
            </div>
            <transition name="fade">
              <div class="my-2 ml-4" v-show="active_sub" >
                <div v-ripple class="list-subbtn sub">
                  <div class="mr-2">•</div>
                  <div>Application for Authorisation of a Nominated Reserve Licensee</div>
                </div>
                <div v-ripple class="list-subbtn sub">
                  <div class="mr-2">•</div>
                  <div>Declaration of the Nominated Reserve Licensee</div>
                </div>
              </div>
            </transition>
            <div v-ripple class="list-subbtn">Temporary Absence</div>
            <div v-ripple class="list-subbtn">Licence Amendment</div>
            <div v-ripple class="list-subbtn">Change Information</div>
          </div>
        </transition>
      </div>
    </v-menu>
    <div class="user-div">
      {{user}}
    </div>
  </div>
</template>
<style scoped lang="scss">
  .user-div{
    padding:12px clamp(20px, 5%, 110px);
    background:white;
    color:#7A7A7A;
    border-bottom:2px solid #B0B0B023;
    font-weight: 500;
  }

  .base-div{
    width: 100%;
    padding:0px;
    background:$ols-primary;
    display: flex;
    flex-direction: column;
    color:white;
    h1{
      font-size:1.625em;
      line-height: 1.2em;
    }
    #bold-line{
      margin-right:20px;
    }
    .menu-btn{
      border-radius: 0px !important;
      background:$ols-primary;
      height: auto !important;
      width:100%;
      color:white;
      justify-content: flex-start;
      padding:18px clamp(20px, 5%, 110px);
      font-size:1em;
      letter-spacing: normal;
      text-transform: none;
      margin: 0px;
    }
    
  }

.tabs-item{
      cursor: pointer;
      font-size:1.25em;
      font-weight:600;
      padding:4px 10px 4px 24px ;
      border-radius:5px;
      &.active{
        color:$ols-primary;
        border-radius: 0px 5px 5px 0px;
      }
    }
    h5{
      color:#B0B0B0;
      font-size:1.125em;
      font-weight: 400;
    }

  .v-menu__content{
    min-width:100% !important;
    border-radius: 0px;
    padding:5px clamp(20px, 5%, 110px);
    background:white !important;
    .v-list{
      background:white !important;
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


@media screen and (min-width: 1263px) {

.v-menu__content{
    display: none;
}

}
</style>
<script>
import BoldLine from '../misc/bold-line'
export default {
    name: 'AccMenuSmall',
    components: {
      BoldLine
    },
    props: {
      tabs: Array,
      services:Array,
      toggle:Number,
      user:String,
    },
    data: function () {
      return {
          menu_active:false,
          selected: this.toggle,
          active: false, active_sub: false,
      }
    },
    watch:{
      toggle(){
        this.selected = this.toggle;
      }
    },
    methods: {
      onClickOutside () {
        // this.menu_active = false;
      },
    },
  }
</script>