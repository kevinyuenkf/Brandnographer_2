<template>
  <div class="content-div content-div-1">
    <div class="header">
      <h1>Application for New Issue of a Liquor Licence</h1>
      <div class="d-flex align-center ">
        <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
        <h2>Information Relating to Management</h2>
      </div>
    </div>
    <div class="body">
      <div class="form-bg-circle hidden-md-and-down" >4</div>
      <div class="form-div">
        <v-form v-model="form.valid" >
            <h2 class="purple-header em-26">E. Information of Relating to Management</h2>

            <h5 class="mt-8">21 . In what capacity are you applying for a licence?</h5>
            <div class="form-section justify-start">
              <v-radio-group v-model="management_data.q21.option" class="list-radio-gp ml-8 my-3 mt-0" style="width: 100%" >
                <v-radio class="mt-5" :label="'Sole Proprietor'" :value="'Sole'"></v-radio>
                <v-radio class="mt-5" :label="'Partner'" :value="'Partner'"></v-radio>
                <!-- Partner Callout-box -->
                <div v-show="management_data.q21.option=='Partner'" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
                  <div style="width:100%;">
                    <div class="box-block" v-for="(item,i) in management_data.q21_partner" :key="i" style="width:100%;">
                      <div class="d-flex pull-right">
                        <v-btn depressed class="o-btn-action plus grey-btn" color="secondary" @click="delOneOfDetail(item, i, management_data.q21_partner)">x</v-btn>
                      </div>
                      <h5>Please provide information of other partner(s)</h5>
                      <h5>Name</h5>
                      <div class="form-section">
                        <v-text-field class="tf-half" v-model="item.chineseName" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
                        <v-text-field class="tf-half" v-model="item.englishName" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
                      </div>
                      <h5 class="mt-0">HKID Card No.</h5>
                      <div class="d-flex flex-column" >
                          <div class="tf-div">
                              <div class="d-flex align-baseline">
                                  <v-text-field class="tf-multiple" v-model="item.hkid[0]" maxlength=1 outlined  :ref="'q21p_'+i" @input="focusNextItem(0,'q21p_'+ i)" @focus="selectItem(0,'q21p_'+ i)" :error="item.idError"></v-text-field>
                                  <div class="connect big-gap"></div>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[1]" maxlength=1 outlined  :ref="'q21p_'+i" @input="focusNextItem(1,'q21p_'+ i)" @focus="selectItem(1,'q21p_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[2]" maxlength=1 outlined  :ref="'q21p_'+i" @input="focusNextItem(2,'q21p_'+ i)" @focus="selectItem(2,'q21p_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[3]" maxlength=1 outlined  :ref="'q21p_'+i" @input="focusNextItem(3,'q21p_'+ i)" @focus="selectItem(3,'q21p_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[4]" maxlength=1 outlined  :ref="'q21p_'+i" @input="focusNextItem(4,'q21p_'+ i)" @focus="selectItem(4,'q21p_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[5]" maxlength=1 outlined  :ref="'q21p_'+i" @input="focusNextItem(5,'q21p_'+ i)" @focus="selectItem(5,'q21p_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[6]" maxlength=1 outlined  :ref="'q21p_'+i" @input="focusNextItem(6,'q21p_'+ i)" @focus="selectItem(6,'q21p_'+ i)" :error="item.idError"></v-text-field>
                                  <div class="connect">(</div>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[7]" maxlength=1 outlined  :ref="'q21p_'+i" @focus="selectItem(7,'q21p_'+ i)" :error="item.idError"></v-text-field>
                                  <div class="connect">)</div>
                              </div>
                          </div>
                          <div v-show="item.idError" class="msg-div">Invalid input</div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mb-8 mt-8 center-application">
                    <v-btn depressed class="o-btn-action plus" color="primary" @click="addPerson(management_data.q21_partner)">+</v-btn>
                    <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addPerson(management_data.q21_partner)">Add Partner</p>
                  </div>
                </div>
                <!--  -->
                <v-radio class="mt-5" :label="'Director of a Limited Company'" :value="'Director'"></v-radio>
                <!-- Director Callout-box -->
                <div v-show="management_data.q21.option=='Director'" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
                  <div style="width:100%;">
                    <div class="box-block" v-for="(item,i) in management_data.q21_director" :key="i" style="width:100%;">
                      <div class="d-flex pull-right">
                        <v-btn depressed class="o-btn-action plus grey-btn" color="secondary" @click="delOneOfDetail(item, i, management_data.q21_director)">x</v-btn>
                      </div>
                      <h5>Please provide information of other director(s)</h5>
                      <h5>Name</h5>
                      <div class="form-section">
                        <v-text-field class="tf-half" v-model="item.chineseName" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
                        <v-text-field class="tf-half" v-model="item.englishName" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
                      </div>
                      <h5 class="mt-0">HKID Card No.</h5>
                      <div class="d-flex flex-column" >
                          <div class="tf-div">
                              <div class="d-flex align-baseline">
                                  <v-text-field class="tf-multiple" v-model="item.hkid[0]" maxlength=1 outlined  :ref="'q21d_'+i" @input="focusNextItem(0,'q21d_'+ i)" @focus="selectItem(0,'q21d_'+ i)" :error="item.idError"></v-text-field>
                                  <div class="connect big-gap"></div>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[1]" maxlength=1 outlined  :ref="'q21d_'+i" @input="focusNextItem(1,'q21d_'+ i)" @focus="selectItem(1,'q21d_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[2]" maxlength=1 outlined  :ref="'q21d_'+i" @input="focusNextItem(2,'q21d_'+ i)" @focus="selectItem(2,'q21d_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[3]" maxlength=1 outlined  :ref="'q21d_'+i" @input="focusNextItem(3,'q21d_'+ i)" @focus="selectItem(3,'q21d_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[4]" maxlength=1 outlined  :ref="'q21d_'+i" @input="focusNextItem(4,'q21d_'+ i)" @focus="selectItem(4,'q21d_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[5]" maxlength=1 outlined  :ref="'q21d_'+i" @input="focusNextItem(5,'q21d_'+ i)" @focus="selectItem(5,'q21d_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[6]" maxlength=1 outlined  :ref="'q21d_'+i" @input="focusNextItem(6,'q21d_'+ i)" @focus="selectItem(6,'q21d_'+ i)" :error="item.idError"></v-text-field>
                                  <div class="connect">(</div>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[7]" maxlength=1 outlined  :ref="'q21d_'+i" @focus="selectItem(7,'q21d_'+ i)" :error="item.idError"></v-text-field>
                                  <div class="connect">)</div>
                              </div>
                          </div>
                          <div v-show="item.idError" class="msg-div">Invalid input</div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mb-8 mt-8 center-application">
                    <v-btn depressed class="o-btn-action plus" color="primary" @click="addPerson(management_data.q21_director)">+</v-btn>
                    <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addPerson(management_data.q21_director)">Add Director</p>
                  </div>
                </div>
                <!--  -->
                <v-radio class="mt-5" :label="'Employee'" :value="'Employee'"></v-radio>
                <!-- Employee Callout-box -->
                <div v-show="management_data.q21.option=='Employee'" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
                  <div style="width:100%;">
                    <div class="box-block" v-for="(item,i) in management_data.q21_Employee" :key="i" style="width:100%;">
                      <div class="d-flex pull-right">
                        <v-btn depressed class="o-btn-action plus grey-btn" color="secondary" @click="delOneOfDetail(item, i, management_data.q21_Employee)">x</v-btn>
                      </div>
                      <h5>Please state employment position</h5>
                      <v-text-field class="tf-half" v-model="item.position" :rules="form.fullnameRules"  label="Position" outlined required></v-text-field>
                      <h5 class="mt-0 mb-0">Please provide information of (all) your employer(s)</h5>
                      <h5 class="mt-0 mb-4 fw-400" style="color:#7A7A7A">(if the owner of the establishment under application for a liquor licence is a limited company, please provide a list of the director(s))</h5>
                      <div class="form-section">
                        <v-text-field class="tf-half" v-model="item.chineseName" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
                        <v-text-field class="tf-half" v-model="item.englishName" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
                      </div>
                      <h5 class="mt-0">HKID Card No.</h5>
                      <div class="d-flex flex-column" >
                          <div class="tf-div">
                              <div class="d-flex align-baseline">
                                  <v-text-field class="tf-multiple" v-model="item.hkid[0]" maxlength=1 outlined  :ref="'q21e_'+i" @input="focusNextItem(0,'q21e_'+ i)" @focus="selectItem(0,'q21e_'+ i)" :error="item.idError"></v-text-field>
                                  <div class="connect big-gap"></div>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[1]" maxlength=1 outlined  :ref="'q21e_'+i" @input="focusNextItem(1,'q21e_'+ i)" @focus="selectItem(1,'q21e_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[2]" maxlength=1 outlined  :ref="'q21e_'+i" @input="focusNextItem(2,'q21e_'+ i)" @focus="selectItem(2,'q21e_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[3]" maxlength=1 outlined  :ref="'q21e_'+i" @input="focusNextItem(3,'q21e_'+ i)" @focus="selectItem(3,'q21e_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[4]" maxlength=1 outlined  :ref="'q21e_'+i" @input="focusNextItem(4,'q21e_'+ i)" @focus="selectItem(4,'q21e_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[5]" maxlength=1 outlined  :ref="'q21e_'+i" @input="focusNextItem(5,'q21e_'+ i)" @focus="selectItem(5,'q21e_'+ i)" :error="item.idError"></v-text-field>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[6]" maxlength=1 outlined  :ref="'q21e_'+i" @input="focusNextItem(6,'q21e_'+ i)" @focus="selectItem(6,'q21e_'+ i)" :error="item.idError"></v-text-field>
                                  <div class="connect">(</div>
                                  <v-text-field class="tf-multiple" v-model="item.hkid[7]" maxlength=1 outlined  :ref="'q21e_'+i" @focus="selectItem(7,'q21e_'+ i)" :error="item.idError"></v-text-field>
                                  <div class="connect">)</div>
                              </div>
                          </div>
                          <div v-show="item.idError" class="msg-div">Invalid input</div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mb-8 mt-8 center-application">
                    <v-btn depressed class="o-btn-action plus" color="primary" @click="addEmployee(management_data.q21_Employee)">+</v-btn>
                    <p v-ripple class="clickable-action-text pa-0 ma-0 ml-2" @click="addEmployee(management_data.q21_Employee)">Add Employer</p>
                  </div>
                </div>
                <!--  -->
                <v-radio class="mt-5" :label="'Others'" :value="'Others'"></v-radio>
              </v-radio-group>
            </div>
            <div class="form-section">
              <v-text-field v-model="management_data.q21.others" class="tf-half mt-n2 ml-16" :rules="form.fullnameRules"  label="Please specify" outlined required></v-text-field>
            </div>
            <h5 class="mt-8">22 . Will any manager/manageress be employed?</h5>
            <div class="form-section mb-6">
              <v-radio-group class="tf-inline-radio-gp ml-enhanced" v-model="management_data.q22" row>
                  <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
                  <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <!-- Manager/Manageress Callout-box -->
            <div v-show="management_data.q22==true" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
              <div style="width:100%;">
                <div class="box-block" v-for="(item,i) in management_data.q22_detail" :key="i" style="width:100%;">
                  <div class="d-flex pull-right">
                    <v-btn depressed class="o-btn-action plus grey-btn" color="secondary" @click="delOneOfDetail(item, i, management_data.q22_detail)">x</v-btn>
                  </div>
                  <h5>Please provide information of manager/manageress</h5>
                  <h5>Name</h5>
                    <div class="form-section">
                      <v-text-field class="tf-half" v-model="item.chineseName" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
                      <v-text-field class="tf-half" v-model="item.englishName" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
                    </div>
                  <h5 class="mt-0">HKID Card No.</h5>
                  <div class="d-flex flex-column" >
                      <div class="tf-div">
                          <div class="d-flex align-baseline">
                              <v-text-field class="tf-multiple" v-model="item.hkid[0]" maxlength=1 outlined  :ref="'q22_'+i" @input="focusNextItem(0,'q22_'+ i)" @focus="selectItem(0,'q22_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect big-gap"></div>
                              <v-text-field class="tf-multiple" v-model="item.hkid[1]" maxlength=1 outlined  :ref="'q22_'+i" @input="focusNextItem(1,'q22_'+ i)" @focus="selectItem(1,'q22_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[2]" maxlength=1 outlined  :ref="'q22_'+i" @input="focusNextItem(2,'q22_'+ i)" @focus="selectItem(2,'q22_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[3]" maxlength=1 outlined  :ref="'q22_'+i" @input="focusNextItem(3,'q22_'+ i)" @focus="selectItem(3,'q22_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[4]" maxlength=1 outlined  :ref="'q22_'+i" @input="focusNextItem(4,'q22_'+ i)" @focus="selectItem(4,'q22_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[5]" maxlength=1 outlined  :ref="'q22_'+i" @input="focusNextItem(5,'q22_'+ i)" @focus="selectItem(5,'q22_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[6]" maxlength=1 outlined  :ref="'q22_'+i" @input="focusNextItem(6,'q22_'+ i)" @focus="selectItem(6,'q22_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect">(</div>
                              <v-text-field class="tf-multiple" v-model="item.hkid[7]" maxlength=1 outlined  :ref="'q22_'+i" @focus="selectItem(7,'q22_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect">)</div>
                          </div>
                      </div>
                      <div v-show="item.idError" class="msg-div">Invalid input</div>
                  </div>
                </div>
              </div>
              <div class="d-flex mb-8 mt-8 center-application">
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
              <v-textarea v-model="management_data.q23"  :rules="form.msgRules" outlined  placeholder="Duties and Responsibilities"></v-textarea>
            </div>
            <div class="d-flex ">
              <h5> 24. </h5>
              <h5 class="ml-1" >Please state and provide in full detail the manager(s)/manageress(es)' previous experience in connection with the sale and supply of liquor manager(s)/manageress(es)</h5>
            </div>
            <div class="form-section ml-7">
              <v-textarea v-model="management_data.q24"  :rules="form.msgRules" outlined  placeholder="Duties and Responsibilities"></v-textarea>
            </div>
            <h5 class="mt-8">25 . Your duty</h5>
            <h5 class="ml-7">a. Your duty hours <span style="color:#7a7a7a">(in 24-hour format,  max 2 different sessions)</span></h5>
            <div class="form-section ml-11 justify-start align-center pt-3">
               <div class="d-flex flex-column">
                    <h5 class="my-0 ml-2 fw-400 em-16 mb-2">From </h5>
                    <div class="d-flex align-baseline">
                      <v-combobox v-model="management_data.dutyHrs[0].from[0]" class="ml-2 tf-multiple time" :ref="'25_a_from_h'"  maxlength=2 @input="timeTFfocusNext('25_a_from_h','25_a_from_m')" @keyup="timeTFfocusNext('25_a_from_h','25_a_from_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox  >
                      <div>:</div>
                      <v-combobox v-model="management_data.dutyHrs[0].from[1]" class="ml-2 tf-multiple time" :ref="'25_a_from_m'"  maxlength=2 @input="timeTFfocusNext('25_a_from_m','25_a_to_h')" @keyup="timeTFfocusNext('25_a_from_m','25_a_to_h')" :items="timebox.mins" outlined>
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
                      <v-combobox v-model="management_data.dutyHrs[0].to[0]" class="ml-2 tf-multiple time" :ref="'25_a_to_h'"  maxlength=2 @input="timeTFfocusNext('25_a_to_h','25_a_to_m')" @keyup="timeTFfocusNext('25_a_to_h','25_a_to_m')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox  >
                      <div>:</div>
                      <v-combobox v-model="management_data.dutyHrs[0].to[1]" class="ml-2 tf-multiple time" :ref="'25_a_to_m'"  maxlength=2  :items="timebox.mins" outlined>
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
                      <v-combobox v-model="management_data.dutyHrs[1].from[0]" class="ml-2 tf-multiple time" :ref="'25_a_from_h2'"  maxlength=2 @input="timeTFfocusNext('25_a_from_h2','25_a_from_m2')" @keyup="timeTFfocusNext('25_a_from_h2','25_a_from_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox  >
                      <div>:</div>
                      <v-combobox v-model="management_data.dutyHrs[1].from[1]" class="ml-2 tf-multiple time" :ref="'25_a_from_m2'"  maxlength=2 @input="timeTFfocusNext('25_a_from_m2','25_a_to_h2')" @keyup="timeTFfocusNext('25_a_from_m2','25_a_to_h2')" :items="timebox.mins" outlined>
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
                      <v-combobox v-model="management_data.dutyHrs[1].to[0]" class="ml-2 tf-multiple time" :ref="'25_a_to_h2'"  maxlength=2 @input="timeTFfocusNext('25_a_to_h2','25_a_to_m2')" @keyup="timeTFfocusNext('25_a_to_h2','25_a_to_m2')" :items="timebox.hours" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox  >
                      <div>:</div>
                      <v-combobox v-model="management_data.dutyHrs[1].to[1]" class="ml-2 tf-multiple time" :ref="'25_a_to_m2'"  maxlength=2  :items="timebox.mins" outlined>
                        <template v-slot:append>
                          <div></div>
                        </template>
                      </v-combobox >
                    </div>
                </div>
            </div>
            <h5 class="mt-3 ml-7">b. Your weekly day-off is <span style="color:#7a7a7a" v-if="management_data.weeklyDayoff.days.length <= 2">(max 2 different days)</span><span class="red--text" v-if="management_data.weeklyDayoff.days.length > 2">(max 2 different days)</span></h5>
            <div class="form-section ml-12 flex-column">
              <v-checkbox v-model="management_data.weeklyDayoff.days" class="o-cb mt-2 mb-n6" on-icon="mdi-check-box-outline" label="Monday" value="Monday"></v-checkbox>
              <v-checkbox v-model="management_data.weeklyDayoff.days" class="o-cb mb-n6" on-icon="mdi-check-box-outline" label="Tuesday" value="Tuesday"></v-checkbox>
              <v-checkbox v-model="management_data.weeklyDayoff.days" class="o-cb mb-n6" on-icon="mdi-check-box-outline" label="Wednesday" value="Wednesday"></v-checkbox>
              <v-checkbox v-model="management_data.weeklyDayoff.days" class="o-cb mb-n6" on-icon="mdi-check-box-outline" label="Thursday" value="Thursday"></v-checkbox>
              <v-checkbox v-model="management_data.weeklyDayoff.days" class="o-cb mb-n6" on-icon="mdi-check-box-outline" label="Friday" value="Friday"></v-checkbox>
              <v-checkbox v-model="management_data.weeklyDayoff.days" class="o-cb mb-n6" on-icon="mdi-check-box-outline" label="Saturday" value="Saturday"></v-checkbox>
              <v-checkbox v-model="management_data.weeklyDayoff.days" class="o-cb mb-n6" on-icon="mdi-check-box-outline" label="Sunday" value="Sunday"></v-checkbox>
              <div class="d-flex flex-wrap">
                <v-checkbox class="o-cb mr-3" v-model="checkbox_selected" on-icon="mdi-check-box-outline" label="Other, no fix day" value="Other"></v-checkbox>
                <v-text-field v-model="management_data.weeklyDayoff.other"  class="tf-half" :rules="form.fullnameRules"  label="Please specify" outlined required></v-text-field>
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
              <v-radio-group v-model="management_data.q25c" class="ml-2 mt-n3 mdq25c" row v-on:change="scrollToElement('mdq25c')">
                <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
                <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <h5 v-show="management_data.q25c==true" class="mt-4 ml-14">Please provide information of nominee</h5>
            <!-- Manager/Manageress Callout-box -->
            <div v-show="management_data.q25c==true" class="callout-div detail-box lg mt-6 mb-3 px-15 py-2">
              <div style="width:100%;">
                <div class="box-block" v-for="(item,i) in management_data.q25_c_detail" :key="i" style="width:100%;">
                  <h5>Name</h5>
                    <div class="form-section">
                      <v-text-field class="tf-half" v-model="item.chineseName" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
                      <v-text-field class="tf-half" v-model="item.englishName" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
                    </div>
                  <h5 class="mt-0">HKID Card No.</h5>
                  <div class="d-flex flex-column" >
                      <div class="tf-div">
                          <div class="d-flex align-baseline">
                              <v-text-field class="tf-multiple" v-model="item.hkid[0]" maxlength=1 outlined  :ref="'q25c_'+i" @input="focusNextItem(0,'q25c_'+ i)" @focus="selectItem(0,'q25c_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect big-gap"></div>
                              <v-text-field class="tf-multiple" v-model="item.hkid[1]" maxlength=1 outlined  :ref="'q25c_'+i" @input="focusNextItem(1,'q25c_'+ i)" @focus="selectItem(1,'q25c_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[2]" maxlength=1 outlined  :ref="'q25c_'+i" @input="focusNextItem(2,'q25c_'+ i)" @focus="selectItem(2,'q25c_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[3]" maxlength=1 outlined  :ref="'q25c_'+i" @input="focusNextItem(3,'q25c_'+ i)" @focus="selectItem(3,'q25c_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[4]" maxlength=1 outlined  :ref="'q25c_'+i" @input="focusNextItem(4,'q25c_'+ i)" @focus="selectItem(4,'q25c_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[5]" maxlength=1 outlined  :ref="'q25c_'+i" @input="focusNextItem(5,'q25c_'+ i)" @focus="selectItem(5,'q25c_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[6]" maxlength=1 outlined  :ref="'q25c_'+i" @input="focusNextItem(6,'q25c_'+ i)" @focus="selectItem(6,'q25c_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect">(</div>
                              <v-text-field class="tf-multiple" v-model="item.hkid[7]" maxlength=1 outlined  :ref="'q25c_'+i" @focus="selectItem(7,'q25c_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect">)</div>
                          </div>
                      </div>
                      <div v-show="item.idError" class="msg-div">Invalid input</div>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
        </v-form>
      </div>
    </div>
    <div class="body light-purple pb-8">
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
            <v-radio-group v-model="management_data.q26" class="ml-6 mdq26" row v-on:change="scrollToElement('mdq26')">
              <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
               <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
            </v-radio-group>
          </div>
          <div class="ml-14" v-if="management_data.q26==true">
            <h2 class="dec" >Annex II</h2>
            <h3 class="em-24">Nomination of Reserve Licensee</h3>
            <h5 class="fw-400 em-18 mb-6">Applicable to nomination of a reserve licensee in advance to manage the premises during the absence of the liquor licensee for a period not exceeding 25%<a v-on:click="scrollToElement('tag-1')"><sup>1</sup></a> of the number of days of validity period of the licence.</h5>
            <h5 class="fw-400 em-18 mb-2">(Note: All applications for nomination of reserve licensee will be referred to the Police for comment. Thereafter, the Secretary of the Liquor Licensing Board will, in general, consider the application for nomination of reserve licensee in about 8 weeks upon the approval of new issue/renewal/transfer applications of liquor licence.)</h5>
            <div class="form-section">
              <h5 class="mt-5" > Send the invitation email to nominate a reserve licensee? </h5>
              <v-radio-group v-model="management_data.invitation.option" class="ml-6" row>
                <v-radio class="row-radio" :label="'Yes'" :value="true"></v-radio>
                <v-radio class="row-radio ml-3" :label="'No'" :value="false"></v-radio>
              </v-radio-group>
            </div>
            <div  v-if="management_data.invitation.option==true">
              <h5 class=" em-18 mb-2">
                Send invitation email to Nominated Reserve Licensee to create account and complete form FEHB 266 Nomination of Reserve Licensee.  Reserved Licensee may also log onto the system to complete FEHB 266A and FEHB 266B when needed.
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
              <div class="form-section flex-wrap justify-start mt-8">
                <v-text-field :disabled="management_data.invitation.sent" class="tf-half ma-0  mr-5" v-model="management_data.invitation.email" :rules="form.fullnameRules"  label="Email" outlined required></v-text-field>
                <v-btn depressed class="o-btn-action rounded-pill mt-1" color="primary" @click="sendInvitation()">{{management_data.invitation.sent?'Re-send invitation':'Send invitation'}}</v-btn>
              </div>
              <ol class="mt-6 mb-8 tag-1">
                <li style="color:#4a4a4a">Pursuant to Regulations 24(2), (3) and (4) of the Dutiable Commodities (Liquor) Regulations (Cap. 109, sub. leg.B), the maximum period (or the aggregate of the periods) is capped at 25% of the number of days of the validity period of the liquor licence, and for a liquor licence with a validity period of more than one year, each period must not exceed 90 days (and the aggregate of the periods must not exceed 90 days within any 12 consecutive months in the validity period of the licence).</li>
              </ol>
              <h3 class="em-22">a. To be completed by applicant</h3>
              <div class="ml-8">
                <h5 class="fw-400 em-18 mb-2">I would like to nominate the person below to manage the above premises in case of my illness or temporary absence within the validity period of the liquor licence, upon issuance of the licence.</h5>
                <h5 class="mb-2">Please provide information of the nominated reserve licensee</h5>
                <div v-for="(item,i) in management_data.q26a" :key="i">
                  <h5>Name</h5>
                  <div class="form-section">
                    <v-text-field class="tf-half" v-model="item.chineseName" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
                    <v-text-field class="tf-half" v-model="item.englishName" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
                  </div>
                  <h5 class="mt-0">HKID Card No.</h5>
                  <div class="d-flex flex-column" >
                      <div class="tf-div">
                          <div class="d-flex align-baseline">
                              <v-text-field class="tf-multiple" v-model="item.hkid[0]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(0,'q26a_'+ i)" @focus="selectItem(0,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect big-gap"></div>
                              <v-text-field class="tf-multiple" v-model="item.hkid[1]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(1,'q26a_'+ i)" @focus="selectItem(1,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[2]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(2,'q26a_'+ i)" @focus="selectItem(2,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[3]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(3,'q26a_'+ i)" @focus="selectItem(3,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[4]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(4,'q26a_'+ i)" @focus="selectItem(4,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[5]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(5,'q26a_'+ i)" @focus="selectItem(5,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[6]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(6,'q26a_'+ i)" @focus="selectItem(6,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect">(</div>
                              <v-text-field class="tf-multiple" v-model="item.hkid[7]" maxlength=1 outlined  :ref="'q26a_'+i" @focus="selectItem(7,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect">)</div>
                          </div>
                      </div>
                      <div v-show="item.idError" class="msg-div">Invalid input</div>
                  </div>
                  <h5>Contact</h5>
                  <div class="form-section">
                    <v-text-field class="tf-half" v-model="item.contact.tel" :rules="form.fullnameRules"  label="Tel. no." outlined required></v-text-field>
                    <v-text-field class="tf-half" v-model="item.contact.fax" :rules="form.fullnameRules"  label="Fax no." outlined required></v-text-field>
                  </div>
                  <v-checkbox class="" v-model="item.agree" :off-icon="'mdi-radiobox-blank'" :on-icon="'mdi-radiobox-marked'" >
                    <template v-slot:label>
                      <h5 class="fw-400 em-18">I hereby give consent to the Commissioner of Police to provide my personal data kept by the Hong Kong Police Force to the Secretary of the Liquor Licensing Board for the purpose of, or any purpose related to, the handling of the above application.</h5>
                    </template>
                  </v-checkbox>
                </div>
              </div>
            </div>
            <div v-if="management_data.invitation.option==false">
              <h5 class=" em-18 mb-2">If you don’t want to send the invitation email, please continue to complete form ‘Nomination of Reserve Licensee’ FEHB 266.</h5>
              <h5 class="fw-400 em-18 mb-2">Nominated Reserved Licensee must create account, log onto the system to completed FEHB 266A and 266B to proceed with the application. Form sent by post or submitted in person is not applicable.</h5>
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
                    <v-text-field class="tf-half" v-model="item.chineseName" :rules="form.fullnameRules"  label="Chinese" outlined required></v-text-field>
                    <v-text-field class="tf-half" v-model="item.englishName" :rules="form.fullnameRules"  label="English" outlined required></v-text-field>
                  </div>
                  <h5 class="mt-0">HKID Card No.</h5>
                  <div class="d-flex flex-column" >
                      <div class="tf-div">
                          <div class="d-flex align-baseline">
                              <v-text-field class="tf-multiple" v-model="item.hkid[0]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(0,'q26a_'+ i)" @focus="selectItem(0,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect big-gap"></div>
                              <v-text-field class="tf-multiple" v-model="item.hkid[1]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(1,'q26a_'+ i)" @focus="selectItem(1,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[2]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(2,'q26a_'+ i)" @focus="selectItem(2,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[3]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(3,'q26a_'+ i)" @focus="selectItem(3,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[4]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(4,'q26a_'+ i)" @focus="selectItem(4,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[5]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(5,'q26a_'+ i)" @focus="selectItem(5,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <v-text-field class="tf-multiple" v-model="item.hkid[6]" maxlength=1 outlined  :ref="'q26a_'+i" @input="focusNextItem(6,'q26a_'+ i)" @focus="selectItem(6,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect">(</div>
                              <v-text-field class="tf-multiple" v-model="item.hkid[7]" maxlength=1 outlined  :ref="'q26a_'+i" @focus="selectItem(7,'q26a_'+ i)" :error="item.idError"></v-text-field>
                              <div class="connect">)</div>
                          </div>
                      </div>
                      <div v-show="item.idError" class="msg-div">Invalid input</div>
                  </div>
                  <h5>Contact</h5>
                  <div class="form-section">
                    <v-text-field class="tf-half" v-model="item.contact.tel" :rules="form.fullnameRules"  label="Tel. no." outlined required></v-text-field>
                    <v-text-field class="tf-half" v-model="item.contact.fax" :rules="form.fullnameRules"  label="Fax no." outlined required></v-text-field>
                  </div>
                  <v-checkbox class="" v-model="item.agree" :off-icon="'mdi-radiobox-blank'" :on-icon="'mdi-radiobox-marked'" >
                    <template v-slot:label>
                      <h5 class="fw-400 em-18">I hereby give consent to the Commissioner of Police to provide my personal data kept by the Hong Kong Police Force to the Secretary of the Liquor Licensing Board for the purpose of, or any purpose related to, the handling of the above application.</h5>
                    </template>
                  </v-checkbox>
                  <!--<h3 class="em-22">b. Please download the form and sign it by the nominated reserve licensee. Then send it back to office by post or in person.</h3>
                  <div class="d-flex align-center flex-wrap t-wrap px-5 pt-6 ml-4">
                    <img width="56" class="mb-3 mt-3" src="../../assets/pdf.svg" />
                    <h5 class="fw-400 em-18 ma-0 ml-4">
                      <a :href="publicPath+'fehb266_Nom. Res Licensee.pdf'" target="_blank">
                        ‘Nomination of Reserve Licensee’ FEHB 266</a></h5>
                      <a class="icon-a ma-0 mt-3" :href="publicPath+'fehb266_Nom. Res Licensee.pdf'" download="fehb266_Nom. Res Licensee.pdf" ><v-icon class="ml-2 mb-3" color="primary">mdi-download</v-icon></a>
                  </div>
                  <h3 class="em-22">c. Upload the document</h3>-->
                  <!-- Table -->
                  <!--<div class='o-table mb-2 mb-6'>
                    <div class="d-flex"><h5 class="em-22 mw-6">Document Type</h5><h5 class="em-22 mw-4">Last Update</h5></div>
                    <BoldLine :options="{color:'rgba(177,177,177,0.37)',height:'2px',width:'100%'}"></BoldLine>
                    <div class="d-flex py-5 ">
                      <div class="d-flex mw-6 align-center">
                        <div class="o-t-item-div">A copy of HKID card</div>
                      </div>
                      <div class="d-flex align-center justify-space-between mw-4">
                        <h5 class="ma-0 ml-1 em-18 fw-400">-</h5>
                        <v-btn depressed :disabled="btnDisabled" class="o-btn-action small mr-1 mt-0" style="justify-self:flex-start;" color="primary">Choose file</v-btn>
                      </div>
                    </div>
                    <div class="d-flex py-5 ">
                      <div class="d-flex mw-6 align-center">
                        <div class="o-t-item-div">A recent photograph</div>
                      </div>
                      <div class="d-flex align-center justify-space-between mw-4">
                        <h5 class="ma-0 ml-1 em-18 fw-400">-</h5>
                        <v-btn depressed :disabled="btnDisabled" class="o-btn-action small mr-1 mt-0" style="justify-self:flex-start;" color="primary">Choose file</v-btn>
                      </div>
                    </div>
                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </v-form>
      </div>
    </div>


    <div class="footer">
      <v-btn class="footer-btn b-dark">{{$t('save_draft')}}</v-btn>
      <v-btn class="footer-btn b-primary" :disabled="false" @click="$router.push({name:'NewModeOp'})">{{$t('save_and_next')}}</v-btn>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import MultipleTextfield from '../../components/misc/multiple-textfield'
// @ is an alias to /src


export default {
  name: 'RenewalIM',
  components: {
    BoldLine,
    MultipleTextfield
  },
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
      agree: false,
      btnDisabled: false,
      checkbox_selected : [],
      timebox:{
        hours:['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
        mins:['00','05','10','15','20','25','30','35','40','45','50','55']
      },
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
      management_data:{
        q21:{option:'',others:''},
        q21_partner:[{chineseName:'',englishName:'',hkid:''.split(''),idError:false}],
        q21_director:[{chineseName:'',englishName:'',hkid:''.split(''),idError:false}],
        q21_Employee:[{position:'', chineseName:'',englishName:'',hkid:''.split(''),idError:false}],
        q22:'',q22_detail:[{chineseName:'',englishName:'',hkid:''.split(''),idError:false}],
        q23:'',q24:'',
        dutyHrs:[{from:['',''],to:['','']},{from:['',''],to:['','']}],
        weeklyDayoff:{days:['Tuesday'],other:''},
        q25c:undefined,q25_c_detail:[{chineseName:'',englishName:'',hkid:''}],
        q26:undefined,
        invitation:{option:false,email:'',sent:false},q26a:[{chineseName:'',englishName:'',hkid:'',contact:{tel:'',fax:'',agree:undefined}}]
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
    sendInvitation(){
      this.management_data.invitation.sent= true;
    },
    focusNextItem : function (i,refID){
        var str = refID;
        console.log(refID);
        const target = this.$refs[str][i+1];
        target.$refs.input.select();
    },
    selectItem : function (i,refID){
        var str = refID;
        const target = this.$refs[str][i];
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
    timeTFfocusNext(self,target){
      setTimeout(()=>{
        if((this.$refs[self].$refs.input.value + '').length ==2){
          this.$refs[self].blur();
          this.$refs[target].focus();
        }
      },10)
    },
    addPerson(target){
      target.push({chineseName:'',englishName:'',hkid:''.split(''),idError:false});
    },
    addEmployee(target){
      target.push({position:'', chineseName:'',englishName:'',hkid:''.split(''),idError:false});
    },
    delOneOfDetail: function (item, i, list){
      list.splice(i, 1);
    },
  },
  activated(){
    this.$emit('updateCurrent',4);
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

h2.dec{
    font-size:1.5625em;
    text-decoration: underline;
}

h3{
  &.em-24{
    font-size:1.5em;
  }
  &.em-22{
    font-size:1.375em;
  }
}

h5.fw-400{
  color:$ols-t-dark;
  margin-top:13px;
  margin-bottom:40px;
}

h5.em-16 {
  font-size: 1em;
}

h5.em-18{
  font-size: 1.125em;
}

p.em-18{
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

p.em-18{
  font-size: 1em;
}

.big-gap{
  margin-right:8px
}

h2.dec{
    font-size:1.475em;
    text-decoration: underline;
}


h3{
  &.em-24{
    font-size:1.4em;
  }
  &.em-22{
    font-size:1.275em;
  }
}


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

.pull-right{
  float: right;
}


.center-application{
  width: 100%;
  flex-direction: row;
  align-items: center;
}

</style>
