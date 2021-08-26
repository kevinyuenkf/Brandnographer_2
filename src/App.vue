<template>
  <v-app>
    <div class="ols-app-bar hidden-md-and-down">
      <div class="d-flex align-center">
        <router-link class="no-dec" :to="{ name: 'Landing' }"
          ><h2>{{$t('online_licence_service')}}</h2></router-link
        >
      </div>
      <v-spacer></v-spacer>
      <ABToggle
        class="ab-toggle"
        v-for="(n, i) in nav"
        :key="i"
        :title="navTitle[i].title"
        :isToggled="n.isToggled"
        @click.native="navRouteTo(navTitle[i].route)"
      ></ABToggle>
      <ABButton
        :dataset="abBtn.fontsize"
        @itemOnclick="fontsizeChange"
      ></ABButton>
      <ABButton
        :dataset="abBtn.translate"
        @itemOnclick="translateTo"
      ></ABButton>
      <v-btn
        v-if="loggedIn == false"
        class="login-btn ml-5"
        rounded
        color="primary"
        dark
        depressed
        @click="$router.push({ name: 'Login' })"
      >
        <v-icon v-text="'mdi-account'" class="mr-1" dense></v-icon
        ><span>{{$t('login')}}</span>
      </v-btn>
      <v-menu offset-y v-if="loggedIn == true">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="simple-btn"
            color="primary"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left dense>mdi-account</v-icon>
            <div style="text-decoration:underline">{{$t("my_account")}}</div>
            <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list flat>
          <v-list-item-group color="primary">
            <v-list-item>
              <v-list-item-title
                v-text="$t('my_account')"
                @click="navRouteTo('MAHome')"
              ></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="logout()">
                <v-icon class="mr-1">mdi-logout</v-icon>{{$t("my_account")}}
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>

      <!-- <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </div>
    <div class="ols-app-bar-sm hidden-lg-and-up">
      <div class="d-flex align-center" style="font-size:12px">
        <router-link class="no-dec" :to="{ name: 'Landing' }">
          <h2>{{$t("online_licence_service")}}</h2>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <v-btn icon color="primary" @click="menu = !menu">
        <v-icon v-text="menu ? 'mdi-close' : 'mdi-menu'" class="fs-28"></v-icon>
        <!-- inline style 'font-size' is used to control the size of a icon-->
      </v-btn>
    </div>
    <v-main>
      <!-- <router-link to="/landing">Landing</router-link> -->
      <div class="app-menu-div" v-show="menu">
        <div>
          <ABButton
            :dataset="abBtn.fontsize"
            @itemOnclick="fontsizeChange"
          ></ABButton>
          <ABButton
            :dataset="abBtn.translate"
            @itemOnclick="translateTo"
          ></ABButton>
        </div>
        <div v-ripple class="clickable-div" @click="smallRoute('Landing')">
          <h2>{{$t('services')}}</h2>
        </div>
        <div v-ripple class="clickable-div" @click="smallRoute('InOverview')">
          <h2>{{$t('application_instructions')}}</h2>
        </div>
        <div v-ripple class="clickable-div" @click="smallRoute('FAQDca')">
          <h2>{{$t('faq.title')}}</h2>
        </div>
        <div>
          <v-btn
            v-if="loggedIn == false"
            class="login-btn ml-5"
            rounded
            color="primary"
            dark
            depressed
            @click="smallRoute('Login')"
          >
            <v-icon v-text="'mdi-account'" class="mr-1" dense></v-icon
            ><span>{{$t('login')}}</span>
          </v-btn>
          <v-menu offset-y v-if="loggedIn == true">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                class="simple-btn"
                color="primary"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon left dense>mdi-account</v-icon>
                <div style="text-decoration:underline">{{$t('my_account')}}</div>
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list flat>
              <v-list-item-group color="primary">
                <v-list-item>
                  <v-list-item-title v-text="$t('my_account')" @click="navRouteTo('MAHome')"></v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title @click="logout()">
                    <v-icon class="mr-1">mdi-logout</v-icon>
                    {{$t('logout')}}
                  </v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </div>
      </div>
      <router-view v-show="!menu" />
    </v-main>
    <div class="ols-app-footer">
      <div class="footer-content">
        <h5>{{$t('licensing_offices')}}</h5>
        <router-link class="no-dec" :to="{ name: 'ContactUs' }">
          <h4>{{$t('hong_kong_island_and_outlying_islands')}}</h4>
        </router-link>
        <router-link class="no-dec" :to="{ name: 'ContactUs' }">
          <h4>{{$t('kowloon')}}</h4>
        </router-link>
        <router-link class="no-dec" :to="{ name: 'ContactUs' }">
          <h4>{{$t('new_territories')}}</h4>
        </router-link>
        <div style="display:flex" class="hidden-md-and-down">
          <h6>{{$t('disclaimer')}}</h6>
          <h6>{{$t('privacy_statement')}}</h6>
          <v-spacer></v-spacer>
          <h6>© {{$t('food_and_environmental_hygiene_department')}}</h6>
        </div>
        <div class="hidden-lg-and-up">
          <div style="display:flex">
            <h6>{{$t('disclaimer')}}</h6>
            <h6>{{$t('privacy_statement')}}</h6>
          </div>
          <h6 id="copyright-h6">© {{$t('food_and_environmental_hygiene_department')}}</h6>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
import ABToggle from "./components/app-bar/ABToggle";
import ABButton from "./components/app-bar/ABButton";
import i18n from "@/localization";

export default {
  name: "App",

  components: {
    ABToggle,
    ABButton,
  },
  computed: {
    navTitle() {
      return [
        { title: this.$t('services'), route: "Landing" },
        { title: this.$t('application_instructions'), route: "InOverview" },
        { title: this.$t('faq.title'), route: "FAQDca" },
      ];
    }
  },
  data: () => ({
    menu: false,
    loggedIn: false,
    nav: [
      { isToggled: true }, //Services
      { isToggled: false }, //Application Instructions
      { isToggled: false }, //FAQ
    ],
    abBtn: {
      fontsize: {
        text: "AA",
        subheader: "Font size",
        isFontsize: true,
        selectedItem: 1,
        items: [{ text: "Small" }, { text: "Medium" }, { text: "Large" }],
      },
      translate: {
        text: "EN",
        subheader: "Language",
        isFontsize: false,
        selectedItem: 0,
        items: [{ text: "EN", lang: "EN" }, { text: "TC", lang: "TC" }],
      },
    },
    fontsize: {
      step: 0.125,
      default: 1, // The default font size of the entire html element which is delcared in main.scss
    },
  }),
  created() {
    this.$root.$on("updateNav", this.updateNavEventHandler);
    this.$root.$on("login", this.logUserIn);
  },
  methods: {
    logout() {
      this.loggedIn = false;
      this.$router.push({ name: "Landing" });
    },
    logUserIn() {
      this.loggedIn = true;
      this.$router.push({ name: "MAHome" });
    },
    navRouteTo: function(target) {
      this.$router.push({ name: target });
    },
    smallRoute: function(target) {
      this.$router.push({ name: target });
      this.menu = !this.menu;
    },
    fontsizeChange: function(inValue) {
      var minFontsize = this.fontsize.default - this.fontsize.step;
      document.getElementsByTagName("main")[0].style.fontSize =
        minFontsize + inValue * this.fontsize.step + "rem";
    },
    translateTo: function(inValue) {
      i18n.locale = this.abBtn.translate.items[inValue].lang;
      this.abBtn.translate.text = this.abBtn.translate.items[inValue].text;
      alert("translateTo: " + this.abBtn.translate.items[inValue].text);
    },
    updateNavEventHandler: function(inValue) {
      this.nav.forEach((element) => {
        element.isToggled = false;
      });
      if (inValue >= 0 && inValue <= 2) {
        this.nav[inValue].isToggled = true;
      }
    },
  },
};
</script>

<style lang="scss">
.ols-app-bar,
.ols-app-bar-sm {
  a {
    color: inherit !important;
    transition-duration: 0.2s;
    &:hover {
      opacity: 0.75;
    }
  }
}
@import "@/scss/main.scss";
.ols-app-bar {
  .ab-toggle {
    margin-right: 33px !important;
    &:nth-child(5) {
      margin-right: 29px !important;
    }
  }
}
.login-btn {
  font-size: 1rem !important;
  font-weight: 400;
  text-transform: none !important;
  min-height: 45px;
  min-width: 135px !important;
  span {
    margin-right: 6px;
  }
}

//md and down
@media screen and (min-width: 1263px) {
  .app-menu-div {
    display: none;
  }
}
</style>
