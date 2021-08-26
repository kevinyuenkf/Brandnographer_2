<template>
  <div class="content-div content-div-1">
    <div class="header">
      <h1>Application for Transfer of a Liquor Licence</h1>
      <div class="d-flex align-center ">
        <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
        <h2>Declaration Relating to Transfer Application</h2>
      </div>
    </div>
    <div class="body">
      <div class="form-div">
        <v-form v-model="form.valid">
            <h5 class="fw-400 mb-3">l,</h5>
            <h5 >1 . Applicant Name </h5>
            <div class="form-section">
                <v-text-field class="tf-half" v-model="declaration_data.chName" :rules="form.fullnameRules"  label="Chinese Name" outlined required></v-text-field>
                <v-text-field class="tf-half" v-model="declaration_data.engName" :rules="form.fullnameRules"  label="English Name" outlined required></v-text-field>
            </div>
            <h5 class="fw-400">intend to apply for transfer of the liquor licence</h5>
            <h5>2 . Liquor Licence No.</h5>
            <div class="form-section">
                <MultipleTextfield :inValue="declaration_data.licence" :refID="licenceMTF.refID" :amount="licenceMTF.amount" :shouldShow="licenceMTF.error.show" :msg="licenceMTF.error.msg" :connect="licenceMTF.connect" @onInputDone="updateLicenceMTF"></MultipleTextfield>
            </div>
            <div class="d-flex align-center">
              <h5 class="fw-400 mt-2">Click to capture the information of the premises</h5>
              <v-btn depressed class="o-inline-btn rounded-pill ml-4 mb-8" color="primary">Capture</v-btn>
            </div>
            <h5 class="mt-2">3 . Shop Sign </h5>
            <div class="form-section">
              <v-text-field class="tf-half mt-2" v-model="declaration_data.chShopsign" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
              <v-text-field class="tf-half mt-2" v-model="declaration_data.engShopsign" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
            </div>
            <div class="mt-1 mb-4 d-flex align-center">
              <h5 class="mt-3">4 . Premises Address </h5>
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
            <h5 class="mt-3 ml-6">a. Chinese </h5>
            <div class="form-section ml-6">
              <v-text-field class="tf-full mt-2" v-model="declaration_data.premises_address.chinese[0]" :rules="form.addressRules"  label="室／房／店鋪, 樓數／樓層, 座" outlined required></v-text-field>
              <v-text-field class="tf-full mt-n4" v-model="declaration_data.premises_address.chinese[1]" :rules="form.addressRules"  label="大廈／村或屋邨名稱, 門牌／地段號碼" outlined required></v-text-field>
              <v-text-field class="tf-full mt-n4" v-model="declaration_data.premises_address.chinese[2]" :rules="form.addressRules"  label="街道名稱，地區" outlined required></v-text-field>
              <v-select class="mt-n4" v-model="declaration_data.premises_address.chinese[4]" :items="region.tc" label="地域" outlined :menu-props="{offsetY: true}"></v-select>
            </div>
            <h5 class="mt-3 ml-6">b. English </h5>
            <div class="form-section ml-6">
              <v-text-field class="tf-full mt-2" v-model="declaration_data.premises_address.english[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
              <v-text-field class="tf-full mt-n4" v-model="declaration_data.premises_address.english[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
              <v-text-field class="tf-full mt-n4" v-model="declaration_data.premises_address.english[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
              <v-select class="mt-n4" v-model="declaration_data.premises_address.english[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
            </div>
            <h5 class="fw-400 mt-5 mb-6">From</h5>
            <h5 class="mt-3">5 . Current Licence Holder </h5>
            <div class="form-section">
              <v-text-field class="tf-half mt-2" v-model="declaration_data.q5.chinese" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
              <v-text-field class="tf-half mt-2" v-model="declaration_data.q5.english" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
            </div>
            <h5 class="fw-400 mt-2 mb-10">to me.</h5>
            <h5 class="mt-3">6 . The reason for transfer is</h5>
            <v-radio-group v-model="declaration_data.q6.value">
              <v-radio v-for="(item,i) in reasonTransfer.items" :key="i" :label="item.title" :value="item.value"></v-radio>
            </v-radio-group>
            <div class="form-section ml-8 mt-n5">
              <v-text-field class="tf-half mt-2" v-model="declaration_data.q6.other" label="Please specify" outlined required></v-text-field>
            </div>
            <h5 class="mt-3">7 . Premises Details</h5>
            <h5 class="mt-3 mb-5 ml-6 fw-400 em-18">a. Business Registration No. of the premises </h5>
            <div class="form-section ml-6">
              <MultipleTextfield :inValue="declaration_data.premisesBr" :refID="premisesBrMTF.refID" :amount="premisesBrMTF.amount" :shouldShow="premisesBrMTF.error.show" :msg="premisesBrMTF.error.msg" :connect="premisesBrMTF.connect" @onInputDone="updatePremisesBrMTF" ></MultipleTextfield>
            </div>
            <div class="mt-1 mb-4 ml-6 d-flex align-center flex-wrap">
              <h5 class="my-0 fw-400 em-18">b. If the premises is run by a company </h5>
              <v-radio-group class="ml-6" row>
                <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
                <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <h5 class="ml-12 mt-6 mb-2 fw-400 em-18">b (i). Name of company </h5>
            <div class="form-section ml-12">
                <v-text-field class="tf-half mt-2" v-model="form.chName" :rules="form.fullnameRules"  label="Name" outlined required></v-text-field>
            </div>
            <h5 class="ml-12 mt-0 mb-2 fw-400 em-18">b (ii). Business Registration No. of the company </h5>
            <div class="form-section ml-12">
              <MultipleTextfield :inValue="declaration_data.companyBr" :refID="companyBrMTF.refID" :amount="companyBrMTF.amount" :shouldShow="companyBrMTF.error.show" :msg="companyBrMTF.error.msg" :connect="companyBrMTF.connect" @onInputDone="updateCompanyBrMTF" ></MultipleTextfield>
            </div>
            <h5 class="ml-12 mt-0 mb-2 fw-400 em-18">b (iii). Company No. (if available) </h5>
            <div class="form-section ml-12 mb-6">
              <MultipleTextfield :inValue="declaration_data.companyNo" :refID="companyNoMTF.refID" :amount="companyNoMTF.amount" :shouldShow="companyNoMTF.error.show" :msg="companyNoMTF.error.msg" :connect="companyNoMTF.connect" @onInputDone="updateCompanyNoMTF" ></MultipleTextfield>
            </div>
        </v-form>
      </div>
    </div>
    <div class="footer">
      <v-btn class="footer-btn b-dark">{{$t('save_draft')}}</v-btn>
      <v-btn class="footer-btn b-primary">{{$t('save_and_next')}}</v-btn>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import MultipleTextfield from '../../components/misc/multiple-textfield'
// @ is an alias to /src


export default {
  name: 'TransferTac',
  components: {
    BoldLine,
    MultipleTextfield
  },
  data: function () {
    return {
      agree: false,
      form :{
        valid:false,
        fullnameRules: [
            v => !!v || 'Required',
        ],
        phone:'',
        phoneRules: [
            v => !!v || 'Required',
        ],
        email: '',
        emailRules: [
            v => !!v || 'Required',
            v => /.+@.+/.test(v) || 'Invalid input',
        ],
        addressRules: [
            v => !!v || '',
        ],
      },
      declaration_data:{
        chName: '',
        engNamg:'',
        chShopsign: '',
        engShopsign:'',
        premises_address : {
          chinese :['','','',''],
          english :['','','','']
        },
        q5: {
          chinese :'',english:''
        },
        q6:{
          value : '',other:''
        },
        licence:''.split(""),
        premisesBr:''.split(""),
        companyBr:''.split(""),
        companyNo:''.split(""),
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
    }, updatePremisesBrMTF : function (inValue,i){
      this.updateMTF(inValue,i,this.premisesBrMTF);
    },updateCompanyBrMTF : function (inValue,i){
      this.updateMTF(inValue,i,this.companyBrMTF);
    },updateCompanyNoMTF : function (inValue,i){
      this.updateMTF(inValue,i,this.companyNoMTF);
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

}

</style>
