<template >
  <div class="base-div">
    <div class="header-div d-flex">
      <h1>{{title}}</h1>
    </div>
    <v-menu transition="slide-x-transition" offset-y >
      <template v-slot:activator="{ on, attrs }">
          <v-btn class="menu-btn" v-bind="attrs" v-on="on" depressed @click="expanded=!expanded" v-click-outside="onClickOutside">
              <!-- <span class="rem-1-125">1</span>
              <v-spacer></v-spacer> -->
              <div class="step-div-slot">
                <div class="circle">
                  <p v-if="current === steps_temp.length"><v-icon style="font-size:20px" color="#FFFFFF">mdi-check</v-icon></p>
                  <p v-else>{{current}}</p>
                </div>
                <p class="label">{{steps_temp[current-1].title}}</p>
              </div>
              <v-spacer></v-spacer>
              <v-icon :class="expanded? 'rotate-90':'rotate-0'" v-text="'mdi-chevron-right'" color="primary"></v-icon>
          </v-btn>
      </template>
      <div class="stepper-gp">
          <div v-for="(item,i) in steps_temp.slice(0, -1)" :key="i" class="step-div">
            <OLSStep :order="i+1" :title="item.title" :editable="item.editable" :state="updateState(i+1)" @itemOnclick="stepClickedCall"></OLSStep>
            <div class="step-line"></div>
          </div>
      </div>
    </v-menu>
  </div>
</template>
<style scoped lang="scss">
  .base-div{
    width: 100%;
    padding:0px;
    background:#F2F2F2;
    display: flex;
    flex-direction: column;
    color:$ols-t-dark;
    .header-div{
      padding:20px clamp(20px, 5%, 110px) 20px;
    }
    h1{
      font-size:1.125em;
      line-height: 1.2em;
    }
    #bold-line{
      margin-right:20px;
    }
    .menu-btn{
      border-radius: 0px !important;
      background:transparent;
      height: auto !important;
      width:100%;
      justify-content: flex-start;
      padding:14px clamp(20px, 5%, 110px);
      font-size:1.1875em;
      letter-spacing: normal;
      text-transform: none;
      margin: 0px;
      margin-top:-20px;
    }
  }
  .v-menu__content{
    min-width:100% !important;
    border-radius: 0px;
    padding:20px clamp(20px, 5%, 110px);
    background:white !important;
    .v-list{
      background:white !important;
    }
  }

.step-div-slot{
  width:100%;
  height:auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size:1em;
  .circle{
  width:39px;
  height:39px;
  min-width:39px;
  background:$ols-primary;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
    p{
      color:white;
      margin:0px;
      font-size:1.125em;
    }
  }
}

.label{
  letter-spacing: normal;
  margin:-2px 0px 0px 14px;
  font-weight: 600;
  text-align: left;
  color:$ols-primary;
  max-width:60vw;
  white-space: pre-wrap;
}

.step-div{
  .step-line{
    width:3px;
    height:32px;
    // background:$ols-t-lightGrey-darken;
    background: transparent;
    margin:-22px 27.5px;
  }
  &:last-of-type{
    .step-line{
      height:0px;
      background: transparent;
      margin:0px;
    }
  }
}

@media screen and (max-width: 600px) {
.step-div{
  .step-line{
    margin:-22px 0px -22px 18px!important;
  }
  &:last-of-type{
    .step-line{
      height:0px;
      margin:0px!important;
    }
  }
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
import OLSStep from './OLSStep'

export default {
    name: 'SideMenuSmall',
    components: {
      BoldLine,
      OLSStep
    },
    props: {
      title:String,
      steps: Array,
      current:Number,
    },
    data: function () {
      return {
          active: this.current,
          steps_temp :this.steps,
          expanded : false,
      }
    },
    watch:{
      steps(){
        this.steps_temp = this.steps;
      }
    },
    methods:{
      updateState : function (i){
        var n = 0;
        if(this.current< i){
          n = 0;
        }else if(this.current==i){
          n = 1;
        }else if (this.current >i){
          n = 2;
        }
        return n;
      },
      stepClickedCall : function (inOrder){
        console.log(inOrder);
        this.$emit('itemOnclick',inOrder);
      },
      onClickOutside () {
        this.expanded = false;
      },
    }
  }
</script>
