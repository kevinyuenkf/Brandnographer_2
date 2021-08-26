<template>
  <div class="main-container">
    <h1 >Reset Password</h1>
    <BoldLine id="h1-boldline" class="hidden-md-and-down" :options="{color:this.$vuetify.theme.themes.light.secondary,height:'6px',width:'45px'}"></BoldLine>
    <BoldLine id="h1-boldline" class="hidden-lg-and-up" :options="{color:this.$vuetify.theme.themes.light.secondary,height:'4px',width:'30px'}"></BoldLine>
    <div class="content-box">
      <p>Your account is about to be activated. Please provide the one time password you received.</p>
    </div>
    <v-card class="o-notice-card bc">
          <v-card-title class="headline bc-notice">
            One Time Password
          </v-card-title>
          <div class="py-6 px-8 body-div d-flex justify-center">
            <div class="form-div w-100">
             <v-form v-model="form.valid">
              <h4 class="mt-2 mb-5">Enter One Time Password</h4>
              <div class="form-section">
                <v-text-field class="tf-half" v-model="password_data.otp" :rules="form.fullnameRules"  label="One Time Password" outlined required></v-text-field>
              </div>
             </v-form>
            </div>
          </div>
          <v-card-actions class="px-10 mb-10 mt-n4">
            <div class="d-flex flex-wrap px-8">
              <router-link class="no-dec" :to="{ name: 'ResetPassword'}"><v-btn depressed class="o-btn-action rounded-pill mt-4" color="primary">Activate</v-btn></router-link>
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
  name: 'ResetPassword_otp',
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
      password_data : {
        otp: '',
      },
      region:{
        tc:['香港','九龍','新界'],
        en:['Hong Kong','Kowloon','New Territories']
      },
  }),
  methods: {

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
