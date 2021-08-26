<template>
  <div class="base-div">
    <h3>{{$t(title)}}</h3>
    <div class="stepper-gp">
      <div v-for="(item,i) in steps_temp.slice(0, -1)" :key="i" class="step-div">
        <OLSStep :order="i+1" :title="item.title" :editable="item.editable" :state="updateState(i+1)" @itemOnclick="stepClickedCall"></OLSStep>
        <div class="step-line"></div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .base-div{
    height:100%;
    max-width: 405px;
    flex:1 0;
    padding:61px 40px 61px 80px;
    background:#F2F2F2;
    display: flex;
    flex-direction: column;
    color:$ols-t-dark;
    h3{
      font-size:1.4375em;
      line-height: 1.4em;
    }
    .stepper-gp{
      margin-top:14px;
      margin-left:-10px;
      padding-top:8px;
      background:transparent !important;
      box-shadow: none !important;
      border-radius: 5px !important;
      .step{
        padding:18px 10px!important;
        border-radius: 5px !important;
      }
      .step-div{
        .step-line{
          width:3px;
          height:32px;
          // background:$ols-t-lightGrey-darken;
          background:transparent;
          margin:-22px 27.5px;
        }
        &:last-of-type{
          .step-line{
            background: transparent;
          }
        }
      }
    }

  }

</style>
<script>
import BoldLine from '../misc/bold-line'
import OLSStep from './OLSStep'

export default {
    name: 'StepMenuLarge',
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
      }
    }
  }
</script>
