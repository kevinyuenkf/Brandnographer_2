<template>
  <div class="main-container">
    <h1 >Create Account</h1>
    <BoldLine id="h1-boldline" class="hidden-md-and-down" :options="{color:this.$vuetify.theme.themes.light.secondary,height:'6px',width:'45px'}"></BoldLine>
    <BoldLine id="h1-boldline" class="hidden-lg-and-up" :options="{color:this.$vuetify.theme.themes.light.secondary,height:'4px',width:'30px'}"></BoldLine>
    <div class="content-box">
      <p>Please provide your personal profile for account creation. The particulars will be used as default in the electronic forms.</p>
    </div>
    <v-card class="o-notice-card bc">
          <v-card-title class="headline bc-notice">
            Apply for password
          </v-card-title>
          <div class=" body-div d-flex justify-center">
            <div class="form-div w-100">
             <v-form v-model="form.valid">
              <h4 class="mt-2 mb-5">1 . Name of Applicant </h4>
              <div class="form-section">
                <v-text-field class="tf-half" v-model="applicant_data.chineseName" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
                <v-text-field class="tf-half" v-model="applicant_data.englishName" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
              </div>



              <h4 class="mt-1 mb-5">2. HKID Card No. (Only applicable to existing licence holders)</h4>
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

              <h4 class="mt-1 mb-5">3 . Liquor Licence No.  (Only applicable to existing licence holders)  </h4>
              <MultipleTextfield :inValue="applicant_data.liquorLicenceNo" :refID="licenceMTF.refID" :amount="licenceMTF.amount" :shouldShow="licenceMTF.error.show" :msg="licenceMTF.error.msg" :connect="licenceMTF.connect" @onInputDone="updateLicenceMTF"></MultipleTextfield>

              <h4 class="mt-2 mb-5">4. Applicant Contact  </h4>
              <div class="form-section">
                <v-text-field class="tf-half" v-model="applicant_data.contact.mobile" :rules="form.fullnameRules"  label="Mobile" outlined required></v-text-field>
              </div>
              <div class="form-section">
                <v-text-field class="tf-half" v-model="applicant_data.contact.email" :rules="form.fullnameRules"  label="Email" outlined required></v-text-field>
              </div>

              <h4 class="mt-1 mb-5">5. Correspondence Address of Applicant</h4>
              <div class="form-section">
                <v-text-field class="tf-full mt-2"  v-model="applicant_data.address[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
                <v-text-field class="tf-full mt-n4" v-model="applicant_data.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
                <v-text-field class="tf-full mt-n4" v-model="applicant_data.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
                <v-select class="mt-n4" v-model="applicant_data.address[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
              </div>
             </v-form>
            </div>
          </div>
          <v-card-actions class="px-10 mb-10 mt-n4">
            <div class="d-flex flex-wrap-reverse px-8">
              <router-link class="no-dec" :to="{ name: 'CreateAccount_2'}"><v-btn depressed class="o-btn-action rounded-pill mt-4 mr-5" color="#413E56" dark>Back</v-btn></router-link>
              <router-link class="no-dec" :to="{ name: 'CAApplyPassword_2'}"><v-btn depressed class="o-btn-action rounded-pill mt-4" color="primary">Next</v-btn></router-link>
            </div>
          </v-card-actions>
        </v-card>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import MultipleTextfield from '../../components/misc/multiple-textfield'

// @ is an alias to /src


export default {
  name: 'CreatePassword',
  components: {
    BoldLine,
    MultipleTextfield
  },
  data: () => ({
    hkidError:false,
    form :{
      valid:false,
      fullnameRules: [
          v => !!v || 'Required',
      ],
      emailRules: [
          v => !!v || 'Email is required',
          v => /.+@.+/.test(v) || 'Email must be valid',
      ]
    },
      applicant_data : {
        chineseName: '',
        englishName: '',
        hkidCardNo : ''.split(""),
        liquorLicenceNo : ''.split(""),
        contact:{
          mobile :'',
          email : '',
        },
        address : ['','','',''],
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
  }),
  methods: {

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
  mounted(){
    this.$root.$emit('updateNav');
  }
}
</script>

<style scoped lang="scss">

.body-div{
  padding:32px 24px;
}

.border-btn-list{
  justify-content: space-between;
  div{
    cursor: pointer;
    border: 2px solid #4E45D1;
    border-radius: 5px;
    width:300px;
    height:90px;
    display:flex;
    justify-content: center ;
    align-items:  center;
    h3{
      color:$ols-primary;
      font-size:1.375em;
      font-weight:500;
    }
    &:not(:last-child){
      margin-right:20px;
    }
  }
}

.main-container {
    width:100%;
    height:100%;
    padding:0px 120px 115px;
    h1 {
      font-size: 3.875em;
      margin-top:87px !important;
    }
    #h1-boldline{
      margin:28px 0px 40px 0px;
    }
    h2{
      font-size: 1.625em;
      font-weight: 500;
    }
    p{
      font-size:1.1875em;
    }

    h4{
      font-size:1.125em;
      margin:12px 0px;
    }
}


.big-gap{
  margin-right:16px
}

.content-box{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width:950px;
}

.s-li{
    display: flex;
    align-items: flex-start;
    margin-bottom:12px;
    div:first-child{
        color: $ols-primary;
        font-weight: bold;
        font-size:2em;
        margin:-10px 16px 0px 20px;
    }
}

.o-notice-card{
  .form-div{
    max-width:90%;
  }
  h5{
    color: #7a7a7a;
    font-size:1em;
    font-weight: 400;
  }
  h3{
    font-size:1.375em;
    color:#B1B1B1;
    font-weight:500;
    &.clickable{
      color:$ols-primary;
      text-decoration: underline;
      cursor: pointer;
      border-radius: 4px;
    }
  }
}


//md and down
@media screen and (max-width: 1263px) {
  .main-container {
    width:100%;
    height:100%;
    padding:0px 18px 57px;
    h1 {
      font-size: 1.625em;
      margin-top:50px !important;
    }
    #h1-boldline{
      margin:20px 0px;
    }
    h2{
      font-size:1em;
      font-weight: 500;
    }
    p{
      font-size:0.9375em;
    }
  }

  .body-div{
    padding:14px 2px;
  }

.border-btn-list{
  justify-content: center;
  width:400px;
  div{
    h3{
      font-size:1.275em;
    }
    margin:0px 10px;
    &:not(:last-child){
      margin-right:10px;
    }
  }
}

.content-box{
  align-items: center;
}

.o-notice-card{
  .form-div{
    max-width:90%;
  }
  h5{
    color: #7a7a7a;
    font-size:1em;
    font-weight: 400;
  }
  h3{
    font-size:1.375em;
    color:#B1B1B1;
    font-weight:500;
    a{
      text-decoration: underline;
    }
  }
}


.big-gap{
  margin-right:8px
}



}

</style>
