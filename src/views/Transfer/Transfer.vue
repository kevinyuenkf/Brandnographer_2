<template>
  <div class="main-container">
    <StepMenuLarge class="side-menu-large hidden-md-and-down" :title="$t('application_progress')" :steps="steps" :current="current" @itemOnclick="stepperStepClickedHandler"></StepMenuLarge>
    <StepMenuSmall class="hidden-lg-and-up" :title="$t('application_progress')" :steps="steps" :current="current" @itemOnclick="stepperStepClickedHandler"></StepMenuSmall>
    <div class="router-div">
        <router-view @updateCurrent="updateCurrent"/>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import StepMenuLarge from '../../components/step-menu/StepMenuLarge';
import StepMenuSmall from '../../components/step-menu/StepMenuSmall';
// @ is an alias to /src


export default {
  name: 'Transfer',
  components: {
    BoldLine,
    StepMenuLarge,StepMenuSmall
  },
  data: () => ({
      steps:[
        {title:'Terms and Conditions',view:'TransferTac',editable:true},{title:'Declaration Relating to Transfer Application',view:'TransferDeclaration',editable:true},
        {title:'Personal Information of Transferee',editable:false},{title:'Information Relating to Management',editable:false},
        {title:'Mode of Operation',editable:false},{title:'To be Completed by Licence Holder',editable:false},{title:'Upload Documents',editable:false},
        {title:'Identity Authentication',editable:false},{title:'Confirmation of Application',editable:false}
      ],
      current:1,
  }),
  methods: {
    routeSubviewTo: function (inValue,index){
        this.current = index;
        this.$router.push({name: inValue})
    },
    stepperStepClickedHandler: function (inOrder){
      this.current = inOrder;
      if(this.steps[this.current-1].view != undefined || this.steps[this.current-1].view != ''){
        this.$router.push({name: this.steps[this.current-1].view});
      }
    },
    updateCurrent: function(inValue){
      this.current = inValue;
    }
  },
  mounted(){
    this.$root.$emit('updateNav');
  }
}
</script>

<style scoped lang="scss">

.main-container {
    width:100%;
    height:100%;
    flex-direction: row;
    align-items: flex-start;
}

//md and down
@media screen and (max-width: 1263px) {

.main-container {
    width:100%;
    height:100%;
    flex-direction: column;
}

}

</style>
