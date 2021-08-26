<template>
  <div class="content-div content-div-1">
    <div class="header">
      <h1>Application for New Issue of a Liquor Licence</h1>
      <div class="d-flex align-center ">
        <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
        <h2>Nomination of Reserve Licensee</h2>
      </div>
    </div>
    <div class="body">
      <div class="form-div" >
        <v-form v-model="form.valid">
            <h2 >Annex II</h2>
            <h3 >Information of Nominated Reserve Licensee</h3>
            <div class=" d-flex flex-column mt-8">
              <div class="f-li d-flex">
                <p>i.</p>
                <p>In case the liquor licence holder is unable to manage the premises (for example, due to illness or leave), resigns from the post or applies for cancellation of the liquor licence, the nominated reserve licensee can be the applicant for the issue of a new liquor licence in respect of the premises</p>
              </div>
              <div class="f-li d-flex mt-3">
                <p>ii.</p>
                <p>In case of illness or temporary absence, application is required to be made to the Secretary to the Liquor Licensing Board for authorising the nominated reserve licensee or any other person to temporarily manage the premises under Regulation 24 of the Dutiable Commodities (Liquor) Regulations (Cap. 109, sub. leg. B).</p>
              </div>
            </div>
            <h5 class="em-18 fw-400 mb-4">Applicable to nomination of a reserve licensee in advance to manage the premises during the absence of the liquor licensee for a period not exceeding 25%<a v-on:click="scrollToElement('tag-1')"><sup>1</sup></a> of the number of days of validity period of the licence.</h5>
            <h5 class="em-18 fw-400 mb-0">(Note: All applications for nomination of reserve licensee will be referred to the Police for comment. Thereafter, the Secretary of the Liquor Licensing Board will, in general, consider the application for nomination of reserve licensee in about 8 weeks upon the approval of new issue/renewal/transfer applications of liquor licence.)</h5>
            <div class=" d-flex flex-column mt-5 tag-1">
              <div class="f-li d-flex">
                <h5 class="em-16 fw-400 mr-3">1</h5>
                <h5 class="em-16 fw-400">(Note: All applications for nomination of reserve licensee will be referred to the Police for comment. Thereafter, the Secretary of the Liquor Licensing Board will, in general, consider the application for nomination of reserve licensee in about 8 weeks upon the approval of new issue/renewal/transfer applications of liquor licence.)</h5>
              </div>
            </div>
            <h5 class="fw-400 mb-3">l,</h5>
            <h5 >1 . Nominated Reserve Licensee Name </h5>
            <div class="form-section">
                <v-text-field disabled class="tf-half" v-model="form.chName" :rules="form.fullnameRules"  label="Chinese Name" outlined required></v-text-field>
                <v-text-field disabled class="tf-half" v-model="form.engName" :rules="form.fullnameRules"  label="English Name" outlined required></v-text-field>
            </div>
            <h5 class="mt-2">2 . HKID Card No. </h5>
            <div class="d-flex flex-column" >
                <div class="tf-div">
                    <div class="d-flex align-baseline">
                        <v-text-field disabled class="tf-multiple"  maxlength=1 outlined  :ref="'hkid_0'" @input="focusNextItem(0,'hkid')" @focus="selectItem(0,'hkid')" :error="hkidError"></v-text-field>
                        <div class="connect big-gap"></div>
                        <v-text-field disabled class="tf-multiple"  maxlength=1 outlined  :ref="'hkid_1'" @input="focusNextItem(1,'hkid')" @focus="selectItem(1,'hkid')" :error="hkidError"></v-text-field>
                        <v-text-field disabled class="tf-multiple"  maxlength=1 outlined  :ref="'hkid_2'" @input="focusNextItem(2,'hkid')" @focus="selectItem(2,'hkid')" :error="hkidError"></v-text-field>
                        <v-text-field disabled class="tf-multiple"  maxlength=1 outlined  :ref="'hkid_3'" @input="focusNextItem(3,'hkid')" @focus="selectItem(3,'hkid')" :error="hkidError"></v-text-field>
                        <v-text-field disabled class="tf-multiple"  maxlength=1 outlined  :ref="'hkid_4'" @input="focusNextItem(4,'hkid')" @focus="selectItem(4,'hkid')" :error="hkidError"></v-text-field>
                        <v-text-field disabled class="tf-multiple"  maxlength=1 outlined  :ref="'hkid_5'" @input="focusNextItem(5,'hkid')" @focus="selectItem(5,'hkid')" :error="hkidError"></v-text-field>
                        <v-text-field disabled class="tf-multiple"  maxlength=1 outlined  :ref="'hkid_6'" @input="focusNextItem(6,'hkid')" @focus="selectItem(6,'hkid')" :error="hkidError"></v-text-field>
                        <div class="connect">(</div>
                        <v-text-field disabled class="tf-multiple"  maxlength=1 outlined  :ref="'hkid_7'" @focus="selectItem(7,'hkid')" :error="hkidError"></v-text-field>
                        <div class="connect">)</div>
                    </div>
                </div>
                <div v-show="hkidError" class="msg-div">Invalid input</div>
            </div>
            <h5 class="mt-2">3 . Contact</h5>
            <div class="form-section">
              <v-text-field disabled class="tf-half" :rules="form.fullnameRules"  label="Tel no." outlined required></v-text-field>
              <v-text-field disabled class="tf-half" :rules="form.fullnameRules"  label="Fax no." outlined required></v-text-field>
            </div>
            <p>hereby accept the nomination to manage the above premises during the absence of the liquor licensee. I understand that I shall be deemed to be the liquor licensee of the premises and shall comply with all the licensing conditions specified on the liquor licence during the period of the licensee’s absence.</p>
            <h5 class="em-22 mt-15">Upload the document</h5>
            <!-- table -->
            <div class='o-table mb-2'>
              <div class="d-flex"><h5 class="em-22 mw-6">Document Type</h5><h5 class="em-22 mw-4">Last Update</h5></div>
              <BoldLine :options="{color:'rgba(177,177,177,0.37)',height:'2px',width:'100%'}"></BoldLine>
              <div class="d-flex py-5 ">
                <div class="d-flex mw-6 align-center">
                  <v-icon color="primary" class="mr-5 mb-2" style="font-size:34px;">mdi-check-circle</v-icon>
                  <div class="d-flex flex-column">
                    <div class="d-flex align-center">
                      <h5 class="ma-0 mb-1">A copy of HKID Card</h5>
                    </div>
                    <div class="d-flex bottom-text t-grey mt-n2" >
                      <p class="mr-1">File name : </p>
                      <a href="" target="_blank" class="mr-5"><p>{{document.idCard.filename}}</p></a>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-center justify-space-between mw-4">
                  <h5 class="ma-0 ml-1 em-18 fw-400">{{document.idCard.lastUpdate}}</h5>
                  <v-btn depressed :disabled="btnDisabled" class="o-btn-action small mr-1 mt-0" style="justify-self:flex-start;" color="primary">Choose file</v-btn>
                </div>
              </div>
              <div class="d-flex py-5 ">
                <div class="d-flex mw-6 align-center">
                  <v-icon color="primary" class="mr-5 mb-2" style="font-size:34px;">mdi-check-circle</v-icon>
                  <div class="d-flex flex-column">
                    <div class="d-flex align-center">
                      <h5 class="ma-0 mb-1">A recent photograph</h5>
                    </div>
                    <div class="d-flex bottom-text t-grey mt-n2" >
                      <p class="mr-1">File name : </p>
                      <a href="" target="_blank" class="mr-5"><p>{{document.photograph.filename}}</p></a>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-center justify-space-between mw-4">
                  <h5 class="ma-0 ml-1 em-18 fw-400">01-01-2021</h5>
                  <v-btn depressed :disabled="btnDisabled" class="o-btn-action small mr-1 mt-0" style="justify-self:flex-start;" color="primary">Choose file</v-btn>
                </div>
              </div>
            </div>

            <v-checkbox disabled class="om mt-n1 mb-4" v-model="agree" :off-icon="'mdi-radiobox-blank'" :on-icon="'mdi-radiobox-marked'" >
              <template v-slot:label>
                <p class="mb-0 ml-2 mt-14">I hereby give consent to the Commissioner of Police to provide my personal data kept by the Hong Kong Police Force to the Secretary of the Liquor Licensing Board for the purpose of, or any purpose related to, the handling of the above application.</p>
              </template>
            </v-checkbox>
        </v-form>
        <div class="callout-div detail-box">
          <h2>You can download the form for your own record</h2>
          <div class="d-flex align-end flex-wrap t-wrap">
            <img class="mb-4 mt-2" src="../../assets/pdf.svg" />
            <h5 class="fw-400 em-18 ml-3 mb-3 "><a href="https://www.fehd.gov.hk/english/forms/fehb106.pdf" target="_blank">Dai_Man_Cheung_Nomination_of_Reserve_Licensee</a></h5>
            <a class="icon-a" :href="require('../../assets/pdf/fehb106_new form_filled.pdf')" download="Dai_Man_Cheung_Nomination_of_Reserve_Licensee.pdf" ><v-icon class="ml-2 mb-3" color="primary">mdi-download</v-icon></a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <v-btn class="footer-btn b-dark">{{$t('save_draft')}}</v-btn>
      <v-btn class="footer-btn b-primary" :disabled="false">{{$t('save_and_next')}}</v-btn>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import MultipleTextfield from '../../components/misc/multiple-textfield'
// @ is an alias to /src


export default {
  name: 'NominationInfo',
  components: {
    BoldLine,
    MultipleTextfield
  },
  data: function () {
    return {
      agree:true,
      btnDisabled:true,
      hkidError:false,
      document:{
        idCard: {
          filename:'photo_1.jpg',
          lastUpdate: '01-01-2021'
        },
        photograph: {
          filename:'photo_1.jpg',
          lastUpdate: '01-01-2021'
        },
      },
      form :{
        valid:false,
        chName: '',
        engNamg:'',
        gender:undefined,
        fullnameRules: [
            v => !!v || 'Name is required',
        ],
        phone:'',
        phoneRules: [
            v => !!v || 'Phone is required',
        ],
        email: '',
        emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+/.test(v) || 'Email must be valid',
        ],
        addressRules: [
            v => !!v || '',
        ],

      }
    }
  },
  methods:{
    async scrollToElement(class_name) {
      const el = this.$el.getElementsByClassName(class_name)[0];
      await this.$nextTick();
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
    },
    focusNextItem : function (i,refID){
        var str = refID + '_' + (i+1);
        console.log(str);
        const target = this.$refs[str];
        target.$refs.input.select();
    },
    selectItem : function (i,refID){
        var str = refID + '_' + i;
        console.log(str);
        const target = this.$refs[str];
        console.log(target);
        target.$refs.input.select();
    },
    joinStringWithMTF: function (inValue,connect){
      const temp = []
      inValue.forEach((element,i) => {
        if(element != null && element !=''){
          temp[temp.length] = element;
        }
      });
      if(connect.length>0){
        var n = 1;
        connect.forEach(i => {
          if(temp.length>i+n){
            console.log(temp.length);
            temp.splice(i+n,0, '-');
            n++;
          }
        });
      }
      const str = temp.join('')
      return str;
    }
  },
  activated(){
    this.$emit('updateCurrent',2);
    this.dialog = true;
  },
}
</script>

<style scoped lang="scss">

.callout-div.detail-box{
  max-width:clamp(300px, 80vw, 740px) ;
  padding:30px 80px;
}


.main-container {
    width:100%;
    height:100%;
    flex-direction: row;
    align-items: flex-start;
}

.form-div{
    width:clamp(280px, 100%, 780px);
    .o-btn-action{
        margin-top:32.5px;
    }
}

.body{
  h2{
    font-size:1.375em;
  }
  .v-form h2{
    font-size:1.5625em;
    text-decoration: underline;
  }
  h3{
    font-size: 1.625em;
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

h5.em-22{
  font-size:1.375em;
}

h5.t-grey{
  color:$ols-t-darkGrey;
}

h5.em-18{
  font-size: 1.125em;
  color:black;
  a{
    color:$ols-t-darkGrey;
  }

}

.t-wrap{
  width:100%;

  h5{
    overflow: auto;
    word-wrap: break-word;
  }
}


h5.em-16 {
  font-size: 1em;
  font-weight:400;
  color:#4A4A4A;
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

h5.em-22{
  font-size:1.25em;
}

.big-gap{
  margin-right:8px
}

.body{
  h2{
    font-size:1.25em;
  }
  .v-form h2{
    font-size:1.375em;
    text-decoration: underline;
  }
  h3{
    font-size: 1.45em;
  }
}

}

</style>
