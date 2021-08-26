<template>
  <div class="content-div content-div-1">
    <div class="header">
      <h1>Application for Amendment of a Liquor Licence</h1>
      <div class="d-flex align-center ">
        <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
        <h2>{{$t('terms_and_conditions')}}</h2>
      </div>
    </div>
    <div class="body">
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
    <div class="footer">
      <v-btn class="footer-btn b-dark">{{$t('save_draft')}}</v-btn>
      <v-btn class="footer-btn b-primary" :disabled="!agree">{{$t('save_and_next')}}</v-btn>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
// @ is an alias to /src


export default {
  name: 'AMTac',
  components: {
    BoldLine
  },
  data: function () {
    return {
      agree: false,
    }
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
