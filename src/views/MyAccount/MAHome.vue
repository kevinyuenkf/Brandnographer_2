<template>
  <div >
    <div class="content-div content-div-1">
      <div class="hidden-md-and-down header" >
        <div class="d-flex justify-center flex-column">
          <div class="d-flex justify-end mt-n2">
            <h5 class="ma-0 fw-400" style="color:white">User :  Brandnographer2</h5>
          </div>
          <div class="d-flex mt-n3">
            <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
            <h2>My Account</h2>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="callout-div rounded"  v-if="!record">
          <v-icon x-large color="primary">mdi-information-outline</v-icon>
          <h4 class="my-0 ml-4">You do not have any record yet, you can select services here.</h4>
        </div>
        <div v-if="record">
          <div class="o-tabs-div mb-8" >
            <div v-ripple class="item" :class="selected==0?'active':''" @click="selected=0">Ongoing Application</div>
            <div v-ripple class="item" :class="selected==1?'active':''" @click="selected=1" >Past Application</div>
            <div v-ripple class="item" :class="selected==2?'active':''" @click="selected=2">Draft Application</div>
          </div>

          <!-- Ongoing -->
          <div class="o-tabs-card mt-6 mb-12" v-if="selected==0">
            <div class="top-header">
              <h3>ABC Bar</h3>
              <v-menu v-model="menu" :close-on-content-click="false" :nudge-left="menu_offset" offset-y offset-x>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text class="simple-btn" dark v-bind="attrs" v-on="on">
                    <v-icon left class="mr-3">mdi-filter</v-icon>
                    <!-- <img width="26" class="mb-3 mt-3" src="../../assets/my_acc_filter.svg" /> -->
                    <div class="hidden-md-and-down">Filter Order</div>
                  </v-btn>
                </template>
                <div class="filter-menu">
                  <div class="d-flex justify-space-between">
                    <div class="d-flex">
                      <v-icon dense class="mr-1 mt-n1" color="primary">mdi-filter</v-icon>
                      <!-- <img width="26" class="mb-3 mt-3" src="../../assets/my_acc_filter.svg" /> -->
                      <h3>Filter Order</h3>
                    </div>
                    <v-btn class="mt-n1" icon @click="menu = !menu"><v-icon>mdi-close</v-icon></v-btn>
                  </div>
                  <v-select class="mt-6" :menu-props="{offsetY: true}" :items="['a','b']" label="Application Type" outlined></v-select>
                  <v-select class="mt-n2" :menu-props="{offsetY: true}" :items="['All','Old to New','New to Old']" label="Submission Date" outlined></v-select>
                  <v-select class="mt-n2 mb-2" :menu-props="{offsetY: true}" :items="['a','b']" label="Status" outlined></v-select>
                  <div class="d-flex justify-space-between">
                    <v-btn text color="#B0B0B0"  class="simple-btn">Clear all</v-btn>
                    <v-btn text color="primary" class="simple-btn" @click="menu = !menu">Apply</v-btn>
                  </div>
                </div>
              </v-menu>
            </div>
            <div class="sec-header">
              <h6>Application Type</h6>
              <h6>Submission Date</h6>
              <h6 class="hidden-md-and-down">Status</h6>
            </div>
            <div class="content-container" v-for="(item,i) in ongoing_items" :key="i">
              <div class="content">
                <div>{{item.type}}</div>
                <div class="d-flex align-center">
                  <div>{{item.date}}</div>
                  <v-btn icon color="primary" light class="hidden-lg-and-up" @click="$router.push({name:'MAHomeDetail'})">
                      <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </div>
                <div class="hidden-md-and-down">
                  <div class="mr-1" :class="statusToClass(item.status)">•</div>
                  <h6>{{item.status}}</h6>
                </div>
                <div class="hidden-md-and-down ">
                  <v-btn text class="simple-btn" color="primary" light @click="$router.push({name:'MAHomeDetail'})">
                    Check Details
                  </v-btn>
                </div>
              </div>
            </div>
            <div class="px-8 pb-8">
              <div class="callout-div rounded py-4 align-start" v-if="infoError">
                <v-icon color="primary" class="mt-1">mdi-information</v-icon>
                <p class="my-0 ml-4">Waiting for Nominated Reserve Licensee to submit the “Nomination of Reserve Licensee FEHB 266” Form</p>
              </div>
              <div class="callout-div rounded error-box py-4 align-start flex-wrap" v-if="infoError">
                <div class="d-flex align-start">
                  <v-icon color="#DB1D00" class="mt-1">mdi-information</v-icon>
                  <p class="my-0 ml-4">Document missing : A copy of layout plan</p>
                </div>
                <div class="d-flex align-start" >
                  <v-icon color="#DB1D00" class="mt-1">mdi-information</v-icon>
                  <p class="my-0 ml-4">Document missing : Please submit 3 newspaper advertisements </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Past  -->
          <div class="o-tabs-card mt-6 mb-12" v-if="selected==1">
            <div class="top-header">
              <h3>ABC Bar</h3>
              <v-menu v-model="menu_1" :close-on-content-click="false" :nudge-left="menu_offset" offset-y offset-x>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text class="simple-btn" dark v-bind="attrs" v-on="on">
                    <v-icon left class="mr-3">mdi-filter</v-icon>
                    <!-- <img width="26" class="mb-3 mt-3" src="../../assets/my_acc_filter.svg" /> -->
                    <div class="hidden-md-and-down">Filter Order</div>
                  </v-btn>
                </template>
                <div class="filter-menu">
                  <div class="d-flex justify-space-between">
                    <div class="d-flex">
                      <v-icon dense class="mr-1 mt-n1" color="primary">mdi-filter</v-icon>
                      <!-- <img width="26" class="mb-3 mt-3" src="../../assets/my_acc_filter.svg" /> -->
                      <h3>Filter Order</h3>
                    </div>
                    <v-btn class="mt-n1" icon @click="menu_1 = !menu_1"><v-icon>mdi-close</v-icon></v-btn>
                  </div>
                  <v-select class="mt-6" :menu-props="{offsetY: true}" :items="['a','b']" label="Application Type" outlined></v-select>
                  <v-select class="mt-n2" :menu-props="{offsetY: true}" :items="['All','Old to New','New to Old']" label="Submission Date" outlined></v-select>
                  <v-select class="mt-n2 mb-2" :menu-props="{offsetY: true}" :items="['a','b']" label="Status" outlined></v-select>
                  <div class="d-flex justify-space-between">
                    <v-btn text color="#B0B0B0"  class="simple-btn">Clear all</v-btn>
                    <v-btn text color="primary" class="simple-btn" @click="menu_1 = !menu_1">Apply</v-btn>
                  </div>
                </div>
              </v-menu>
            </div>
            <div class="sec-header">
              <h6>Application Type</h6>
              <h6>Submission Date</h6>
              <h6 class="hidden-md-and-down">Status</h6>
            </div>
            <div class="content-container" v-for="(item,i) in past_application_items" :key="i">
              <div class="content" >
                <div>{{item.type}}</div>
                <div class="d-flex align-center">
                  <div>{{item.date}}</div>
                  <v-btn icon color="primary" light class="hidden-lg-and-up">
                      <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </div>
                <div class="hidden-md-and-down">
                  <div class="mr-1" :class="statusToClass(item.status)">•</div>
                  <h6>{{item.status}}</h6>
                </div>
                <div class="hidden-md-and-down ">
                  <a class="no-dec" :href="publicPath+'fehb106_new form_filled.pdf'" download="fehb106_new form_filled.pdf" >
                    <v-btn text class="simple-btn" color="primary" light>
                      View
                    </v-btn>
                  </a>
                </div>
              </div>
            </div>
            <div class="px-8 pb-8">
            </div>
          </div>

          <!-- Draft  -->
          <div class="o-tabs-card mt-6 mb-12" v-if="selected==2">
            <div class="top-header">
              <h3>ABC Bar</h3>
              <v-menu v-model="menu_2" :close-on-content-click="false" :nudge-left="menu_offset" offset-y offset-x>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text class="simple-btn" dark v-bind="attrs" v-on="on">
                    <v-icon left class="mr-3">mdi-filter</v-icon>
                    <!-- <img width="26" class="mb-3 mt-3" src="../../assets/my_acc_filter.svg" /> -->
                    <div class="hidden-md-and-down">Filter Order</div>
                  </v-btn>
                </template>
                <div class="filter-menu">
                  <div class="d-flex justify-space-between">
                    <div class="d-flex">
                      <v-icon dense class="mr-1 mt-n1" color="primary">mdi-filter</v-icon>
                      <!-- <img width="26" class="mb-3 mt-3" src="../../assets/my_acc_filter.svg" /> -->
                      <h3>Filter Order</h3>
                    </div>
                    <v-btn class="mt-n1" icon @click="menu_2 = !menu_2"><v-icon>mdi-close</v-icon></v-btn>
                  </div>
                  <v-select class="mt-6" :menu-props="{offsetY: true}" :items="['a','b']" label="Application Type" outlined></v-select>
                  <v-select class="mt-n2" :menu-props="{offsetY: true}" :items="['All','Old to New','New to Old']" label="Submission Date" outlined></v-select>
                  <v-select class="mt-n2 mb-2" :menu-props="{offsetY: true}" :items="['a','b']" label="Status" outlined></v-select>
                  <div class="d-flex justify-space-between">
                    <v-btn text color="#B0B0B0"  class="simple-btn">Clear all</v-btn>
                    <v-btn text color="primary" class="simple-btn" @click="menu_2 = !menu_2">Apply</v-btn>
                  </div>
                </div>
              </v-menu>
            </div>
            <div class="sec-header">
              <h6>Application Type</h6>
              <h6>Creation Date</h6>
              <h6 class="hidden-md-and-down">Last Modification Date</h6>
            </div>
            <div class="content-container" v-for="(item,i) in draft_items" :key="i">
              <div class="content" >
                <div>{{item.type}}</div>
                <div class="d-flex align-center">
                  <div>{{item.date}}</div>
                  <v-btn icon color="primary" light class="hidden-lg-and-up">
                      <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </div>
                <div class="hidden-md-and-down" style="white-space:pre;">
                  <h6>{{item.date_2}}</h6>
                </div>
                <div class="hidden-md-and-down ">
                  <v-btn text class="simple-btn" color="primary" light>
                    View and Edit
                  </v-btn>
                  <v-btn icon color="primary" light>
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
            <div class="px-8 pb-8">
            </div>
          </div>


        </div>
      </div>
    </div>
    <div class="landing-body" v-if="!record">
      <div class="part-1">
      <div><h2>1. Please select</h2></div>
      <div>
        <v-btn-toggle v-model="partOne.selected" tile group>
          <v-btn>
            <div class="btn-slot">
              <div class="tick-cir-div d-flex flex-row-reverse">
                <img v-if="partOne.selected == 0" src="../../assets/cir_tick.svg" />
              </div>
              <img class="mb-4 mt-2" src="../../assets/landing_application.svg" />
              <h3>Applications</h3>
            </div>
          </v-btn>
          <v-btn>
            <div class="btn-slot">
              <div class="tick-cir-div d-flex flex-row-reverse">
                <img v-if="partOne.selected == 1" src="../../assets/cir_tick.svg" />
              </div>
              <img class="mb-4 mt-2" src="../../assets/landing_renewal.svg" />
              <h3>Renewal</h3>
            </div>
          </v-btn>
          <v-btn :disabled="true" class="grayscale" >
            <div class="btn-slot">
              <div class="tick-cir-div d-flex flex-row-reverse">
                <img v-if="partOne.selected == 2" src="../../assets/cir_tick.svg" />
              </div>
              <img class="mb-4 mt-2" src="../../assets/landing_followup.svg" />
              <h3>Follow Up</h3>
            </div>
          </v-btn>
        </v-btn-toggle>
      </div>
    </div>
    <!-- Application -->
    <div class="part-2" v-if="partOne.selected==0">
      <div><h2>2. Application for</h2></div>
      <div>
        <v-btn-toggle v-model="partTwo[partOne.selected].selected" tile group>
          <v-btn v-for="(item,i) in partTwo[partOne.selected].buttons" :key=i>
            <div class="btn-slot">
              <h3>{{item}}</h3>
              <v-spacer></v-spacer>
              <img v-if="partTwo[partOne.selected].selected == i" src="../../assets/cir_tick.svg" />
            </div>
          </v-btn>
        </v-btn-toggle>
      </div>
    </div>
    <!-- Renewal -->
    <div class="part-3" v-if="partOne.selected==1">
      <div><h2>2. Application for</h2></div>
      <div>
        <v-btn-toggle v-model="partTwo[partOne.selected].selected" tile group>
          <v-btn v-for="(item,i) in partTwo[partOne.selected].buttons" :key=i>
            <div class="btn-slot">
              <h3>{{item}}</h3>
              <img v-if="partTwo[partOne.selected].selected == i" src="../../assets/cir_tick.svg" />
            </div>
          </v-btn>
        </v-btn-toggle>
      </div>
    </div>
    <!-- Application / New Licnce -->
    <div class="part-3" v-if="partOne.selected==0 && !(partTwo[partOne.selected].selected==undefined) && partTwo[partOne.selected].selected!=3 && partThree[partOne.selected][partTwo[partOne.selected].selected].buttons.length>0">
      <div><h2>3. Licence Type</h2></div>
      <div>
        <v-btn-toggle v-model="partThree[partOne.selected][partTwo[partOne.selected].selected].selected" tile group>
          <v-btn v-for="(item,i) in partThree[partOne.selected][partTwo[partOne.selected].selected].buttons" :key=i>
            <div class="btn-slot">
              <h3>{{item}}</h3>
              <img v-if="partThree[partOne.selected][partTwo[partOne.selected].selected].selected == i" src="../../assets/cir_tick.svg" />
            </div>
          </v-btn>
        </v-btn-toggle>
      </div>
    </div>
    <!-- special style for nomination -->
    <div class="part-2" v-if="partOne.selected==0 && !(partTwo[partOne.selected].selected==undefined) && partTwo[partOne.selected].selected==3 && partThree[partOne.selected][partTwo[partOne.selected].selected].buttons.length>0">
      <div><h2>3. Licence Type</h2></div>
      <div>
        <v-btn-toggle v-model="partThree[partOne.selected][partTwo[partOne.selected].selected].selected" tile group>
          <v-btn v-for="(item,i) in partThree[partOne.selected][partTwo[partOne.selected].selected].buttons" :key=i>
            <div class="btn-slot large">
              <h3>{{item}}</h3>
              <img v-if="partThree[partOne.selected][partTwo[partOne.selected].selected].selected == i" src="../../assets/cir_tick.svg" />
            </div>
          </v-btn>
        </v-btn-toggle>
      </div>
    </div>

    <!-- Apply -->
    <div class="part-4" v-if="(checkShouldShowApply())">
      <v-btn depressed class="apply-btn rounded-pill" color="primary" @click="tryRouteTo()">Apply</v-btn>
    </div>
    </div>
    <!-- <div class="content-div content-div-1">
      <div class="footer">
        <v-btn class="footer-btn b-dark">{{$t('save_draft')}}</v-btn>
        <v-btn class="footer-btn b-primary">{{$t('save_and_next')}}</v-btn>
      </div>
    </div> -->
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'

// @ is an alias to /src


export default {
  name: 'MAHome',
  components: {
    BoldLine
  },
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
      agree: false,
      selected:0,
      dialog: false,
      record:true, //  true: 6-2-1,  false: 6-1
      infoError:false, // true: red callout, false:purple callout(6-2-1)
      menu:false,menu_1:false,menu_2:false,
      ongoing_items:[
        {type:'New Liquor Licence 2021-2022',date:'02-01-2021\n18:00',status:'Application Submitted'}
      ],
      past_application_items:[
        {type:'Renew Liquor Licence 2019-2020',date:'26-06-2019\n16:00',status:'Approved'},
        {type:'Renew Liquor Licence 2018-2019',date:'26-05-2018\n15:00',status:'Approved'},
        {type:'Renew Liquor Licence 2017-218',date:'20-04-2017\n12:00',status:'Approved'}
      ],
      draft_items:[
        {type:'Renew Liquor Licence',date:'26-06-2020\n16:00',date_2:'30-06-2020\n18:00'},
        {type:'Renew Liquor Licence',date:'26-05-2020\n15:00',date_2:'26-05-2020\n18:00'},
        {type:'New Liquor Licence',date:'20-04-2017\n12:00',date_2:'21-04-2020\n15:00'}
      ],
      partOne: {
        buttons: ['Applications', 'Renewal', 'Follow Up'],
        selected: undefined,
      },

    partTwo: [
      { //Parent is Applications
        buttons: ['New Licence', 'Licence Renewal', 'Licence Transfer','Nomination of Reserve Licensee','Temporary Absence','Licence Amendment','Change Information'],
        selected: undefined
      },
      {
        //Parent is Renewal
        buttons: ['Liquor Licence', 'Club Liquor Licence'],
        selected: undefined
      },
      {
        //Parent is Follow Up
      },
    ],
    partThree: [
      [
        //Parent is Applications
        { //NewLicense
          buttons: ['Liquor Licence', 'Club Liquor Licence'], selected: undefined
        },
        {
          //Licence Renewal
          buttons: ['Liquor Licence', 'Club Liquor Licence'], selected: undefined
        },
        {
          //Licence Transfer
          buttons: ['Liquor Licence', 'Club Liquor Licence'], selected: undefined
        },
        {
          //Nomination of Reserve Licensee
          buttons: ['Nomination of Reserve Licensee'], selected: undefined
        },
        {
          //Temporary Absence
          buttons: ['Liquor Licence', 'Club Liquor Licence'], selected: undefined
        },
        {
          //Licence Amendment
          buttons: ['Liquor Licence', 'Club Liquor Licence'], selected: undefined
        },
        {
          //Change Information
          buttons: ['Liquor Licence', 'Club Liquor Licence'], selected: undefined
        },
      ],
      [
        //Parent is Renewal
      ],
      [
        //Parent is Follow Up
      ],
    ]
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
      if(status =='Approved'){
        return 'approved';
      }else if(status == 'Application Submitted'){
        return 'submitted'
      }
    },
    tryRouteTo(){
      var s1 = this.partOne.selected;
      var s2 = this.partTwo[this.partOne.selected].selected;
      var s3 = this.partThree[this.partOne.selected][this.partTwo[this.partOne.selected].selected].selected;
      console.log(s1, s2, s3);
      if(s2==3){
        console.log('route to login');
      }
    }
  },
  activated(){
    this.$emit('updateCurrent',0);
    this.dialog = true;
  },
  computed: {
      menu_offset () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 300
          case 'sm': return 300
          case 'md': return 300
          case 'lg': return 500
          case 'xl': return 500
        }
      },
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

.landing-body{
  padding: 35px clamp(20px, 5%, 110px);
  background:white;
}

.om{
  margin:32px 0px 0px;
}

.header{
  padding:56px 110px;
  min-height:170px;
}

.part-1{
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    div:nth-child(2){
      width:100%;
      margin:35px 0px;
      .v-btn-toggle--group{
        display:flex;
        justify-content: center;
        flex-wrap: nowrap;
        width:100%;
      }
      .v-btn-toggle--group>.v-btn.v-btn{
        margin:0px 12px !important;
        padding:20px;
        border-radius:10px !important;
        border:1.5px solid $ols-t-lightGrey;
        width: 300px;
        height:250px;
        background-color:transparent !important;
        font-size:1em;
        .btn-slot{
          width:100%;
        }
        .tick-cir-div{
          height:32px;
          img{
            height:32px;
            width:32px;
          }
        }
        h3{
          text-transform: none !important;
          letter-spacing: normal;
          font-size:1.75em;
          margin-bottom:20px;
        }
      }
      .v-btn-toggle>.v-btn.v-btn--active{
        color:white;
        border:0px;
        background:$ols-primary !important;
      }
    }
}

.part-2{
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    div:nth-child(2){
      width:100%;
      margin:35px 0px;
      .v-btn-toggle--group{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        width:100%;
      }
      .v-btn-toggle--group>.v-btn.v-btn{
        margin:0px 0px 20px !important;
        border-radius:10px !important;
        border:1.5px solid $ols-t-lightGrey;
        width: 700px;
        min-height:90px;
        background-color:transparent !important;
        font-size:1em;
        .btn-slot{
          width:100%;
          height:100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding:0px 47px 0px 78px;
          &.large{
            text-align: left;
            h3{
              max-width:500px;
              white-space: pre-wrap;
            }
          }
        }
        img{
            height:32px;
            width:32px;
        }
        h3{
          text-transform: none !important;
          letter-spacing: normal;
          font-size:1.5em;
          font-weight:400;
        }
      }
      .v-btn-toggle>.v-btn.v-btn--active{
        color:white;
        border:0px;
        background:$ols-primary !important;
      }
    }
}

.part-3{
   width:100%;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    div:nth-child(2){
      width:100%;
      margin:35px 0px;
      display: flex;
      justify-content: center;
      .v-btn-toggle--group{
        display:flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        width:720px;
      }
      .v-btn-toggle--group>.v-btn.v-btn{
        margin:0px 10px 20px !important;
        border-radius:10px !important;
        border:1.5px solid $ols-t-lightGrey;
        width: 340px;
        height:90px;
        background-color:transparent !important;
        font-size:1em;
        .btn-slot{
          width:100%;
          height:100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        img{
            position: absolute;
            right:16px;
            height:32px;
            width:32px;
          }
        h3{
          text-transform: none !important;
          letter-spacing: normal;
          font-size:1.5em;
          font-weight:400;
        }
      }
      .v-btn-toggle>.v-btn.v-btn--active{
        color:white;
        border:0px;
        background:$ols-primary !important;
      }
    }
}

.part-4{
  .apply-btn{
    width:180px !important;
    height:50px;
    text-transform: none;
    font-size:1em;
    font-weight: 400 !important;
    letter-spacing: 0px;
    span{
      font-size:1em;

    }
  }
}

//md and down
@media screen and (max-width: 1263px) {

  .body{
    padding-top:24px;
  }

.main-container {
    width:100%;
    height:100%;
    flex-direction: column;
}

.landing-body{
  width: 100vw;
  min-height:420px;
}

  .part-1{
    padding:0px 15px;
    div:nth-child(2){
      margin:22px 0px 30px;
      .v-btn-toggle--group>.v-btn.v-btn{
        margin:0px 6px !important;
        padding:9px;
        border-radius:5px !important;
        width: 106px;
        height:106px;
        img{
          height:40px;
          margin:0px !important;
        }
        .tick-cir-div{
          height:16px;
          img{
            width:16px;height:16px;
          }
        }
        h3{
          text-transform: none !important;
          letter-spacing: normal;
          font-size:0.9375em;
          font-weight: 500;
          margin-top:5px;
          margin-bottom:8px;
        }
      }
      .v-btn-toggle>.v-btn.v-btn--active{
        color:white;
        border:0px;
        background:$ols-primary !important;
      }
    }
  }

  .part-2{
    div:nth-child(2){
      margin-top:20px;
      .v-btn-toggle--group>.v-btn.v-btn{
        margin:0px 0px 10.25px !important;
        border-radius:5px !important;
        width: 301.5px;
        height:61.5px;
        .btn-slot{
          padding:0px 6px 0px 8px;


          &.large{
            text-align: left;
            h3{
              max-width:220px;
              white-space: pre-wrap;
            }
          }

        }
        img{
            height:22px;
            width:22px;
        }
        h3{
          font-size:1em;
          font-weight:500;
        }
      }
    }
  }

  .part-3{
    div:nth-child(2){
      margin-top:20px;
      .v-btn-toggle--group{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        width:100%;
      }
      .v-btn-toggle--group>.v-btn.v-btn{
        margin:0px 0px 10.25px !important;
        border-radius:5px !important;
        width: 301.5px;
        height:61.5px;
        .btn-slot{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding:0px 6px 0px 9px;
        }
        img{
            right:5px;
            height:22px;
            width:22px;
        }
        h3{
          font-size:1em;
          font-weight:500;
        }
      }
    }
  }

  .part-4{
    .apply-btn{
    span{
      font-size:1em;
    }
  }
  }


}
.grayscale {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
}

</style>
