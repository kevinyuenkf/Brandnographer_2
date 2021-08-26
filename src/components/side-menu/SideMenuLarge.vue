<template>
  <div class="base-div">
    <h1>{{$t(title)}}</h1>
    <BoldLine id="bold-line" :options="{color:'#F76553',height:'6px',width:'45px'}">123</BoldLine>
    <v-btn-toggle v-model="selected" tile group mandatory>
      <v-btn v-for="(btn,i) in btns" :key="i" class="side-menu-btn" depressed @click="$emit('itemOnclick',btn.path,i)" >{{$t(btn.title)}}</v-btn>
    </v-btn-toggle>
  </div>
</template>
<style scoped lang="scss">
  .base-div{
    height:100%;
    min-width:405px;
    max-width: 405px;
    flex:1 0;
    padding:97px 47px 0px 78px;
    background:$ols-primary;
    display: flex;
    flex-direction: column;
    color:white;
    h1{
      font-size:2.875em;
      line-height: 1.2em;
    }
    #bold-line{
      margin:26px 0px 41px;
    }
    .side-menu-btn{
      font-weight: 400 !important;
      border-radius: 0px !important;
      width:100%;
      height:auto !important;
      min-height:70px !important;
      color:white;
      justify-content: flex-start !important;
      padding:20px 40px 20px 40px;
      font-size:1.1875em;
      letter-spacing: normal;
      text-transform: none;
      white-space:normal !important;
      text-align: left;
      display: block;
      margin: 0px;
    }
    .v-btn-toggle--group{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        width:100%;
      }
      .v-btn.v-btn--active{
        background:$ols-primary-tint !important;
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
          selected: this.toggle
      }
    },
    watch:{
      toggle(){
        this.selected = this.toggle;
      }
    }
  }
</script>