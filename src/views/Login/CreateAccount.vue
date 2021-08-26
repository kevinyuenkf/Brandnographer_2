<template>
  <div class="main-container">
    <h1 >Create Account</h1>
    <BoldLine id="h1-boldline" class="hidden-md-and-down" :options="{color:this.$vuetify.theme.themes.light.secondary,height:'6px',width:'45px'}"></BoldLine>
    <BoldLine id="h1-boldline" class="hidden-lg-and-up" :options="{color:this.$vuetify.theme.themes.light.secondary,height:'4px',width:'30px'}"></BoldLine>
    <div class="content-box">
      <p class="mt-6">The Liquor Licensing Board (LLB), a statutory body established under the Dutiable Commodities (Liquor) Regulations who is responsible for the licensing of premises used for the sale or supply of liquor for consumption on the premises, has given consents to accept applications and documents in form of electronic records.</p>
      <p class="mt-6">For security reason, personalised online services are provided to users with accounts only. For any change of personal particulars afterwards, you should amend the profile after successful login to the system.</p>
      <p class="mt-6">You need to provide your name, location of your premises, mobile phone number, e-mail address and correspondence address to create an account online. Upon successful creation, you can use your account to:</p>

      <div class="s-li mt-6 mb-0">
        <div>•</div>
        <p>Submit application;</p>
      </div>
      <div class="s-li mb-0">
        <div>•</div>
        <p>Check status of submitted application;</p>
      </div>
      <div class="s-li mb-0">
        <div>•</div>
        <p>Read messages from the Licensing Office; and</p>
      </div>
      <div class="s-li mb-0">
        <div>•</div>
        <p>Make payment (if necessary)</p>
      </div>

      <div class="d-flex flex-wrap-reverse">
        <router-link class="no-dec" :to="{ name: 'Login'}"><v-btn depressed class="o-btn-action rounded-pill mt-4 mr-5" color="#413E56" dark>Back</v-btn></router-link>
        <router-link class="no-dec" :to="{ name: 'CreateAccount_2'}"><v-btn depressed class="o-btn-action rounded-pill mt-4" color="primary">Agree</v-btn></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
// @ is an alias to /src


export default {
  name: 'CreateAccount',
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

.content-box{
  max-width:950px;
}

.s-li{
    display: flex;
    align-items: flex-start;
    margin-bottom:12px;
    div:first-child{
        color: $ols-primary;
        font-weight: bold;
        font-size:2em;
        margin:-10px 16px 0px 20px;
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
}


//md and down
@media screen and (max-width: 1263px) {
  .main-container {
    width:100%;
    height:100%;
    padding:0px 18px 57px;
    h1 {
      font-size: 1.625em;
      margin-top:40px !important;
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
}





}

</style>
