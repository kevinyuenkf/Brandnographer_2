<template>
  <div class="main-container">
    <StepMenuLarge class="side-menu-large hidden-md-and-down" :title="$t('application_progress')" :steps="steps" :current="current" @itemOnclick="stepperStepClickedHandler"></StepMenuLarge>
    <StepMenuSmall class="hidden-lg-and-up" :title="$t('application_progress')" :steps="steps" :current="current" @itemOnclick="stepperStepClickedHandler"></StepMenuSmall>
    <div class="router-div">
        <router-view/>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import StepMenuLarge from '../../components/step-menu/StepMenuLarge';
import StepMenuSmall from '../../components/step-menu/StepMenuSmall';
// @ is an alias to /src


export default {
  name: 'Amendment',
  components: {
    BoldLine,
    StepMenuLarge,StepMenuSmall
  },
  data: () => ({
      steps:[
        {title:'Terms and Conditions',editable:false},{title:'Information of Applicant',editable:false},
        {title:'Information Relating to the Premises',editable:false},{title:'Mode of Operation',editable:false},
        {title:'Upload Documents',editable:false},{title:'Identity Authentication',editable:false},{title:'Confirmation of Application',editable:false},
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
