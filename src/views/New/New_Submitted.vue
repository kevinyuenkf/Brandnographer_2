<template>
  <div class="content-div content-div-1">
    <div class="header">
      <h1>{{ $t('new_submitted.new_issue' )}}</h1>
      <div class="d-flex align-center ">
        <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
        <h2>{{ $t('new_submitted.submitted' )}}</h2>
      </div>
    </div>
    <div class="body">
      <div class="d-flex align-center">
        <v-icon class="mr-4" style="font-size:70px" color="success">mdi-check-circle</v-icon>
        <h3 class="mt-0">{{ $t('new_submitted.submitted' )}}</h3>
      </div>
      <p class="ml-2 mt-4">{{ $t('new_submitted.ref')}}<a href="" target="_blank">llps1234_2345555-12122</a>{{ $t('new_submitted.circumstances' )}}</p>
      <div style="max-width: 100%">
        <div class="d-flex o-f-stepper">
          <div v-for="(item,i) in items" :key="i" class="d-flex o-f-step">
            <div class="d-flex flex-column box">
              <v-icon v-if="item.active" style="font-size:40px" color="primary">mdi-check-circle</v-icon>
              <v-icon v-if="!item.active" style="font-size:40px" color="#E0E0E0">mdi-checkbox-blank-circle</v-icon>
              <div class="d-flex"><h5 class="mb-2" style="text-align:center;" :class="item.active? 'step-active' : ''">{{item.title}}</h5></div>

              <h5 v-if="item.remark != ''" class="em-16 fw-400">{{item.remark}}</h5>
              <h5 v-if="item.remark ==''" class="em-16 fw-400" style="color:transparent">*</h5>
            </div>
            <div class="connector" :style="!item.active?{borderColor:'#E0E0E0'} :{}"></div>
          </div>
        </div>
      </div>
      <v-btn depressed class="o-btn-action rounded-pill" color="primary">{{ $t('new_submitted.my_account' )}}</v-btn>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import MultipleTextfield from '../../components/misc/multiple-textfield'
// @ is an alias to /src


export default {
  name: 'RenewalSubmitted',
  components: {
    BoldLine,
    MultipleTextfield
  },
  data: function () {
    return {
      items : [
        { title: 'Application Submitted', remark: '', active : true, },
        { title: 'Department Feedback', remark: '', active : false, },
        { title: 'Documents Verified', remark: '', active : false, },
        { title: 'Seek Approval', remark: '', active : false, },
        { title: 'Licence Ready', remark: '* Proceed to payment', active : false, },
        { title: 'Licence Issued', remark: '', active : false, },
      ]

    }
  },
  methods:{

  },
  activated(){
    this.$emit('updateCurrent',9);
    this.dialog = true;
  },
}
</script>

<style scoped lang="scss">

.main-container {
    width:100%;
    height:100%;
    flex-direction: row;
    align-items: flex-start;
}

.form-div{
    width:clamp(280px, 100%, 666px);
    .o-btn-action{
        margin-top:32.5px;
    }
}

h5{
  color:black;
}

h5.fw-400{
  color:$ols-t-dark;
  margin-top:13px;
  margin-bottom:40px;
}

h5.step-active{
  color: $ols-primary;
}

h5.t-grey{
  color:#4A4A4A;
}

h5.em-18{
  font-size: 1.125em;
}


h5.em-16 {
  font-size: 1em;
  font-weight:400;
}


.big-gap{
  margin-right:16px
}

//md and down
@media screen and (max-width: 1263px) {

.main-container {
    width:100%;
    height:100%;
    flex-direction: column;
}

h5.em-18{
  font-size: 1em;
}

.big-gap{
  margin-right:8px
}

}

@media screen and (min-width: 1263px) and (max-width: 1600px) {
  .o-f-stepper {
    max-width: 700px;
  }
}

</style>
