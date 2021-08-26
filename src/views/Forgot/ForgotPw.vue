<template>
  <div class="main-container">
    <h1 >Forgot Username or Password</h1>
    <BoldLine id="h1-boldline" class="hidden-md-and-down" :options="{color:this.$vuetify.theme.themes.light.secondary,height:'6px',width:'45px'}"></BoldLine>
    <BoldLine id="h1-boldline" class="hidden-lg-and-up" :options="{color:this.$vuetify.theme.themes.light.secondary,height:'4px',width:'30px'}"></BoldLine>
    <div class="content-box">
      <p>Please provide the following information in your request for verification. All the information should be same as what has been presented in your application form or the amendments already updated by the Licensing Authority.</p>
    </div>
    <v-card class="o-notice-card bc">
          <v-card-title class="headline bc-notice">
            Apply for password
          </v-card-title>
          <div class="py-6 px-8 body-div d-flex justify-center">
            <div class="form-div w-100">
             <v-form v-model="form.valid">

              <h4 class="mt-1 mb-3">1. Receive the username / activation password through SMS, email or by post</h4>
              <v-radio-group v-model="forgot_pw_data.method.option" class="list-radio-gp ml-8 my-3" >

                <v-radio class="mt-5" :label="'SMS and/or email'" :value="'OTP'"></v-radio>
                <div class="form-section ml-12 flex-column" v-show="forgot_pw_data.method.option=='OTP'">
                  <v-checkbox  v-model="forgot_pw_data.method.others" class="o-cb lg mt-5 mb-n3" on-icon="mdi-check-box-outline" label="SMS" value="SMS"></v-checkbox>
                  <v-checkbox v-model="forgot_pw_data.method.others" class="o-cb lg  mb-0" on-icon="mdi-check-box-outline" label="Email" value="Email"></v-checkbox>
                </div>
                <v-radio class="mt-7" :label="'Post'" :value="'Post'"></v-radio>
              </v-radio-group>
             </v-form>
            </div>
          </div>
          <v-card-actions class="px-10 mb-10 mt-n4">
            <div class="d-flex flex-wrap px-8">
              <router-link class="no-dec" :to="{ name: 'Landing'}"><v-btn depressed class="o-btn-action rounded-pill mt-4 mr-5" color="#413E56" dark>Back</v-btn></router-link>
              <v-btn depressed class="o-btn-action rounded-pill mt-4" color="primary" @click="routeTo()">Next</v-btn>
            </div>
          </v-card-actions>
        </v-card>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import MultipleTextfield from '../../components/misc/multiple-textfield'

// @ is an alias to /src


export default {
  name: 'ForgotPw_otp_request',
  components: {
    BoldLine,
    MultipleTextfield
  },
  data: () => ({
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
    forgot_pw_data : {
      method:{option:'',others:[]}
    },
  }),
  methods: {
    routeTo(){
      if(this.forgot_pw_data.method.option == 'OTP' && this.forgot_pw_data.method.others.length>0){
        this.$router.push({name:'ForgotPw_otp_request'});
      }else if(this.forgot_pw_data.method.option == 'Post'){
        this.$router.push({name:'ForgotPw_post_request'});
      }
    }
  },
  mounted(){
    this.$root.$emit('updateNav',null);
  }
}
</script>

<style scoped lang="scss">

.border-btn-list{
  justify-content: space-between;
  div{
    cursor: pointer;
    border: 2px solid #4E45D1;
    border-radius: 5px;
    width:300px;
    height:90px;
    display:flex;
    justify-content: center ;
    align-items:  center;
    h3{
      color:$ols-primary;
      font-size:1.375em;
      font-weight:500;
    }
    &:not(:last-child){
      margin-right:20px;
    }
  }
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

    h4{
      font-size:1.125em;
      margin:12px 0px;
    }
}


.big-gap{
  margin-right:16px
}

.content-box{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
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
    max-width:90%;
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

.border-btn-list{
  justify-content: center;
  width:400px;
  div{
    h3{
      font-size:1.275em;
    }
    margin:0px 10px;
    &:not(:last-child){
      margin-right:10px;
    }
  }
}

.content-box{
  align-items: center;
}

.o-notice-card{
  .form-div{
    max-width:90%;
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


.big-gap{
  margin-right:8px
}



}

</style>
