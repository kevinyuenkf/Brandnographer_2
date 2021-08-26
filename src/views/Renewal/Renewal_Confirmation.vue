<template>
  <div class="content-div content-div-1">
    <div class="header">
      <h1>Application for Renewal of a Liquor Licence</h1>
      <div class="d-flex align-center ">
        <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
        <h2>Confirmation of Application</h2>
      </div>
    </div>
    <div class="body">
      <div class="form-bg-circle hidden-md-and-down">8</div>
       <div class="form-div">
         <v-form v-model="form.valid">
            <h5>1 . Liquor Licence No.</h5>
            <div class="form-section">
                <MultipleTextfield disabled :inValue="applicant_data.liquorLicenceNo" :refID="licenceMTF.refID" :amount="licenceMTF.amount" :shouldShow="licenceMTF.error.show" :msg="licenceMTF.error.msg" :connect="licenceMTF.connect" @onInputDone="updateLicenceMTF"></MultipleTextfield>
            </div>
            <h5 class="mt-2">2 . Name </h5>
            <div class="form-section justify-start">
                <v-text-field disabled class="tf-half" v-model="applicant_data.chineseName" :rules="form.fullnameRules"  label="Chinese Name" outlined required></v-text-field>
                <v-radio-group v-model="applicant_data.gender" class="tf-inline-radio-gp" row>
                  <v-radio disabled class="row-radio" :label="'先生'" :value="'M'"></v-radio>
                  <v-radio disabled class="row-radio ml-3" :label="'女士'" :value="'F'"></v-radio>
                </v-radio-group>
                <v-text-field disabled class="tf-half" v-model="applicant_data.englishName" :rules="form.fullnameRules"  label="English Name" outlined required></v-text-field>
                <v-radio-group v-model="applicant_data.gender" class="tf-inline-radio-gp" row>
                  <v-radio disabled class="row-radio" :label="'Mr.'" :value="'M'"></v-radio>
                  <v-radio disabled class="row-radio ml-3" :label="'Ms.'" :value="'F'"></v-radio>
                </v-radio-group>
            </div>
            <h5 class="mt-2">3 . HKID Card No. </h5>
            <div class="d-flex flex-column" >
                <div class="tf-div">
                    <div class="d-flex align-baseline">
                        <v-text-field disabled class="tf-multiple" v-model="applicant_data.hkidCardNo[0]" maxlength=1 outlined  :ref="'hkid_0'" @input="focusNextItem(0,'hkid')" @focus="selectItem(0,'hkid')" :error="hkidError"></v-text-field>
                        <div class="connect big-gap"></div>
                        <v-text-field disabled class="tf-multiple" v-model="applicant_data.hkidCardNo[1]" maxlength=1 outlined  :ref="'hkid_1'" @input="focusNextItem(1,'hkid')" @focus="selectItem(1,'hkid')" :error="hkidError"></v-text-field>
                        <v-text-field disabled class="tf-multiple" v-model="applicant_data.hkidCardNo[2]" maxlength=1 outlined  :ref="'hkid_2'" @input="focusNextItem(2,'hkid')" @focus="selectItem(2,'hkid')" :error="hkidError"></v-text-field>
                        <v-text-field disabled class="tf-multiple" v-model="applicant_data.hkidCardNo[3]" maxlength=1 outlined  :ref="'hkid_3'" @input="focusNextItem(3,'hkid')" @focus="selectItem(3,'hkid')" :error="hkidError"></v-text-field>
                        <v-text-field disabled class="tf-multiple" v-model="applicant_data.hkidCardNo[4]" maxlength=1 outlined  :ref="'hkid_4'" @input="focusNextItem(4,'hkid')" @focus="selectItem(4,'hkid')" :error="hkidError"></v-text-field>
                        <v-text-field disabled class="tf-multiple" v-model="applicant_data.hkidCardNo[5]" maxlength=1 outlined  :ref="'hkid_5'" @input="focusNextItem(5,'hkid')" @focus="selectItem(5,'hkid')" :error="hkidError"></v-text-field>
                        <v-text-field disabled class="tf-multiple" v-model="applicant_data.hkidCardNo[6]" maxlength=1 outlined  :ref="'hkid_6'" @input="focusNextItem(6,'hkid')" @focus="selectItem(6,'hkid')" :error="hkidError"></v-text-field>
                        <div class="connect">(</div>
                        <v-text-field disabled class="tf-multiple" v-model="applicant_data.hkidCardNo[7]" maxlength=1 outlined  :ref="'hkid_7'" @focus="selectItem(7,'hkid')" :error="hkidError"></v-text-field>
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
              <v-text-field disabled class="tf-full mt-2"  v-model="applicant_data.address[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
              <v-text-field disabled class="tf-full mt-n4" v-model="applicant_data.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
              <v-text-field disabled class="tf-full mt-n4" v-model="applicant_data.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
              <v-select disabled  class="mt-n4" v-model="applicant_data.address[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select >
            </div>
            <h5 class="mt-3 ml-6">b. Tel no. </h5>
            <div class="form-section ml-6">
              <v-text-field disabled class="tf-half" v-model="applicant_data.tel.office" :rules="form.fullnameRules"  label="Office" outlined required></v-text-field>
              <v-text-field disabled class="tf-half" v-model="applicant_data.tel.mobile" :rules="form.fullnameRules"  label="Mobile" outlined required></v-text-field>
            </div>
            <h5 class="mt-3 ml-6">c. Fax no. </h5>
            <div class="form-section ml-6">
              <v-text-field disabled class="tf-half" v-model="applicant_data.fax.faxNo" :rules="form.fullnameRules"  label="Fax No." outlined required></v-text-field>
              <v-text-field disabled class="tf-half" v-model="applicant_data.fax.email" :rules="form.fullnameRules"  label="Email" outlined required></v-text-field>
            </div>
            <h5 class="mt-3" style="width:110%;">5 . Have you ever been convicted of any criminal offence in Hong Kong or elsewhere?</h5>
            <div class="form-section">
              <v-radio-group class="tf-inline-radio-gp ml-enhanced" v-model="applicant_data.q5" row>
                  <v-radio disabled class="row-radio" :label="'Yes'" :value="true"></v-radio>
                  <v-radio disabled class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <h5 class="mt-3">6 . Have you ever been convicted of any offence relating to liquor selling?</h5>
            <div class="form-section mb-6">
              <v-radio-group class="tf-inline-radio-gp ml-enhanced" v-model="applicant_data.q6" row>
                  <v-radio disabled class="row-radio" :label="'Yes'" :value="true"></v-radio>
                  <v-radio disabled class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
        </v-form>
        <v-form v-model="form.valid">
            <div class="mb-4 d-flex align-center">
              <h5>7 . Address of Licensed Premises  </h5>
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
              <v-text-field disabled class="tf-full mt-2" v-model="premises_data.address.chinese[0]" :rules="form.addressRules"  label="室／房／店鋪, 樓數／樓層, 座" outlined required></v-text-field>
              <v-text-field disabled class="tf-full mt-n4" v-model="premises_data.address.chinese[1]" :rules="form.addressRules"  label="大廈／村或屋邨名稱, 門牌／地段號碼" outlined required></v-text-field>
              <v-text-field disabled class="tf-full mt-n4" v-model="premises_data.address.chinese[2]"  :rules="form.addressRules"  label="街道名稱，地區" outlined required></v-text-field>
              <v-select disabled  class="mt-n4" v-model="premises_data.address.chinese[3]" :items="region.tc" label="地域" outlined :menu-props="{offsetY: true}"></v-select  >
            </div>
            <h5 class="mt-3 ml-6">b. English </h5>
            <div class="form-section ml-6">
              <v-text-field disabled class="tf-full mt-2" v-model="premises_data.address.english[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
              <v-text-field disabled class="tf-full mt-n4" v-model="premises_data.address.english[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
              <v-text-field disabled class="tf-full mt-n4" v-model="premises_data.address.english[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
              <v-select disabled  class="mt-n4" v-model="premises_data.address.english[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select  >
            </div>
            <h5 class="mt-2">8 . Contact Information of Licensed Premises </h5>
            <div class="form-section ml-6">
              <v-text-field disabled class="tf-half" v-model="premises_data.contact.tel" :rules="form.fullnameRules"  label="Tel no." outlined required></v-text-field>
              <v-text-field disabled class="tf-half" v-model="premises_data.contact.fax" :rules="form.fullnameRules"  label="Fax no." outlined required></v-text-field>
            </div>
            <h5 class="mt-2">9 . Shop Sign  </h5>
            <div class="form-section ml-6">
              <v-text-field disabled class="tf-half" v-model="premises_data.shopSign.chinese" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
              <v-text-field disabled class="tf-half" v-model="premises_data.shopSign.english" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
            </div>
            <h5 class="mt-3">10 . Premises Details</h5>
            <h5 class="mt-3 mb-5 ml-6 fw-400 em-18">a. Business Registration No. of the premises </h5>
            <div class="form-section ml-6">
              <MultipleTextfield disabled :inValue="premises_data.brNo" :refID="premisesBrMTF.refID" :amount="premisesBrMTF.amount" :shouldShow="premisesBrMTF.error.show" :msg="premisesBrMTF.error.msg" :connect="premisesBrMTF.connect" @onInputDone="updatePremisesBrMTF" ></MultipleTextfield>
            </div>
            <div class="mt-1 mb-4 ml-6 d-flex align-center flex-wrap">
              <h5 class="my-0 fw-400 em-18">b. If the premises is run by a company </h5>
              <v-radio-group v-model="premises_data.q10b" class="ml-6" row>
                <v-radio disabled class="row-radio" :label="'Yes'" :value="true"></v-radio>
                <v-radio disabled class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
        </v-form>
        <v-form v-model="form.valid" >
            <h5>11 .  Business and Management Related Information</h5>
            <h5 class="mt-3 ml-7">a. Opening hours are </h5>
            <div class="ml-11"><h5 class="my-0 ml-2 fw-400 em-18">Please state in 24-hour format </h5></div>
            <div class="form-section ml-11 justify-start align-center pt-3">
               <div class="d-flex flex-column">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">From </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="management_data.openingHrs[0].from[0]" class="ml-2 tf-multiple time" :ref="'11_a_from_h'"  maxlength=2 @input="timeTFfocusNext('11_a_from_h','11_a_from_m')" @keyup="timeTFfocusNext('11_a_from_h','11_a_from_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.openingHrs[0].from[1]" class="ml-2 tf-multiple time" :ref="'11_a_from_m'"  maxlength=2 @input="timeTFfocusNext('11_a_from_m','11_a_to_h')" @keyup="timeTFfocusNext('11_a_from_m','11_a_to_h')" :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                    </div>
                </div>
                <div class="mx-3">-</div>
                <div class="d-flex flex-column ">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">To </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="management_data.openingHrs[0].to[0]" class="ml-2 tf-multiple time" :ref="'11_a_to_h'"  maxlength=2 @input="timeTFfocusNext('11_a_to_h','11_a_to_m')" @keyup="timeTFfocusNext('11_a_to_h','11_a_to_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.openingHrs[0].to[1]" class="ml-2 tf-multiple time" :ref="'11_a_to_m'"  maxlength=2  :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                    </div>
                </div>
            </div>
            <div class="form-section ml-11 justify-start align-center pb-3 mt-n2">
               <div class="d-flex flex-column">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">From </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="management_data.openingHrs[1].from[0]" class="ml-2 tf-multiple time" :ref="'11_a_from_h2'"  maxlength=2 @input="timeTFfocusNext('11_a_from_h2','11_a_from_m2')" @keyup="timeTFfocusNext('11_a_from_h2','11_a_from_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.openingHrs[1].from[1]" class="ml-2 tf-multiple time" :ref="'11_a_from_m2'"  maxlength=2 @input="timeTFfocusNext('11_a_from_m2','11_a_to_h2')" @keyup="timeTFfocusNext('11_a_from_m2','11_a_to_h2')" :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                    </div>
                </div>
                <div class="mx-3 ">-</div>
                <div class="d-flex flex-column ">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">To </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="management_data.openingHrs[1].to[0]" class="ml-2 tf-multiple time" :ref="'11_a_to_h2'"  maxlength=2 @input="timeTFfocusNext('11_a_to_h2','11_a_to_m2')" @keyup="timeTFfocusNext('11_a_to_h2','11_a_to_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.openingHrs[1].to[1]" class="ml-2 tf-multiple time" :ref="'11_a_to_m2'"  maxlength=2  :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                    </div>
                </div>
            </div>
            <h5 class="mt-3 ml-7">b. Liquor selling hours are </h5>
            <div class="ml-11"><h5 class="my-0 ml-2 fw-400 em-18">Please state in 24-hour format </h5></div>
            <div class="form-section ml-11 justify-start align-center pt-3">
               <div class="d-flex flex-column">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">From </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="management_data.sellingHrs[0].from[0]" class="ml-2 tf-multiple time" :ref="'11_b_from_h'"  maxlength=2 @input="timeTFfocusNext('11_b_from_h','11_b_from_m')" @keyup="timeTFfocusNext('11_b_from_h','11_b_from_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.sellingHrs[0].from[1]" class="ml-2 tf-multiple time" :ref="'11_b_from_m'"  maxlength=2 @input="timeTFfocusNext('11_b_from_m','11_b_to_h')" @keyup="timeTFfocusNext('11_b_from_m','11_b_to_h')" :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                    </div>
                </div>
                <div class="mx-3">-</div>
                <div class="d-flex flex-column ">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">To </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="management_data.sellingHrs[0].to[0]" class="ml-2 tf-multiple time" :ref="'11_b_to_h'"  maxlength=2 @input="timeTFfocusNext('11_b_to_h','11_b_to_m')" @keyup="timeTFfocusNext('11_b_to_h','11_b_to_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.sellingHrs[0].to[1]" class="ml-2 tf-multiple time" :ref="'11_b_to_m'"  maxlength=2  :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                    </div>
                </div>
            </div>
            <div class="form-section ml-11 justify-start align-center pb-3 mt-n2">
               <div class="d-flex flex-column">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">From </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="management_data.sellingHrs[1].from[0]" class="ml-2 tf-multiple time" :ref="'11_b_from_h2'"  maxlength=2 @input="timeTFfocusNext('11_b_from_h2','11_b_from_m2')" @keyup="timeTFfocusNext('11_b_from_h2','11_b_from_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.sellingHrs[1].from[1]" class="ml-2 tf-multiple time" :ref="'11_b_from_m2'"  maxlength=2 @input="timeTFfocusNext('11_b_from_m2','11_b_to_h2')" @keyup="timeTFfocusNext('11_b_from_m2','11_b_to_h2')" :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                    </div>
                </div>
                <div class="mx-3 ">-</div>
                <div class="d-flex flex-column ">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">To </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="management_data.sellingHrs[1].to[0]" class="ml-2 tf-multiple time" :ref="'11_b_to_h2'"  maxlength=2 @input="timeTFfocusNext('11_b_to_h2','11_b_to_m2')" @keyup="timeTFfocusNext('11_b_to_h2','11_b_to_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.sellingHrs[1].to[1]" class="ml-2 tf-multiple time" :ref="'11_b_to_m2'"  maxlength=2  :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                    </div>
                </div>
            </div>
            <h5 class="mt-3 ml-7">c. The peak business hours are </h5>
            <div class="ml-11"><h5 class="my-0 ml-2 fw-400 em-18">Please state in 24-hour format </h5></div>
            <div class="form-section ml-11 justify-start align-center pt-3">
               <div class="d-flex flex-column">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">From </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="management_data.peakHrs[0].from[0]" class="ml-2 tf-multiple time" :ref="'11_c_from_h'"  maxlength=2 @input="timeTFfocusNext('11_c_from_h','11_c_from_m')" @keyup="timeTFfocusNext('11_c_from_h','11_c_from_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.peakHrs[0].from[1]" class="ml-2 tf-multiple time" :ref="'11_c_from_m'"  maxlength=2 @input="timeTFfocusNext('11_c_from_m','11_c_to_h')" @keyup="timeTFfocusNext('11_c_from_m','11_c_to_h')" :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                    </div>
                </div>
                <div class="mx-3">-</div>
                <div class="d-flex flex-column ">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">To </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="management_data.peakHrs[0].to[0]" class="ml-2 tf-multiple time" :ref="'11_c_to_h'"  maxlength=2 @input="timeTFfocusNext('11_c_to_h','11_c_to_m')" @keyup="timeTFfocusNext('11_c_to_h','11_c_to_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.peakHrs[0].to[1]" class="ml-2 tf-multiple time" :ref="'11_c_to_m'"  maxlength=2  :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                    </div>
                </div>
            </div>
            <div class="form-section ml-11 justify-start align-center pb-3 mt-n2">
               <div class="d-flex flex-column">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">From </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="management_data.peakHrs[1].from[0]" class="ml-2 tf-multiple time" :ref="'11_c_from_h2'"  maxlength=2 @input="timeTFfocusNext('11_c_from_h2','11_c_from_m2')" @keyup="timeTFfocusNext('11_c_from_h2','11_c_from_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.peakHrs[1].from[1]" class="ml-2 tf-multiple time" :ref="'11_c_from_m2'"  maxlength=2 @input="timeTFfocusNext('11_c_from_m2','11_c_to_h2')" @keyup="timeTFfocusNext('11_c_from_m2','11_c_to_h2')" :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                    </div>
                </div>
                <div class="mx-3 ">-</div>
                <div class="d-flex flex-column ">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">To </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="management_data.peakHrs[1].to[0]" class="ml-2 tf-multiple time" :ref="'11_c_to_h2'"  maxlength=2 @input="timeTFfocusNext('11_c_to_h2','11_c_to_m2')" @keyup="timeTFfocusNext('11_c_to_h2','11_c_to_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox  >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.peakHrs[1].to[1]" class="ml-2 tf-multiple time" :ref="'11_c_to_m2'"  maxlength=2  :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox  >
                    </div>
                </div>
            </div>
            <h5 class="mt-2">12 . Your duty </h5>
            <h5 class="mt-3 ml-7">a. Your duty hours <span style="color:#7a7a7a">(in 24-hour format,  max 2 different sessions)</span></h5>
            <div class="form-section ml-11 justify-start align-center pt-3">
               <div class="d-flex flex-column">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">From </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="management_data.dutyHrs[0].from[0]" class="ml-2 tf-multiple time" :ref="'12_a_from_h'"  maxlength=2 @input="timeTFfocusNext('12_a_from_h','12_a_from_m')" @keyup="timeTFfocusNext('12_a_from_h','12_a_from_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox  >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.dutyHrs[0].from[1]" class="ml-2 tf-multiple time" :ref="'12_a_from_m'"  maxlength=2 @input="timeTFfocusNext('12_a_from_m','12_a_to_h')" @keyup="timeTFfocusNext('12_a_from_m','12_a_to_h')" :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox  >
                    </div>
                </div>
                <div class="mx-3">-</div>
                <div class="d-flex flex-column ">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">To </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="management_data.dutyHrs[0].to[0]" class="ml-2 tf-multiple time" :ref="'12_a_to_h'"  maxlength=2 @input="timeTFfocusNext('12_a_to_h','12_a_to_m')" @keyup="timeTFfocusNext('12_a_to_h','12_a_to_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox  >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.dutyHrs[0].to[1]" class="ml-2 tf-multiple time" :ref="'12_a_to_m'"  maxlength=2  :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox  >
                    </div>
                </div>
            </div>
            <div class="form-section ml-11 justify-start align-center pb-3 mt-n2">
               <div class="d-flex flex-column">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">From </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="management_data.dutyHrs[1].from[0]" class="ml-2 tf-multiple time" :ref="'12_a_from_h2'"  maxlength=2 @input="timeTFfocusNext('12_a_from_h2','12_a_from_m2')" @keyup="timeTFfocusNext('12_a_from_h2','12_a_from_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox  >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.dutyHrs[1].from[1]" class="ml-2 tf-multiple time" :ref="'12_a_from_m2'"  maxlength=2 @input="timeTFfocusNext('12_a_from_m2','12_a_to_h2')" @keyup="timeTFfocusNext('12_a_from_m2','12_a_to_h2')" :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox  >
                    </div>
                </div>
                <div class="mx-3 ">-</div>
                <div class="d-flex flex-column ">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">To </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="management_data.dutyHrs[1].to[0]" class="ml-2 tf-multiple time" :ref="'12_a_to_h2'"  maxlength=2 @input="timeTFfocusNext('12_a_to_h2','12_a_to_m2')" @keyup="timeTFfocusNext('12_a_to_h2','12_a_to_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.dutyHrs[1].to[1]" class="ml-2 tf-multiple time" :ref="'12_a_to_m2'"  maxlength=2  :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                    </div>
                </div>
            </div>
            <h5 class="mt-3 ml-7">b. Your weekly day-off is <span style="color:#7a7a7a">(max 2 different days)</span></h5>
            <div class="form-section ml-12 flex-column">
              <v-checkbox disabled v-model="management_data.weeklyDayoff.days" class="o-cb mt-2 mb-n6" on-icon="mdi-check-box-outline" label="Monday" value="Monday"></v-checkbox>
              <v-checkbox disabled v-model="management_data.weeklyDayoff.days" class="o-cb mb-n6" on-icon="mdi-check-box-outline" label="Tuesday" value="Tuesday"></v-checkbox>
              <v-checkbox disabled v-model="management_data.weeklyDayoff.days" class="o-cb mb-n6" on-icon="mdi-check-box-outline" label="Wednesday" value="Wednesday"></v-checkbox>
              <v-checkbox disabled v-model="management_data.weeklyDayoff.days" class="o-cb mb-n6" on-icon="mdi-check-box-outline" label="Thursday" value="Thursday"></v-checkbox>
              <v-checkbox disabled v-model="management_data.weeklyDayoff.days" class="o-cb mb-n6" on-icon="mdi-check-box-outline" label="Friday" value="Friday"></v-checkbox>
              <v-checkbox disabled v-model="management_data.weeklyDayoff.days" class="o-cb mb-n6" on-icon="mdi-check-box-outline" label="Saturday" value="Saturday"></v-checkbox>
              <v-checkbox disabled v-model="management_data.weeklyDayoff.days" class="o-cb mb-n6" on-icon="mdi-check-box-outline" label="Sunday" value="Sunday"></v-checkbox>
              <div class="d-flex flex-wrap">
                <v-checkbox disabled class="o-cb mr-3" v-model="checkbox_selected" on-icon="mdi-check-box-outline" label="Other, no fix day" value="Other"></v-checkbox>
                <v-text-field disabled v-model="management_data.weeklyDayoff.other"  class="tf-half" :rules="form.fullnameRules"  label="Please specify" outlined required></v-text-field>
              </div>
            </div>
            <div class="mt-1 mb-4 ml-7 d-flex align-center">
              <h5 class="mt-3">c. Will any nominee be appointed?  </h5>
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
            <div class="form-section ml-11">
              <v-radio-group v-model="management_data.q12c" class="ml-2 mt-n3" row>
                <v-radio disabled class="row-radio" :label="'Yes'" :value="true"></v-radio>
                <v-radio disabled class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <h3>Information of Nominated Reserve Licensee</h3>
            <div class="callout-div mt-5">
              <p class="mb-0"><strong>Reminder</strong> : You can nominate a reserve licensee in this application </p>
            </div>
            <div class=" d-flex flex-column mt-8">
              <div class="f-li d-flex">
                <p>i.</p>
                <p>In case the liquor licence holder is unable to manage the premises (for example, due to illness or leave), resigns from the post or applies for cancellation of the liquor licence, the nominated reserve licensee can be the applicant for the issue of a new liquor licence in respect of the premises</p>
              </div>
              <div class="f-li d-flex mt-3">
                <p>ii.</p>
                <p>In case the liquor licence holder is unable to manage the premises (for example, due to illness or leave), resigns from the post or applies for cancellation of the liquor licence, the nominated reserve licensee can be the applicant for the issue of a new liquor licence in respect of the premises</p>
              </div>
            </div>
            <div class="mt-1 mb-4 d-flex align-center flex-wrap">
              <h5 class="my-0">13 . Will you nominate a reserve licensee?
                <span class="ml-n2">
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
                </span>
              </h5>
              <v-radio-group v-model="management_data.q13" class="ml-15" row>
                <v-radio disabled class="row-radio" :label="'Yes'" :value="true"></v-radio>
                <v-radio disabled class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
        </v-form>
        <v-form v-model="form.valid">
            <div class="d-flex ">
              <h5> 14. </h5>
              <h5 class="ml-1" >The percentage of revenue generated from liquor selling to the total revenue of the subject premises </h5>
            </div>
            <div class="form-section mt-3 justify-start align-baseline" >
              <v-text-field disabled class="tf-half mr-2" v-model="operation_data.q13" :rules="form.fullnameRules"  label="" outlined required></v-text-field>
              <p class="mb-0">%</p>
            </div>
            <h5 class="mt-3">15.  Do you wish to apply for amendment simultaneously? </h5>
            <div class="form-section mb-6">
              <v-radio-group v-model="operation_data.q14" class="tf-inline-radio-gp ml-enhanced" row>
                  <v-radio disabled class="row-radio" :label="'Yes'" :value="true"></v-radio>
                  <v-radio disabled class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <h5 class="mt-3 ml-11">Nature of Amendment(s) ：  </h5>
            <div class="form-section ml-11">
              <v-radio-group v-model="operation_data.q14_deatil" class="list-radio-gp mt-4 mb-6">
                  <v-radio disabled class="enhanced" :label="'a .  Addition of Endorsement'" :value="'a'"></v-radio>
                  <v-radio-group v-show="operation_data.q14_deatil=='a'" v-model="operation_data.q14a" class="list-radio-gp ml-8 my-3" >
                    <v-radio disabled class="mt-5" :label="'Bar'" :value="'Bar'"></v-radio>
                    <v-radio disabled class="mt-5" :label="'Dancing'" :value="'Dancing'"></v-radio>
                    <v-radio disabled class="mt-5" :label="'Hotel'" :value="'Hotel'"></v-radio>
                  </v-radio-group>
                  <v-radio disabled class="mt-5 enhanced" :label="'b .  Deletion of Endorsement'" :value="'b'"></v-radio>
                  <v-radio-group v-show="operation_data.q14_deatil=='b'" v-model="operation_data.q14b" class="list-radio-gp ml-8 my-3" >
                    <v-radio disabled class="mt-5" :label="'Bar'" :value="'Bar'"></v-radio>
                    <v-radio disabled class="mt-5" :label="'Dancing'" :value="'Dancing'"></v-radio>
                    <v-radio disabled class="mt-5" :label="'Hotel'" :value="'Hotel'"></v-radio>
                    <v-radio disabled class="mt-5" :label="'Addition of a New Portion to Licensed Premises'" :value="'Addition_1'"></v-radio>
                    <v-radio disabled class="mt-5" :label="'Deletion of a Portion from Licensed Premises'" :value="'Deletion'"></v-radio>
                    <v-radio disabled class="mt-5 para" :label="'Addition of a New Portion, which is not under Application for or covered by a Restaurant Licence or a Certificate of Compliance issued by the Home Affairs Department, to Licensed Premises  (Only applicable to Hotels) (Please complete Annex I and submit together with the required documents.)'" :value="'Addition_2'"></v-radio>
                    <v-radio disabled class="mt-5 para" :label="'Change of the Additional Licensing Condition Imposed on the Licence'" :value="'Change_1'"></v-radio>
                    <div v-show="operation_data.q14b=='Change_1'" class="form-section ml-8 mt-6 flex-column ">
                      <v-text-field disabled v-model="operation_data.change_1.detail"  class="tf-half mr-2" :rules="form.fullnameRules"  label="Detail" outlined required></v-text-field>
                      <h5 class="ma-0 mt-n2 mb-2 em-16">The reason(s) for application for change of existing additional licensing condition(s) is/are:</h5>
                      <v-textarea disabled v-model="operation_data.change_1.conditions"  :rules="form.msgRules" outlined  placeholder="The reason details" :counter="50"></v-textarea>
                    </div>
                    <v-radio disabled class="mt-5" :label="'Change of Business Nature of Establishment to'" :value="'Change_2'"></v-radio>
                    <div v-show="operation_data.q14b=='Change_2'" >
                      <h5 class="ml-9 fw-400 em-18 mb-0 t-grey">You can tick more than 1 box </h5>
                      <div class="form-section ml-8 justify-start">
                        <v-checkbox disabled v-model="operation_data.change_2.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Bar" value="Bar"></v-checkbox>
                        <v-checkbox disabled v-model="operation_data.change_2.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Karaoke" value="Karaoke"></v-checkbox>
                        <v-checkbox disabled v-model="operation_data.change_2.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Cocktail Lounge" value="Cocktail Lounge"></v-checkbox>
                        <v-checkbox disabled v-model="operation_data.change_2.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Restaurant" value="Restaurant"></v-checkbox>
                        <v-checkbox disabled v-model="operation_data.change_2.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Night Club" value="Night Club"></v-checkbox>
                        <v-checkbox disabled v-model="operation_data.change_2.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Coffee Shop" value="Coffee Shop"></v-checkbox>
                        <v-checkbox disabled v-model="operation_data.change_2.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Disco" value="Disco"></v-checkbox>
                        <v-checkbox disabled v-model="operation_data.change_2.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Hotel" value="Hotel"></v-checkbox>
                      </div>
                      <div class="form-section ml-8 flex-column">
                        <v-checkbox disabled class="o-cb lg" v-model="operation_data.change_2.options" on-icon="mdi-check-box-outline" label="Others, please specify:" value="Other"></v-checkbox>
                        <v-text-field disabled v-model="operation_data.change_2.others" class="tf-half mt-2 ml-11" :rules="form.fullnameRules"  label="Please specify" outlined required></v-text-field>
                      </div>
                    </div>
                    <v-radio disabled class="mt-5" :label="'Change of Shop Sign'" :value="'Change_3'"></v-radio>
                    <v-radio disabled class="mt-5" :label="'Others'" :value="'Others'"></v-radio>
                  </v-radio-group>
              </v-radio-group>
            </div>
        </v-form>
        <h2 >1. Supporting document required for your application</h2>
      </div>
            <div class='o-table'>
        <div class="d-flex"><h5 class="em-22 mw-6">Document Type</h5><h5 class="em-22 mw-3 text-right">Last Update</h5></div>
        <BoldLine :options="{color:'rgba(177,177,177,0.37)',height:'2px',width:'100%'}"></BoldLine>
        <div class="d-flex py-5 " v-for="(item,i) in doucment_items" :key="i">
          <div class="d-flex mw-6 align-center">
            <v-icon color="primary" class="mr-5 mb-2" style="font-size:34px;">mdi-check-circle</v-icon>
            <div class="d-flex flex-column">
              <div class="d-flex align-center">
                <h5 class="ma-0 mb-1">{{item.title}}</h5>
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
              </div>
            </div>
          </div>
          <div class="align-center justify-space-between mw-3">
            <h5 class="ma-0 ml-1 em-18 fw-400 text-right">{{item.lastUpdate}}</h5>
          </div>
        </div>
      </div>
      <div class="form-div mt-8" >
        <v-form v-model="form.valid">
            <h2 >Identity Authentication</h2>
            <h5 class="ma-0">In accordance with the Electronic Transaction Ordinance, it is a requirement to sign on the form with digital signature where signatures of persons are required. </h5>
            <v-radio-group disabled v-model="auth_data.auth" class="list-radio-gp ml-8 my-3" >
              <v-radio class="mt-5" :label="'Proceed to authenticate identity by Digital Signature'" :value="'proceed'"></v-radio>
              <v-radio class="mt-5" :label="'Re-input your password to proceed to authenticate your identity'" :value="'re-input'"></v-radio>
            </v-radio-group>
            <div class="ml-6 mb-6">
              <div v-if="auth_data.auth=='re-input'" class="callout-div mt-5 ml-12 px-15 detail-box">
                <h5 class="em-18 ma-0 mt-4">Please re-input your password</h5>
                <div class="d-flex flex-wrap align-baseline mt-6" style="width:100%">
                    <v-text-field disabled type="password" v-model="auth_data.reinput" class="mr-10"  label="Password" outlined required></v-text-field>
                    <v-btn depressed :disabled="btnDisabled" class="o-btn-action small ma-0 " style="justify-self:flex-start;" color="primary">Verify</v-btn>
                  </div>
              </div>
            </div>
        </v-form>
      </div>
      <BoldLine class="my-12" :options="{color:'#b1b1b15E',height:'2px',width:'100%'}" ></BoldLine>
      <div class="co-div">
        <p class="my-0 ml-4">You can download the form for your own record</p>
        <div class="d-flex align-center flex-wrap t-wrap px-5 ">
          <img width="56" class="mb-3 mt-3" src="../../assets/pdf.svg" />
          <h5 class="fw-400 em-18 ml-3 mt-10">
            <a class="no-dec" :href="publicPath+'pre_filled_new_application.pdf'" target="_blank">
              Dai_Man_Chan_New_Issue_of_a_Liquor_Licence</a></h5>
          <a class="icon-a mt-4" :href="publicPath+'pre_filled_new_application.pdf'" download="Dai_Man_Chan_New_Issue_of_a_Liquor_Licence.pdf" ><v-icon class="ml-2 mb-3" color="primary">mdi-download</v-icon></a>
        </div>
      </div>
    </div>
    <div class="footer">
      <v-btn class="footer-btn b-dark">{{$t('save_draft')}}</v-btn>
      <v-btn class="footer-btn b-primary" :disabled="false" @click="$router.push({name:'RenewalSubmitted'})">Submit</v-btn>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import MultipleTextfield from '../../components/misc/multiple-textfield'
// @ is an alias to /src


export default {
  name: 'RenewalConfirmation',
  components: {
    BoldLine,
    MultipleTextfield,
  },
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
      agree: false,
      checkbox_selected : [],
      btnDisabled:true,
      timebox:{
        hours:['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
        mins:['00','05','10','15','20','25','30','35','40','45','50','55']
      },
      formDisabled:true,
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
        ]
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
      management_data:{
        openingHrs:[{from:['12','00'],to:['16','00']},{from:['18','00'],to:['00','00']}],
        sellingHrs:[{from:['12','00'],to:['16','00']},{from:['18','00'],to:['00','00']}],
        peakHrs:[{from:['12','00'],to:['16','00']},{from:['18','00'],to:['00','00']}],
        dutyHrs:[{from:['12','00'],to:['16','00']},{from:['18','00'],to:['00','00']}],
        weeklyDayoff:{days:['Tuesday'],other:''},
        q12c:false,
        q13:false,
      },
      operation_data : {
        q13:'80',
        q14:true,q14_deatil:'b',q14a:'',q14b:'Change_1',
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
      doucment_items :[
        {
          title:'Recent photograph (35mm x 40mm)',
          filename:'photo_1.jpg',
          lastUpdate: '01-01-2021'
        }
      ],
      auth_data : {
        auth:'re-input',
        reinput:'',
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
    updatePremisesBrMTF : function (inValue,i){
      this.updateMTF(inValue,i,this.premisesBrMTF);
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
    this.$emit('updateCurrent',8);
    this.dialog = true;
  },
}
</script>

<style scoped lang="scss">

.co-div{
  background:#F6F3FF;
  padding:37px 78px;
  p{
    color:$ols-primary;
    margin:0px;
    font-size:1.375em;
    font-weight:600;
  }
  .no-dec{
    color:#4A4A4A;
    font-weight: 500;
  }
}

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


.mw-3{
  flex: 0 0 30%;
}
.mw-7{
  flex: 0 0 70%;
}

.tf-multiple.time.v-text-field.margin-time-fix .v-input__slot {
  padding: 0 !important;
}
</style>
