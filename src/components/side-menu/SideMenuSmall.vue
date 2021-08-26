<template >
  <div class="base-div">
    <div class="header-div d-flex">
      <BoldLine id="bold-line" :options="{color:this.$vuetify.theme.themes.light.secondary,height:'inherit',width:'6px'}">123</BoldLine>
      <h1>{{title}}</h1>
    </div>
    <v-menu v-if="btns.length>0" transition="slide-x-transition" offset-y >
      <template v-slot:activator="{ on, attrs }">
          <v-btn class="menu-btn" v-bind="attrs" v-on="on" depressed @click="active=!active" v-click-outside="onClickOutside">
              <span class="rem-1-125">{{btns[selected].title}}</span>
              <v-spacer></v-spacer>
              <v-icon :class="active? 'rotate-90':'rotate-0'" v-text="'mdi-chevron-right'" color="white"></v-icon>
          </v-btn>
      </template>
      <v-list flat >
        <!-- <v-subheader>Navigate to</v-subheader> -->
        <v-list-item-group v-model="selected" color="primary" mandatory>
          <v-list-item v-for="(item,i) in btns" :key="i"  @click="$emit('itemOnclick',item.path,i)">
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>
<style scoped lang="scss">
  .base-div{
    width: 100%;
    padding:0px;
    background:$ols-primary;
    display: flex;
    flex-direction: column;
    color:white;
    .header-div{
      padding:20px clamp(20px, 5%, 110px) 20px;
    }
    h1{
      font-size:1.625em;
      line-height: 1.2em;
    }
    #bold-line{
      margin-right:20px;
    }
    .menu-btn{
      border-radius: 0px !important;
      background:$ols-primary-tint;
      height: auto !important;
      width:100%;
      color:white;
      justify-content: flex-start;
      padding:18px clamp(20px, 5%, 110px);
      font-size:1.1875em;
      letter-spacing: normal;
      text-transform: none;
      margin: 0px;
      margin-top:-10px;
    }
  }
  .v-menu__content{
    min-width:100% !important;
    border-radius: 0px;
    padding-left:clamp(20px, 5%, 110px);
    background:white !important;
    .v-list{
      background:white !important;
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
    name: 'SideMenuLarge',
    components: {
      BoldLine
    },
    props: {
      title:String,
      btns: Array,
      toggle:Number,
    },
    data: function () {
      return {
          selected: this.toggle,
          active:false,
      }
    },
    watch:{
      toggle(){
        this.selected = this.toggle;
      }
    },
    methods: {
      onClickOutside () {
        this.active = false;
      },
    },
  }
</script>