<template>
  <div class="content-div content-div-1">
    <div class="header">
      <h1>Application for New Issue of a Liquor Licence</h1>
      <div class="d-flex align-center ">
        <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
        <h2>Mode of Operation</h2>
      </div>
    </div>
    <div class="body">
      <div class="form-bg-circle hidden-md-and-down">5</div>
      <div class="form-div" >
        <v-form v-model="form.valid">
          <h2 class="purple-header em-26">F. Nature of Business</h2>
            <div class="d-flex mt-n2">
              <h5> 27. </h5>
              <h5 class="ml-1" >The estimated percentage of revenue generated from liquor selling to the total revenue of the subject premises </h5>
            </div>
            <div class="form-section mt-3 justify-start align-baseline" >
              <v-text-field class="tf-half mr-2" v-model="operation_data.q27" :rules="form.fullnameRules"  label="" outlined required></v-text-field>
              <p class="mb-0">%</p>
            </div>
            <h5 class="mt-3">28 . Nature of business of the subject premises  (you can tick more than 1 box)</h5>
            <div >
              <div class="form-section ml-8 justify-start">
                <v-checkbox v-model="operation_data.q28.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Bar" value="Bar"></v-checkbox>
                <v-checkbox v-model="operation_data.q28.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Karaoke" value="Karaoke"></v-checkbox>
                <v-checkbox v-model="operation_data.q28.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Cocktail Lounge" value="Cocktail Lounge"></v-checkbox>
                <v-checkbox v-model="operation_data.q28.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Restaurant" value="Restaurant"></v-checkbox>
                <v-checkbox v-model="operation_data.q28.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Night Club" value="Night Club"></v-checkbox>
                <v-checkbox v-model="operation_data.q28.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Coffee Shop" value="Coffee Shop"></v-checkbox>
                <v-checkbox v-model="operation_data.q28.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Disco" value="Disco"></v-checkbox>
                <v-checkbox v-model="operation_data.q28.options" class="o-cb lg three-block"  on-icon="mdi-check-box-outline" label="Hotel" value="Hotel"></v-checkbox>
              </div>
              <div class="form-section ml-8 flex-column">
                <v-checkbox class="o-cb lg" v-model="operation_data.q28.options" on-icon="mdi-check-box-outline" label="Others, please specify:" value="Other"></v-checkbox>
                <v-text-field v-model="operation_data.q28.others" class="tf-half mt-2 ml-11" :rules="form.fullnameRules"  label="Please specify" outlined required></v-text-field>
              </div>
            </div>
            <h5 class="mt-3">29 . Requirement of Endorsements</h5>

            <div class="d-flex mt-3 ml-8 mb-2">
                <h5 class="fw-400 em-18 mb-0 mr-1">a.</h5>
                <h5 class="fw-400 em-18 mb-0">Whether a bar endorsement is required? That is, whether the premises are exclusively or mainly used for the sale and consumption of intoxicating liquors?</h5>
            </div>
            <div class="form-section mb-4 ml-4">
              <v-radio-group v-model="operation_data.q29.a" class="tf-inline-radio-gp ml-enhanced" row>
                  <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
                  <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <div class="d-flex mt-3 ml-8 mb-2">
                <h5 class="fw-400 em-18 mb-0 mr-1">b.</h5>
                <h5 class="fw-400 em-18 mb-0">Whether permission for dancing is required?</h5>
            </div>
            <div class="form-section mb-4 ml-4">
              <v-radio-group v-model="operation_data.q29.b" class="tf-inline-radio-gp ml-enhanced" row>
                  <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
                  <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <div class="d-flex mt-3 ml-8 mb-2">
                <h5 class="fw-400 em-18 mb-0 mr-1">c.</h5>
                <h5 class="fw-400 em-18 mb-0">Whether the premises are to be used as a hotel?</h5>
            </div>
            <div class="form-section mb-4 ml-4">
              <v-radio-group v-model="operation_data.q29.c" class="tf-inline-radio-gp ml-enhanced" row>
                  <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
                  <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>

            <h5 class="mt-3">30 . Please answer this question if the business nature is disco/karaoke/nightclub/ the premises requiring dancing endorsement</h5>

            <div class="d-flex mt-3 ml-8 mb-2">
                <h5 class="fw-400 em-18 mb-0 mr-1">a.</h5>
                <h5 class="fw-400 em-18 mb-0">Do you intend to employ hostesses/hostess leaders/dancing partners/dancing instructors?</h5>
            </div>
            <div class="form-section mb-4 ml-4">
              <v-radio-group v-model="operation_data.q30.a.a1" class="tf-inline-radio-gp ml-enhanced" row>
                  <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
                  <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <div v-show="operation_data.q30.a.a1==true" class="mt-n2">
              <div class="d-flex mt-3 ml-8" >
                <h5 class="fw-400 em-18 mb-0 mr-1"></h5>
                <h5 class="fw-400 em-18 mb-0 ml-4">Have you applied for a Public Dance Hall Licence?</h5>
              </div>
              <div class="form-section mb-4 ml-4">
                <v-radio-group v-model="operation_data.q30.a.a2" class="tf-inline-radio-gp ml-enhanced" row>
                    <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
                    <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
                </v-radio-group>
              </div>
            </div>
            <div class="d-flex mt-3 ml-8 mb-2">
                <h5 class="fw-400 em-18 mb-0 mr-1">b.</h5>
                <h5 class="fw-400 em-18 mb-0">Do you intend to employ female karaoke attendants/female public relation officers/ female guest relation officers?</h5>
            </div>
            <div class="form-section mb-4 ml-4">
              <v-radio-group v-model="operation_data.q30.a.b1" class="tf-inline-radio-gp ml-enhanced" row>
                  <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
                  <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <div v-show="operation_data.q30.a.b1==true" class="mt-n3">
              <div class="d-flex mt-3 ml-8" >
                <h5 class="fw-400 em-18 mb-0 mr-1"></h5>
                <h5 class="fw-400 em-18 mb-0 ml-4">Please state the exact number of persons to be employed</h5>
              </div>
              <div class="form-section mb-4 ml-13 mt-6">
                <v-text-field class="tf-half" v-model="operation_data.q30.b.b2" :rules="form.fullnameRules"  label="" outlined required></v-text-field>
              </div>
            </div>

            <h2 class="purple-header em-26">G. Operation Hours</h2>

            <div class="mt-1 mb-1 d-flex align-center">
              <h5>31 .  The opening hours of the establishment are</h5>
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
                      <v-combobox v-model="operation_data.openingHrs[0].from[0]" class="ml-2 tf-multiple time" :ref="'31_from_h'"  maxlength=2  @keyup="timeTFfocusNext('31_from_h','31_from_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox v-model="operation_data.openingHrs[0].from[1]" class="ml-2 tf-multiple time" :ref="'31_from_m'"  maxlength=2 @keyup="timeTFfocusNext('31_from_m','31_to_h')" :items="timebox.mins" outlined>
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
                      <v-combobox v-model="operation_data.openingHrs[0].to[0]" class="ml-2 tf-multiple time" :ref="'31_to_h'"  maxlength=2  @keyup="timeTFfocusNext('31_to_h','31_to_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox v-model="operation_data.openingHrs[0].to[1]" class="ml-2 tf-multiple time" :ref="'31_to_m'"  maxlength=2  :items="timebox.mins" outlined>
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
                      <v-combobox v-model="operation_data.openingHrs[1].from[0]" class="ml-2 tf-multiple time" :ref="'31_from_h2'"  maxlength=2  @keyup="timeTFfocusNext('31_from_h2','31_from_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox v-model="operation_data.openingHrs[1].from[1]" class="ml-2 tf-multiple time" :ref="'31_from_m2'"  maxlength=2  @keyup="timeTFfocusNext('31_from_m2','31_to_h2')" :items="timebox.mins" outlined>
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
                      <v-combobox v-model="operation_data.openingHrs[1].to[0]" class="ml-2 tf-multiple time" :ref="'31_to_h2'"  maxlength=2 @keyup="timeTFfocusNext('31_to_h2','31_to_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox v-model="operation_data.openingHrs[1].to[1]" class="ml-2 tf-multiple time" :ref="'31_to_m2'"  maxlength=2  :items="timebox.mins" outlined>
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
                      <v-combobox v-model="operation_data.sellingHrs[0].from[0]" class="ml-2 tf-multiple time" :ref="'32_from_h'"  maxlength=2  @keyup="timeTFfocusNext('32_from_h','32_from_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox v-model="operation_data.sellingHrs[0].from[1]" class="ml-2 tf-multiple time" :ref="'32_from_m'"  maxlength=2 @keyup="timeTFfocusNext('32_from_m','32_to_h')" :items="timebox.mins" outlined>
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
                      <v-combobox v-model="operation_data.sellingHrs[0].to[0]" class="ml-2 tf-multiple time" :ref="'32_to_h'"  maxlength=2  @keyup="timeTFfocusNext('32_to_h','32_to_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox v-model="operation_data.sellingHrs[0].to[1]" class="ml-2 tf-multiple time" :ref="'32_to_m'"  maxlength=2  :items="timebox.mins" outlined>
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
                      <v-combobox v-model="operation_data.sellingHrs[1].from[0]" class="ml-2 tf-multiple time" :ref="'32_from_h2'"  maxlength=2  @keyup="timeTFfocusNext('32_from_h2','32_from_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox v-model="operation_data.sellingHrs[1].from[1]" class="ml-2 tf-multiple time" :ref="'32_from_m2'"  maxlength=2  @keyup="timeTFfocusNext('32_from_m2','32_to_h2')" :items="timebox.mins" outlined>
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
                      <v-combobox v-model="operation_data.sellingHrs[1].to[0]" class="ml-2 tf-multiple time" :ref="'32_to_h2'"  maxlength=2 @keyup="timeTFfocusNext('32_to_h2','32_to_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox v-model="operation_data.sellingHrs[1].to[1]" class="ml-2 tf-multiple time" :ref="'32_to_m2'"  maxlength=2  :items="timebox.mins" outlined>
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
                      <v-combobox v-model="operation_data.peakHrs[0].from[0]" class="ml-2 tf-multiple time" :ref="'33_from_h'"  maxlength=2  @keyup="timeTFfocusNext('33_from_h','33_from_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox v-model="operation_data.peakHrs[0].from[1]" class="ml-2 tf-multiple time" :ref="'33_from_m'"  maxlength=2 @keyup="timeTFfocusNext('33_from_m','33_to_h')" :items="timebox.mins" outlined>
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
                      <v-combobox v-model="operation_data.peakHrs[0].to[0]" class="ml-2 tf-multiple time" :ref="'33_to_h'"  maxlength=2  @keyup="timeTFfocusNext('33_to_h','33_to_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox v-model="operation_data.peakHrs[0].to[1]" class="ml-2 tf-multiple time" :ref="'33_to_m'"  maxlength=2  :items="timebox.mins" outlined>
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
                      <v-combobox v-model="operation_data.peakHrs[1].from[0]" class="ml-2 tf-multiple time" :ref="'33_from_h2'"  maxlength=2  @keyup="timeTFfocusNext('33_from_h2','33_from_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox v-model="operation_data.peakHrs[1].from[1]" class="ml-2 tf-multiple time" :ref="'33_from_m2'"  maxlength=2  @keyup="timeTFfocusNext('33_from_m2','33_to_h2')" :items="timebox.mins" outlined>
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
                      <v-combobox v-model="operation_data.peakHrs[1].to[0]" class="ml-2 tf-multiple time" :ref="'33_to_h2'"  maxlength=2 @keyup="timeTFfocusNext('33_to_h2','33_to_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox>
                      <div>:</div>
                      <v-combobox v-model="operation_data.peakHrs[1].to[1]" class="ml-2 tf-multiple time" :ref="'33_to_m2'"  maxlength=2  :items="timebox.mins" outlined>
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

    <div class="body light-purple pb-8">
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
            <v-select  v-model="operation_data.referee[0].period.years" class="tf-half mt-2" :items="[0,1,2,3,4,5,6,7,8,9,'10 or above']" label="year(s)" outlined :menu-props="{offsetY: true}"></v-select>
            <v-select  v-model="operation_data.referee[0].period.months" class="tf-half mt-2" :items="[0,1,2,3,4,5,6,7,8,9,10,11,12]" label="month(s)" outlined :menu-props="{offsetY: true}"></v-select>
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
            <v-select v-model="operation_data.referee[1].period.years" class="tf-half mt-2" :items="[0,1,2,3,4,5,6,7,8,9,'10 or above']" label="year(s)" outlined :menu-props="{offsetY: true}"></v-select>
            <v-select v-model="operation_data.referee[1].period.months" class="tf-half mt-2" :items="[0,1,2,3,4,5,6,7,8,9,10,11,12]" label="month(s)" outlined :menu-props="{offsetY: true}"></v-select>
          </div>
        </v-form>
      </div>


    </div>

    <div class="footer">
      <v-btn class="footer-btn b-dark">{{$t('save_draft')}}</v-btn>
      <v-btn class="footer-btn b-primary" :disabled="false" @click="$router.push({name:'NewUploadDoc'})">{{$t('save_and_next')}}</v-btn>
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
      region:{
        tc:['香港','九龍','新界'],
        en:['Hong Kong','Kowloon','New Territories']
      },
    }
  },
  methods:{
    timeTFfocusNext(self,target){
      console.log(this.$refs[self].$refs.input.value);
      setTimeout(()=>{
        if((this.$refs[self].$refs.input.value + '').length ==2){
          this.$refs[self].blur();
          this.$refs[target].focus();
        }
      },10)
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
    width:clamp(280px, 100%, 800px);
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
