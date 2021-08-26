<template>
  <div >
    <div class="content-div content-div-1">
      <div class="hidden-md-and-down header" >
        <div class="d-flex justify-center flex-column">
          <div class="d-flex justify-end mt-n2">
            <h5 class="ma-0 fw-400 " style="color:white">User :  Brandnographer2</h5>
          </div>
          <div class="d-flex mt-n3">
            <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
            <h2>Application Status</h2>
          </div>
        </div>
      </div>
      <div class="body" >
        <p>The estimated (est.) provided below is only a reference to <router-link class="no-dec" :to="{ name: 'InProcedures'}">standard procedures</router-link>. For enquiry, please contact us within office hours : 2186 8167/ llps@gov.hk. The whole process takes around 8-10 weeks.</p>
      </div>
      <div class='o-table '>
            <!-- Ongoing -->
            <div class="o-tabs-card mt-6 mb-12" v-if="selected==0">
              <div class="top-header">
                <h3>ABC Bar</h3>
                <h5>Reference No: llps1234_2345555-12122</h5>
              </div>
              <div class="sec-header">
                <h6>Application Type</h6>
                <h6>Submission Date</h6>
                <h6>Status</h6>
                <div class="last-div"><h6>Form</h6></div>

              </div>
              <div class="content-container">
                <div class="content">
                  <div>{{ongoing_item.type}}</div>
                  <div class="d-flex align-center">
                    <div>{{ongoing_item.date}}</div>
                  </div>
                  <div>
                    <div class="mr-1" :class="statusToClass(items[items_current].title)">•</div>
                    <h6>{{items[items_current].title}}</h6>
                  </div>
                  <div>
                    <a class="no-dec" :href="publicPath+'fehb106_new form_filled.pdf'" download="fehb106_new form_filled.pdf" >
                      <v-btn text class="simple-btn" color="primary" light>
                       Download
                      </v-btn>
                    </a>

                  </div>
                </div>
              </div>
              <div class="px-8 pb-8">
                <!--<div class="callout-div rounded py-4 align-start" v-if="infoError">
                  <v-icon color="primary" class="mt-1">mdi-information</v-icon>
                  <p class="my-0 ml-4">Waiting for Nominated Reserve Licensee to submit the “Nomination of Reserve Licensee FEHB 266” Form</p>
                </div>-->
                <div class="callout-div rounded error-box py-4 align-start flex-wrap" v-if="infoError">
                  <div class="d-flex align-start">
                    <v-icon color="#DB1D00" class="mt-1">mdi-information</v-icon>
                    <p class="my-0 ml-4">Document missing :</p>
                    <p class="my-0 ml-2"> A copy of layout plan <br/>(Deadline for re-submission : on or before 15-02-2021)</p>
                  </div>
                  <div class="d-flex align-start" >
                    <v-icon color="#DB1D00" class="mt-1">mdi-information</v-icon>
                    <p class="my-0 ml-4">Document missing :</p>
                    <p class="my-0 ml-2"> Please submit 3 newspaper advertisements <br/>(Deadline for re-submission : on or before 15-02-2021)</p>
                  </div>
                  <div class="d-flex align-start" >
                    <p class="my-0 ml-2 grey-text">Applicant is required to make immediate arrangement to place an advertisement in 3 newspapers on submission of application and return to LLPS office through mail or in person.</p>
                  </div>
                </div>
              </div>
              <div class="d-flex justfiy-center w-100 px-8">
                <BoldLine class="my-2" :options="{color:'#D2D2D25e',height:'2px',width:'100%'}" ></BoldLine>
              </div>

              <div class="d-flex align-stretch o-f-stepper mt-4" style="max-width:940px;">
              <div v-for="(item,i) in items" :key="i" class="d-flex o-f-step">
                <div class="d-flex flex-column box">
                  <span v-if="i==items_current">
                    <v-icon  style="font-size:40px" color="primary">mdi-checkbox-blank-circle</v-icon>
                    <span>{{i+1}}</span>
                  </span>
                  <template v-if="i!=items_current">
                    <v-icon v-if="i<=items_current" style="font-size:40px" color="primary">mdi-check-circle</v-icon>
                    <v-icon v-if="!(i<=items_current)" style="font-size:40px" color="#E0E0E0">mdi-checkbox-blank-circle</v-icon>
                  </template>
                  <div class="d-flex"><h5 class="mb-2" style="text-align:center;" :class="item.active? 'step-active' : ''">{{item.title}}</h5></div>
                  <h5 v-if="i==items_current" class="em-16 mt-n1 fw-400" style="color:#4e45d1">
                    <!-- 🞃 -->
                    <v-icon style="font-size:32px" color="primary">mdi-menu-down</v-icon>
                  </h5>
                  <!-- <h5 v-if="i!=items_current" class="em-16 mt-n1 fw-400" style="color:transparent;width:16.94px;height:28px;"></h5> -->
                </div>
                <div class="connector " :style="!(i<items_current)?{borderColor:'#E0E0E0'} :{}"></div>
              </div>
              </div>
              <div  class="ml-8 pb-8 mt-8" v-if="items_current==0">
                <h2>Stage 1 : Application Submitted</h2>
                <p class="my-1 p-18"><span>Est processing time on this stage :</span> 1 week </p>
                <p class="my-1 p-18"><span>Responsible Department :</span> Licensing Office    </p>
                <p class="my-1 p-18"><span>Case Officer's Contact :</span> Ben Chan ( Tel: 2345 9834 / Email: benchan@llps.com )  </p>
                <p class="mt-9 pr-8 p-20">Under normal circumstances the application will pass to different departments within 1 week after the application receieved. You will be notified if there is any problem from different departmants. </p>
              </div>

              <div  class="ml-8 pb-8 mt-8" v-if="items_current==1">
                <h2 >Stage 2 : Department Feedback</h2>
                <p class="my-1">Est processing time on this stage : 2 weeks  </p>
                <p class="my-1">Responsible Department : Different Departments      </p>
                <p class="my-1">Case Officer's Contact : Ben Chan ( Tel: 2345 9834 / Email: benchan@llps.com )   </p>

                <div class="simple-table mt-8">
                  <p>Feedback from Different Department </p>
                  <p>Status</p>
                </div>
                <BoldLine :options="{color:'#D2D2D25e',height:'2px',width:'calc(100% - 32px)'}" ></BoldLine>
                <div class="simple-table mt-4">
                  <p><strong>Hong Kong Police </strong></p>
                  <v-icon style="font-size:40px" color="#00A639">mdi-check-circle</v-icon>
                </div>
                <div class="simple-table mt-4">
                  <p><strong>Home Affairs Department </strong></p>
                  <v-icon style="font-size:40px" color="#E0E0E0">mdi-checkbox-blank-circle</v-icon>
                </div>
                <div class="simple-table mt-4">
                  <p><strong>District Environmental Hygiene Office - Posting Notice </strong></p>
                  <v-icon style="font-size:40px" color="#E0E0E0">mdi-checkbox-blank-circle</v-icon>
                </div>
              </div>

              <div  class="ml-8 pb-8 mt-8" v-if="items_current==2">
                <h2 >Stage 3 : Verify Documents</h2>
                <p class="my-1 p-18"><span>Est processing time on this stage :</span> 1 week </p>
                <p class="my-1 p-18"><span>Responsible Department :</span> Licensing Office   </p>
                <p class="my-1 p-18"><span>Case Officer's Contact :</span> Ben Chan ( Tel: 2345 9834 / Email: benchan@llps.com ) </p>

                <div class="d-flex">
                  <h5 class="em-22 mw-6">Document Type</h5>
                  <h5 class="em-22 mw-4">Status</h5>
                </div>
                <BoldLine :options="{color:'rgba(177,177,177,0.37)',height:'2px',width:'calc(100% - 32px)'}"></BoldLine>
                <div class="d-flex py-5 " v-for="(item,i) in doucment_items" :key="i">
                  <div class="d-flex mw-6 align-center">
                    <v-icon color="#00A639" class="mr-5 mb-2" style="font-size:34px;">mdi-check-circle</v-icon>
                    <div class="d-flex flex-column">
                      <div class="d-flex align-center">
                        <h5 class="ma-0 mb-1 em-18">{{item.title}}</h5>
                      </div>
                      <div class="d-flex bottom-text x-s mt-n2" >
                        <p class="mr-1">File name : </p>
                        <a :href="publicPath+'SAMPLE.png'" download target="_blank" class="mr-5"><p>{{item.filename}}</p></a>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-center justify-space-between mw-4">
                    <div>
                     <div class="status-div">
                        <div class="mr-1" :class="statusToClass(item.status)">•</div>
                        <h6>{{item.status}}</h6>
                      </div>
                      <h5 class="l-u">{{item.lastUpdate}}</h5>
                    </div>
                    <v-btn v-if="item.btn" depressed :disabled="btnDisabled" class="o-btn-action small mr-8" style="justify-self:flex-start;" color="primary">Choose file</v-btn>
                  </div>
                </div>
                <div class="d-flex py-5 " >
                  <div class="d-flex mw-6 align-center">
                    <v-icon color="#DB1D00" class="mr-5 mb-2" style="font-size:34px;">mdi-information</v-icon>
                    <div class="d-flex flex-column">
                      <div class="d-flex align-center">
                        <h5 class="ma-0 mb-1 em-18" style="color:#DB1D00">A copy of layout plan</h5>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-center justify-space-between mw-4">
                    <div>
                     <div class="status-div">
                        <div class="mr-1" :class="statusToClass('Not recieved')">•</div>
                        <h6>Not recieved</h6>
                      </div>
                    </div>
                    <v-btn depressed :disabled="btnDisabled" class="o-btn-action dis-btn small mr-8" style="justify-self:flex-start;" color="primary">Choose file</v-btn>
                  </div>
                </div>
                <div class="d-flex py-5 " >
                  <div class="d-flex mw-6 align-center">
                    <v-icon color="#DB1D00" class="mr-5 mb-2" style="font-size:34px;">mdi-information</v-icon>
                    <div class="d-flex flex-column">
                      <div class="d-flex align-center">
                        <h5 class="ma-0 mb-1 em-18" style="color:#DB1D00">3 Newspaper Advertisements</h5>
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
                    </div>
                  </div>
                  <div class="d-flex align-center justify-space-between mw-4">
                    <div>
                     <div class="status-div">
                        <div class="mr-1" :class="statusToClass('Not recieved')">•</div>
                        <h6>Not recieved</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
      <div class="body pt-0 mt-2" >
        <router-link class="no-dec" :to="{ name: 'MAHome'}"><v-btn depressed class="o-btn-action rounded-pill mt-2 mr-5 mb-8" color="#413E56" dark>Back</v-btn></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'

// @ is an alias to /src


export default {
  name: 'MAHomeDetail_2',
  components: {
    BoldLine
  },
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
      agree: false,
      selected:0,
      dialog: false,
      infoError:true, // true: red callout (6-3-3), false:purple callout(6-3-1)
      menu:false,menu_1:false,menu_2:false,
      btnDisabled:true,
      items : [
        { title: 'Application Submitted', remark: ' ', active : true, },
        { title: 'Department Feedback', remark: ' ', active : true, arrow: true}, // true: 6-3-2
        { title: 'Verify Documents', remark: ' ', active : false, },
        { title: 'Seek Approval', remark: ' ', active : false, },
        { title: 'Licence Ready', remark: ' ', active : false, },
        { title: 'Licence Issued', remark: ' ', active : false, },
      ],
      items_current:2, // 1: 6-3-2
      ongoing_item:
        {type:'New Liquor Licence 2021-2022',date:'02-01-2021\n18:00',status:'Application Submitted'}
      ,
      doucment_items :[
        {
          title:'Recent photograph (35mm x 40mm)',
          filename:'photo_1.jpg',
          status:'Verified',
          lastUpdate: '01-02-2020'
        },
        {
          title:"A copy of the applicant's HKID Card",
          filename:'HKID.jpg',
          status:'Verified',
          lastUpdate: '01-02-2020'
        },
        {
          title:'A copy of Business Registration Certificate',
          filename:'BRC.jpg',
          status:'Verified',
          lastUpdate: '01-02-2021'
        }
      ],
    }
  },
  methods:{
    checkShouldShowApply: function (){
      if(!(this.partOne.selected==undefined) && !(this.partTwo[this.partOne.selected].selected==undefined)){
        return true;
      }else if (this.partOne.selected==1){
        return true;
      }
      return false;
    },
    statusToClass:function(status){
      if(status =='Approved' || status =='Verified'){
        return 'approved';
      }else if(status == 'Department Feedback'){
        return 'submitted';
      }else if(status == 'Application Submitted'){
        return 'submitted';
      }else if(status == 'Verify Documents' || status =='Not recieved'){
        return 'error-t';
      }
    },
  },
  activated(){
    this.$emit('updateCurrent',0);
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

.status-div {
  display:flex;
  align-items: center;
  h6{
    font-size:1.125em;
    font-weight: 400;
  }
  margin-top: -6px;
  > div{
    font-size:1.5em;
    &.submitted {
      color: #37c1e3;
    }
    &.approved {
      color: #00a639;
    }
    &.error-t {
      color: #db1d00;
    }
  }
}

.o-table{
  width:calc(100% - 110px);
  margin-left:90px;
  padding-left:20px;
  .o-tabs-card{
    margin-right:110px;
    white-space: normal !important;
    min-width:950px;
  }
}

.landing-body{
  padding: 35px clamp(20px, 5%, 110px);
  background:white;
}

.simple-table{
  display: flex;
  align-items: center;
  margin:18px 0px;
  >p{
    margin:0px;
    &:first-child{
      min-width:500px;
    }
  }
}

.bottom-text.x-s{
  p,a{
    color:#7A7A7A ;
  }
}

.l-u{
  margin:0px;
  margin-left:15px;
  margin-top:-6px;
  font-weight:400;
  font-size:0.9375em;;
  color:#7A7A7A;
}

.p-18{
  font-size:1.125em;
  span{
    color:#7A7A7A;
  }
}

.p-20{
  font-size:1.25em;
}

.om{
  margin:32px 0px 0px;
}

.header{
  padding:56px 110px;
  min-height:170px;
}

.theme--light.v-btn.v-btn--disabled.v-btn--has-bg{
  background-color:#8D8D8D !important;
}


//md and down
@media screen and (max-width: 1263px) {

.main-container {
    width:100%;
    height:100%;
    flex-direction: column;
}

.o-table {
  width:100%;
  margin:-16px 0px 8px clamp(0px, calc(5% - 20px), 90px);
}

.landing-body{
  width: 100vw;
  min-height:420px;
}

.o-tabs-card{
    white-space: normal !important;
    min-width:1000px;
  }



}

</style>
