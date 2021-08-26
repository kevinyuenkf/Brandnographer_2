<template>
  <div class="content-div content-div-1">
    <div class="header">
      <h1>Application for New Issue of a Liquor Licence</h1>
      <div class="d-flex align-center ">
        <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
        <h2>Upload Documents</h2>
      </div>
    </div>
    <div class="body">
      <div class="form-bg-circle hidden-md-and-down">6</div>
      <div class="form-div">
          <h2 >1. Supporting document required for your application</h2>
      </div>
      <div class="callout-div detail-box px-15">
        <h5 class="em-18 fw-400 mb-2">1. Applicant is required to make immediate arrangement to place an advertisement in a specified format for one day in 3 newspapers (1 English and 2 Chinese) after the application is received and submit a copy of the full page, containing the advertisement, from each of the newspapers in which it appears, to the Liquor Licensing Office by post.</h5>
        <h5 class="em-18 fw-400 mb-2">2. If the Liquor Licensing Board, in the process of handling the application, considers that other documents or information are required to substantiate the related application, the applicant will be required to submit the related documents and information before deliberation to be arranged.</h5>
        <h5 class="em-18 fw-400 mb-2">3. A set of “general licensing conditions” which the liquor licence holder has to observe has been set out in “A Guide to Application for Liquor Licences and Club Liquor Licences” for reference.</h5>
      </div>

      <div class='o-table' >
        <div style="min-width: 800px;">
          <div class="d-flex"><h5 class="em-22 mw-6">Document Type</h5><h5 class="em-22 mw-4">Last Update</h5></div>
        <BoldLine :options="{color:'rgba(177,177,177,0.37)',height:'2px',width:'100%'}"></BoldLine>
        <div class="d-flex py-5 " v-for="(item,i) in doucment_items" :key="i">
          <div class="d-flex mw-6 align-center">
            <v-icon color="primary" class="mr-5 mb-2" style="font-size:34px;">mdi-check-circle</v-icon>
            <div class="d-flex flex-column">
              <div class="d-flex align-center">
                <h5 class="ma-0 mb-1 em-18">{{item.title}}</h5>
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
              <div class="d-flex bottom-text mt-n2" >
                <p class="mr-1">File name : </p>
                <a :href="publicPath+'SAMPLE.png'" download target="_blank" class="mr-5"><p>{{item.filename}}</p></a>
                <p v-ripple class="clickable-action-text" @click="true">Remove</p>
              </div>
            </div>
          </div>
          <div class="d-flex align-center justify-space-between mw-4">
            <h5 class="ma-0 ml-1 em-18 fw-400">{{item.lastUpdate}}</h5>
            <v-btn depressed :disabled="btnDisabled" class="o-btn-action small mr-1" style="justify-self:flex-start;" color="primary">Choose file</v-btn>
          </div>
        </div>
        </div>
      </div>

      <div class="form-div mt-10">
          <h2 >2. Additional document</h2>
      </div>

      <div class='o-table'>
        <div style="min-width: 800px;">
          <div class="d-flex"><h5 class="em-22 mw-6">Additional Information  ( Annex l )</h5><h5 class="em-22 mw-4">Last Update</h5></div>
          <BoldLine :options="{color:'rgba(177,177,177,0.37)',height:'2px',width:'100%'}"></BoldLine>
          <div class="d-flex py-5 " v-for="(item,i) in doucment_add_items" :key="i">
            <div class="d-flex mw-6 align-center">
              <v-icon color="primary" class="mr-5 mb-2" style="font-size:34px;">mdi-check-circle</v-icon>
              <div class="d-flex flex-column">
                <div class="d-flex align-center">
                  <h5 class="ma-0 mb-1 em-18" style="max-width:400px;white-space:pre-wrap">{{item.title}}</h5>
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
                <div class="d-flex bottom-text mt-n2" >
                  <p class="mr-1">File name : </p>
                  <a :href="publicPath+'SAMPLE.png'" download target="_blank" class="mr-5"><p>{{item.filename}}</p></a>
                  <p v-ripple class="clickable-action-text" @click="true">Remove</p>
                </div>
              </div>
            </div>
            <div class="d-flex align-center justify-space-between mw-4">
              <h5 class="ma-0 ml-1 em-18 fw-400">{{item.lastUpdate}}</h5>
              <v-btn depressed :disabled="btnDisabled" class="o-btn-action small mr-1" style="justify-self:flex-start;" color="primary">Choose file</v-btn>
            </div>
          </div>
        </div>
      </div>

      <div class="text-box mt-8">
          <h3>Notes for enclosure of Annex I</h3>
          <ol class="ml-0">
            <li>
              <p class="em-16 mt-4">Annex l must be accompanied by the liquor licence application form and the following plans; otherwise the Department is unable to process the application:</p>
              <ol type="a" class="ml-0">
                <li>
                  <p class="em-16 mt-4">5 identical copies of proposed layout plans1 are required to show the layout of the premises including the portion for sale of supply of liquor and for consumption of liquor on the premises. Such plans should be drawn to scale (of not less than 1:100) in metric unit.</p>
                </li>
                <li>
                  <p class="em-16 mt-4">3 identical copies of proposed ventilating system2 layout plans together with the Supplier Certificate are required if the ventilating system is installed in the premises. Such plans should be drawn to scale (of not less than 1:100) in metric unit.</p>
                </li>
                <li>
                  <p class="em-16 mt-4">3 identical copies of location maps drawn to scale of 1:1000, in metric unit, are required to clearly indicate the location of the premises</p>
                </li>
              </ol>
            </li>
            <li>
              <p class="em-16 mt-4">The application will be referred to the Hong Kong Police Force, District Office of the Home Affairs Department, Planning Department, Fire Services Department, Buildings Department/Housing Department/Architectural Services Department etc. and government departments concerned for comment. It will take longer processing time than normal liquor licence applications.</p>
            </li>
            <li>
              <p class="em-16 mt-4">Except for premises in government properties or the Housing Authority’s properties, certification made by recognised professional(s) (i.e. authorised persons/structural engineers registered under Section 3 of the Buildings Ordinance (Cap. 123)) certifying that the premises are free of unauthorised building works shall be submitted (in person or by mail) to the Liquor Licensing Board in prescribed form (FEHB 267) in accordance with the corresponding guidelines, where appropriate, listed as follows:</p>
              <ol type="a" class="ml-0">
                <li>
                  <p class="em-16 mt-4">“Certification of Food Business Premises Free of Unauthorised Building Works – Guidelines for Authorised Persons and Registered Structural Engineers” issued by the Director of Buildings</p>
                </li>
                <li>
                  <p class="em-16 mt-4">“Certification of Food Business Premises Free of Unauthorised Building Works – Guidelines for Authorised Persons and Registered Structural Engineers” (applicable to the properties divested to Link Asset Management Limited) issued by the Independent Checking Unit of the Housing Department</p>
                </li>
              </ol>
            </li>
            <li>
              <p class="em-16 mt-4">If a ventilating system is installed, the standard of ventilation shall be a supply of not less than 17 cubic meters of outside air per hour for each person accommodated on the premises.</p>
            </li>
            <li>
              <p class="em-16 mt-4">Whenever there are changes to the submitted plans for the application, the applicant is required to highlight any proposed changes on the revised plans with colour pens and simple descriptions before making submission to the Liquor Licensing Board for consideration and referral to other government departments for processing. Revised plans not in compliance with this requirement will be rejected. Applicant should note that the Liquor Licensing Board and other government departments concerned would not be responsible for any delay caused by the errors and omissions in highlighting all changes on the plans.</p>
            </li>
          </ol>
        </div>

        <div class='o-table mt-8 mb-6'>
          <div style="min-width: 800px;">
            <div class="d-flex"><h5 class="em-22 mw-6">The nominated reserve licensee  ( Annex ll )</h5><h5 class="em-22 mw-4">Last Update</h5></div>
            <BoldLine :options="{color:'rgba(177,177,177,0.37)',height:'2px',width:'100%'}"></BoldLine>
            <div class="d-flex py-5 " v-for="(item,i) in doucment_nom_items" :key="i">
              <div class="d-flex mw-6 align-center">
                <v-icon color="primary" class="mr-5 mb-2" style="font-size:34px;">mdi-check-circle</v-icon>
                <div class="d-flex flex-column">
                  <div class="d-flex align-center">
                    <h5 class="ma-0 mb-1 em-18" style="max-width:400px;white-space:pre-wrap">{{item.title}}</h5>
                  </div>
                <div class="d-flex bottom-text mt-n2" >
                  <p class="mr-1">File name : </p>
                  <a :href="publicPath+'SAMPLE.png'" download target="_blank" class="mr-5"><p>{{item.filename}}</p></a>
                  <p v-ripple class="clickable-action-text" @click="true">Remove</p>
                </div>
              </div>
            </div>
            <div class="d-flex align-center justify-space-between mw-4">
              <h5 class="ma-0 ml-1 em-18 fw-400">{{item.lastUpdate}}</h5>
              <v-btn depressed :disabled="btnDisabled" class="o-btn-action small mr-1" style="justify-self:flex-start;" color="primary">Choose file</v-btn>
            </div>
          </div>
        </div>
      </div>


    </div>
    <div class="footer  mt-6">
      <v-btn class="footer-btn b-dark">{{$t('save_draft')}}</v-btn>
      <v-btn class="footer-btn b-primary" :disabled="false" @click="$router.push({name:'NewIdentityAuth'})">{{$t('save_and_next')}}</v-btn>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import MultipleTextfield from '../../components/misc/multiple-textfield'
// @ is an alias to /src


export default {
  name: 'RenewalUploadDoc',
  components: {
    BoldLine,
    MultipleTextfield
  },
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
      btnDisabled: false,
      doucment_items :[
        {
          title:'Recent photograph (35mm x 40mm)',
          filename:'photo_1.jpg',
          lastUpdate: '01-01-2021'
        },
        {
          title:"A copy of the applicant's HKID Card",
          filename:'photo_1.jpg',
          lastUpdate: '01-01-2021'
        },
        {
          title:'A copy of Business Registration Certificate',
          filename:'photo_1.jpg',
          lastUpdate: '01-01-2021'
        }
      ],
      doucment_add_items :[
        {
          title:'A copy of proposed layout plans of the premises',
          filename:'layout_plans.pdf',
          lastUpdate: '01-01-2021'
        },
        {
          title:'A copy of proposed ventilating system layout plans of the premises with their Supplier Certificate',
          filename:'ventilating system.pdf',
          lastUpdate: '01-01-2021'
        },
        {
          title:' A copy of of location plans of the premises',
          filename:'location of the premises.pdf',
          lastUpdate: '01-01-2021'
        }
      ],
      doucment_nom_items :[
        {
          title:'A copy of HKID Card',
          filename:'photo_1.jpg',
          lastUpdate: '01-01-2021'
        },
        {
          title:'A recent photograph',
          filename:'photo_1.jpg',
          lastUpdate: '01-01-2021'
        },
      ]
    }
  },
  methods:{

  },
  activated(){
    this.$emit('updateCurrent',6);
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
    width:clamp(280px, 100%, 840px);
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

h5.em-22{
  font-size: 1.375em;
}

p.em-16{
  font-size:1em;
  line-height:1.2em;
  color:$ols-t-darkGrey;
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


p.em-16{
  font-size:0.9375em;
  line-height:1.1em;
}


h5.em-18{
  font-size: 1em;
}

.big-gap{
  margin-right:8px
}

}

</style>
