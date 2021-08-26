<template>
  <div class="main-container">
    <StepMenuLarge style="flex:1 0 100%" class="side-menu-large hidden-md-and-down" :title="$t('application_progress')" :steps="steps" :current="current" @itemOnclick="stepperStepClickedHandler"></StepMenuLarge>
    <StepMenuSmall class="hidden-lg-and-up" :title="$t('application_progress')" :steps="steps" :current="current" @itemOnclick="stepperStepClickedHandler"></StepMenuSmall>
    <v-dialog v-model="dialog" persistent max-width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" v-if="false">
            Diaglog
          </v-btn>
        </template>
        <v-card class="o-notice-card">
          <v-card-title class="headline o-notice">
            Notice
          </v-card-title>
          <div class="py-6 px-8 body-div em-19">
            <div class="d-flex justify-center" v-if="target !== 8">Your data input in this step will be saved as draft.</div>
            <div class="d-flex justify-center" v-if="target === 8">This application cannot be proceeded before nominated reserve licensee has completed the form.</div>
          </div>
          <v-card-actions class="justify-center">
            <v-btn depressed class="o-btn-action rounded-pill mb-4" color="primary" @click="saveAsDraft()">OK</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
    <div class="router-div">
      <keep-alive>
        <router-view @updateCurrent="updateCurrent"/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import StepMenuLarge from '../../components/step-menu/StepMenuLarge';
import StepMenuSmall from '../../components/step-menu/StepMenuSmall';
// @ is an alias to /src


export default {
  name: 'New',
  components: {
    BoldLine,
    StepMenuLarge,StepMenuSmall
  },
  data: () => ({
      steps:[
        {title:'application_progress',view:'NewTac',editable:true},{title:'information_relating_to_the_premises',view:'NewInfoPremises',editable:true},
        {title:'infoApplicant',view:'NewInfoApplicant',editable:true},{title:'information_relating_to_management',view:'NewInfoManagement',editable:true},
        {title:'mode_of_operation',view:'NewModeOp',editable:true},{title:'upload_document',view:'NewUploadDoc',editable:true},{title:'identity',view:'NewIdentityAuth',editable:true},
        {title:'confirmation',view:'NewConfirmation',editable:true},{title:'your_submitted',view:'NewSubmitted',editable:false},
      ],
      current:1,
      target:undefined,
      dialog:false,
  }),
  methods: {
    routeSubviewTo: function (inValue,index){
        if(index<this.current){
            this.current = index;
        }else{
            this.current = index;
            this.$router.push({name: inValue})
        }
    },
    saveAsDraft: function(){
        this.dialog = false;
        this.$router.push({name: this.steps[this.target-1].view});
        this.current = this.target;
    },
    stepperStepClickedHandler: function (inOrder){
      if(inOrder === 8){
        this.dialog = true;
        this.target = inOrder;
        this.current = inOrder;
      }else if(inOrder<this.current){
            this.target = inOrder;
            this.dialog = true;
        }else{
            this.current = inOrder;
            if(this.steps[this.current-1].view != undefined || this.steps[this.current-1].view != ''){
                this.$router.push({name: this.steps[this.current-1].view});
            }
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
