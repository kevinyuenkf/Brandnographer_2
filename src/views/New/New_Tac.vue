<template>
  <div class="content-div content-div-1">
    <div class="header">
      <h1>Application for New Issue of a Liquor Licence</h1>
      <div class="d-flex align-center ">
        <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
        <h2>{{$t('terms_and_conditions')}}</h2>
      </div>
    </div>
    <div class="body">
      <v-dialog v-model="dialog" persistent max-width="900">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" v-if="false">
            Diaglog
          </v-btn>
        </template>
        <v-card class="o-notice-card">
          <v-card-title class="headline o-notice">
            Notice to Applicant
          </v-card-title>
          <div class="py-6 px-8 body-div">
            <ol class="em-19">
              <li>
                <div class="d-flex flex-column ">
                  <div>The following documents have to be submitted to the Liquor Licensing Board in respect of the online application:</div>
                  <div class="d-flex align-center mt-5 ">
                    <img class="notice-img mr-5" src="../../assets/notice/notice_photograph.svg" alt="photography">
                    <div class="mr-3">a recent photograph (35mm x 40mm) of the applicant ;</div>
                    <v-tooltip right>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon class="tooltip-icon mt-1" color="secondary" dark v-bind="attrs" v-on="on">
                          mdi-help-circle
                        </v-icon>
                      </template>
                      <div>
                        <div class="d-flex align-center mb-2">
                          <v-icon color="secondary" dark >
                            mdi-help-circle
                          </v-icon>
                          <h3 class="mb-0">Tips:</h3>
                        </div>
                        <div class="ml-8 c-div">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                      </div>
                    </v-tooltip>
                  </div>
                  <div class="d-flex align-center mt-5 ">
                    <img class="notice-img mr-5" src="../../assets/notice/notice_HKID.svg" alt="photography">
                    <div class="mr-3">a copy of the applicant's HKID card ;</div>
                    <v-tooltip right>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon class="tooltip-icon mt-1" color="secondary" dark v-bind="attrs" v-on="on">
                          mdi-help-circle
                        </v-icon>
                      </template>
                      <div>
                        <div class="d-flex align-center mb-2">
                          <v-icon color="secondary" dark >
                            mdi-help-circle
                          </v-icon>
                          <h3 class="mb-0">Tips:</h3>
                        </div>
                        <div class="ml-8 c-div">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                      </div>
                    </v-tooltip>
                  </div>
                  <div class="d-flex align-center mt-5 ">
                    <img class="notice-img mr-5" src="../../assets/notice/notice_cert.svg" alt="photography" height="60px">
                    <div class="mr-3" style="max-width:80%">a copy of each of the Business Registration Certificate of the restaurant and company (if the establishment under application is a limited company); and</div>
                    <v-tooltip right>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon class="tooltip-icon mt-1" color="secondary" dark v-bind="attrs" v-on="on">
                          mdi-help-circle
                        </v-icon>
                      </template>
                      <div>
                        <div class="d-flex align-center mb-2">
                          <v-icon color="secondary" dark >
                            mdi-help-circle
                          </v-icon>
                          <h3 class="mb-0">Tips:</h3>
                        </div>
                        <div class="ml-8 c-div">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                      </div>
                    </v-tooltip>
                  </div>
                  <div class="my-7">You may view a detailed version of Application Procedures <router-link :to="{ name: 'InProcedures'}"><a>here</a></router-link>. </div>
                </div>
              </li>
              <li>
                <div class="d-flex flex-column ">
                  <div>If you plan to nominate a reserve licensee, please remind the nominee to create an account as soon as possible.</div>
                </div>
              </li>
            </ol>
          </div>
          <v-card-actions class="justify-center">
            <v-btn depressed class="o-btn-action rounded-pill mb-4" color="primary" @click="dialog = false">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <p>The Liquor Licensing Board (LLB), a statutory body established under the Dutiable Commodities (Liquor) Regulations who is responsible for the licensing of premises used for the sale or supply of liquor for consumption on the premises, has given consents to accept applications and documents in form of electronic records.</p>
      <p>In accordance with the Dutiable Commodities (Liquor) Regulation, it is a requirement to sign on the electronic form with a digital signature, or a password assigned or approved by Liquor Licensing Board (LLB). To complete the online submission of application for new issue, transfer, renewal or amendment of liquor licence, you are required to produce a valid digital certificate, a password assigned or approved by Liquor Licensing Board.</p>
      <p>If you would like to submit completed application form to Licensing Offices in person or by post, the system allows applicants to prepare the applications online through your user accounts. To complete the application process, you must print and sign on the completed application form before submission to Licensing Offices together with supporting documents to the Licensing Offices in person or by post within 30 calendar days. On receipt of the duly signed form, the Licensing Office will start to process the application.</p>
      <p class="om">Please read the details <a href="https://www.elegislation.gov.hk/hk/cap109!en-zh-Hant-HK?INDEX_CS=N" target="_blank">Dutiable Commodities (Liquor) Regulations</a></p>
      <v-checkbox class="om" v-model="agree" :off-icon="'mdi-radiobox-blank'" :on-icon="'mdi-radiobox-marked'" >
        <template v-slot:label>
          <p class="mb-0 ml-2">I agree with the terms & conditions above.</p>
        </template>
      </v-checkbox>
    </div>
    <div class="footer mt-6">
      <v-btn class="footer-btn b-dark">{{$t('save_draft')}}</v-btn>
      <v-btn class="footer-btn b-primary" :disabled="!agree" @click="$router.push({name:'NewInfoPremises'})" >{{$t('save_and_next')}}</v-btn>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
// @ is an alias to /src


export default {
  name: 'NewTac',
  components: {
    BoldLine
  },
  data: function () {
    return {
      agree: false,
      dialog: false,
    }
  },
  mounted(){
    this.dialog = true;
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

.om{
  margin:32px 0px 0px;
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
