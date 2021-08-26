<template>
  <div class="content-div content-div-1">
    <div class="header">
      <h1>Application for New Issue of a Liquor Licence</h1>
      <div class="d-flex align-center ">
        <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
        <h2>Confirmation of Application</h2>
      </div>
    </div>
    <div class="body">
      <div class="form-bg-circle hidden-md-and-down">2</div>
      <div class="form-div">
        <v-form v-model="form.valid" >
            <h2 class="purple-header em-26">A. Basic Information</h2>
            <h5 class="mt-8">1 . Shop Sign  </h5>
            <div class="form-section ml-6">
              <v-text-field disabled class="tf-half" v-model="premises_data.shopSign.chinese" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
              <v-text-field disabled class="tf-half" v-model="premises_data.shopSign.english" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
            </div>
            <div class="mt-n1 mb-4 d-flex align-center">
              <h5>2 . Address</h5>
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon class="mb-1 ml-3 mt-3" color="secondary" dark v-bind="attrs" v-on="on">
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
              <v-select disabled class="mt-n4" v-model="premises_data.address.chinese[3]" :items="region.tc" label="地域" outlined :menu-props="{offsetY: true}"></v-select>
            </div>
            <h5 class="mt-3 ml-6">b. English </h5>
            <div class="form-section ml-6">
              <v-text-field disabled class="tf-full mt-2" v-model="premises_data.address.english[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
              <v-text-field disabled class="tf-full mt-n4" v-model="premises_data.address.english[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
              <v-text-field disabled class="tf-full mt-n4" v-model="premises_data.address.english[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
              <v-select disabled class="mt-n4" v-model="premises_data.address.english[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
            </div>
            <h5 class="mt-2">3 . Contact</h5>
            <div class="form-section ml-6">
              <v-text-field disabled class="tf-half" v-model="premises_data.contact.tel" :rules="form.fullnameRules"  label="Tel no." outlined required></v-text-field>
              <v-text-field disabled class="tf-half" v-model="premises_data.contact.fax" :rules="form.fullnameRules"  label="Fax no." outlined required></v-text-field>
            </div>
            <h5 class="mt-2">4 . Size of Premises (by reference to floor area inside the premises)</h5>
            <div class="form-section mt-3 justify-start align-baseline ml-6" >
              <v-text-field disabled class="tf-half mr-4" v-model="premises_data.size" :rules="form.fullnameRules"  label="Size" outlined required></v-text-field>
              <p class="mb-0">m²</p>
            </div>

            <h5 class="mt-3">5 . Premises Details</h5>
            <h5 class="mt-3 mb-5 ml-6 fw-400 em-18">a. Business Registration No. of the premises </h5>
            <div class="form-section ml-6">
              <MultipleTextfield disabled  :inValue="premises_data.brNo" :refID="premisesBrMTF.refID" :amount="premisesBrMTF.amount" :shouldShow="premisesBrMTF.error.show" :msg="premisesBrMTF.error.msg" :connect="premisesBrMTF.connect" @onInputDone="updatePremisesBrMTF" ></MultipleTextfield>
            </div>
            <div class="mt-1 mb-4 ml-6 d-flex align-center flex-wrap">
              <h5 class="my-0 fw-400 em-18">b. If the premises is run by a company </h5>
              <v-radio-group v-model="premises_data.q5b" class="ml-6" row>
                <v-radio disabled  class="row-radio" :label="'Yes'" :value="true"></v-radio>
                <v-radio disabled  class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <div v-if="premises_data.q5b==true">
              <h5 class="my-0 fw-400 em-18 ml-10">b (i). Name of company </h5>
              <div class="form-section ml-10 mt-5">
              <v-text-field disabled class="tf-half" v-model="premises_data.q5b_detail.companyName" :rules="form.fullnameRules"  label="Name" outlined required></v-text-field>
              </div>
              <h5 class="my-0 fw-400 em-18 ml-10">b (ii). Business Registration No. of the company </h5>
              <MultipleTextfield disabled  class="ml-10 mt-5" :inValue="premises_data.q5b_detail.companyBr" :refID="companyBrMTF.refID" :amount="companyBrMTF.amount" :shouldShow="companyBrMTF.error.show" :msg="companyBrMTF.error.msg" :connect="companyBrMTF.connect" @onInputDone="updateCompanyBrMTF" ></MultipleTextfield>
              <h5 class="my-0 fw-400 em-18 ml-10">b (iii). Company No. (if available) </h5>
              <MultipleTextfield disabled  class="ml-10 mt-5" :inValue="premises_data.q5b_detail.companyNo" :refID="companyNoMTF.refID" :amount="companyNoMTF.amount" :shouldShow="companyNoMTF.error.show" :msg="companyNoMTF.error.msg" :connect="companyNoMTF.connect" @onInputDone="updateCompanyNoMTF" ></MultipleTextfield>
            </div>
            <h2 class="purple-header em-26">B. Information Relating to Restaurant Licence</h2>
            <div class="d-flex ">
              <h5> 6. </h5>
              <h5 class="ml-1" >The type of restaurant licence issued/ being applied for the premises under application for liquor licence? </h5>
            </div>
            <v-radio-group v-model="premises_data.q6_detail" class="list-radio-gp mt-4 ml-6 mb-6">
                <v-radio disabled  class="enhanced" :label="'a .  The type pf restaurant licence'" :value="'a'"></v-radio>
                <v-radio-group v-show="premises_data.q6_detail=='a'" v-model="premises_data.q6a" class="list-radio-gp ml-8 my-3" >
                  <v-radio disabled  class="mt-5" :label="'Light Refreshment Restaurant Licence '" :value="'Light'"></v-radio>
                  <v-radio disabled  class="mt-5" :label="'General Restaurant Licence'" :value="'General'"></v-radio>
                  <v-radio disabled  class="mt-5" :label="'Marine Restaurant Licence'" :value="'Marine'"></v-radio>
                </v-radio-group>
                <v-radio disabled  class="enhanced mt-8" :label="'b .  The restaurant licence issued/ being applied'" :value="'b'"></v-radio>
                <v-radio-group v-show="premises_data.q6_detail=='b'" v-model="premises_data.q6b" class="list-radio-gp ml-8 my-3" >
                  <v-radio disabled  class="mt-5" :label="'Issued with Licence'" :value="'Issued'"></v-radio>
                  <div v-show="premises_data.q6b=='Issued'" >
                    <v-radio-group v-model="premises_data.q6b_a" class="ml-10" row>
                      <div class="d-flex">
                        <v-radio disabled  class="row-radio mb-0" :label="'Full Licence'" :value="'Full'"></v-radio>
                        <v-radio disabled  class="row-radio ml-3" :label="'Provisional Licence'" :value="'Provisional'"></v-radio>
                      </div>
                    </v-radio-group>
                    <h5 class="my-0 fw-400 em-18 ml-10 mt-4">Restaurant Licence Number</h5>
                    <MultipleTextfield disabled  class="ml-10 mt-5" :inValue="premises_data.q6b_a_restaurantNo" :refID="restaurantNoMTF.refID" :amount="restaurantNoMTF.amount" :shouldShow="restaurantNoMTF.error.show" :msg="restaurantNoMTF.error.msg" :connect="restaurantNoMTF.connect" @onInputDone="updateRestaurantNoMTF" :unconnect='true'></MultipleTextfield>
                  </div>
                  <v-radio disabled  class="mt-5" :label="'Being Applied'" :value="'being-applied'"></v-radio>
                  <div v-show="premises_data.q6b=='being-applied'" >
                     <h5 class="my-0 fw-400 em-18 ml-10 mt-5">File Ref. of Restaurant Licence Application</h5>
                     <v-text-field disabled class="tf-half ml-10 mt-5" v-model="premises_data.q6b_b_fileRef" :rules="form.fullnameRules"  label="File Ref." outlined required></v-text-field>
                  </div>
                  <v-radio disabled  :value="'Not'" class="mt-5">
                    <template slot="label">
                      <span>Not under application for or covered by a Restaurant Licence or a Certificate of Compliance issued by the Home Affairs Department <br/><span style="color:#7a7a7a">(Please complete <span style="color:#4e45d1">Annex I</span> and submit together with the required documents.)</span></span>
                    </template>
                  </v-radio>
                </v-radio-group>
            </v-radio-group>
        </v-form>
      </div>
    </div>
    <div class="body light-purple">
      <div class="form-div" >
        <v-form v-model="form.valid">
          <div class="ml-10">
            <h2 class="mt-0 dec">Annex I</h2>
            <h5 class="mt-2 fw-400 em-18">For liquor licence application in respect of the premises not under application for or covered by a Restaurant Licence or a Certificate of Compliance issued by the Home Affairs Department </h5>
            <h5 class="mt-2 mt-n2 dec">Additional Information to be Provided</h5>
            <div class="mt-3 d-flex">
              <h5 class="em-18 mr-2">a.</h5>
              <h5 class="em-18">Area of premises for sale or supply of liquor and for consumption of  liquor on the premises</h5>
            </div>
            <div class="form-section mt-3 justify-start align-baseline ml-6" >
              <v-text-field disabled class="tf-half mr-4" v-model="premises_data.an_a_size" :rules="form.fullnameRules"  label="Size" outlined required></v-text-field>
              <p class="mb-0">m²</p>
            </div>
            <h5 class="em-18">b. Installation of Air-conditioning System/Ventilating System:</h5>
            <div>
              <v-radio-group v-model="premises_data.an_b.options" class="" row>
                <div class="d-flex">
                  <v-radio disabled  class="row-radio mb-0" :label="'Yes'" :value="true"></v-radio>
                  <v-radio disabled  class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
                </div>
              </v-radio-group>
              <h5 class="em-18 fw-400 mb-4">Type (e.g. water-cooled)</h5>
              <v-text-field disabled class="tf-half" v-model="premises_data.an_b.type" :rules="form.fullnameRules"  label="Type" outlined required></v-text-field>
            </div>
            <h5 class="em-18">c. Provision of toilet facilities</h5>
            <v-radio-group v-model="premises_data.an_c" class="list-radio-gp my-1" >
              <v-radio disabled  class="mt-2" :label="'Yes, inside the premises'" :value="'Yes_1'"></v-radio>
              <v-radio disabled  class="mt-5" :label="'Yes, public facilities at the building'" :value="'Yes_2'"></v-radio>
              <v-radio disabled  class="mt-5" :label="'No, no toilet facilities inside the premises or at the building'" :value="'No'"></v-radio>
            </v-radio-group>
            <div class="mt-3 d-flex">
              <h5 class="em-18 mr-2">d.</h5>
              <h5 class="em-18">If the premises are under application for or covered by a licence or certificate to be issued/issued by government departments, please specify</h5>
            </div>
            <v-text-field disabled class="tf-half" v-model="premises_data.an_d" :rules="form.fullnameRules"  label="Licence/Certificate" outlined required></v-text-field>
            <h5 class="em-18">e. Enclosed</h5>
            <h5 class="em-18">Please enclose the following documents:</h5>
          </div>
        </v-form>
      </div>
      <div class='o-table mb-2'>
        <div class="d-flex"><h5 class="em-22 mw-6">Additional Information  ( Annex l )</h5><h5 class="em-22 mw-3 text-right">Last Update</h5></div>
        <BoldLine :options="{color:'rgba(177,177,177,0.37)',height:'2px',width:'100%'}"></BoldLine>
        <div class="d-flex py-5 ">
          <div class="d-flex mw-6 align-center">
            <div class="o-t-item-div">A copy of proposed layout plan of the premises</div>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-icon class=" ml-2" color="secondary" dark v-bind="attrs" v-on="on">
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
          <div class="mw-3 text-right">
            <h5 class="ma-0 ml-1 em-18 fw-400 text-right">-</h5>
          </div>
        </div>
        <div class="d-flex py-5 ">
          <div class="d-flex mw-6 align-center">
            <div class="o-t-item-div">A copy of proposed ventilating system layout plan of the premises with their Supplier Certificate</div>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-icon class="" color="secondary" dark v-bind="attrs" v-on="on">
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
          <div class="mw-3 text-right">
            <h5 class="ma-0 ml-1 em-18 fw-400 text-right">-</h5>
          </div>
        </div>
        <div class="d-flex py-5 ">
          <div class="d-flex mw-6 align-center">
            <div class="o-t-item-div"> A copy of of location plan of the premises</div>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-icon class=" ml-2" color="secondary" dark v-bind="attrs" v-on="on">
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
          <div class="mw-3 text-right">
            <h5 class="ma-0 ml-1 em-18 fw-400 text-right">-</h5>
          </div>
        </div>
      </div>
      <div class="form-div" >
        <p class="em-16">
          Whenever there are changes to the submitted plans for the application, the applicant is required to highlight any proposed changes on the revised plans with colour pens and simple descriptions before making submission to the Liquor Licensing Board for consideration and referral to other government departments for processing. Revised plans not in compliance with this requirement will be rejected. Applicant should note that the Liquor Licensing Board and other government departments concerned would not be responsible for any delay caused by the errors and omissions in highlighting all changes on the plans.
        </p>
        <div class="text-box">
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
      </div>
    </div>
    <!-- Premises and Applicant -->
    <div class="body">
      <div class="form-div">
        <v-form v-model="form.valid">
          <h2 class="purple-header em-26">C. Information Relating to The Building</h2>
          <h5 class="mt-8">7 . What is the approved use of the building in which the premises are located?</h5>
          <v-radio-group v-model="premises_data.q7.options " class="list-radio-gp ml-8 my-3" >
            <v-radio disabled  class="mt-5" :label="'Mixed Residential and Commercial Uses'" :value="'Mixed'"></v-radio>
            <v-radio disabled  class="mt-5" :label="'Wholly Commercial Use'" :value="'Commercial'"></v-radio>
            <v-radio disabled  class="mt-5" :label="'Other use, please give details'" :value="'Other'"></v-radio>
          </v-radio-group>
          <v-text-field disabled class="tf-half ml-15 mt-5" v-model="premises_data.q7.others" :rules="form.fullnameRules"  label="File Ref." outlined required></v-text-field>
          <h5 class="mt-8">8 . The premises have </h5>
          <v-radio-group v-model="premises_data.q8" class="list-radio-gp ml-8 my-3 mb-6" >
            <v-radio disabled  class="mt-5" :label="'Independent access'" :value="'Independent'"></v-radio>
            <v-radio disabled  class="mt-5" :label="'Shared access with the other portion of the building'" :value="'Shared'"></v-radio>
          </v-radio-group>
        </v-form>
        <v-form v-model="form.valid">
            <h2 class="purple-header em-26">D. Personal Information</h2>
            <h5 class="mt-8">9 . Name </h5>
            <div class="form-section justify-start">
                <v-text-field disabled class="tf-half" v-model="applicant_data.chineseName" :rules="form.fullnameRules"  label="Chinese Name" outlined required></v-text-field>
                <v-radio-group v-model="applicant_data.gender" class="tf-inline-radio-gp" row>
                  <v-radio disabled  class="row-radio" :label="'先生'" :value="'M'"></v-radio>
                  <v-radio disabled  class="row-radio ml-3" :label="'女士'" :value="'F'"></v-radio>
                </v-radio-group>
                <v-text-field disabled class="tf-half" v-model="applicant_data.englishName" :rules="form.fullnameRules"  label="English Name" outlined required></v-text-field>
                <v-radio-group v-model="applicant_data.gender" class="tf-inline-radio-gp" row>
                  <v-radio disabled  class="row-radio" :label="'Mr.'" :value="'M'"></v-radio>
                  <v-radio disabled  class="row-radio ml-3" :label="'Ms.'" :value="'F'"></v-radio>
                </v-radio-group>
            </div>

            <h5 class="mt-2">10 . HKID Card No. </h5>
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
            <h5 class="mt-3">11 . Date of Birth ( Day/ Month/ Year)</h5>
            <div class="d-flex align-baseline">
              <v-select disabled class="o-select-month mr-3" :items="timeOpts.day" label="" outlined :menu-props="{offsetY: true}"></v-select>/
              <v-select disabled class="o-select-month mx-3" :items="timeOpts.month" label="" outlined :menu-props="{offsetY: true}"></v-select>/
              <v-select disabled class="o-select-year ml-3" :items="timeOpts.year" label="" outlined :menu-props="{offsetY: true}"></v-select>
            </div>
            <h5 class="mt-3 mb-6">12 . Residential Address </h5>
            <div class="form-section mt-n2 ml-6">
              <v-text-field disabled class="tf-full mt-2"  v-model="applicant_data.r_address[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
              <v-text-field disabled class="tf-full mt-n4" v-model="applicant_data.r_address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
              <v-text-field disabled class="tf-full mt-n4" v-model="applicant_data.r_address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
              <v-select disabled  class="mt-n4" v-model="applicant_data.r_address[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
            </div>
            <h5 class="mt-3">13 . Correspondence Address </h5>
            <div class="mt-n2 ml-10 d-flex align-center flex-wrap">
              <h5 class="em-18 fw-400">Same as Residental Address </h5>
              <v-radio-group v-model="applicant_data.q13" class="ml-7 mt-n3 mb-0" row>
                <v-radio disabled  class="row-radio" :label="'Yes'" :value="true"></v-radio>
                <v-radio disabled  class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <div v-show="applicant_data.q13==false" class="form-section mt-n2 ml-6">
              <v-text-field disabled class="tf-full mt-2"  v-model="applicant_data.address[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
              <v-text-field disabled class="tf-full mt-n4" v-model="applicant_data.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
              <v-text-field disabled class="tf-full mt-n4" v-model="applicant_data.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
              <v-select disabled  class="mt-n4" v-model="applicant_data.address[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
            </div>
            <h5 class="mt-3">14. Tel no. </h5>
            <div class="form-section">
              <v-text-field disabled class="tf-half" v-model="applicant_data.tel.office" :rules="form.fullnameRules"  label="Office" outlined required></v-text-field>
              <v-text-field disabled class="tf-half" v-model="applicant_data.tel.mobile" :rules="form.fullnameRules"  label="Mobile" outlined required></v-text-field>
            </div>
            <h5 class="mt-3">15. Contact </h5>
            <div class="form-section">
              <v-text-field disabled class="tf-half" v-model="applicant_data.fax.faxNo" :rules="form.fullnameRules"  label="Fax No." outlined required></v-text-field>
              <v-text-field disabled class="tf-half" v-model="applicant_data.fax.email" :rules="form.fullnameRules"  label="Email Address" outlined required></v-text-field>
            </div>
            <div class="d-flex ">
              <h5> 16. </h5>
              <h5 class="ml-1" >Please provide in full detail your previous experience in connection with the sale and supply of liquor </h5>
            </div>
            <div class="mt-n2 ml-10 d-flex justify-space-between align-center flex-wrap">
              <h5 class="em-18 fw-400">Have previous experience </h5>
              <v-radio-group v-model="applicant_data.q16" class="ml-7 mt-n3 mb-0" row>
                <v-radio disabled  class="row-radio" :label="'Yes'" :value="true"></v-radio>
                <v-radio disabled  class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <div v-show="applicant_data.q16==true" class="callout-div detail-box lg ml-10 px-15 py-2">
              <div>
                <div class="box-block" v-for="(item,i) in applicant_data.q16_detail" :key="i" style="width:100%;">
                  <h5>Address of Liquor-selling/supplying Premises Concerned</h5>
                  <v-text-field disabled class="tf-full mt-8"  v-model="item.address[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
                  <v-text-field disabled class="tf-full mt-n4" v-model="item.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
                  <v-text-field disabled class="tf-full mt-n4" v-model="item.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
                  <v-select disabled  class="mt-n4 mb-0" v-model="item.address[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
                  <div class="d-flex flex-wrap justify-space-between mt-n4">
                    <div class="d-flex flex-column mr-10">
                      <h5>Period of Employment (Year)</h5>
                      <div class="d-flex align-baseline">
                        <v-select disabled  v-model="item.period.start" append-outer-icon="" class="o-select-year small mr-3" :items="timeOpts.year" label="" outlined :menu-props="{offsetY: true}"></v-select>-
                        <v-select disabled  v-model="item.period.to" append-outer-icon=""  class="o-select-year small ml-3" :items="timeOpts.year" label="" outlined :menu-props="{offsetY: true}"></v-select>
                      </div>
                    </div>
                    <div class="d-flex flex-column">
                      <h5>Position of Employment</h5>
                      <v-text-field disabled  v-model="item.position" class="tf-full" :rules="form.fullnameRules"  label="Position" outlined required></v-text-field>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex mb-8">
                <v-btn depressed class="o-btn-action plus" color="primary" @click="addRecord">+</v-btn>
                 <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addRecord">Add Record</p>
              </div>
            </div>
            <div class="d-flex ">
              <h5> 17. </h5>
              <h5 class="ml-1" >What licence(s) below do you hold at present? (allow multiple selection) </h5>
            </div>
            <v-radio-group v-model="applicant_data.q17" class="list-radio-gp ml-8 my-3" >
              <v-radio disabled  class="mt-5" :label="'Places of Public Entertainment Licence'" :value="'Places'"></v-radio>
                <div v-show="applicant_data.q17=='Places'" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
                  <h5>Address of Liquor-selling/supplying Premises Concerned</h5>
                  <v-text-field disabled class="tf-half mt-2" :v-model="applicant_data.q17_a_detail.shopsign" :rules="form.addressRules" label="Shop Sign" outlined required></v-text-field>
                  <v-text-field disabled class="tf-full mt-n4" :v-model="applicant_data.q17_a_detail.address[0]"  :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
                  <v-text-field disabled class="tf-full mt-n4" :v-model="applicant_data.q17_a_detail.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
                  <v-text-field disabled class="tf-full mt-n4" :v-model="applicant_data.q17_a_detail.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
                  <v-select disabled  class="mt-n4 mb-0" :v-model="applicant_data.q17_a_detail.address[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
                </div>
              <v-radio disabled  class="mt-5" :label="'Karaoke Establishment Permit/Licence'" :value="'Karaoke'"></v-radio>
                <div v-show="applicant_data.q17=='Karaoke'" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
                  <h5>Address of Liquor-selling/supplying Premises Concerned</h5>
                  <v-text-field disabled class="tf-half mt-2" :v-model="applicant_data.q17_b_detail.shopsign" :rules="form.addressRules" label="Shop Sign" outlined required></v-text-field>
                  <v-text-field disabled class="tf-full mt-n4" :v-model="applicant_data.q17_b_detail.address[0]"  :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
                  <v-text-field disabled class="tf-full mt-n4" :v-model="applicant_data.q17_b_detail.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
                  <v-text-field disabled class="tf-full mt-n4" :v-model="applicant_data.q17_b_detail.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
                  <v-select disabled  class="mt-n4 mb-0" :v-model="applicant_data.q17_b_detail.address[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
                </div>
              <v-radio disabled  class="mt-5" :label="'Massage Establishment Licence'" :value="'Massage'"></v-radio>
                <div v-show="applicant_data.q17=='Massage'" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
                  <h5>Address of Liquor-selling/supplying Premises Concerned</h5>
                  <v-text-field disabled class="tf-half mt-2" :v-model="applicant_data.q17_c_detail.shopsign" :rules="form.addressRules" label="Shop Sign" outlined required></v-text-field>
                  <v-text-field disabled class="tf-full mt-n4" :v-model="applicant_data.q17_c_detail.address[0]"  :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
                  <v-text-field disabled class="tf-full mt-n4" :v-model="applicant_data.q17_c_detail.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
                  <v-text-field disabled class="tf-full mt-n4" :v-model="applicant_data.q17_c_detail.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
                  <v-select disabled  class="mt-n4 mb-0" :v-model="applicant_data.q17_c_detail.address[3]" :items="region.en" label="Region" outlined :menu-props="{offsetY: true}"></v-select>
                </div>
              <v-radio disabled  class="mt-5" :label="'None of the above'" :value="'None'"></v-radio>
            </v-radio-group>
            <div class="d-flex ">
              <h5> 18. </h5>
              <div class="ml-1 d-flex flex-column" >
                <h5 class="mb-n3">What licence(s) below have you ever held previously? (allow multiple selection)</h5>
                <h5 class="em-18 fw-400" style="color:#7A7A7A"> (If you have ever held the following licences for many times, please provide information related to the latest two times.)</h5>
              </div>
            </div>
            <v-radio-group v-model="applicant_data.q18" class="list-radio-gp ml-8 my-3 mt-n3" >
              <v-radio disabled  class="" :label="'Places of Public Entertainment Licence'" :value="'Places'"></v-radio>
                <div v-show="applicant_data.q18=='Places'" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
                  <div style="width:100%;">
                    <div class="box-block" v-for="(item,i) in applicant_data.q18_a_detail" :key="i" style="width:100%;">
                      <h5>Please state the period (year) </h5>
                      <div class="d-flex align-baseline">
                        <v-select disabled  v-model="item.period.start" append-outer-icon="" class="o-select-year small mr-3" :items="timeOpts.year" label="" outlined></v-select>-
                        <v-select disabled  v-model="item.period.to" append-outer-icon=""  class="o-select-year small ml-3" :items="timeOpts.year" label="" outlined></v-select>
                      </div>
                      <h5 class="mt-0">Shop Sign and Address </h5>
                      <v-text-field disabled class="tf-half mt-2" v-model="item.shopsign" :rules="form.addressRules" label="Shop Sign" outlined required></v-text-field>
                      <v-text-field disabled class="tf-full mt-n4" v-model="item.address[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
                      <v-text-field disabled class="tf-full mt-n4" v-model="item.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
                      <v-text-field disabled class="tf-full mt-n4" v-model="item.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
                      <v-select disabled  class="mt-n4 mb-0" v-model="item.address[3]" :items="region.en" label="Region" outlined></v-select>
                    </div>
                  </div>
                  <div class="d-flex mb-8">
                    <v-btn depressed class="o-btn-action plus" color="primary" @click="addQ18aDetail">+</v-btn>
                    <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addQ18aDetail">Add Record</p>
                  </div>
                </div>
              <v-radio disabled  class="mt-5" :label="'Karaoke Establishment Permit/Licence'" :value="'Karaoke'"></v-radio>
              <div v-show="applicant_data.q18=='Karaoke'" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
                  <div style="width:100%;">
                    <div class="box-block" v-for="(item,i) in applicant_data.q18_b_detail" :key="i" style="width:100%;">
                      <h5>Please state the period (year) </h5>
                      <div class="d-flex align-baseline">
                        <v-select disabled  v-model="item.period.start" append-outer-icon="" class="o-select-year small mr-3" :items="timeOpts.year" label="" outlined></v-select>-
                        <v-select disabled  v-model="item.period.to" append-outer-icon=""  class="o-select-year small ml-3" :items="timeOpts.year" label="" outlined></v-select>
                      </div>
                      <h5 class="mt-0">Shop Sign and Address </h5>
                      <v-text-field disabled class="tf-half mt-2" v-model="item.shopsign" :rules="form.addressRules" label="Shop Sign" outlined required></v-text-field>
                      <v-text-field disabled class="tf-full mt-n4" v-model="item.address[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
                      <v-text-field disabled class="tf-full mt-n4" v-model="item.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
                      <v-text-field disabled class="tf-full mt-n4" v-model="item.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
                      <v-select disabled  class="mt-n4 mb-0" v-model="item.address[3]" :items="region.en" label="Region" outlined></v-select>
                    </div>
                  </div>
                  <div class="d-flex mb-8">
                    <v-btn depressed class="o-btn-action plus" color="primary" @click="addQ18bDetail">+</v-btn>
                    <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addQ18bDetail">Add Record</p>
                  </div>
                </div>
              <v-radio disabled  class="mt-5" :label="'Massage Establishment Licence'" :value="'Massage'"></v-radio>
              <div v-show="applicant_data.q18=='Massage'" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
                  <div style="width:100%;">
                    <div class="box-block" v-for="(item,i) in applicant_data.q18_c_detail" :key="i" style="width:100%;">
                      <h5>Please state the period (year) </h5>
                      <div class="d-flex align-baseline">
                        <v-select disabled  v-model="item.period.start" append-outer-icon="" class="o-select-year small mr-3" :items="timeOpts.year" label="" outlined></v-select>-
                        <v-select disabled  v-model="item.period.to" append-outer-icon=""  class="o-select-year small ml-3" :items="timeOpts.year" label="" outlined></v-select>
                      </div>
                      <h5 class="mt-0">Shop Sign and Address </h5>
                      <v-text-field disabled class="tf-half mt-2" v-model="item.shopsign" :rules="form.addressRules" label="Shop Sign" outlined required></v-text-field>
                      <v-text-field disabled class="tf-full mt-n4" v-model="item.address[0]" :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
                      <v-text-field disabled class="tf-full mt-n4" v-model="item.address[1]" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
                      <v-text-field disabled class="tf-full mt-n4" v-model="item.address[2]" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
                      <v-select disabled  class="mt-n4 mb-0" v-model="item.address[3]" :items="region.en" label="Region" outlined></v-select>
                    </div>
                  </div>
                  <div class="d-flex mb-8">
                    <v-btn depressed class="o-btn-action plus" color="primary" @click="addQ18cDetail">+</v-btn>
                    <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addQ18cDetail">Add Record</p>
                  </div>
                </div>
              <v-radio disabled  class="mt-5" :label="'None of the above'" :value="'None'"></v-radio>
            </v-radio-group>
            <div class="d-flex ">
              <h5> 19. </h5>
              <h5 class="ml-1" >Have you ever been convicted of any criminal offence in Hong Kong or elsewhere?</h5>
            </div>
            <v-radio-group v-model="applicant_data.q19" class="ml-7 mt-n1 mb-0" row>
              <v-radio disabled  class="row-radio" :label="'Yes'" :value="true"></v-radio>
              <v-radio disabled  class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
            </v-radio-group>
            <div v-show="applicant_data.q19==true" class="callout-div detail-box lg ml-10 px-15 py-2">
              <div style="width:100%">
                <div class="box-block" v-for="(item,i) in applicant_data.q19_detail" :key="i" style="width:100%;">
                  <h5>Please give details of convictions</h5>
                  <h5 class="mt-0">Convicted Offence</h5>
                  <v-text-field disabled class="tf-full mt-4" v-model="item.offence" :rules="form.fullnameRules"  placeholder="Convicted Offence" outlined required></v-text-field>
                  <h5 class="mt-0">Date of Conviction</h5>
                  <div class="d-flex align-baseline">
                    <v-select disabled  class="o-select-month mr-3" v-model="item.date.day" :items="timeOpts.day" label="" outlined></v-select>-
                    <v-select disabled  class="o-select-month mx-3" v-model="item.date.month" :items="timeOpts.month" label="" outlined></v-select>-
                    <v-select disabled  class="o-select-year ml-3" v-model="item.date.year" :items="timeOpts.year" label="" outlined></v-select>
                  </div>
                  <h5 class="mt-0">Nature of Punishments and Fine</h5>
                  <v-text-field disabled class="tf-full mt-4" v-model="item.nature" :rules="form.fullnameRules"  placeholder="Nature" outlined required></v-text-field>
                </div>
              </div>
              <div class="d-flex mb-8">
                <v-btn depressed class="o-btn-action plus" color="primary" @click="addQ19Detail">+</v-btn>
                 <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addQ19Detail">Add Entry</p>
              </div>
            </div>
            <div class="d-flex ">
              <h5> 20. </h5>
              <h5 class="ml-1" >Have you ever been convicted of any offence relating to liquor selling?</h5>
            </div>
            <v-radio-group v-model="applicant_data.q20" class="ml-7 mt-n1 mb-0" row>
              <v-radio disabled  class="row-radio" :label="'Yes'" :value="true"></v-radio>
              <v-radio disabled  class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
            </v-radio-group>
            <div v-show="applicant_data.q20==true"  class="callout-div detail-box lg ml-10 px-15 py-2">
              <div style="width:100%">
                <div class="box-block" v-for="(item,i) in applicant_data.q20_detail" :key="i" style="width:100%;">
                  <h5>Please give details of convictions</h5>
                  <h5 class="mt-0">Convicted Offence</h5>
                  <v-text-field disabled class="tf-full mt-4" v-model="item.offence" :rules="form.fullnameRules"  placeholder="Convicted Offence" outlined required></v-text-field>
                  <h5 class="mt-0">Date of Conviction</h5>
                  <div class="d-flex align-baseline">
                    <v-select disabled  class="o-select-month mr-3" v-model="item.date.day" :items="timeOpts.day" label="" outlined></v-select>-
                    <v-select disabled  class="o-select-month mx-3" v-model="item.date.month" :items="timeOpts.month" label="" outlined></v-select>-
                    <v-select disabled  class="o-select-year ml-3" v-model="item.date.year" :items="timeOpts.year" label="" outlined></v-select>
                  </div>
                  <h5 class="mt-0">Nature of Punishments and Fine</h5>
                  <v-text-field disabled class="tf-full mt-4" v-model="item.nature" :rules="form.fullnameRules"  placeholder="Nature" outlined required></v-text-field>
                </div>
              </div>
              <div class="d-flex mb-8">
                <v-btn depressed class="o-btn-action plus" color="primary" @click="addQ20Detail">+</v-btn>
                 <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addQ20Detail">Add Entry</p>
              </div>
            </div>
        </v-form>



      </div>
    </div>
    <!-- Management -->
    <div class="body">
      <div class="form-bg-circle hidden-md-and-down" >4</div>
      <div class="form-div">
        <v-form v-model="form.valid" >
            <h2 class="purple-header em-26">A. Basic Information</h2>

            <h5 class="mt-8">21 . In what capacity are you applying for a licence?</h5>
            <div class="form-section justify-start">
              <v-radio-group v-model="management_data.q21.option" class="list-radio-gp ml-8 my-3" >
                <v-radio disabled  class="mt-5" :label="'Sole Proprietor'" :value="'Sole'"></v-radio>
                <v-radio disabled  class="mt-5" :label="'Partner'" :value="'Partner'"></v-radio>
                <!-- Partner Callout-box -->
                <div v-show="management_data.q21.option=='Partner'" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
                  <div style="width:100%;">
                    <div class="box-block" v-for="(item,i) in management_data.q21_partner" :key="i" style="width:100%;">
                      <h5>Please provide information of other partner(s)</h5>
                      <h5>Name</h5>
                      <div class="form-section">
                        <v-text-field disabled class="tf-half" v-model="item.chineseName" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
                        <v-text-field disabled class="tf-half" v-model="item.englishName" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
                      </div>
                      <h5 class="mt-0">HKID Card No.</h5>
                      <div class="d-flex flex-column" >
                          <div class="tf-div">
                              <div class="d-flex align-baseline">
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[0]" maxlength=1 outlined  :ref="'q21p_'+i" @input="focusNextItem(0,'q21p_'+ i)" @focus="selectItem(0,'q21p_'+ i)" :error="item.idError"></v-text-field>
                                  <div class="connect big-gap"></div>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[1]" maxlength=1 outlined  :ref="'q21p_'+i" @input="focusNextItem(1,'q21p_'+ i)" @focus="selectItem(1,'q21p_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[2]" maxlength=1 outlined  :ref="'q21p_'+i" @input="focusNextItem(2,'q21p_'+ i)" @focus="selectItem(2,'q21p_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[3]" maxlength=1 outlined  :ref="'q21p_'+i" @input="focusNextItem(3,'q21p_'+ i)" @focus="selectItem(3,'q21p_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[4]" maxlength=1 outlined  :ref="'q21p_'+i" @input="focusNextItem(4,'q21p_'+ i)" @focus="selectItem(4,'q21p_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[5]" maxlength=1 outlined  :ref="'q21p_'+i" @input="focusNextItem(5,'q21p_'+ i)" @focus="selectItem(5,'q21p_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[6]" maxlength=1 outlined  :ref="'q21p_'+i" @input="focusNextItem(6,'q21p_'+ i)" @focus="selectItem(6,'q21p_'+ i)" :error="item.idError"></v-text-field>
                                  <div class="connect">(</div>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[7]" maxlength=1 outlined  :ref="'q21p_'+i" @focus="selectItem(7,'q21p_'+ i)" :error="item.idError"></v-text-field>
                                  <div class="connect">)</div>
                              </div>
                          </div>
                          <div v-show="item.idError" class="msg-div">Invalid input</div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mb-8">
                    <v-btn depressed class="o-btn-action plus" color="primary" @click="addPerson(management_data.q21_partner)">+</v-btn>
                    <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addPerson(management_data.q21_partner)">Add Partner</p>
                  </div>
                </div>
                <!--  -->
                <v-radio disabled  class="mt-5" :label="'Director of a Limited Company'" :value="'Director'"></v-radio>
                <!-- Director Callout-box -->
                <div v-show="management_data.q21.option=='Director'" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
                  <div style="width:100%;">
                    <div class="box-block" v-for="(item,i) in management_data.q21_director" :key="i" style="width:100%;">
                      <h5>Please provide information of other director(s)</h5>
                      <h5>Name</h5>
                      <div class="form-section">
                        <v-text-field disabled class="tf-half" v-model="item.chineseName" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
                        <v-text-field disabled class="tf-half" v-model="item.englishName" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
                      </div>
                      <h5 class="mt-0">HKID Card No.</h5>
                      <div class="d-flex flex-column" >
                          <div class="tf-div">
                              <div class="d-flex align-baseline">
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[0]" maxlength=1 outlined  :ref="'q21d_'+i" @input="focusNextItem(0,'q21d_'+ i)" @focus="selectItem(0,'q21d_'+ i)" :error="item.idError"></v-text-field>
                                  <div class="connect big-gap"></div>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[1]" maxlength=1 outlined  :ref="'q21d_'+i" @input="focusNextItem(1,'q21d_'+ i)" @focus="selectItem(1,'q21d_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[2]" maxlength=1 outlined  :ref="'q21d_'+i" @input="focusNextItem(2,'q21d_'+ i)" @focus="selectItem(2,'q21d_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[3]" maxlength=1 outlined  :ref="'q21d_'+i" @input="focusNextItem(3,'q21d_'+ i)" @focus="selectItem(3,'q21d_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[4]" maxlength=1 outlined  :ref="'q21d_'+i" @input="focusNextItem(4,'q21d_'+ i)" @focus="selectItem(4,'q21d_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[5]" maxlength=1 outlined  :ref="'q21d_'+i" @input="focusNextItem(5,'q21d_'+ i)" @focus="selectItem(5,'q21d_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[6]" maxlength=1 outlined  :ref="'q21d_'+i" @input="focusNextItem(6,'q21d_'+ i)" @focus="selectItem(6,'q21d_'+ i)" :error="item.idError"></v-text-field>
                                  <div class="connect">(</div>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[7]" maxlength=1 outlined  :ref="'q21d_'+i" @focus="selectItem(7,'q21d_'+ i)" :error="item.idError"></v-text-field>
                                  <div class="connect">)</div>
                              </div>
                          </div>
                          <div v-show="item.idError" class="msg-div">Invalid input</div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mb-8">
                    <v-btn depressed class="o-btn-action plus" color="primary" @click="addPerson(management_data.q21_director)">+</v-btn>
                    <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addPerson(management_data.q21_director)">Add Director</p>
                  </div>
                </div>
                <!--  -->
                <v-radio disabled  class="mt-5" :label="'Employee'" :value="'Employee'"></v-radio>
                <!-- Employee Callout-box -->
                <div v-show="management_data.q21.option=='Employee'" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
                  <div style="width:100%;">
                    <div class="box-block" v-for="(item,i) in management_data.q21_Employee" :key="i" style="width:100%;">
                      <h5>Please state employment position</h5>
                      <v-text-field disabled class="tf-half" v-model="item.position" :rules="form.fullnameRules"  label="Position" outlined required></v-text-field>
                      <h5 class="mt-0 mb-0">Please provide information of (all) your employer(s)</h5>
                      <h5 class="mt-0 mb-4 fw-400" style="color:#7A7A7A">(if the owner of the establishment under application for a liquor licence is a limited company, please provide a list of the director(s))</h5>
                      <div class="form-section">
                        <v-text-field disabled class="tf-half" v-model="item.chineseName" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
                        <v-text-field disabled class="tf-half" v-model="item.englishName" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
                      </div>
                      <h5 class="mt-0">HKID Card No.</h5>
                      <div class="d-flex flex-column" >
                          <div class="tf-div">
                              <div class="d-flex align-baseline">
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[0]" maxlength=1 outlined  :ref="'q21e_'+i" @input="focusNextItem(0,'q21e_'+ i)" @focus="selectItem(0,'q21e_'+ i)" :error="item.idError"></v-text-field>
                                  <div class="connect big-gap"></div>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[1]" maxlength=1 outlined  :ref="'q21e_'+i" @input="focusNextItem(1,'q21e_'+ i)" @focus="selectItem(1,'q21e_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[2]" maxlength=1 outlined  :ref="'q21e_'+i" @input="focusNextItem(2,'q21e_'+ i)" @focus="selectItem(2,'q21e_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[3]" maxlength=1 outlined  :ref="'q21e_'+i" @input="focusNextItem(3,'q21e_'+ i)" @focus="selectItem(3,'q21e_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[4]" maxlength=1 outlined  :ref="'q21e_'+i" @input="focusNextItem(4,'q21e_'+ i)" @focus="selectItem(4,'q21e_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[5]" maxlength=1 outlined  :ref="'q21e_'+i" @input="focusNextItem(5,'q21e_'+ i)" @focus="selectItem(5,'q21e_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[6]" maxlength=1 outlined  :ref="'q21e_'+i" @input="focusNextItem(6,'q21e_'+ i)" @focus="selectItem(6,'q21e_'+ i)" :error="item.idError"></v-text-field>
                                  <div class="connect">(</div>
                                  <v-text-field disabled class="tf-multiple" v-model="item.hkid[7]" maxlength=1 outlined  :ref="'q21e_'+i" @focus="selectItem(7,'q21e_'+ i)" :error="item.idError"></v-text-field>
                                  <div class="connect">)</div>
                              </div>
                          </div>
                          <div v-show="item.idError" class="msg-div">Invalid input</div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mb-8">
                    <v-btn depressed class="o-btn-action plus" color="primary" @click="addEmployee(management_data.q21_Employee)">+</v-btn>
                    <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addEmployee(management_data.q21_Employee)">Add Employer</p>
                  </div>
                </div>
                <!--  -->
                <v-radio disabled  class="mt-5" :label="'Others'" :value="'Others'"></v-radio>
              </v-radio-group>
            </div>
            <div class="form-section">
              <v-text-field disabled v-model="management_data.q21.others" class="tf-half mt-n2 ml-16" :rules="form.fullnameRules"  label="Please specify" outlined required></v-text-field>
            </div>
            <h5 class="mt-8">22 . Will any manager/manageress be employed?</h5>
            <div class="form-section mb-6">
              <v-radio-group class="tf-inline-radio-gp ml-enhanced" v-model="management_data.q22" row>
                  <v-radio disabled  class="row-radio" :label="'Yes'" :value="true"></v-radio>
                  <v-radio disabled  class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <!-- Manager/Manageress Callout-box -->
            <div v-show="management_data.q22==true" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
              <div style="width:100%;">
                <div class="box-block" v-for="(item,i) in management_data.q22_detail" :key="i" style="width:100%;">
                  <h5>Please provide information of manager/manageress</h5>
                  <h5>Name</h5>
                    <div class="form-section">
                      <v-text-field disabled class="tf-half" v-model="item.chineseName" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
                      <v-text-field disabled class="tf-half" v-model="item.englishName" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
                    </div>
                  <h5 class="mt-0">HKID Card No.</h5>
                  <div class="d-flex flex-column" >
                      <div class="tf-div">
                          <div class="d-flex align-baseline">
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[0]" maxlength=1 outlined  :ref="'q22_'+i" @input="focusNextItem(0,'q22_'+ i)" @focus="selectItem(0,'q22_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect big-gap"></div>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[1]" maxlength=1 outlined  :ref="'q22_'+i" @input="focusNextItem(1,'q22_'+ i)" @focus="selectItem(1,'q22_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[2]" maxlength=1 outlined  :ref="'q22_'+i" @input="focusNextItem(2,'q22_'+ i)" @focus="selectItem(2,'q22_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[3]" maxlength=1 outlined  :ref="'q22_'+i" @input="focusNextItem(3,'q22_'+ i)" @focus="selectItem(3,'q22_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[4]" maxlength=1 outlined  :ref="'q22_'+i" @input="focusNextItem(4,'q22_'+ i)" @focus="selectItem(4,'q22_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[5]" maxlength=1 outlined  :ref="'q22_'+i" @input="focusNextItem(5,'q22_'+ i)" @focus="selectItem(5,'q22_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[6]" maxlength=1 outlined  :ref="'q22_'+i" @input="focusNextItem(6,'q22_'+ i)" @focus="selectItem(6,'q22_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect">(</div>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[7]" maxlength=1 outlined  :ref="'q22_'+i" @focus="selectItem(7,'q22_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect">)</div>
                          </div>
                      </div>
                      <div v-show="item.idError" class="msg-div">Invalid input</div>
                  </div>
                </div>
              </div>
              <div class="d-flex mb-8">
                <v-btn depressed class="o-btn-action plus" color="primary" @click="addPerson(management_data.q22_detail)">+</v-btn>
                <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addPerson(management_data.q22_detail)">Add Manager / Manageress</p>
              </div>
            </div>
            <!--  -->
            <div class="d-flex ">
              <h5> 23. </h5>
              <h5 class="ml-1" >Please state in full detail the duties and responsibilities of the nominated manager(s)/manageress(es)</h5>
            </div>
            <div class="form-section ml-7">
              <v-textarea disabled   v-model="management_data.q23"  :rules="form.msgRules" outlined  placeholder="Duties and Responsibilities"></v-textarea>
            </div>
            <div class="d-flex ">
              <h5> 24. </h5>
              <h5 class="ml-1" >Please state and provide in full detail the manager(s)/manageress(es)' previous experience in connection with the sale and supply of liquor manager(s)/manageress(es)</h5>
            </div>
            <div class="form-section ml-7">
              <v-textarea disabled   v-model="management_data.q24"  :rules="form.msgRules" outlined  placeholder="Duties and Responsibilities"></v-textarea>
            </div>
            <h5 class="mt-8">25 . Your duty</h5>
            <h5 class="ml-7">a. Your duty hours <span style="color:#7a7a7a">(in 24-hour format,  max 2 different sessions)</span></h5>
            <div class="form-section ml-11 justify-start align-center pt-3">
               <div class="d-flex flex-column">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">From </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="management_data.dutyHrs[0].from[0]" class="ml-2 tf-multiple time" :ref="'25_a_from_h'"  maxlength=2 @input="timeTFfocusNext('25_a_from_h','25_a_from_m')" @keyup="timeTFfocusNext('25_a_from_h','25_a_from_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox  >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.dutyHrs[0].from[1]" class="ml-2 tf-multiple time" :ref="'25_a_from_m'"  maxlength=2 @input="timeTFfocusNext('25_a_from_m','25_a_to_h')" @keyup="timeTFfocusNext('25_a_from_m','25_a_to_h')" :items="timebox.mins" outlined>
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
                      <v-combobox disabled  v-model="management_data.dutyHrs[0].to[0]" class="ml-2 tf-multiple time" :ref="'25_a_to_h'"  maxlength=2 @input="timeTFfocusNext('25_a_to_h','25_a_to_m')" @keyup="timeTFfocusNext('25_a_to_h','25_a_to_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox  >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.dutyHrs[0].to[1]" class="ml-2 tf-multiple time" :ref="'25_a_to_m'"  maxlength=2  :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                    </div>
                </div>
            </div>
            <div class="form-section ml-11 justify-start align-center pt-3">
               <div class="d-flex flex-column">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">From </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="management_data.dutyHrs[1].from[0]" class="ml-2 tf-multiple time" :ref="'25_a_from_h2'"  maxlength=2 @input="timeTFfocusNext('25_a_from_h2','25_a_from_m2')" @keyup="timeTFfocusNext('25_a_from_h2','25_a_from_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox  >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.dutyHrs[1].from[1]" class="ml-2 tf-multiple time" :ref="'25_a_from_m2'"  maxlength=2 @input="timeTFfocusNext('25_a_from_m2','25_a_to_h2')" @keyup="timeTFfocusNext('25_a_from_m2','25_a_to_h2')" :items="timebox.mins" outlined>
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
                      <v-combobox disabled  v-model="management_data.dutyHrs[1].to[0]" class="ml-2 tf-multiple time" :ref="'25_a_to_h2'"  maxlength=2 @input="timeTFfocusNext('25_a_to_h2','25_a_to_m2')" @keyup="timeTFfocusNext('25_a_to_h2','25_a_to_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox  >
                      <div>:</div>
                      <v-combobox disabled  v-model="management_data.dutyHrs[1].to[1]" class="ml-2 tf-multiple time" :ref="'25_a_to_m2'"  maxlength=2  :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                    </div>
                </div>
            </div>
            <h5 class="mt-3 ml-7">b. Your weekly day-off is <span style="color:#7a7a7a">(max 2 different days)</span></h5>
            <div class="form-section ml-12 flex-column">
              <v-checkbox disabled  v-model="management_data.weeklyDayoff.days" class="o-cb mt-2 mb-n6" on-icon="mdi-check-box-outline" label="Monday" value="Monday"></v-checkbox>
              <v-checkbox disabled  v-model="management_data.weeklyDayoff.days" class="o-cb mb-n6" on-icon="mdi-check-box-outline" label="Tuesday" value="Tuesday"></v-checkbox>
              <v-checkbox disabled  v-model="management_data.weeklyDayoff.days" class="o-cb mb-n6" on-icon="mdi-check-box-outline" label="Wednesday" value="Wednesday"></v-checkbox>
              <v-checkbox disabled  v-model="management_data.weeklyDayoff.days" class="o-cb mb-n6" on-icon="mdi-check-box-outline" label="Thursday" value="Thursday"></v-checkbox>
              <v-checkbox disabled  v-model="management_data.weeklyDayoff.days" class="o-cb mb-n6" on-icon="mdi-check-box-outline" label="Friday" value="Friday"></v-checkbox>
              <v-checkbox disabled  v-model="management_data.weeklyDayoff.days" class="o-cb mb-n6" on-icon="mdi-check-box-outline" label="Saturday" value="Saturday"></v-checkbox>
              <v-checkbox disabled  v-model="management_data.weeklyDayoff.days" class="o-cb mb-n6" on-icon="mdi-check-box-outline" label="Sunday" value="Sunday"></v-checkbox>
              <div class="d-flex flex-wrap">
                <v-checkbox disabled  class="o-cb mr-3" v-model="checkbox_selected" on-icon="mdi-check-box-outline" label="Other, no fix day" value="Other"></v-checkbox>
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
              <v-radio-group v-model="management_data.q25c" class="ml-2 mt-n3" row>
                <v-radio disabled  class="row-radio" :label="'Yes'" :value="true"></v-radio>
                <v-radio disabled  class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <h5 v-show="management_data.q25c==true" class="mt-4 ml-14">Please provide information of nominee</h5>
            <!-- Manager/Manageress Callout-box -->
            <div v-show="management_data.q25c==true" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
              <div style="width:100%;">
                <div class="box-block" v-for="(item,i) in management_data.q25_c_detail" :key="i" style="width:100%;">
                  <h5>Name</h5>
                    <div class="form-section">
                      <v-text-field disabled class="tf-half" v-model="item.chineseName" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
                      <v-text-field disabled class="tf-half" v-model="item.englishName" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
                    </div>
                  <h5 class="mt-0">HKID Card No.</h5>
                  <div class="d-flex flex-column" >
                      <div class="tf-div">
                          <div class="d-flex align-baseline">
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[0]" maxlength=1 outlined  :ref="'q25c_'+i" @input="focusNextItem(0,'q25c_'+ i)" @focus="selectItem(0,'q25c_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect big-gap"></div>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[1]" maxlength=1 outlined  :ref="'q25c_'+i" @input="focusNextItem(1,'q25c_'+ i)" @focus="selectItem(1,'q25c_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[2]" maxlength=1 outlined  :ref="'q25c_'+i" @input="focusNextItem(2,'q25c_'+ i)" @focus="selectItem(2,'q25c_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[3]" maxlength=1 outlined  :ref="'q25c_'+i" @input="focusNextItem(3,'q25c_'+ i)" @focus="selectItem(3,'q25c_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[4]" maxlength=1 outlined  :ref="'q25c_'+i" @input="focusNextItem(4,'q25c_'+ i)" @focus="selectItem(4,'q25c_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[5]" maxlength=1 outlined  :ref="'q25c_'+i" @input="focusNextItem(5,'q25c_'+ i)" @focus="selectItem(5,'q25c_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[6]" maxlength=1 outlined  :ref="'q25c_'+i" @input="focusNextItem(6,'q25c_'+ i)" @focus="selectItem(6,'q25c_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect">(</div>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[7]" maxlength=1 outlined  :ref="'q25c_'+i" @focus="selectItem(7,'q25c_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect">)</div>
                          </div>
                      </div>
                      <div v-show="item.idError" class="msg-div">Invalid input</div>
                  </div>
                </div>
              </div>
              <div class="d-flex mb-8">
                <v-btn depressed class="o-btn-action plus" color="primary" @click="addPerson(management_data.q25_c_detail)">+</v-btn>
                <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addPerson(management_data.q25_c_detail)">Add Nominee</p>
              </div>
            </div>
            <!--  -->
        </v-form>
      </div>
    </div>
    <div class="body light-purple">
      <h3 class="mt-0">Information of Nominated Reserve Licensee</h3>
      <div class=" d-flex flex-column mt-8">
        <div class="f-li d-flex">
          <p>i.</p>
          <p>In case the liquor licence holder is unable to manage the premises (for example, due to illness or leave), resigns from the post or applies for cancellation of the liquor licence, the nominated reserve licensee can be the applicant for the issue of a new liquor licence in respect of the premises</p>
        </div>
        <div class="f-li d-flex mt-3">
          <p>ii.</p>
          <p>In case of illness or temporary absence, application is required to be made to the Secretary to the Liquor Licensing Board for authorising the nominated reserve licensee or any other person to temporarily manage the premises under Regulation 24 of the Dutiable Commodities (Liquor) Regulations (Cap. 109, sub. leg. B).</p>
        </div>
      </div>
      <div class="form-div" >
        <v-form v-model="form.valid">
          <div class="form-section ml-7">
            <div class="d-flex mb-6">
              <h5 class="mt-5" > 26. </h5>
              <h5 class="mt-5 ml-1" >Will you nominate a reserve licensee?
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
            </div>
            <v-radio-group v-model="management_data.q26" class="ml-6" row>
              <v-radio disabled  class="row-radio" :label="'Yes'" :value="true"></v-radio>
               <v-radio disabled  class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
            </v-radio-group>
          </div>
          <div class="ml-14" v-if="management_data.q26==true">
            <h2 class="dec" >Annex II</h2>
            <h3 class="em-24">Nomination of Reserve Licensee</h3>
            <h5 class="fw-400 em-18 mb-6">Applicable to nomination of a reserve licensee in advance to manage the premises during the absence of the liquor licensee for a period not exceeding 25%<a v-on:click="scrollToElement('tag-1')"><sup>1</sup></a> of the number of days of validity period of the licence.</h5>
            <h5 class="fw-400 em-18 mb-2 mr-3">1 (Note: All applications for nomination of reserve licensee will be referred to the Police for comment. Thereafter, the Secretary of the Liquor Licensing Board will, in general, consider the application for nomination of reserve licensee in about 8 weeks upon the approval of new issue/renewal/transfer applications of liquor licence.)</h5>
            <div class="form-section">
              <h5 class="mt-5" > Send the invitation email to nominate a reserve licensee? </h5>
              <v-radio-group v-model="management_data.invitation.option" class="ml-6" row>
                <v-radio disabled  class="row-radio" :label="'Yes'" :value="true"></v-radio>
                <v-radio disabled  class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <div  v-if="management_data.invitation.option==true">
              <h5 class=" em-18 mb-2">
                Send invitation email to Nominated Reserve Licensee to create account and complete form FEHB 266 Nomination of Reserve Licensee.  Reserved Licensee may also log onto the system to complete FEHB 266A and FEHB 266B when needed.
                <span class="ml-n2" >
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
              <div class="form-section flex-wrap justify-start mt-8">
                <v-text-field disabled class="tf-half ma-0  mr-5" v-model="management_data.invitation.email" :rules="form.fullnameRules"  label="Email" outlined required></v-text-field>
                <v-btn disabled depressed class="o-btn-action rounded-pill mt-1" color="primary" @click="sendInvitation()">{{management_data.invitation.sent?'Re-send invitation':'Send invitation'}}</v-btn>
              </div>
              <ol class="mt-6 mb-8">
                <li style="color:#4a4a4a">Pursuant to Regulations 24(2), (3) and (4) of the Dutiable Commodities (Liquor) Regulations (Cap. 109, sub. leg.B), the maximum period (or the aggregate of the periods) is capped at 25% of the number of days of the validity period of the liquor licence, and for a liquor licence with a validity period of more than one year, each period must not exceed 90 days (and the aggregate of the periods must not exceed 90 days within any 12 consecutive months in the validity period of the licence).</li>
              </ol>
              <h3 class="em-22">a. To be completed by applicant</h3>
              <div class="ml-8">
                <h5 class="fw-400 em-18 mb-2">I would like to nominate the person below to manage the above premises in case of my illness or temporary absence within the validity period of the liquor licence, upon issuance of the licence.</h5>
                <h5 class="mb-2">Please provide information of the nominated reserve licensee</h5>
                <div v-for="(item,i) in management_data.q26a" :key="i">
                  <h5>Name</h5>
                  <div class="form-section">
                    <v-text-field disabled class="tf-half" v-model="item.chineseName" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
                    <v-text-field disabled class="tf-half" v-model="item.englishName" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
                  </div>
                  <h5 class="mt-0">HKID Card No.</h5>
                  <div class="d-flex flex-column" >
                      <div class="tf-div">
                          <div class="d-flex align-baseline">
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[0]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(0,'q26a_'+ i)" @focus="selectItem(0,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect big-gap"></div>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[1]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(1,'q26a_'+ i)" @focus="selectItem(1,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[2]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(2,'q26a_'+ i)" @focus="selectItem(2,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[3]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(3,'q26a_'+ i)" @focus="selectItem(3,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[4]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(4,'q26a_'+ i)" @focus="selectItem(4,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[5]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(5,'q26a_'+ i)" @focus="selectItem(5,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[6]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(6,'q26a_'+ i)" @focus="selectItem(6,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect">(</div>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[7]" maxlength=1 outlined  :ref="'q26a_'+i" @focus="selectItem(7,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect">)</div>
                          </div>
                      </div>
                      <div v-show="item.idError" class="msg-div">Invalid input</div>
                  </div>
                  <h5>Contact</h5>
                  <div class="form-section">
                    <v-text-field disabled class="tf-half" v-model="item.contact.tel" :rules="form.fullnameRules"  label="Tel. no." outlined required></v-text-field>
                    <v-text-field disabled class="tf-half" v-model="item.contact.fax" :rules="form.fullnameRules"  label="Fax no." outlined required></v-text-field>
                  </div>
                  <v-checkbox disabled  class="" v-model="item.agree" :off-icon="'mdi-radiobox-blank'" :on-icon="'mdi-radiobox-marked'" >
                    <template v-slot:label>
                      <h5 class="fw-400 em-18">I hereby give consent to the Commissioner of Police to provide my personal data kept by the Hong Kong Police Force to the Secretary of the Liquor Licensing Board for the purpose of, or any purpose related to, the handling of the above application.</h5>
                    </template>
                  </v-checkbox>
                </div>
              </div>
            </div>
            <div v-if="management_data.invitation.option==false">
              <h5 class=" em-18 mb-2">If you don’t want to send the invitation email, please complete form ‘Nomination of Reserve Licensee’  FEHB 266 </h5>
              <ol class="mt-6 mb-8">
                <li style="color:#4a4a4a">Pursuant to Regulations 24(2), (3) and (4) of the Dutiable Commodities (Liquor) Regulations (Cap. 109, sub. leg.B), the maximum period (or the aggregate of the periods) is capped at 25% of the number of days of the validity period of the liquor licence, and for a liquor licence with a validity period of more than one year, each period must not exceed 90 days (and the aggregate of the periods must not exceed 90 days within any 12 consecutive months in the validity period of the licence).</li>
              </ol>
              <h3 class="em-22">a. To be completed by applicant</h3>
              <div class="ml-8">
                <h5 class="fw-400 em-18 mb-2">I would like to nominate the person below to manage the above premises in case of my illness or temporary absence within the validity period of the liquor licence, upon issuance of the licence.</h5>
                <h5 class="mb-2">Please provide information of the nominated reserve licensee</h5>
                <div v-for="(item,i) in management_data.q26a" :key="i">
                  <h5>Name</h5>
                  <div class="form-section">
                    <v-text-field disabled class="tf-half" v-model="item.chineseName" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
                    <v-text-field disabled class="tf-half" v-model="item.englishName" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
                  </div>
                  <h5 class="mt-0">HKID Card No.</h5>
                  <div class="d-flex flex-column" >
                      <div class="tf-div">
                          <div class="d-flex align-baseline">
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[0]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(0,'q26a_'+ i)" @focus="selectItem(0,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect big-gap"></div>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[1]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(1,'q26a_'+ i)" @focus="selectItem(1,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[2]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(2,'q26a_'+ i)" @focus="selectItem(2,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[3]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(3,'q26a_'+ i)" @focus="selectItem(3,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[4]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(4,'q26a_'+ i)" @focus="selectItem(4,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[5]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(5,'q26a_'+ i)" @focus="selectItem(5,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[6]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(6,'q26a_'+ i)" @focus="selectItem(6,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect">(</div>
                              <v-text-field disabled class="tf-multiple" v-model="item.hkid[7]" maxlength=1 outlined  :ref="'q26a_'+i" @focus="selectItem(7,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect">)</div>
                          </div>
                      </div>
                      <div v-show="item.idError" class="msg-div">Invalid input</div>
                  </div>
                  <h5>Contact</h5>
                  <div class="form-section">
                    <v-text-field disabled class="tf-half" v-model="item.contact.tel" :rules="form.fullnameRules"  label="Tel. no." outlined required></v-text-field>
                    <v-text-field disabled class="tf-half" v-model="item.contact.fax" :rules="form.fullnameRules"  label="Fax no." outlined required></v-text-field>
                  </div>
                  <v-checkbox disabled  class="" v-model="item.agree" :off-icon="'mdi-radiobox-blank'" :on-icon="'mdi-radiobox-marked'" >
                    <template v-slot:label>
                      <h5 class="fw-400 em-18">I hereby give consent to the Commissioner of Police to provide my personal data kept by the Hong Kong Police Force to the Secretary of the Liquor Licensing Board for the purpose of, or any purpose related to, the handling of the above application.</h5>
                    </template>
                  </v-checkbox>
                  <h3 class="em-22">b. Please download the form and sign it by the nominated reserve licensee. Then send it back to office by post or in person.</h3>
                  <div class="d-flex align-center flex-wrap t-wrap px-5 pt-6 ml-4">
                    <img width="56" class="mb-3 mt-3" src="../../assets/pdf.svg" />
                    <h5 class="fw-400 em-18 ma-0 ml-4">
                      <a :href="publicPath+'fehb266_Nom. Res Licensee.pdf'" target="_blank">
                        ‘Nomination of Reserve Licensee’ FEHB 266</a></h5>
                      <a class="icon-a ma-0 mt-3" :href="publicPath+'fehb266_Nom. Res Licensee.pdf'" download="fehb266_Nom. Res Licensee.pdf" ><v-icon class="ml-2 mb-3" color="primary">mdi-download</v-icon></a>
                  </div>
                  <h3 class="em-22">c. Upload the document</h3>
                  <!-- Table -->
                  <div class='o-table mb-2 mb-6'>
                    <div class="d-flex"><h5 class="em-22 mw-6">Document Type</h5><h5 class="em-22 mw-4">Last Update</h5></div>
                    <BoldLine :options="{color:'rgba(177,177,177,0.37)',height:'2px',width:'100%'}"></BoldLine>
                    <div class="d-flex py-5 ">
                      <div class="d-flex mw-6 align-center">
                        <div class="o-t-item-div">A copy of HKID card</div>
                      </div>
                      <div class="d-flex align-center justify-space-between mw-4">
                        <h5 class="ma-0 ml-1 em-18 fw-400">-</h5>
                      </div>
                    </div>
                    <div class="d-flex py-5 ">
                      <div class="d-flex mw-6 align-center">
                        <div class="o-t-item-div">A recent photograph</div>
                      </div>
                      <div class="d-flex align-center justify-space-between mw-4">
                        <h5 class="ma-0 ml-1 em-18 fw-400">-</h5>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                </div>
              </div>
            </div>
          </div>
        </v-form>
      </div>
    </div>
    <!-- Operation -->
    <div class="body">
      <div class="form-bg-circle hidden-md-and-down">5</div>
      <div class="form-div" >
        <v-form v-model="form.valid">
          <h2 class="purple-header em-26">F. Nature of Business</h2>
            <div class="d-flex mt-n2">
              <h5> 27. </h5>
              <h5 class="ml-1" >The percentage of revenue generated from liquor selling to the total revenue of the subject premises </h5>
            </div>
            <div class="form-section mt-3 justify-start align-baseline" >
              <v-text-field disabled class="tf-half mr-2" v-model="operation_data.q27" :rules="form.fullnameRules"  label="" outlined required></v-text-field>
              <p class="mb-0">%</p>
            </div>
            <h5 class="mt-3">28 . Nature of business of the subject premises  (you can tick more than 1 box)</h5>
            <div >
              <div class="form-section ml-8 justify-start">
                <v-checkbox disabled  v-model="operation_data.q28.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Bar" value="Bar"></v-checkbox>
                <v-checkbox disabled  v-model="operation_data.q28.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Karaoke" value="Karaoke"></v-checkbox>
                <v-checkbox disabled  v-model="operation_data.q28.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Cocktail Lounge" value="Cocktail Lounge"></v-checkbox>
                <v-checkbox disabled  v-model="operation_data.q28.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Restaurant" value="Restaurant"></v-checkbox>
                <v-checkbox disabled  v-model="operation_data.q28.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Night Club" value="Night Club"></v-checkbox>
                <v-checkbox disabled  v-model="operation_data.q28.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Coffee Shop" value="Coffee Shop"></v-checkbox>
                <v-checkbox disabled  v-model="operation_data.q28.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Disco" value="Disco"></v-checkbox>
                <v-checkbox disabled  v-model="operation_data.q28.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Hotel" value="Hotel"></v-checkbox>
              </div>
              <div class="form-section ml-8 flex-column">
                <v-checkbox disabled  class="o-cb lg" v-model="operation_data.q28.options" on-icon="mdi-check-box-outline" label="Others, please specify:" value="Other"></v-checkbox>
                <v-text-field disabled v-model="operation_data.q28.others" class="tf-half mt-2 ml-11" :rules="form.fullnameRules"  label="Please specify" outlined required></v-text-field>
              </div>
            </div>
            <h5 class="mt-3">29 . Requirement of Endorsements</h5>

            <div class="d-flex mt-3 ml-8 mb-2">
                <h5 class="fw-400 em-18 mb-0 mr-1">a.</h5>
                <h5 class="fw-400 em-18 mb-0">Whether a bar endorsement is required? That is, whether the premises are exclusively or mainly used for the sale and consumption of intoxicating liquors?</h5>
            </div>
            <div class="form-section mb-4 ml-4">
              <v-radio-group v-model="operation_data.q29.a" class="tf-inline-radio-gp ml-enhanced" row>
                  <v-radio disabled  class="row-radio" :label="'Yes'" :value="true"></v-radio>
                  <v-radio disabled  class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <div class="d-flex mt-3 ml-8 mb-2">
                <h5 class="fw-400 em-18 mb-0 mr-1">b.</h5>
                <h5 class="fw-400 em-18 mb-0">Whether permission for dancing is required?</h5>
            </div>
            <div class="form-section mb-4 ml-4">
              <v-radio-group v-model="operation_data.q29.b" class="tf-inline-radio-gp ml-enhanced" row>
                  <v-radio disabled  class="row-radio" :label="'Yes'" :value="true"></v-radio>
                  <v-radio disabled  class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <div class="d-flex mt-3 ml-8 mb-2">
                <h5 class="fw-400 em-18 mb-0 mr-1">c.</h5>
                <h5 class="fw-400 em-18 mb-0">Whether the premises are to be used as a hotel?</h5>
            </div>
            <div class="form-section mb-4 ml-4">
              <v-radio-group v-model="operation_data.q29.c" class="tf-inline-radio-gp ml-enhanced" row>
                  <v-radio disabled  class="row-radio" :label="'Yes'" :value="true"></v-radio>
                  <v-radio disabled  class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>

            <h5 class="mt-3">30 . Please answer this question if the business nature is disco/karaoke/nightclub/ the premises requiring dancing endorsement</h5>

            <div class="d-flex mt-3 ml-8 mb-2">
                <h5 class="fw-400 em-18 mb-0 mr-1">a.</h5>
                <h5 class="fw-400 em-18 mb-0">Do you intend to employ hostesses/hostess leaders/dancing partners/dancing instructors?</h5>
            </div>
            <div class="form-section mb-4 ml-4">
              <v-radio-group v-model="operation_data.q30.a.a1" class="tf-inline-radio-gp ml-enhanced" row>
                  <v-radio disabled  class="row-radio" :label="'Yes'" :value="true"></v-radio>
                  <v-radio disabled  class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <div v-show="operation_data.q30.a.a1==true" class="mt-n2">
              <div class="d-flex mt-3 ml-8" >
                <h5 class="fw-400 em-18 mb-0 mr-1"></h5>
                <h5 class="fw-400 em-18 mb-0 ml-4">Have you applied for a Public Dance Hall Licence?</h5>
              </div>
              <div class="form-section mb-4 ml-4">
                <v-radio-group v-model="operation_data.q30.a.a2" class="tf-inline-radio-gp ml-enhanced" row>
                    <v-radio disabled  class="row-radio" :label="'Yes'" :value="true"></v-radio>
                    <v-radio disabled  class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
                </v-radio-group>
              </div>
            </div>
            <div class="d-flex mt-3 ml-8 mb-2">
                <h5 class="fw-400 em-18 mb-0 mr-1">b.</h5>
                <h5 class="fw-400 em-18 mb-0">Do you intend to employ female karaoke attendants/female public relation officers/ female guest relation officers?</h5>
            </div>
            <div class="form-section mb-4 ml-4">
              <v-radio-group v-model="operation_data.q30.a.b1" class="tf-inline-radio-gp ml-enhanced" row>
                  <v-radio disabled  class="row-radio" :label="'Yes'" :value="true"></v-radio>
                  <v-radio disabled  class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <div v-show="operation_data.q30.a.b1==true" class="mt-n3">
              <div class="d-flex mt-3 ml-8" >
                <h5 class="fw-400 em-18 mb-0 mr-1"></h5>
                <h5 class="fw-400 em-18 mb-0 ml-4">Please state the exact number of persons to be employed</h5>
              </div>
              <div class="form-section mb-4 ml-13 mt-6">
                <v-text-field disabled class="tf-half" v-model="operation_data.q30.b.b2" :rules="form.fullnameRules"  label="" outlined required></v-text-field>
              </div>
            </div>

            <h2 class="purple-header em-26">G. Operation Hours</h2>

            <div class="mt-1 mb-1 d-flex align-center">
              <h5>31 .  Business and Management Related Information</h5>
              <v-tooltip right >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon class="mt-2 ml-3 " color="secondary" dark v-bind="attrs" v-on="on">
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
            <div class="ml-11"><h5 class="my-0 ml-2 fw-400 em-18">Please state in 24-hour format </h5></div>
            <div class="form-section ml-11 justify-start align-center pt-3">
               <div class="d-flex flex-column">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">From </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="operation_data.openingHrs[0].from[0]" class="ml-2 tf-multiple time" :ref="'31_from_h'"  maxlength=2  @keyup="timeTFfocusNext('31_from_h','31_from_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox disabled  v-model="operation_data.openingHrs[0].from[1]" class="ml-2 tf-multiple time" :ref="'31_from_m'"  maxlength=2 @keyup="timeTFfocusNext('31_from_m','31_to_h')" :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                    </div>
                </div>
                <div class="mx-3">-</div>
                <div class="d-flex flex-column ">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">To </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="operation_data.openingHrs[0].to[0]" class="ml-2 tf-multiple time" :ref="'31_to_h'"  maxlength=2  @keyup="timeTFfocusNext('31_to_h','31_to_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox disabled  v-model="operation_data.openingHrs[0].to[1]" class="ml-2 tf-multiple time" :ref="'31_to_m'"  maxlength=2  :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                    </div>
                </div>
            </div>
            <div class="form-section ml-11 justify-start align-center pb-3 mt-n2">
               <div class="d-flex flex-column">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">From </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="operation_data.openingHrs[1].from[0]" class="ml-2 tf-multiple time" :ref="'31_from_h2'"  maxlength=2  @keyup="timeTFfocusNext('31_from_h2','31_from_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox disabled  v-model="operation_data.openingHrs[1].from[1]" class="ml-2 tf-multiple time" :ref="'31_from_m2'"  maxlength=2  @keyup="timeTFfocusNext('31_from_m2','31_to_h2')" :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                    </div>
                </div>
                <div class="mx-3 ">-</div>
                <div class="d-flex flex-column ">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">To </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="operation_data.openingHrs[1].to[0]" class="ml-2 tf-multiple time" :ref="'31_to_h2'"  maxlength=2 @keyup="timeTFfocusNext('31_to_h2','31_to_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox disabled  v-model="operation_data.openingHrs[1].to[1]" class="ml-2 tf-multiple time" :ref="'31_to_m2'"  maxlength=2  :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                    </div>
                </div>
            </div>

            <div class="mt-1 mb-1 d-flex align-center">
              <h5>32 .  The liquor selling hours of the establishment are</h5>
              <v-tooltip right >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon class="mt-2 ml-3 " color="secondary" dark v-bind="attrs" v-on="on">
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
            <div class="ml-11"><h5 class="my-0 ml-2 fw-400 em-18">Please state in 24-hour format </h5></div>
            <div class="form-section ml-11 justify-start align-center pt-3">
               <div class="d-flex flex-column">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">From </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="operation_data.sellingHrs[0].from[0]" class="ml-2 tf-multiple time" :ref="'32_from_h'"  maxlength=2  @keyup="timeTFfocusNext('32_from_h','32_from_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox disabled  v-model="operation_data.sellingHrs[0].from[1]" class="ml-2 tf-multiple time" :ref="'32_from_m'"  maxlength=2 @keyup="timeTFfocusNext('32_from_m','32_to_h')" :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                    </div>
                </div>
                <div class="mx-3">-</div>
                <div class="d-flex flex-column ">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">To </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="operation_data.sellingHrs[0].to[0]" class="ml-2 tf-multiple time" :ref="'32_to_h'"  maxlength=2  @keyup="timeTFfocusNext('32_to_h','32_to_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox disabled  v-model="operation_data.sellingHrs[0].to[1]" class="ml-2 tf-multiple time" :ref="'32_to_m'"  maxlength=2  :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                    </div>
                </div>
            </div>
            <div class="form-section ml-11 justify-start align-center pb-3 mt-n2">
               <div class="d-flex flex-column">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">From </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="operation_data.sellingHrs[1].from[0]" class="ml-2 tf-multiple time" :ref="'32_from_h2'"  maxlength=2  @keyup="timeTFfocusNext('32_from_h2','32_from_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox disabled  v-model="operation_data.sellingHrs[1].from[1]" class="ml-2 tf-multiple time" :ref="'32_from_m2'"  maxlength=2  @keyup="timeTFfocusNext('32_from_m2','32_to_h2')" :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                    </div>
                </div>
                <div class="mx-3 ">-</div>
                <div class="d-flex flex-column ">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">To </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="operation_data.sellingHrs[1].to[0]" class="ml-2 tf-multiple time" :ref="'32_to_h2'"  maxlength=2 @keyup="timeTFfocusNext('32_to_h2','32_to_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox disabled  v-model="operation_data.sellingHrs[1].to[1]" class="ml-2 tf-multiple time" :ref="'32_to_m2'"  maxlength=2  :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                    </div>
                </div>
            </div>

            <div class="mt-1 mb-1 d-flex align-center">
              <h5>33 .  The expected peak business hours of the establishment are</h5>
              <v-tooltip right >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon class="mt-2 ml-3 " color="secondary" dark v-bind="attrs" v-on="on">
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
            <div class="ml-11"><h5 class="my-0 ml-2 fw-400 em-18">Please state in 24-hour format </h5></div>
            <div class="form-section ml-11 justify-start align-center pt-3">
               <div class="d-flex flex-column">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">From </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="operation_data.peakHrs[0].from[0]" class="ml-2 tf-multiple time" :ref="'33_from_h'"  maxlength=2  @keyup="timeTFfocusNext('33_from_h','33_from_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox disabled  v-model="operation_data.peakHrs[0].from[1]" class="ml-2 tf-multiple time" :ref="'33_from_m'"  maxlength=2 @keyup="timeTFfocusNext('33_from_m','33_to_h')" :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                    </div>
                </div>
                <div class="mx-3">-</div>
                <div class="d-flex flex-column ">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">To </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="operation_data.peakHrs[0].to[0]" class="ml-2 tf-multiple time" :ref="'33_to_h'"  maxlength=2  @keyup="timeTFfocusNext('33_to_h','33_to_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox disabled  v-model="operation_data.peakHrs[0].to[1]" class="ml-2 tf-multiple time" :ref="'33_to_m'"  maxlength=2  :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                    </div>
                </div>
            </div>
            <div class="form-section ml-11 justify-start align-center pb-3 mt-n2">
               <div class="d-flex flex-column">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">From </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="operation_data.peakHrs[1].from[0]" class="ml-2 tf-multiple time" :ref="'33_from_h2'"  maxlength=2  @keyup="timeTFfocusNext('33_from_h2','33_from_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox disabled  v-model="operation_data.peakHrs[1].from[1]" class="ml-2 tf-multiple time" :ref="'33_from_m2'"  maxlength=2  @keyup="timeTFfocusNext('33_from_m2','33_to_h2')" :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                    </div>
                </div>
                <div class="mx-3 ">-</div>
                <div class="d-flex flex-column ">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">To </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox disabled  v-model="operation_data.peakHrs[1].to[0]" class="ml-2 tf-multiple time" :ref="'33_to_h2'"  maxlength=2 @keyup="timeTFfocusNext('33_to_h2','33_to_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox disabled  v-model="operation_data.peakHrs[1].to[1]" class="ml-2 tf-multiple time" :ref="'33_to_m2'"  maxlength=2  :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                    </div>
                </div>
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
              <v-text-field disabled class="tf-half" v-model="operation_data.referee[0].chineseName" :rules="form.fullnameRules"  label="Chinese Name" outlined required></v-text-field>
              <v-radio-group v-model="operation_data.referee[0].gender"  class="tf-inline-radio-gp" row>
                <v-radio disabled  class="row-radio" :label="'先生'" :value="'M'"></v-radio>
                <v-radio disabled  class="row-radio ml-3" :label="'女士'" :value="'F'"></v-radio>
              </v-radio-group>
              <v-text-field disabled class="tf-half" v-model="operation_data.referee[0].englishName" :rules="form.fullnameRules"  label="English Name" outlined required></v-text-field>
              <v-radio-group v-model="operation_data.referee[0].gender"  class="tf-inline-radio-gp" row>
                <v-radio disabled  class="row-radio" :label="'Mr.'" :value="'M'"></v-radio>
                <v-radio disabled  class="row-radio ml-3" :label="'Ms.'" :value="'F'"></v-radio>
              </v-radio-group>
          </div>
          <h5 class="mt-2 ml-7">Contact </h5>
          <div class="form-section justify-start ml-7">
            <v-text-field disabled v-model="operation_data.referee[0].contact" class="tf-half" :rules="form.fullnameRules"  label="Tel no." outlined required></v-text-field>
          </div>
          <h5 class="mt-3 ml-7">Correspondence Address </h5>
          <div class="form-section mt-n2 ml-7">
            <v-text-field disabled v-model="operation_data.referee[0].address[0]" class="tf-full mt-2"  :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
            <v-text-field disabled v-model="operation_data.referee[0].address[1]" class="tf-full mt-n4" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
            <v-text-field disabled v-model="operation_data.referee[0].address[2]" class="tf-full mt-n4" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
            <v-select disabled  v-model="operation_data.referee[0].address[3]" class="mt-n4" :items="region.en" label="Region" outlined></v-select>
          </div>
          <h5 class="mt-3 ml-7">I have known the above referee for a period of </h5>
          <div class="form-section mt-n2 ml-7 mb-8">
            <v-select disabled   v-model="operation_data.referee[0].period.years" class="tf-half mt-2" :items="[0,1,2,3,4,5,6,7,8,9,'10 or above']" label="No. of years" outlined></v-select>
            <v-select disabled   v-model="operation_data.referee[0].period.months" class="tf-half mt-2" :items="[0,1,2,3,4,5,6,7,8,9,10,11,12]" label="No. of months" outlined></v-select>
          </div>
          <h2 class="mt-0 ml-7">Referee 2</h2>
          <h5 class="mt-2 ml-7">Name </h5>
          <div class="form-section justify-start ml-7">
              <v-text-field disabled class="tf-half" v-model="operation_data.referee[1].chineseName" :rules="form.fullnameRules"  label="Chinese Name" outlined required></v-text-field>
              <v-radio-group v-model="operation_data.referee[1].gender" class="tf-inline-radio-gp" row>
                <v-radio disabled  class="row-radio" :label="'先生'" :value="'M'"></v-radio>
                <v-radio disabled  class="row-radio ml-3" :label="'女士'" :value="'F'"></v-radio>
              </v-radio-group>
              <v-text-field disabled class="tf-half" v-model="operation_data.referee[1].englishName" :rules="form.fullnameRules"  label="English Name" outlined required></v-text-field>
              <v-radio-group v-model="operation_data.referee[1].gender" class="tf-inline-radio-gp" row>
                <v-radio disabled  class="row-radio" :label="'Mr.'" :value="'M'"></v-radio>
                <v-radio disabled  class="row-radio ml-3" :label="'Ms.'" :value="'F'"></v-radio>
              </v-radio-group>
          </div>
          <h5 class="mt-2 ml-7">Contact </h5>
          <div class="form-section justify-start ml-7">
            <v-text-field disabled v-model="operation_data.referee[1].contact" class="tf-half" :rules="form.fullnameRules"  label="Tel no." outlined required></v-text-field>
          </div>
          <h5 class="mt-3 ml-7">Correspondence Address </h5>
          <div class="form-section mt-n2 ml-7">
            <v-text-field disabled v-model="operation_data.referee[1].address[0]" class="tf-full mt-2"  :rules="form.addressRules"  label="Room/Flat/Unit, Floor, Block," outlined required></v-text-field>
            <v-text-field disabled v-model="operation_data.referee[1].address[1]" class="tf-full mt-n4" :rules="form.addressRules"  label="Building Name/Name of Estate or Village, Building No./Lot No.," outlined required></v-text-field>
            <v-text-field disabled v-model="operation_data.referee[1].address[2]" class="tf-full mt-n4" :rules="form.addressRules"  label="Street Name, District," outlined required></v-text-field>
            <v-select disabled  v-model="operation_data.referee[1].address[3]" class="mt-n4" :items="region.en" label="Region" outlined></v-select>
          </div>
          <h5 class="mt-3 ml-7">I have known the above referee for a period of </h5>
          <div class="form-section mt-n2 ml-7 mb-8">
            <v-select disabled  v-model="operation_data.referee[1].period.years" class="tf-half mt-2" :items="[0,1,2,3,4,5,6,7,8,9,'10 or above']" label="No. of years" outlined></v-select>
            <v-select disabled  v-model="operation_data.referee[1].period.months" class="tf-half mt-2" :items="[0,1,2,3,4,5,6,7,8,9,10,11,12]" label="No. of months" outlined></v-select>
          </div>
        </v-form>
      </div>


    </div>
    <!-- Upload Doc -->
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

      <div class='o-table'>
        <div class="d-flex"><h5 class="em-22 mw-6">Document Type</h5><h5 class="em-22 mw-3 text-right">Last Update</h5></div>
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
              </div>
            </div>
          </div>
          <div class="mw-3 text-right">
            <h5 class="ma-0 ml-1 em-18 fw-400 text-right">{{item.lastUpdate}}</h5>
          </div>
        </div>
      </div>

      <div class="form-div mt-10">
          <h2 >2. Additional document</h2>
      </div>

      <div class='o-table'>
        <div class="d-flex"><h5 class="em-22 mw-6">Additional Information  ( Annex l )</h5><h5 class="em-22 mw-3 text-right">Last Update</h5></div>
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
              </div>
            </div>
          </div>
          <div class="mw-3 text-right">
            <h5 class="ma-0 ml-1 em-18 fw-400 text-right">{{item.lastUpdate}}</h5>
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
        <div class="d-flex"><h5 class="em-22 mw-6">The nominated reserve licensee  ( Annex ll )</h5><h5 class="em-22 mw-3 text-right">Last Update</h5></div>
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
              </div>
            </div>
          </div>
          <div class="mw-3 text-right">
            <h5 class="ma-0 ml-1 em-18 fw-400 text-right">{{item.lastUpdate}}</h5>
          </div>
        </div>
      </div>
    </div>
    <!-- Auth -->
    <div class="body">
      <div class="form-bg-circle hidden-md-and-down">7</div>
      <div class="form-div" >
        <v-form v-model="form.valid">
            <h2 >Identity Authentication</h2>
            <h5 class="ma-0">In accordance with the Electronic Transaction Ordinance, it is a requirement to sign on the form with digital signature where signatures of persons are required. </h5>
            <v-radio-group v-model="auth_data.auth" class="list-radio-gp ml-8 my-3" >
              <v-radio disabled  class="mt-5" :label="'Proceed to authenticate identity by Digital Signature'" :value="'proceed'"></v-radio>
              <v-radio disabled  class="mt-5" :label="'Re-input your password to proceed to authenticate your identity'" :value="'re-input'"></v-radio>
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
    <div class="footer mt-6">
      <v-btn class="footer-btn b-dark">{{$t('save_draft')}}</v-btn>
      <v-btn class="footer-btn b-primary" :disabled="false" @click="$router.push({name:'NewSubmitted'})">Submit</v-btn>
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
    MultipleTextfield
  },
  data: function () {
    return {
      agree: false,
      btnDisabled:true,
      hkidError:false,
      checkbox_selected : [],
      publicPath: process.env.BASE_URL,
      timebox:{
        hours:['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
        mins:['00','05','10','15','20','25','30','35','40','45','50','55']
      },
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
          english :['Room 550, 5/F, Block 7,','123Building','Wanchai, Hong Kong','Hong Kong']
        },
        restaurant_1_No:''.split(""),
        contact: {
          tel:'12345678',
          fax:'12345678'
        },
        shopSign: {
          chinese: '陳大文',
          english: 'Dai Man Chan'
        },
        brNo : '22422424424'.split(""),
        size: '2000',
        q5b : false,
        q5b_detail : {
          companyName: '',
          companyBr: ''.split(""),
          companyNo: ''.split(""),
        },
        q6_detail:'', q6a : '', q6b : '', q6b_a : '', q6b_a_restaurantNo:''.split(""), q6b_b_fileRef :'',
        q7:{
          options:'',others:'',
        },
        q8:'',
        an_a_size:'',an_b:{options:'',type:''},an_c:'',an_d:''
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
        q17_a_detail:{shopsign:'',address:['','','','']},
        q17_b_detail:{shopsign:'',address:['','','','']},
        q17_c_detail:{shopsign:'',address:['','','','']},
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
      management_data:{
        q21:{option:'',others:''},
        q21_partner:[{chineseName:'',englishName:'',hkid:''.split(''),idError:false}],
        q21_director:[{chineseName:'',englishName:'',hkid:''.split(''),idError:false}],
        q21_Employee:[{position:'', chineseName:'',englishName:'',hkid:''.split(''),idError:false}],
        q22:'',q22_detail:[{chineseName:'',englishName:'',hkid:''.split(''),idError:false}],
        q23:'',q24:'',
        dutyHrs:[{from:['',''],to:['','']},{from:['',''],to:['','']}],
        weeklyDayoff:{days:[''],other:''},
        q25c:undefined,q25_c_detail:[{chineseName:'',englishName:'',hkid:''}],
        q26:true,
        // change the 4-5 or 4-6-1 by changing the invitation option below:
        invitation:{option:true,email:'',sent:false},q26a:[{chineseName:'',englishName:'',hkid:'',contact:{tel:'',fax:'',agree:undefined}}]
      },
      operation_data : {
        q27:'',q28:{options:[],others:''},
        q29:{a:undefined,b:undefined,c:undefined},
        q30:{a:{a1:undefined,a2:undefined},b:{b1:undefined,b2:''}},
        openingHrs:[{from:['',''],to:['','']},{from:['',''],to:['','']}],
        sellingHrs:[{from:['',''],to:['','']},{from:['',''],to:['','']}],
        peakHrs:[{from:['',''],to:['','']},{from:['',''],to:['','']}],
        referee:[
          {
            chineseName:'',
            englishName: '',
            gender:'',
            contact:'',
            address : ['','','',''],
            period:{years:undefined,months:undefined}
          },
          {
            chineseName:'',
            englishName: '',
            gender:'',
            contact:'',
            address : ['','','',''],
            period:{years:undefined,months:undefined}
          }
        ]
      },
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
      ],
      auth_data : {
        auth:'re-input',
        reinput:'',
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
      region:{
        tc:['香港','九龍','新界'],
        en:['Hong Kong','Kowloon','New Territories']
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
        refID: 'companNo',
        error :{show:false,msg:'Invalid input'},
        amount: 7,
        connect: [],
      },
      restaurant_1_NoMTF:{
        value : '',
        refID: 'restaurant_1_No',
        error :{show:false,msg:'Invalid input'},
        amount: 10,
        connect: [1,3],
      },
      restaurantNoMTF:{
        value : '',
        refID: 'restaurantNo',
        error :{show:false,msg:'Invalid input'},
        amount: 10,
        connect: [1,3],
      }
    }
  },
  methods:{
    async scrollToElement(class_name) {
      const el = this.$el.getElementsByClassName(class_name)[0];
      await this.$nextTick();
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
    },
    updatePremisesBrMTF : function (inValue,i){
      this.updateMTF(inValue,i,this.premisesBrMTF);
    },updateCompanyBrMTF : function (inValue,i){
      this.updateMTF(inValue,i,this.companyBrMTF);
    },updateCompanyNoMTF : function (inValue,i){
      this.updateMTF(inValue,i,this.companyNoMTF);
    },updateRestaurantNoMTF : function (inValue,i){
      this.updateMTF(inValue,i,this.restaurantNoMTF);
    },updateRestaurant_1_NoMTF : function (inValue,i){
      this.updateMTF(inValue,i,this.restaurant_1_NoMTF);
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
    yearItems: function (){
      var cur = new Date().getFullYear();
      var a = [];
      var i;
      for (i = cur; i >= cur-100; i--) {
        a.push(i);
      }
      return a;
    },
    timeTFfocusNext(self,target){
      setTimeout(()=>{
        if((this.$refs[self].$refs.input.value + '').length ==2){
          this.$refs[self].blur();
          this.$refs[target].focus();
        }
      },10)
    },
    sendInvitation(){
      this.management_data.invitation.sent= true;
    },
    addRecord: function (){
      var tar = {address:['','','',''],period:{start:'',to:''},position:''};
      this.applicant_data.q16_detail.push(tar);
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
    addPerson(target){
      target.push({chineseName:'',englishName:'',hkid:''.split(''),idError:false});
    },
    addEmployee(target){
      target.push({position:'', chineseName:'',englishName:'',hkid:''.split(''),idError:false});
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

h2.dec{
    font-size:1.5625em;
    text-decoration: underline;
}

.form-div{
    width:clamp(280px, 100%, 720px);
    .o-btn-action{
        margin-top:32.5px;
    }
}

h5{
  color:black;
}

p.em-16{
  font-size:1em;
  line-height:1.2em;
  color:$ols-t-darkGrey;
}

h5.dec{
  font-size:1.25em;
  text-decoration: underline;
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

h5.em-18{
  font-size: 1em;
}

p.em-16{
  font-size:0.9375em;
  line-height:1.1em;
}

h5.dec{
  font-size:1.175em;
  text-decoration: underline;
}

h2.em-26 {
  font-size: 1.4em;
}

h2.dec{
    font-size:1.375em;
    text-decoration: underline;
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
</style>

