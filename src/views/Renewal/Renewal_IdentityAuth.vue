<template>
  <div class="content-div content-div-1">
    <div class="header">
      <h1>Application for Renewal of a Liquor Licence</h1>
      <div class="d-flex align-center ">
        <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
        <h2>Identity Authentication</h2>
      </div>
    </div>
    <div class="body">
      <div class="form-bg-circle hidden-md-and-down">7</div>
      <div class="form-div" >
        <h2>Declaration</h2>
        <p>I certify that the answers given above are true to the best of my knowledge and belief and understand that if there is any incomplete statement or declaration or any incorrect information, I shall be liable to summary conviction of a fine of $1,000,000 and to imprisonment for 2 years.</p>
        <p>Besides, I understand that if I fail to discharge the duties of a licence holder, the Liquor Licensing Board may exercise its power to process the liquor licence, including revocation of the liquor licence. </p>
        <p>I hereby give consent to all government departments to provide my personal data kept by the departments to the Liquor Licensing Board for the purpose of, or any purpose directly related to, the handling of my application for the new issue of liquor licence made to the Liquor Licensing Board.</p>
        <v-checkbox class="om" v-model="agree_declaration" :off-icon="'mdi-radiobox-blank'" :on-icon="'mdi-radiobox-marked'" >
          <template v-slot:label>
            <p class="mb-0 ml-2">I understand and agree with the above.</p>
          </template>
        </v-checkbox>
        <v-form v-model="form.valid" v-if="agree_declaration==true">
            <h2 class="mt-10">Identity Authentication</h2>
            <h5 class="ma-0">In accordance with the Electronic Transaction Ordinance, it is a requirement to sign on the form with digital signature where signatures of persons are required. </h5>
            <v-radio-group v-model="auth_data.auth" class="list-radio-gp ml-8 my-3" >
              <v-radio class="mt-5" :label="''" :value="'proceed'">
                <template v-slot:label>
                  <div>Proceed to authenticate identity by <strong> Digital Signature</strong></div>
                </template>
              </v-radio>
              <v-radio class="mt-5" :value="'re-input'">
                <template v-slot:label>
                  <div>Re-input <strong>your password</strong> to proceed to authenticate your identity</div>
                </template>
              </v-radio>
            </v-radio-group>
            <div class="ml-6 mb-6">
              <div v-if="auth_data.auth=='re-input'" class="callout-div mt-5 ml-12 px-15 detail-box">
                <h5 class="em-18 ma-0 mt-4">Please re-input your password</h5>
                <div class="d-flex flex-wrap align-baseline mt-6" style="width:100%">
                    <v-text-field type="password" v-model="auth_data.reinput" class="mr-10"  label="Password" outlined required></v-text-field>
                    <v-btn depressed :disabled="btnDisabled" class="o-btn-action small ma-0 " style="justify-self:flex-start;" color="primary">Verify</v-btn>
                  </div>
              </div>
            </div>
        </v-form>
      </div>
    </div>

    <div class="footer">
      <v-btn class="footer-btn b-dark">{{$t('save_draft')}}</v-btn>
      <v-btn class="footer-btn b-primary" :disabled="false" @click="$router.push({name:'RenewalConfirmation'})">{{$t('save_and_next')}}</v-btn>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import MultipleTextfield from '../../components/misc/multiple-textfield'
// @ is an alias to /src


export default {
  name: 'RenewalIdentityAuth',
  components: {
    BoldLine,
    MultipleTextfield
  },
  data: () => ({
    btnDisabled:false,
    agree_declaration:undefined,
    form :{
      valid:false,
    },
    auth_data : {
      auth:'re-input',
      reinput:'',
    }
  }),
  methods:{
  },
  activated(){
    this.$emit('updateCurrent',7);
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
    width:clamp(280px, 100%, 840px);
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

</style>
