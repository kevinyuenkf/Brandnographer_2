<template>
  <div class="content-div content-div-1">
    <div class="header">
      <h1>Application for Renewal of a Liquor Licence</h1>
      <div class="d-flex align-center ">
        <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
        <h2>Upload Documents</h2>
      </div>
    </div>
    <div class="body">
      <div class="form-bg-circle hidden-md-and-down">6</div>
      <div class="form-div">
          <h2 >1. Supporting document required for your application</h2>
      </div>
      <div class='o-table'>
        <div class="d-flex"><h5 class="em-22 mw-6">Document Type</h5><h5 class="em-22 mw-4">Last Update</h5></div>
        <BoldLine :options="{color:'rgba(177,177,177,0.37)',height:'2px',width:'100%'}"></BoldLine>
        <div class="d-flex py-5 " v-for="(item,i) in doucment_items" :key="i">
          <div class="d-flex mw-6 align-center">
            <v-icon color="primary" class="mr-5 mb-2" style="font-size:34px;">mdi-check-circle</v-icon>
            <div class="d-flex flex-column">
              <div class="d-flex align-center">
                <h5 class="ma-0 mb-1">{{item.title}}</h5>
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
                <p v-ripple class="clickable-action-text" @click="true">Remove</p>
              </div>
            </div>
          </div>
          <div class="d-flex align-center justify-space-between mw-4">
            <h5 class="ma-0 ml-1 em-18 fw-400">{{item.lastUpdate}}</h5>
            <v-btn depressed :disabled="btnDisabled" class="o-btn-action small mr-1" style="justify-self:flex-start;" color="primary">Choose file</v-btn>
          </div>
        </div>

      </div>
    </div>
    <div class="footer">
      <v-btn class="footer-btn b-dark">{{$t('save_draft')}}</v-btn>
      <v-btn class="footer-btn b-primary" :disabled="false" @click="$router.push({name:'RenewalIdentityAuth'})">{{$t('save_and_next')}}</v-btn>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import MultipleTextfield from '../../components/misc/multiple-textfield'
// @ is an alias to /src


export default {
  name: 'RenewalUploadDoc',
  components: {
    BoldLine,
    MultipleTextfield
  },
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
      btnDisabled: false,
      doucment_items :[
        {
          title:'Recent photograph (35mm x 40mm)',
          filename:'photo_1.jpg',
          lastUpdate: '01-01-2021'
        }
      ]
    }
  },
  methods:{

  },
  activated(){
    this.$emit('updateCurrent',6);
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
    width:clamp(280px, 100%, 840px);
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

h5.em-22{
  font-size: 1.375em;
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
