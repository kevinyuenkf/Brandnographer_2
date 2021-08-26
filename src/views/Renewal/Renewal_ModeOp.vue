<template>
  <div class="content-div content-div-1">
    <div class="header">
      <h1>Application for Renewal of a Liquor Licence</h1>
      <div class="d-flex align-center ">
        <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
        <h2>Mode of Operation</h2>
      </div>
    </div>
    <div class="body">
      <div class="form-bg-circle hidden-md-and-down">5</div>
      <div class="form-div" >
        <v-form v-model="form.valid">
            <div class="d-flex ">
              <h5> 14. </h5>
              <h5 class="ml-1" >The percentage of revenue generated from liquor selling to the total revenue of the subject premises </h5>
            </div>
            <div class="form-section mt-3 justify-start align-baseline" >
              <v-text-field class="tf-half mr-2" v-model="operation_data.q14" :rules="form.fullnameRules"  label="" outlined required></v-text-field>
              <p class="mb-0">%</p>
            </div>
            <h5 class="mt-3">15 .  Do you wish to apply for amendment simultaneously? </h5>
            <div class="form-section mb-6">
              <v-radio-group v-model="operation_data.q15" class="tf-inline-radio-gp ml-enhanced" row>
                  <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
                  <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <h5 class="mt-3 ml-11">Nature of Amendment(s) ：  </h5>
            <div class="form-section ml-11">
              <v-radio-group v-model="operation_data.q15_deatil" class="list-radio-gp mt-4 mb-6">
                  <v-radio class="enhanced" :label="'a .  Addition of Endorsement'" :value="'a'"></v-radio>
                  <v-radio-group v-show="operation_data.q15_deatil=='a'" v-model="operation_data.q15a" class="list-radio-gp ml-8 my-3" >
                    <v-radio class="mt-5" :label="'Bar'" :value="'Bar'"></v-radio>
                    <v-radio class="mt-5" :label="'Dancing'" :value="'Dancing'"></v-radio>
                    <v-radio class="mt-5" :label="'Hotel'" :value="'Hotel'"></v-radio>
                  </v-radio-group>
                  <v-radio class="mt-5 enhanced" :label="'b .  Deletion of Endorsement'" :value="'b'"></v-radio>
                  <v-radio-group v-show="operation_data.q15_deatil=='b'" v-model="operation_data.q15b" class="list-radio-gp ml-8 my-3" >
                    <v-radio class="mt-5" :label="'Bar'" :value="'Bar'"></v-radio>
                    <v-radio class="mt-5" :label="'Dancing'" :value="'Dancing'"></v-radio>
                    <v-radio class="mt-5" :label="'Hotel'" :value="'Hotel'"></v-radio>
                    <v-radio class="mt-5" :label="'Addition of a New Portion to Licensed Premises'" :value="'Addition_1'"></v-radio>
                    <v-radio class="mt-5" :label="'Deletion of a Portion from Licensed Premises'" :value="'Deletion'"></v-radio>
                    <v-radio class="mt-5 para" :label="'Addition of a New Portion, which is not under Application for or covered by a Restaurant Licence or a Certificate of Compliance issued by the Home Affairs Department, to Licensed Premises  (Only applicable to Hotels) (Please complete Annex I and submit together with the required documents.)'" :value="'Addition_2'"></v-radio>
                    <v-radio class="mt-5 para" :label="'Change of the Additional Licensing Condition Imposed on the Licence'" :value="'Change_1'"></v-radio>
                    <div v-show="operation_data.q15b=='Change_1'" class="form-section ml-8 mt-6 flex-column ">
                      <v-text-field v-model="operation_data.change_1.detail"  class="tf-half mr-2" :rules="form.fullnameRules"  label="Detail" outlined required></v-text-field>
                      <h5 class="ma-0 mt-n2 mb-2 em-16">The reason(s) for application for change of existing additional licensing condition(s) is/are:</h5>
                      <v-textarea  v-model="operation_data.change_1.conditions"  :rules="form.msgRules" outlined  placeholder="The reason details" :counter="50"></v-textarea>
                    </div>
                    <v-radio class="mt-5" :label="'Change of Business Nature of Establishment to'" :value="'Change_2'"></v-radio>
                    <div v-show="operation_data.q15b=='Change_2'" >
                      <h5 class="ml-9 fw-400 em-18 mb-0 t-grey">You can tick more than 1 box </h5>
                      <div class="form-section ml-8 justify-start">
                        <v-checkbox v-model="operation_data.change_2.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Bar" value="Bar"></v-checkbox>
                        <v-checkbox v-model="operation_data.change_2.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Karaoke" value="Karaoke"></v-checkbox>
                        <v-checkbox v-model="operation_data.change_2.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Cocktail Lounge" value="Cocktail Lounge"></v-checkbox>
                        <v-checkbox v-model="operation_data.change_2.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Restaurant" value="Restaurant"></v-checkbox>
                        <v-checkbox v-model="operation_data.change_2.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Night Club" value="Night Club"></v-checkbox>
                        <v-checkbox v-model="operation_data.change_2.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Coffee Shop" value="Coffee Shop"></v-checkbox>
                        <v-checkbox v-model="operation_data.change_2.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Disco" value="Disco"></v-checkbox>
                        <v-checkbox v-model="operation_data.change_2.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Hotel" value="Hotel"></v-checkbox>
                      </div>
                      <div class="form-section ml-8 flex-column">
                        <v-checkbox class="o-cb lg" v-model="operation_data.change_2.options" on-icon="mdi-check-box-outline" label="Others, please specify:" value="Other"></v-checkbox>
                        <v-text-field v-model="operation_data.change_2.others" class="tf-half mt-2 ml-11" :rules="form.fullnameRules"  label="Please specify" outlined required></v-text-field>
                      </div>
                    </div>
                    <v-radio class="mt-5" :label="'Change of Shop Sign'" :value="'Change_3'"></v-radio>
                    <v-radio class="mt-5" :label="'Others'" :value="'Others'"></v-radio>
                  </v-radio-group>
              </v-radio-group>
            </div>
        </v-form>
      </div>
    </div>

    <div class="body light-purple">
      <h3 class="mt-0">References for Applicant</h3>
      <div class=" d-flex flex-column mt-8">
        <div class="f-li d-flex">
          <p>i.</p>
          <p>The below-named persons, having resided in Hong Kong during the whole of the ten years immediately preceding the date of this application, and being in no way directly or indirectly connected with the sale of liquor to me, are willing to act as my referees certifying that I am a person of good fame and reputation and fit and proper to hold a liquor licence. They have given their consent that their personal data will be used by the Liquor Licensing Board and all concerned government departments for carrying out activities relating to my application for a liquor licence.</p>
        </div>
        <div class="f-li d-flex mt-3">
          <p>ii.</p>
          <p>I and the below-named persons agree that if the Liquor Licensing Board, in the process of handling the application for liquor licence, considers the need to confirm the below-mentioned information, the Liquor Licensing Board would contact the below-named persons.</p>
        </div>
        <div class="f-li d-flex mt-3">
          <p>iii.</p>
          <p>In respect of my liquor licence application, I certify that the below-named persons are willing to act as my referees and have given their consent that their personal data will be used by the Liquor Licensing Board and all concerned government departments for carrying out activities relating to my application for a liquor licence.</p>
        </div>
      </div>
      <div class="form-div" >
        <v-form v-model="form.valid">
          <h2 class="mt-0 ml-7">Referee 1</h2>
          <h5 class="mt-2 ml-7">Name </h5>
          <div class="form-section justify-start ml-7">
              <v-text-field class="tf-half" v-model="operation_data.referee[0].chineseName" :rules="form.fullnameRules"  label="Chinese Name" outlined required></v-text-field>
              <v-radio-group v-model="operation_data.referee[0].gender"  class="tf-inline-radio-gp" row>
                <v-radio class="row-radio" :label="'先生'" :value="'M'"></v-radio>
                <v-radio class="row-radio ml-3" :label="'女士'" :value="'F'"></v-radio>
              </v-radio-group>
              <v-text-field class="tf-half" v-model="operation_data.referee[0].englishName" :rules="form.fullnameRules"  label="English Name" outlined required></v-text-field>
              <v-radio-group v-model="operation_data.referee[0].gender"  class="tf-inline-radio-gp" row>
                <v-radio class="row-radio" :label="'Mr.'" :value="'M'"></v-radio>
                <v-radio class="row-radio ml-3" :label="'Ms.'" :value="'F'"></v-radio>
              </v-radio-group>
          </div>
          <h5 class="mt-2 ml-7">Contact </h5>
          <div class="form-section justify-start ml-7">
            <v-text-field v-model="operation_data.referee[0].contact" class="tf-half" :rules="form.fullnameRules"  label="Tel no." outlined required></v-text-field>
          </div>
          <h5 class="mt-3 ml-7">Correspondence Address </h5>
          <div class="form-section mt-n2 ml-7">
            <v-text-field v-model="operation_data.referee[0].address[0]" class="tf-full mt-2"  :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
            <v-text-field v-model="operation_data.referee[0].address[1]" class="tf-full mt-n4" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
            <v-text-field v-model="operation_data.referee[0].address[2]" class="tf-full mt-n4" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
            <v-select v-model="operation_data.referee[0].address[3]" class="mt-n4" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
          </div>
          <h5 class="mt-3 ml-7">I have known the above referee for a period of </h5>
          <div class="form-section mt-n2 ml-7 mb-8">
            <v-select  v-model="operation_data.referee[0].period.years" class="tf-half mt-2" :items="[0,1,2,3,4,5,6,7,8,9,'10 or above']" label="No. of years" outlined :menu-props="{offsetY: true}"></v-select>
            <v-select  v-model="operation_data.referee[0].period.months" class="tf-half mt-2" :items="[0,1,2,3,4,5,6,7,8,9,10,11,12]" label="No. of months" outlined :menu-props="{offsetY: true}"></v-select>
          </div>
          <h2 class="mt-0 ml-7">Referee 2</h2>
          <h5 class="mt-2 ml-7">Name </h5>
          <div class="form-section justify-start ml-7">
              <v-text-field class="tf-half" v-model="operation_data.referee[1].chineseName" :rules="form.fullnameRules"  label="Chinese Name" outlined required></v-text-field>
              <v-radio-group v-model="operation_data.referee[1].gender" class="tf-inline-radio-gp" row>
                <v-radio class="row-radio" :label="'先生'" :value="'M'"></v-radio>
                <v-radio class="row-radio ml-3" :label="'女士'" :value="'F'"></v-radio>
              </v-radio-group>
              <v-text-field class="tf-half" v-model="operation_data.referee[1].englishName" :rules="form.fullnameRules"  label="English Name" outlined required></v-text-field>
              <v-radio-group v-model="operation_data.referee[1].gender" class="tf-inline-radio-gp" row>
                <v-radio class="row-radio" :label="'Mr.'" :value="'M'"></v-radio>
                <v-radio class="row-radio ml-3" :label="'Ms.'" :value="'F'"></v-radio>
              </v-radio-group>
          </div>
          <h5 class="mt-2 ml-7">Contact </h5>
          <div class="form-section justify-start ml-7">
            <v-text-field v-model="operation_data.referee[1].contact" class="tf-half" :rules="form.fullnameRules"  label="Tel no." outlined required></v-text-field>
          </div>
          <h5 class="mt-3 ml-7">Correspondence Address </h5>
          <div class="form-section mt-n2 ml-7">
            <v-text-field v-model="operation_data.referee[1].address[0]" class="tf-full mt-2"  :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
            <v-text-field v-model="operation_data.referee[1].address[1]" class="tf-full mt-n4" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
            <v-text-field v-model="operation_data.referee[1].address[2]" class="tf-full mt-n4" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
            <v-select v-model="operation_data.referee[1].address[3]" class="mt-n4" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
          </div>
          <h5 class="mt-3 ml-7">I have known the above referee for a period of </h5>
          <div class="form-section mt-n2 ml-7 mb-8">
            <v-select v-model="operation_data.referee[1].period.years" class="tf-half mt-2" :items="[0,1,2,3,4,5,6,7,8,9,'10 or above']" label="No. of years" outlined :menu-props="{offsetY: true}"></v-select>
            <v-select v-model="operation_data.referee[1].period.months" class="tf-half mt-2" :items="[0,1,2,3,4,5,6,7,8,9,10,11,12]" label="No. of months" outlined :menu-props="{offsetY: true}"></v-select>
          </div>
        </v-form>
      </div>


    </div>

    <div class="footer">
      <v-btn class="footer-btn b-dark">{{$t('save_draft')}}</v-btn>
      <v-btn class="footer-btn b-primary" :disabled="false" @click="$router.push({name:'RenewalUploadDoc'})">{{$t('save_and_next')}}</v-btn>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import MultipleTextfield from '../../components/misc/multiple-textfield'
// @ is an alias to /src


export default {
  name: 'RenewalModeOp',
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
      operation_data : {
        q14:'80',
        q15:true,q15_deatil:'b',q15a:'',q15b:'Change_1',
        change_1:{detail:'The Reasons',conditions:'The reason detials'},
        change_2:{options:[],others:''},
        referee:[
          {
            chineseName:'陳大文',
            englishName: 'Chan Dai Man',
            gender:'M',
            contact:'23553982',
            address : ['Room 550, 5/F, Block 7','123Building','Wanchai Hong Kong','Hong Kong'],
            period:{years:5,months:6}
          },
          {
            chineseName:'張大文',
            englishName: 'Cheung Dai Man',
            gender:'M',
            contact:'23553955',
            address : ['Room 550, 5/F, Block 7','123Building','Wanchai Hong Kong','Hong Kong'],
            period:{years:5,months:6}
          }
        ]
      },
      region:{
        tc:['香港','九龍','新界'],
        en:['Hong Kong','Kowloon','New Territories']
      },
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
    this.$emit('updateCurrent',5);
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
