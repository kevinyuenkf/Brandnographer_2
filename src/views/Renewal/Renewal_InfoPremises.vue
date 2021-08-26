<template>
  <div class="content-div content-div-1">
    <div class="header">
      <h1>Application for Renewal of a Liquor Licence</h1>
      <div class="d-flex align-center ">
        <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
        <h2>{{$t('information_relating_to_the_premises')}}</h2>
      </div>
    </div>
    <div class="body">
      <div class="form-bg-circle hidden-md-and-down">3</div>
      <div class="form-div">
        <v-form v-model="form.valid">
            <div class="mb-4 d-flex align-center">
              <h5>7 . Address of Licensed Premises  </h5>
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon class="mb-1 ml-3 mt-2" color="secondary" dark v-bind="attrs" v-on="on">
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
              <v-text-field class="tf-full mt-2" v-model="premises_data.address.chinese[0]" :rules="form.addressRules"  label="室／房／店鋪, 樓數／樓層, 座" outlined required></v-text-field>
              <v-text-field class="tf-full mt-n4" v-model="premises_data.address.chinese[1]" :rules="form.addressRules"  label="大廈／村或屋邨名稱, 門牌／地段號碼" outlined required></v-text-field>
              <v-text-field class="tf-full mt-n4" v-model="premises_data.address.chinese[2]"  :rules="form.addressRules"  label="街道名稱，地區" outlined required></v-text-field>
              <v-select class="mt-n4" v-model="premises_data.address.chinese[3]" :items="region.tc" label="地域" outlined :menu-props="{offsetY: true}"></v-select>
            </div>
            <h5 class="mt-3 ml-6">b. English </h5>
            <div class="form-section ml-6">
              <v-text-field class="tf-full mt-2" v-model="premises_data.address.english[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
              <v-text-field class="tf-full mt-n4" v-model="premises_data.address.english[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
              <v-text-field class="tf-full mt-n4" v-model="premises_data.address.english[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
              <v-select class="mt-n4" v-model="premises_data.address.english[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
            </div>
            <h5 class="mt-2">8 . Contact Information of Licensed Premises </h5>
            <div class="form-section ml-6">
              <v-text-field class="tf-half" v-model="premises_data.contact.tel" :rules="form.fullnameRules"  label="Tel no." outlined required></v-text-field>
              <v-text-field class="tf-half" v-model="premises_data.contact.fax" :rules="form.fullnameRules"  label="Fax no." outlined required></v-text-field>
            </div>
            <h5 class="mt-2">9 . Shop Sign  </h5>
            <div class="form-section ml-6">
              <v-text-field class="tf-half" v-model="premises_data.shopSign.chinese" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
              <v-text-field class="tf-half" v-model="premises_data.shopSign.english" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
            </div>
            <h5 class="mt-3">10 . Premises Details</h5>
            <h5 class="mt-3 mb-5 ml-6 fw-400 em-18">a. Business Registration No. of the premises </h5>
            <div class="form-section ml-6">
              <MultipleTextfield :inValue="premises_data.brNo" :refID="premisesBrMTF.refID" :amount="premisesBrMTF.amount" :shouldShow="premisesBrMTF.error.show" :msg="premisesBrMTF.error.msg" :connect="premisesBrMTF.connect" @onInputDone="updatePremisesBrMTF" ></MultipleTextfield>
            </div>
            <div class="mt-1 mb-4 ml-6 d-flex align-center flex-wrap">
              <h5 class="my-0 fw-400 em-18">b. If the premises is run by a company </h5>
              <v-radio-group v-model="premises_data.q10b" class="ml-6" row>
                <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
                <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
        </v-form>
      </div>
    </div>
    <div class="footer">
      <v-btn class="footer-btn b-dark">{{$t('save_draft')}}</v-btn>
      <v-btn class="footer-btn b-primary" :disabled="false" @click="$router.push({name:'RenewalInfoManagement'})">{{$t('save_and_next')}}</v-btn>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import MultipleTextfield from '../../components/misc/multiple-textfield'
// @ is an alias to /src


export default {
  name: 'RenewalIP',
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
            v => !!v || 'Name is required',
        ],
        emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+/.test(v) || 'Email must be valid',
        ]
      },
      premises_data : {
        address : {
          chinese :['550室, 5樓, 7座','123大廈','灣仔，香港','香港'],
          english :['Room 550, 5th Floor, Block 7','123Building','Wanchai Hong Kong','Hong Kong']
        },
        contact: {
          tel:'23562934',
          fax:'23562933'
        },
        shopSign: {
          chinese: 'ABC酒吧',
          english: 'ABC Bar'
        },
        brNo : '1313133312'.split(""),
        q10b : false,
      },
      region:{
        tc:['香港','九龍','新界'],
        en:['Hong Kong','Kowloon','New Territories']
      },
      premisesBrMTF:{
        value : '',
        refID: 'premisesBr',
        error :{show:false,msg:'Invalid input'},
        amount: 10,
        connect: [7],
      }

    }
  },
  methods:{
    updatePremisesBrMTF : function (inValue,i){
      this.updateMTF(inValue,i,this.premisesBrMTF);
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
    this.$emit('updateCurrent',3);
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
