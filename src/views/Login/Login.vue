<template>
  <div class="main-container">
    <h1 >Login/ Create Account</h1>
    <BoldLine id="h1-boldline" class="hidden-md-and-down" :options="{color:this.$vuetify.theme.themes.light.secondary,height:'6px',width:'45px'}"></BoldLine>
    <BoldLine id="h1-boldline" class="hidden-lg-and-up" :options="{color:this.$vuetify.theme.themes.light.secondary,height:'4px',width:'30px'}"></BoldLine>
    <div class="content-box">
      <p>Please choose the method to Login / Create Account. (Note :  If you choose to use iAM Smart , using iAM Smart+ for the use of electronic certificate is preferred)</p>
    </div>
    <v-card class="o-notice-card bc">
      <v-card-title class="headline bc-notice">
        Login Your Account
      </v-card-title>
      <div class="py-6 px-8 body-div d-flex justify-center">
        <div class="form-div">
          <v-form v-model="form.valid">
            <div class="form-section">
                <v-text-field class="tf-full extra" v-model="form.fullname" :rules="form.fullnameRules" prepend-inner-icon="mdi-account" label="Username" outlined required></v-text-field>
                <v-text-field class="tf-full extra" v-model="form.phone"    :rules="form.phoneRules" prepend-inner-icon="mdi-lock" label="Password" outlined required></v-text-field>
            </div>
            <div class="d-flex mt-n4 forgot-div">
              <router-link class="no-dec" style="position:realative;z-index:50;" :to="{ name: 'ForgotPw'}"><h5 class="forgot-pw-text">Forgot username or password?</h5></router-link>
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon class="tooltip-icon" color="secondary" dark v-bind="attrs" v-on="on">
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
            <v-btn depressed class="o-btn-action block rounded-pill mt-4" color="primary" @click="$root.$emit('login')">Login</v-btn>
            <div class="d-flex justify-space-between align-center text-divider my-6">
              <div></div>
              <div>or</div>
              <div></div>
            </div>

            <v-btn depressed class="o-btn-action block rounded-pill mt-4" color="#2C1E91" dark>
              <v-icon left dark class="mr-3">> mdi-account</v-icon>
              Login with iAM Smart
            </v-btn>
            <v-btn depressed class="o-btn-action block rounded-pill mt-4" color="#2C1E91" dark>
              <v-icon left dark class="mr-4"> mdi-card-account-details-outline</v-icon>
              Login with Digital Certificate
            </v-btn>
          </v-form>
        </div>
      </div>
      <v-card-actions class="justify-center flex-column">
        <div class="d-flex justify-center align-center" style="width:80%;border-top:2px solid #ECECEC">
        </div>
        <div class="d-flex my-5 flex-wrap c-a-div">
          <h3 class="pa-2">You don’t have account ?</h3>
          <router-link :to="{ name: 'CreateAccount'}"><h3 v-ripple class="clickable ml-1 pa-2">Create account</h3></router-link>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
// @ is an alias to /src


export default {
  name: 'Login',
  components: {
    BoldLine
  },
  data: () => ({
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
  }),
  methods: {

  },
  mounted(){
    this.$root.$emit('updateNav');
  }
}
</script>

<style scoped lang="scss">

.forgot-pw-text{
  transition-duration: 0.2s;
  &:hover{
    opacity: 0.5;
  }
}

.content-box{
  max-width:950px;
}

.main-container {
    width:100%;
    height:100%;
    padding:0px 120px 115px;
    h1 {
      font-size: 3.875em;
      margin-top:87px !important;
    }
    #h1-boldline{
      margin:28px 0px 40px 0px;
    }
    h2{
      font-size: 1.625em;
      font-weight: 500;
    }
    p{
      font-size:1.1875em;
    }
}

.o-notice-card{
  .form-div{
    max-width:600px;
  }
  h5{
    color: #7a7a7a;
    font-size:1em;
    font-weight: 400;
  }
  h3{
    font-size:1.375em;
    color:#B1B1B1;
    font-weight:500;
    &.clickable{
      color:$ols-primary;
      text-decoration: underline;
      cursor: pointer;
      border-radius: 4px;
    }
  }
  .tooltip-icon{
    margin-left:6px;
    margin-bottom:2px;
  }
}


//md and down
@media screen and (max-width: 1263px) {
  .main-container {
    width:100%;
    height:100%;
    padding:0px 18px 57px;
    h1 {
      font-size: 1.625em;
      margin-top:50px !important;
    }
    #h1-boldline{
      margin:20px 0px;
    }
    h2{
      font-size:1em;
      font-weight: 500;
    }
    p{
      font-size:0.9375em;
    }
  }



.o-notice-card{
  .form-div{
    max-width:600px;
  }
  h5{
    color: #7a7a7a;
    font-size:1em;
    font-weight: 400;
  }
  h3{
    font-size:1.375em;
    color:#B1B1B1;
    font-weight:500;
    a{
      text-decoration: underline;
    }
  }

  .forgot-div{
    margin-bottom: -8px;
    .forgot-pw-text{
      font-size:1em;
    }
    .tooltip-icon{
      margin-left:3px;
      margin-bottom:0px;
    }
  }
}

.c-a-div{
  justify-content: center;
  h3{
    text-align: center;
    font-size:1em;
    flex:1 0 100%;
    padding:0px 0px !important;
  }
}



}

@media screen and (min-width: 1263px) {
  .main-container{
    display: flex !important;
  }
}

</style>
