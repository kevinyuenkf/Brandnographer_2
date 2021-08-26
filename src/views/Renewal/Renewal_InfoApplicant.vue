<template>
  <div class="content-div content-div-1">
    <div class="header">
      <h1>Application for Renewal of a Liquor Licence</h1>
      <div class="d-flex align-center ">
        <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
        <h2>Information of Applicant</h2>
      </div>
    </div>
    <div class="body">
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
            <div class="d-flex justify-center">All the data is already pre-filled according to your past record. Please double check the pre-filled information before submission</div>
          </div>
          <v-card-actions class="justify-center">
            <v-btn depressed class="o-btn-action rounded-pill mb-4" color="primary" @click="dialog = false">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <div class="form-bg-circle hidden-md-and-down">2</div>
      <div class="form-div">
        <v-form v-model="form.valid">
            <h5>1 . Liquor Licence No.</h5>
            <div class="form-section">
                <MultipleTextfield :inValue="applicant_data.liquorLicenceNo" :refID="licenceMTF.refID" :amount="licenceMTF.amount" :shouldShow="licenceMTF.error.show" :msg="licenceMTF.error.msg" :connect="licenceMTF.connect" @onInputDone="updateLicenceMTF"></MultipleTextfield>
            </div>
            <h5 class="mt-2">2 . Name </h5>
            <div class="form-section justify-start">
                <v-text-field class="tf-half" v-model="applicant_data.chineseName" :rules="form.fullnameRules"  label="Chinese Name" outlined required></v-text-field>
                <v-radio-group v-model="applicant_data.gender" class="tf-inline-radio-gp" row>
                  <v-radio class="row-radio" :label="'先生'" :value="'M'"></v-radio>
                  <v-radio class="row-radio ml-3" :label="'女士'" :value="'F'"></v-radio>
                </v-radio-group>
                <v-text-field class="tf-half" v-model="applicant_data.englishName" :rules="form.fullnameRules"  label="English Name" outlined required></v-text-field>
                <v-radio-group v-model="applicant_data.gender" class="tf-inline-radio-gp" row>
                  <v-radio class="row-radio" :label="'Mr.'" :value="'M'"></v-radio>
                  <v-radio class="row-radio ml-3" :label="'Ms.'" :value="'F'"></v-radio>
                </v-radio-group>
            </div>
            <h5 class="mt-2">3 . HKID Card No. </h5>
            <div class="d-flex flex-column" >
                <div class="tf-div">
                    <div class="d-flex align-baseline">
                        <v-text-field class="tf-multiple" v-model="applicant_data.hkidCardNo[0]" maxlength=1 outlined  :ref="'hkid_0'" @input="focusNextItem(0,'hkid')" @focus="selectItem(0,'hkid')" :error="hkidError"></v-text-field>
                        <div class="connect big-gap"></div>
                        <v-text-field class="tf-multiple" v-model="applicant_data.hkidCardNo[1]" maxlength=1 outlined  :ref="'hkid_1'" @input="focusNextItem(1,'hkid')" @focus="selectItem(1,'hkid')" :error="hkidError"></v-text-field>
                        <v-text-field class="tf-multiple" v-model="applicant_data.hkidCardNo[2]" maxlength=1 outlined  :ref="'hkid_2'" @input="focusNextItem(2,'hkid')" @focus="selectItem(2,'hkid')" :error="hkidError"></v-text-field>
                        <v-text-field class="tf-multiple" v-model="applicant_data.hkidCardNo[3]" maxlength=1 outlined  :ref="'hkid_3'" @input="focusNextItem(3,'hkid')" @focus="selectItem(3,'hkid')" :error="hkidError"></v-text-field>
                        <v-text-field class="tf-multiple" v-model="applicant_data.hkidCardNo[4]" maxlength=1 outlined  :ref="'hkid_4'" @input="focusNextItem(4,'hkid')" @focus="selectItem(4,'hkid')" :error="hkidError"></v-text-field>
                        <v-text-field class="tf-multiple" v-model="applicant_data.hkidCardNo[5]" maxlength=1 outlined  :ref="'hkid_5'" @input="focusNextItem(5,'hkid')" @focus="selectItem(5,'hkid')" :error="hkidError"></v-text-field>
                        <v-text-field class="tf-multiple" v-model="applicant_data.hkidCardNo[6]" maxlength=1 outlined  :ref="'hkid_6'" @input="focusNextItem(6,'hkid')" @focus="selectItem(6,'hkid')" :error="hkidError"></v-text-field>
                        <div class="connect">(</div>
                        <v-text-field class="tf-multiple" v-model="applicant_data.hkidCardNo[7]" maxlength=1 outlined  :ref="'hkid_7'" @focus="selectItem(7,'hkid')" :error="hkidError"></v-text-field>
                        <div class="connect">)</div>
                    </div>
                </div>
                <div v-show="hkidError" class="msg-div">Invalid input</div>
            </div>
            <h5 class="mt-3">4 . Correspondence Information </h5>
            <div class="mt-1 ml-6 mb-4 d-flex align-center">
              <h5 class="mt-3">a. Correspondence Address </h5>
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon class="mb-1 ml-3 " color="secondary" dark v-bind="attrs" v-on="on">
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
            <div class="form-section mt-n2 ml-6">
              <v-text-field class="tf-full mt-2"  v-model="applicant_data.address[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
              <v-text-field class="tf-full mt-n4" v-model="applicant_data.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
              <v-text-field class="tf-full mt-n4" v-model="applicant_data.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
              <v-select class="mt-n4" v-model="applicant_data.address[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
            </div>
            <h5 class="mt-3 ml-6">b. Tel no. </h5>
            <div class="form-section ml-6">
              <v-text-field class="tf-half" v-model="applicant_data.tel.office" :rules="form.fullnameRules"  label="Office" outlined required></v-text-field>
              <v-text-field class="tf-half" v-model="applicant_data.tel.mobile" :rules="form.fullnameRules"  label="Mobile" outlined required></v-text-field>
            </div>
            <h5 class="mt-3 ml-6">c. Fax no. </h5>
            <div class="form-section ml-6">
              <v-text-field class="tf-half" v-model="applicant_data.fax.faxNo" :rules="form.fullnameRules"  label="Fax No." outlined required></v-text-field>
              <v-text-field class="tf-half" v-model="applicant_data.fax.email" :rules="form.fullnameRules"  label="Email" outlined required></v-text-field>
            </div>
            <h5 class="mt-3" style="width:110%;">5 . Have you ever been convicted of any criminal offence in Hong Kong or elsewhere?</h5>
            <div class="form-section">
              <v-radio-group class="tf-inline-radio-gp ml-enhanced" v-model="applicant_data.q5" row>
                  <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
                  <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <h5 class="mt-3">6 . Have you ever been convicted of any offence relating to liquor selling?</h5>
            <div class="form-section mb-6">
              <v-radio-group class="tf-inline-radio-gp ml-enhanced" v-model="applicant_data.q6" row>
                  <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
                  <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
        </v-form>
      </div>
    </div>
    <div class="footer">
      <v-btn class="footer-btn b-dark">{{$t('save_draft')}}</v-btn>
      <v-btn class="footer-btn b-primary" :disabled="false" @click="$router.push({name:'RenewalInfoPremises'})">{{$t('save_and_next')}}</v-btn>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import MultipleTextfield from '../../components/misc/multiple-textfield'
// @ is an alias to /src


export default {
  name: 'RenewalIA',
  components: {
    BoldLine,
    MultipleTextfield
  },
  data: function () {
    return {
      agree: false,
      dialog:false,
      hkidError:false,

      form :{
        valid:false,
        fullnameRules: [
            v => !!v || 'Required',
        ],
        emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+/.test(v) || 'Email must be valid',
        ],
      },
      applicant_data : {
        liquorLicenceNo : '1365135656'.split(""),
        chineseName: '陳大文',
        englishName: 'Dai Man Chan',
        gender:'M',
        hkidCardNo : 'Y1313133'.split(""),
        address : ['Room 550, 5/F, Block 7','123Building','Wanchai Hong Kong','Hong Kong'],
        tel: {
          office:'12345678',
          mobile:'12345678',
        },
        fax:{
          faxNo :'12345678',
          email :'12345678@gmail.com'
        },
        q5:false,
        q6:false
      },
      licenceMTF:{
        value : '',
        refID: 'licence',
        error :{show:false,msg:'Invalid input'},
        amount: 10,
        connect: [],
      },
      region:{
        tc:['香港','九龍','新界'],
        en:['Hong Kong','Kowloon','New Territories']
      },
      reasonTransfer:{
        items:[
          {title:'Licensee cannot be on duty on the premises',value:0},
          {title:'Resign/Retire',value:1},
          {title:'Transfer of Share/Business',value:2},
          {title:'Others, please specify:',value:3,specify:''}
        ],
        toggle:undefined,
      },
      premisesBrMTF:{
        value : '',
        refID: 'premisesBr',
        error :{show:false,msg:'Invalid input'},
        amount: 11,
        connect: [7],
      },
      companyBrMTF:{
        value : '',
        refID: 'companyBr',
        error :{show:false,msg:'Invalid input'},
        amount: 11,
        connect: [7],
      },
      companyNoMTF:{
        value : '',
        refID: 'companyNo',
        error :{show:false,msg:'Invalid input'},
        amount: 7,
        connect: [],
      },

    }
  },
  methods:{
    updateLicenceMTF : function (inValue,i){
      this.updateMTF(inValue,i,this.licenceMTF);
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
    updateMTF : function (inValue,i,target){
      var str = this.joinStringWithMTF(inValue,target.connect)
      target.value = str;
      const lastindex = target.amount-1;
      if(i == lastindex){
        if(str.length < (target.amount+target.connect.length)){
          target.error.show = true;
        }else{
          target.error.show = false;
        }
      }
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

h5.em-18{
  font-size: 1.125em;
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
