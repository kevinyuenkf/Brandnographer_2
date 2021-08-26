<template>
  <div class="content-div content-div-1">
    <div class="header">
      <h1>Application for New Issue of a Liquor Licence</h1>
      <div class="d-flex align-center ">
        <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
        <h2>Information of Applicant</h2>
      </div>
    </div>
    <div class="body">
      <div class="form-bg-circle hidden-md-and-down">3</div>
      <div class="form-div">
        <v-form v-model="form.valid">
            <h2 class="purple-header em-26">D. Personal Information</h2>
            <h5 class="mt-8">9 . Name </h5>
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

            <h5 class="mt-2">10 . HKID Card No. </h5>
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
            <h5 class="mt-3">11 . Date of Birth ( Day/ Month/ Year)</h5>
            <div class="d-flex align-baseline">
              <v-select class="o-select-month mr-3" :items="timeOpts.day" label="" outlined :menu-props="{offsetY: true}"></v-select>/
              <v-select class="o-select-month mx-3" :items="timeOpts.month" label="" outlined :menu-props="{offsetY: true}"></v-select>/
              <v-select class="o-select-year ml-3" :items="timeOpts.year" label="" outlined :menu-props="{offsetY: true}"></v-select>
            </div>
            <h5 class="mt-3 mb-6">12 . Residential Address </h5>
            <div class="form-section mt-n2 ml-6">
              <v-text-field class="tf-full mt-2"  v-model="applicant_data.r_address[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
              <v-text-field class="tf-full mt-n4" v-model="applicant_data.r_address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
              <v-text-field class="tf-full mt-n4" v-model="applicant_data.r_address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
              <v-select class="mt-n4" v-model="applicant_data.r_address[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
            </div>
            <h5 class="mt-3">13 . Correspondence Address
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon class="tooltip-icon tooltip-icon-row-13 mt-1" color="secondary" dark v-bind="attrs" v-on="on">
                    mdi-help-circle
                  </v-icon>
                </template>
                <div>
                  <div class="d-flex align-center">
                    <v-icon color="secondary" dark>
                      mdi-help-circle
                    </v-icon>
                    <h3 class="mb-0">Tips:</h3>
                  </div>
                  <div class="ml-8 c-div">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </v-tooltip>
            </h5>
            <div class="mt-n2 ml-10 d-flex align-center flex-wrap">
              <h5 class="em-18 fw-400">Same as Residental Address </h5>
              <v-radio-group v-model="applicant_data.q13" class="ml-7 mt-n3 mb-0" row>
                <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
                <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <div v-show="applicant_data.q13==false" class="form-section mt-n2 ml-6">
              <v-text-field class="tf-full mt-2"  v-model="applicant_data.address[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
              <v-text-field class="tf-full mt-n4" v-model="applicant_data.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
              <v-text-field class="tf-full mt-n4" v-model="applicant_data.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
              <v-select class="mt-n4" v-model="applicant_data.address[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
            </div>
            <h5 class="mt-3">14. Tel no. </h5>
            <div class="form-section">
              <v-text-field class="tf-half" v-model="applicant_data.tel.office" :rules="form.fullnameRules"  label="Office" outlined required></v-text-field>
              <v-text-field class="tf-half" v-model="applicant_data.tel.mobile" :rules="form.fullnameRules"  label="Mobile" outlined required></v-text-field>
            </div>
            <h5 class="mt-3">15. Contact </h5>
            <div class="form-section">
              <v-text-field class="tf-half" v-model="applicant_data.fax.faxNo" :rules="form.fullnameRules"  label="Fax No." outlined required></v-text-field>
              <v-text-field class="tf-half" v-model="applicant_data.fax.email" :rules="form.fullnameRules"  label="Email Address" outlined required></v-text-field>
            </div>
            <div class="d-flex ">
              <h5> 16. </h5>
              <h5 class="ml-1" >Please provide in full detail your previous experience in connection with the sale and supply of liquor </h5>
            </div>
            <div class="mt-n2 ml-10 d-flex justify-space-between align-center flex-wrap">
              <h5 class="em-18 fw-400">Have previous experience </h5>
              <v-radio-group v-model="applicant_data.q16" class="ml-7 mt-n3 mb-0" row>
                <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
                <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <div v-show="applicant_data.q16==true" class="callout-div detail-box lg ml-10 px-15 py-2 mb-7">
              <div>
                <div class="box-block" v-for="(item,i) in applicant_data.q16_detail" :key="i" style="width:100%;">
                  <div class="d-flex pull-right">
                    <v-btn depressed class="o-btn-action plus grey-btn" color="secondary" @click="delOneOfDetail(item, i, applicant_data.q16_detail)">x</v-btn>
                  </div>
                  <h5>Address of Liquor-selling/supplying Premises Concerned</h5>
                  <v-text-field class="tf-full mt-8"  v-model="item.address[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
                  <v-text-field class="tf-full mt-n4" v-model="item.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
                  <v-text-field class="tf-full mt-n4" v-model="item.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
                  <v-select class="mt-n4 mb-0" v-model="item.address[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
                  <div class="d-flex flex-wrap justify-space-between mt-n4">
                    <div class="d-flex flex-column mr-10">
                      <h5>Period of Employment (Year)</h5>
                      <div class="d-flex align-baseline">
                        <v-select v-model="item.period.start" append-outer-icon="" class="o-select-year small mr-3" :items="timeOpts.year" label="" outlined :menu-props="{offsetY: true}"></v-select>-
                        <v-select v-model="item.period.to" append-outer-icon=""  class="o-select-year small ml-3" :items="timeOpts.year" label="" outlined :menu-props="{offsetY: true}"></v-select>
                      </div>
                    </div>
                    <div class="d-flex flex-column">
                      <h5>Position of Employment</h5>
                      <v-text-field  v-model="item.position" class="tf-full" :rules="form.fullnameRules"  label="Position" outlined required></v-text-field>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex mb-8 mt-8 center-application">
                <v-btn depressed class="o-btn-action plus" color="primary" @click="addRecord">+</v-btn>
                <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addRecord">Add Record</p>
              </div>
            </div>
            <div class="d-flex mt-n3">
              <h5> 17. </h5>
              <h5 class="ml-1" >What licence(s) below do you hold at present? (allow multiple selection) </h5>
            </div>
            <v-radio-group v-model="applicant_data.q17" class="list-radio-gp ml-8 my-3" >
              <v-radio class="mt-5" :label="'Places of Public Entertainment Licence'" :value="'Places'"></v-radio>


              <div v-show="applicant_data.q17=='Places'" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
                <div style="width:100%;">
                  <div class="box-block" v-for="(item,i) in applicant_data.q17_a_detail" :key="i" style="width:100%;">
                    <div class="q17-detail-title">
                      <h5>Address of Liquor-selling/supplying Premises Concerned</h5>
                      <div class="d-flex pull-right">
                        <v-btn depressed class="o-btn-action plus grey-btn" color="secondary" @click="delOneOfDetail(item, i, applicant_data.q17_a_detail)">x</v-btn>
                      </div>
                    </div>
                    <v-text-field class="tf-half mt-2" v-model="item.shopsign" :rules="form.addressRules" label="Shop Sign" outlined required></v-text-field>
                    <v-text-field class="tf-full mt-n4" v-model="item.address[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
                    <v-text-field class="tf-full mt-n4" v-model="item.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
                    <v-text-field class="tf-full mt-n4" v-model="item.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
                    <v-select class="mt-n4 mb-0" v-model="item.address[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
                  </div>
                </div>
                <div class="d-flex mb-8 mt-8 center-application">
                  <v-btn depressed class="o-btn-action plus" color="primary" @click="addQ17aDetail">+</v-btn>
                  <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addQ17aDetail">Add Record</p>
                </div>
              </div>

              <v-radio class="mt-5" :label="'Karaoke Establishment Permit/Licence'" :value="'Karaoke'"></v-radio>
              <div v-show="applicant_data.q17=='Karaoke'" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
                <div style="width:100%;">
                  <div class="box-block" v-for="(item,i) in applicant_data.q17_b_detail" :key="i" style="width:100%;">
                    <div class="q17-detail-title">
                      <h5>Address of Liquor-selling/supplying Premises Concerned</h5>
                      <div class="d-flex pull-right">
                        <v-btn depressed class="o-btn-action plus grey-btn" color="secondary" @click="delOneOfDetail(item, i, applicant_data.q17_b_detail)">x</v-btn>
                      </div>
                    </div>
                    <v-text-field class="tf-half mt-2" v-model="item.shopsign" :rules="form.addressRules" label="Shop Sign" outlined required></v-text-field>
                    <v-text-field class="tf-full mt-n4" v-model="item.address[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
                    <v-text-field class="tf-full mt-n4" v-model="item.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
                    <v-text-field class="tf-full mt-n4" v-model="item.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
                    <v-select class="mt-n4 mb-0" v-model="item.address[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
                  </div>
                </div>
                <div class="d-flex mb-8 mt-8 center-application">
                  <v-btn depressed class="o-btn-action plus" color="primary" @click="addQ17bDetail">+</v-btn>
                  <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addQ17bDetail">Add Record</p>
                </div>
              </div>

              <v-radio class="mt-5" :label="'Massage Establishment Licence'" :value="'Massage'"></v-radio>
              <div v-show="applicant_data.q17=='Massage'" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
                <div style="width:100%;">
                  <div class="box-block" v-for="(item,i) in applicant_data.q17_c_detail" :key="i" style="width:100%;">
                    <div class="q17-detail-title">
                      <h5>Address of Liquor-selling/supplying Premises Concerned</h5>
                      <div class="d-flex pull-right">
                        <v-btn depressed class="o-btn-action plus grey-btn" color="secondary" @click="delOneOfDetail(item, i, applicant_data.q17_c_detail)">x</v-btn>
                      </div>
                    </div>
                    <v-text-field class="tf-half mt-2" v-model="item.shopsign" :rules="form.addressRules" label="Shop Sign" outlined required></v-text-field>
                    <v-text-field class="tf-full mt-n4" v-model="item.address[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
                    <v-text-field class="tf-full mt-n4" v-model="item.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
                    <v-text-field class="tf-full mt-n4" v-model="item.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
                    <v-select class="mt-n4 mb-0" v-model="item.address[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
                  </div>
                </div>
                <div class="d-flex mb-8 mt-8 center-application">
                  <v-btn depressed class="o-btn-action plus" color="primary" @click="addQ17cDetail">+</v-btn>
                  <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addQ17cDetail">Add Record</p>
                </div>
              </div>
              <v-radio class="mt-5" :label="'None of the above'" :value="'None'"></v-radio>
            </v-radio-group>
            <div class="d-flex ">
              <h5> 18. </h5>
              <div class="ml-1 d-flex flex-column" >
                <h5 class="mb-n3">What licence(s) below have you ever held previously? (allow multiple selection)</h5>
                <h5 class="em-18 fw-400" style="color:#7A7A7A"> (If you have ever held the following licences for many times, please provide information related to the latest two times.)</h5>
              </div>
            </div>
            <v-radio-group v-model="applicant_data.q18" class="list-radio-gp ml-8 my-3 mt-n3" >
              <v-radio class="" :label="'Places of Public Entertainment Licence'" :value="'Places'"></v-radio>
                <div v-show="applicant_data.q18=='Places'" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
                  <div style="width:100%;">
                    <div class="box-block" v-for="(item,i) in applicant_data.q18_a_detail" :key="i" style="width:100%;">
                      <div class="d-flex mb-8 pull-right">
                        <v-btn depressed class="o-btn-action plus grey-btn" color="secondary" @click="delOneOfDetail(item, i, applicant_data.q18_a_detail)">x</v-btn>
                      </div>
                      <h5>Please state the period (year) </h5>
                      <div class="d-flex align-baseline">
                        <v-select v-model="item.period.start" append-outer-icon="" class="o-select-year small mr-3" :items="timeOpts.year" label="" outlined :menu-props="{offsetY: true}"></v-select>-
                        <v-select v-model="item.period.to" append-outer-icon=""  class="o-select-year small ml-3" :items="timeOpts.year" label="" outlined :menu-props="{offsetY: true}"></v-select>
                      </div>
                      <h5 class="mt-0">Shop Sign and Address </h5>
                      <v-text-field class="tf-half mt-2" v-model="item.shopsign" :rules="form.addressRules" label="Shop Sign" outlined required></v-text-field>
                      <v-text-field class="tf-full mt-n4" v-model="item.address[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
                      <v-text-field class="tf-full mt-n4" v-model="item.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
                      <v-text-field class="tf-full mt-n4" v-model="item.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
                      <v-select class="mt-n4 mb-0" v-model="item.address[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
                    </div>
                  </div>
                  <div class="d-flex mb-8 mt-8 center-application">
                    <v-btn depressed class="o-btn-action plus" color="primary" @click="addQ18aDetail">+</v-btn>
                    <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addQ18aDetail">Add Record</p>
                  </div>
                </div>
              <v-radio class="mt-5" :label="'Karaoke Establishment Permit/Licence'" :value="'Karaoke'"></v-radio>
              <div v-show="applicant_data.q18=='Karaoke'" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
                  <div style="width:100%;">
                    <div class="box-block" v-for="(item,i) in applicant_data.q18_b_detail" :key="i" style="width:100%;">
                      <div class="d-flex mb-8 pull-right">
                        <v-btn depressed class="o-btn-action plus grey-btn" color="secondary" @click="delOneOfDetail(item, i, applicant_data.q18_b_detail)">x</v-btn>
                      </div>
                      <h5>Please state the period (year) </h5>
                      <div class="d-flex align-baseline">
                        <v-select v-model="item.period.start" append-outer-icon="" class="o-select-year small mr-3" :items="timeOpts.year" label="" outlined :menu-props="{offsetY: true}"></v-select>-
                        <v-select v-model="item.period.to" append-outer-icon=""  class="o-select-year small ml-3" :items="timeOpts.year" label="" outlined :menu-props="{offsetY: true}"></v-select>
                      </div>
                      <h5 class="mt-0">Shop Sign and Address </h5>
                      <v-text-field class="tf-half mt-2" v-model="item.shopsign" :rules="form.addressRules" label="Shop Sign" outlined required></v-text-field>
                      <v-text-field class="tf-full mt-n4" v-model="item.address[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
                      <v-text-field class="tf-full mt-n4" v-model="item.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
                      <v-text-field class="tf-full mt-n4" v-model="item.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
                      <v-select class="mt-n4 mb-0" v-model="item.address[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
                    </div>
                  </div>
                  <div class="d-flex mb-8 mt-8 center-application">
                    <v-btn depressed class="o-btn-action plus" color="primary" @click="addQ18aDetail">+</v-btn>
                    <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addQ18bDetail">Add Record</p>
                  </div>
                </div>
              <v-radio class="mt-5" :label="'Massage Establishment Licence'" :value="'Massage'"></v-radio>
              <div v-show="applicant_data.q18=='Massage'" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
                  <div style="width:100%;">
                    <div class="box-block" v-for="(item,i) in applicant_data.q18_c_detail" :key="i" style="width:100%;">
                      <div class="d-flex mb-8 pull-right">
                        <v-btn depressed class="o-btn-action plus grey-btn" color="secondary" @click="delOneOfDetail(item, i, applicant_data.q18_c_detail)">x</v-btn>
                      </div>
                      <h5>Please state the period (year) </h5>
                      <div class="d-flex align-baseline">
                        <v-select v-model="item.period.start" append-outer-icon="" class="o-select-year small mr-3" :items="timeOpts.year" label="" outlined :menu-props="{offsetY: true}"></v-select>-
                        <v-select v-model="item.period.to" append-outer-icon=""  class="o-select-year small ml-3" :items="timeOpts.year" label="" outlined :menu-props="{offsetY: true}"></v-select>
                      </div>
                      <h5 class="mt-0">Shop Sign and Address </h5>
                      <v-text-field class="tf-half mt-2" v-model="item.shopsign" :rules="form.addressRules" label="Shop Sign" outlined required></v-text-field>
                      <v-text-field class="tf-full mt-n4" v-model="item.address[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
                      <v-text-field class="tf-full mt-n4" v-model="item.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
                      <v-text-field class="tf-full mt-n4" v-model="item.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
                      <v-select class="mt-n4 mb-0" v-model="item.address[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
                    </div>
                  </div>
                <div class="d-flex mb-8 mt-8 center-application">
                  <v-btn depressed class="o-btn-action plus" color="primary" @click="addQ18aDetail">+</v-btn>
                    <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addQ18cDetail">Add Record</p>
                  </div>
                </div>
              <v-radio class="mt-5" :label="'None of the above'" :value="'None'"></v-radio>
            </v-radio-group>
            <div class="d-flex ">
              <h5> 19. </h5>
              <h5 class="ml-1" >Have you ever been convicted of any criminal offence in Hong Kong or elsewhere?</h5>
            </div>
            <v-radio-group v-model="applicant_data.q19" class="ml-7 mt-n1 mb-0" row>
              <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
              <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
            </v-radio-group>
            <div v-show="applicant_data.q19==true" class="callout-div detail-box lg ml-10 px-15 py-2">
              <div style="width:100%">
                <div class="box-block" v-for="(item,i) in applicant_data.q19_detail" :key="i" style="width:100%;">
                  <div class="d-flex pull-right">
                    <v-btn depressed class="o-btn-action plus grey-btn" color="secondary" @click="delOneOfDetail(item, i, applicant_data.q19_detail)">x</v-btn>
                  </div>
                  <h5>Please give details of convictions</h5>
                  <h5 class="mt-0">Convicted Offence</h5>
                  <v-text-field class="tf-full mt-4" v-model="item.offence" :rules="form.fullnameRules"  placeholder="Convicted Offence" outlined required></v-text-field>
                  <h5 class="mt-0">Date of Conviction</h5>
                  <div class="d-flex align-baseline">
                    <v-select class="o-select-month mr-3" v-model="item.date.day" :items="timeOpts.day" label="" outlined :menu-props="{offsetY: true}"></v-select>-
                    <v-select class="o-select-month mx-3" v-model="item.date.month" :items="timeOpts.month" label="" outlined :menu-props="{offsetY: true}"></v-select>-
                    <v-select class="o-select-year ml-3" v-model="item.date.year" :items="timeOpts.year" label="" outlined :menu-props="{offsetY: true}"></v-select>
                  </div>
                  <h5 class="mt-0">Nature of Punishments and Fine</h5>
                  <v-text-field class="tf-full mt-4" v-model="item.nature" :rules="form.fullnameRules"  placeholder="Nature" outlined required></v-text-field>
                </div>
              </div>
              <div class="d-flex mb-8 mt-8 center-application">
                <v-btn depressed class="o-btn-action plus" color="primary" @click="addQ19Detail">+</v-btn>
                <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addQ19Detail">Add Record</p>
              </div>
            </div>
            <div class="d-flex ">
              <h5> 20. </h5>
              <h5 class="ml-1" >Have you ever been convicted of any offence relating to liquor selling?</h5>
            </div>
            <v-radio-group v-model="applicant_data.q20" class="ml-7 mt-n1 mb-0" row>
              <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
              <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
            </v-radio-group>
            <div v-show="applicant_data.q20==true"  class="callout-div detail-box lg ml-10 px-15 py-2">
              <div style="width:100%">
                <div class="box-block" v-for="(item,i) in applicant_data.q20_detail" :key="i" style="width:100%;">
                  <div class="d-flex pull-right">
                    <v-btn depressed class="o-btn-action plus grey-btn" color="secondary" @click="delOneOfDetail(item, i, applicant_data.q20_detail)">x</v-btn>
                  </div>
                  <h5>Please give details of convictions</h5>
                  <h5 class="mt-0">Convicted Offence</h5>
                  <v-text-field class="tf-full mt-4" v-model="item.offence" :rules="form.fullnameRules"  placeholder="Convicted Offence" outlined required></v-text-field>
                  <h5 class="mt-0">Date of Conviction</h5>
                  <div class="d-flex align-baseline">
                    <v-select class="o-select-month mr-3" v-model="item.date.day" :items="timeOpts.day" label="" outlined :menu-props="{offsetY: true}"></v-select>-
                    <v-select class="o-select-month mx-3" v-model="item.date.month" :items="timeOpts.month" label="" outlined :menu-props="{offsetY: true}"></v-select>-
                    <v-select class="o-select-year ml-3" v-model="item.date.year" :items="timeOpts.year" label="" outlined :menu-props="{offsetY: true}"></v-select>
                  </div>
                  <h5 class="mt-0">Nature of Punishments and Fine</h5>
                  <v-text-field class="tf-full mt-4" v-model="item.nature" :rules="form.fullnameRules"  placeholder="Nature" outlined required></v-text-field>
                </div>
              </div>
              <div class="d-flex mb-8 mt-8 center-application">
                <v-btn depressed class="o-btn-action plus" color="primary" @click="addQ20Detail">+</v-btn>
                <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addQ20Detail">Add Record</p>
              </div>
            </div>
        </v-form>
      </div>
    </div>
    <div class="footer  mt-6">
      <v-btn class="footer-btn b-dark">{{$t('save_draft')}}</v-btn>
      <v-btn class="footer-btn b-primary" :disabled="false" @click="$router.push({name:'NewInfoManagement'})">{{$t('save_and_next')}}</v-btn>
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
        chineseName: '',
        englishName: '',
        gender:'',
        hkidCardNo : ''.split(""),
        address : ['','','',''],
        r_address : ['','','',''],
        tel: {
          office:'',
          mobile:'',
        },
        fax:{
          faxNo :'',
          email :''
        },
        q13:undefined,
        q16:undefined,q16_detail:[
          {address:['','','',''],period:{start:'',to:''},position:''}
        ],
        q17:undefined,
        q17_a_detail:[
          {shopsign:'',address:['','','','']}
        ],
        q17_b_detail:[
          {shopsign:'',address:['','','','']}
        ],
        q17_c_detail:[
          {shopsign:'',address:['','','','']}
        ],
        q18:undefined,
        q18_a_detail:[
          {period:{from:'',to:''},shopsign:'',address:['','','','']}
        ],
        q18_b_detail:[
          {period:{from:'',to:''},shopsign:'',address:['','','','']}
        ],
        q18_c_detail:[
          {period:{from:'',to:''},shopsign:'',address:['','','','']}
        ],
        q19:undefined,q19_detail:[
          {offence:'',date:{day:'',month:'',year:''},nature:''}
        ],
        q20:undefined,q20_detail:[
          {offence:'',date:{day:'',month:'',year:''},nature:''}
        ]
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
      timeOpts:{
        day:[
          '01','02','03','04','05','06','07','08','09','10',
          '11','12','13','14','15','16','17','18','19','20',
          '21','22','23','24','25','26','27','28','29','30','31'
        ],
        month:['01','02','03','04','05','06','07','08','09','11','12'],
        year: this.yearItems(),
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
    },
    yearItems: function (){
      var cur = new Date().getFullYear();
      var a = [];
      var i;
      for (i = cur; i >= cur-100; i--) {
        a.push(i);
      }
      return a;
    },
    addRecord: function (){
      var tar = {address:['','','',''],period:{start:'',to:''},position:''};
      this.applicant_data.q16_detail.push(tar);
    },
    delOneOfDetail: function (item, i, list){
      list.splice(i, 1);
    },
    addQ17aDetail: function (){
      var tar = {shopsign:'',address:['','','','']};
      this.applicant_data.q17_a_detail.push(tar);
    },
    addQ17bDetail: function (){
      var tar = {shopsign:'',address:['','','','']};
      this.applicant_data.q17_b_detail.push(tar);
    },
    addQ17cDetail: function (){
      var tar = {shopsign:'',address:['','','','']};
      this.applicant_data.q17_c_detail.push(tar);
    },
    addQ18aDetail: function (){
      var tar = {period:{from:'',to:''},shopsign:'',address:['','','','']};
      this.applicant_data.q18_a_detail.push(tar);
    },
    addQ18bDetail: function (){
      var tar = {period:{from:'',to:''},shopsign:'',address:['','','','']};
      this.applicant_data.q18_b_detail.push(tar);
    },
    addQ18cDetail: function (){
      var tar = {period:{from:'',to:''},shopsign:'',address:['','','','']};
      this.applicant_data.q18_c_detail.push(tar);
    },
    addQ19Detail:function (){
      var tar = {offence:'',date:{day:'',month:'',year:''},nature:''};
      this.applicant_data.q19_detail.push(tar);
    },
    addQ20Detail: function (){
      var tar = {offence:'',date:{day:'',month:'',year:''},nature:''};
      this.applicant_data.q20_detail.push(tar);
    },
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
    width:clamp(280px, 100%, 740px);
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


h2.em-26 {
  font-size: 1.5625em;
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

h2.em-26 {
  font-size: 1.4em;
}

h5.em-18{
  font-size: 1em;
}

.big-gap{
  margin-right:8px
}

}

.tooltip-icon-row-13{
  margin-bottom: 12px;
  margin-top: 12px !important;
}

.pull-right{
  float: right;
}

.grey-btn{
  background-color: transparent !important;
  color: #666 !important;
  font-size: 20px !important;
  span{
    color: #666 !important;
    font-size: 20px !important;
  }
}

.center-application{
  width: 100%;
  flex-direction: row;
  align-items: center;
}

.q17-detail-title{
  display: flex;align-items: center;flex-direction: row;justify-content: space-between;
  .grey-btn{
    margin-top: 16px;
  }
}

</style>
