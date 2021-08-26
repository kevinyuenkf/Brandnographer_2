<template>
  <div class="main-container">
    <h1 >Create Account</h1>
    <BoldLine id="h1-boldline" class="hidden-md-and-down" :options="{color:this.$vuetify.theme.themes.light.secondary,height:'6px',width:'45px'}"></BoldLine>
    <BoldLine id="h1-boldline" class="hidden-lg-and-up" :options="{color:this.$vuetify.theme.themes.light.secondary,height:'4px',width:'30px'}"></BoldLine>
    <div class="content-box">
      <p>Note: Please safe keep your username to enable you to log in the system once the password has been assigned to you.</p>
    </div>
    <v-card class="o-notice-card bc">
          <v-card-title class="headline bc-notice">
            Apply for password
          </v-card-title>
          <div class="body-div d-flex justify-center">
            <div class="form-div w-100">
             <v-form v-model="form.valid">
              <h4 class="mt-2">6. Please enter a unique username to create account </h4>
              <h5 class="mt-n1 mb-4" style="max-width:76%;">(username: at least 6 digits;  case sensitive; must contain number and characters without any space and slash. e.g chan0678)</h5>
              <div class="form-section">
                <v-text-field class="tf-half" v-model="applicant_data.userName" :rules="form.fullnameRules"  label="Your username" outlined required></v-text-field>
              </div>

              <h4 class="mt-1 mb-5">7. Please download the Password Request Form and upload signed form to the system</h4>
              <div class="d-flex justify-space-between x-w flex-wrap" style="width:85%">
                <div class="d-flex align-center flex-wrap t-wrap px-5 pb-6">
                  <img width="56" class="mb-3 mt-3" src="../../assets/pdf.svg" />
                  <h5 class="ml-3 mt-2" style="font-weight:500">
                    <a :href="publicPath+'PasswordRequestForm_ABCBar1.pdf'" target="_blank">
                      Password Request Form</a></h5>
                  <a class="icon-a mt-5" :href="publicPath+'PasswordRequestForm_ABCBar1.pdf'" download="Dai_Man_Cheung_Nomination_of_Reserve_Licensee.pdf" ><v-icon class="ml-2 mb-3" color="primary">mdi-download</v-icon></a>
                </div>
                <div class="d-flex align-center ml-5">
                  <v-btn depressed :disabled="btnDisabled" class="o-btn-action small mr-4 mb-3" style="justify-self:flex-start;" color="primary">Choose file</v-btn>
                  <h5 class="mb-3">No file chosen</h5>
                </div>
              </div>
             </v-form>
            </div>
          </div>
          <v-card-actions class="px-10 mb-10 mt-n4">
            <div class="d-flex flex-wrap-reverse px-8">
              <router-link class="no-dec" :to="{ name: 'CAApplyPassword'}"><v-btn depressed class="o-btn-action rounded-pill mt-4 mr-5" color="#413E56" dark>Back</v-btn></router-link>
              <router-link class="no-dec" :to="{ name: 'CreateAccount_done'}"><v-btn depressed class="o-btn-action rounded-pill mt-4" color="primary">Confirm</v-btn></router-link>
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
  name: 'CreatePassword_2',
  components: {
    BoldLine,
    MultipleTextfield
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
    btnDisabled : false,
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
      userName: '',
    },
    region:{
      tc:['香港','九龍','新界'],
      en:['Hong Kong','Kowloon','New Territories']
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

.body-div{
  padding:32px 24px;
}


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

    .body-div{
      padding:14px 2px;
    }

    .t-wrap{
      img{
        width:44px;
      }
    }

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

@media screen and (max-width: 670px) {
  .x-w{
    width:100% !important;
  }
}

</style>
