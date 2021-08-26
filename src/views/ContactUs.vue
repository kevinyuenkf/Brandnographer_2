<template>
  <div class="main-container">
    <SideMenuLarge
      class="side-menu-large hidden-md-and-down"
      :toggle="current"
      :title="'Contact Us'"
      :btns="btns"
      @itemOnclick="routeSubviewTo"
    ></SideMenuLarge>
    <SideMenuSmall
      class="hidden-lg-and-up"
      :toggle="current"
      :title="'Contact Us'"
      :btns="btns"
      @itemOnclick="routeSubviewTo"
    ></SideMenuSmall>
    <div class="content-div">
      <h1>LLPS System Administrator</h1>
      <p>
        For enquiries on account creation / login, password retrieval and
        technical problems -
      </p>
      <div class="info-list-div">
        <div>
          <p>Email:</p>
          <p>llpsadmin@fehd.gov.hk</p>
        </div>
        <div>
          <p>Telephone:</p>
          <p>2186 8167</p>
        </div>
        <div>
          <p>Fax:</p>
          <p>2522 8271</p>
        </div>
      </div>
      <p>
        Please send a request to the LLPS System Administrator via
        <a>llpsadmin@fehd.gov.hk</a>. Upon receiving your request, the LLPS
        System Administrator will take about <b>3 working days</b> to complete
        the process of verifying the information provided by you in your request
        and issuing the updated login information to you.
      </p>
      <BoldLine
        class="p-divider"
        :options="{
          color: this.$vuetify.theme.themes.light.primary,
          height: '3px',
          width: '100%',
        }"
      ></BoldLine>
      <h2>Licensing Offices</h2>
      <p>For enquiries on licensing services and form completion -</p>
      <!-- HKI -->
      <h3>{{$t("hong_kong_island_and_outlying_islands")}}</h3>
      <p>
        Assistant Secretary<br />Liquor Licensing Board,<br />8th Floor,
        Lockhart Road Municipal Services Building,<br />225 Hennessy Road,
        Wanchai, Hong Kong
      </p>
      <div class="info-list-div">
        <div>
          <p>Telephone:</p>
          <p>2879 5779 / 2879 5728</p>
        </div>
        <div>
          <p>Fax:</p>
          <p>2507 2964</p>
        </div>
        <div>
          <p>Office Hours:</p>
          <p>
            8:45 a.m. to 1:00 p.m.; and 2:00 p.m. to 6:00 p.m. ( Mon-Fri )<br />
            Closed ( Sat-Sun, Public Hoilday )
          </p>
        </div>
      </div>
      <!-- KLN -->
      <h3>Kowloon</h3>
      <p>
        Assistant Secretary<br />Liquor Licensing Board,<br />4th Floor, Pei Ho
        Street Municipal Services Building,<br />333 Ki Lung Street, Sham Shui
        Po, Kowloon
      </p>
      <div class="info-list-div">
        <div>
          <p>Telephone:</p>
          <p>2729 1237 / 2729 1126</p>
        </div>
        <div>
          <p>Fax:</p>
          <p>3146 5319</p>
        </div>
        <div>
          <p>Office Hours:</p>
          <p>
            8:45 a.m. to 1:00 p.m.; and 2:00 p.m. to 6:00 p.m. ( Mon-Fri )<br />
            Closed ( Sat-Sun, Public Hoilday )
          </p>
        </div>
      </div>
      <!-- NT -->
      <h3>New Territories</h3>
      <p>
        Assistant Secretary Liquor Licensing Board,<br />4th Floor, Tai Po
        Complex,<br />No. 8, Heung Sze Wui Street,<br />Tai Po, New Territories
      </p>
      <div class="info-list-div">
        <div>
          <p>Telephone:</p>
          <p>3183 9255 / 3183 9220</p>
        </div>
        <div>
          <p>Fax:</p>
          <p>2606 3350</p>
        </div>
        <div>
          <p>Office Hours:</p>
          <p>
            8:45 a.m. to 1:00 p.m.; and 2:00 p.m. to 6:00 p.m. ( Mon-Fri )<br />
            Closed ( Sat-Sun, Public Hoilday )
          </p>
        </div>
      </div>
      <!--<BoldLine
        class="p-divider"
        :options="{
          color: this.$vuetify.theme.themes.light.primary,
          height: '3px',
          width: '100%',
        }"
      ></BoldLine>
      <h2>Contact Us</h2>
      <p>
        For enquiries please leave your message here, we will contact you as
        soon as possible.
      </p>
      <h4>Mandatory Items*</h4>
      <div class="form-div">
        <v-form v-model="form.valid">
          <h5>Contact Information <span class="c-p">*</span></h5>
          <div class="form-section">
            <v-text-field
              class="tf-half"
              v-model="form.fullname"
              :rules="form.fullnameRules"
              label="Name"
              outlined
              required
              :counter="10"
            ></v-text-field>
            <v-text-field
              class="tf-half"
              v-model="form.phone"
              :rules="form.phoneRules"
              label="Phone"
              outlined
              required
            ></v-text-field>
            <v-text-field
              class="tf-half"
              v-model="form.email"
              :rules="form.emailRules"
              label="Email"
              outlined
              required
            ></v-text-field>
          </div>
          <div v-show="false">
            <h5>Message <span class="c-p">*</span></h5>
          <div class="form-section">
            <v-textarea
              v-model="form.msg"
              :rules="form.msgRules"
              v-on:keyup="countUp"
              outlined
              placeholder="Leave your message (max 50 words)"
            ></v-textarea>
          </div>
          </div>
          <v-btn depressed class="o-btn-action rounded-pill" color="primary"
            >Send</v-btn
          >
        </v-form>
      </div>-->
    </div>
  </div>
</template>

<script>
import BoldLine from "../components/misc/bold-line";
import SideMenuLarge from "../components/side-menu/SideMenuLarge";
import SideMenuSmall from "../components/side-menu/SideMenuSmall";
// @ is an alias to /src

export default {
  name: "ContactUs",
  components: {
    BoldLine,
    SideMenuLarge,
    SideMenuSmall,
  },
  data: () => ({
    form: {
      valid: false,
      fullname: "",
      fullnameRules: [(v) => !!v || "Required"],
      phone: "",
      phoneRules: [(v) => !!v || "Phone is required"],
      email: "",
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+/.test(v) || "Email must be valid",
      ],
      msg: "",
      msgRules: [
        (v) => !!v || "Message is required",
        (v) => v.match(/\w+/g).length <= 50 || "Message must be less than 50 words (Currently "+v.match(/\w+/g).length+"/50 words)",
      ],
    },
    btns: [
      //   {title:'Testing Btn',path:'/hi'},
      //   {title:'Testing Btn2',path:'/hi2'}
    ],
    current: 0,
  }),
  methods: {
    routeSubviewTo: function (inValue, index) {
      this.current = index;
      alert("routeSubviewTo: " + inValue + "," + index);
    },
  },
  mounted() {
    this.$root.$emit("updateNav");
  },
};
</script>

<style scoped lang="scss">
.main-container {
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: flex-start;
}

.form-div {
  width: clamp(320px, 100%, 650px);
  .o-btn-action {
    margin-top: 32.5px;
  }
}

//md and down
@media screen and (max-width: 1263px) {
  .main-container {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  // .form-div{
  //     width:100%;
  //     .form-section{
  //         display:flex;
  //         flex-wrap: wrap;
  //     }
  //     .o-btn-action{
  //         margin-top:32.5px;
  //     }
  // }
}
</style>
