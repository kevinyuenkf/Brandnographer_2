<template>
  <div >
    <div class="content-div content-div-1">
      <div class="hidden-md-and-down header" >
        <div class="d-flex justify-center flex-column">
          <div class="d-flex justify-end mt-n2">
            <h5 class="ma-0 fw-400" style="color:white">{{ $t('profile.user') }}<span>Brandnographer2</span></h5>
          </div>
          <div class="d-flex mt-n3">
            <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
            <h2>{{ $t('profile.profile') }}</h2>
          </div>
        </div>
      </div>
      <div class="body pr-0">
        <p>{{ $t('profile.instruction') }}</p>
      </div>
      <div class='o-table mb-2 '>
        <div class="o-tabs-card mt-6 mb-12" v-if="selected==0">
          <div class="top-header">
            <h3>{{ $t('profile.personal_profile') }}</h3>
          </div>
          <div class="pa-8">
            <div class="d-flex">
              <div class="item-box ">
                <div>{{ $t('profile.name_eng') }}</div>
                <div>Tom Chan</div>
              </div>
              <div class="item-box ">
                <div>{{ $t('profile.name_eng') }}</div>
                <div>Tom Chan</div>
              </div>
            </div>
            <div class="d-flex mt-6">
              <div class="item-box ">
                <div>{{ $t('profile.premises') }}</div>
                <div>New Territories</div>
              </div>
            </div>
            <div class="d-flex mt-6">
              <div class="item-box ">
                <div>{{ $t('profile.tel') }}</div>
                <div class="d-flex"><div>6237 8492</div><v-btn icon color="primary" class="ml-2" small><v-icon >mdi-pencil</v-icon></v-btn></div>
              </div>
              <div class="item-box ">
                <div>{{ $t('profile.email') }}</div>
                <div class="d-flex"><div>tomchan@gmail.com</div><v-btn icon color="primary" class="ml-2" small><v-icon >mdi-pencil</v-icon></v-btn></div>
              </div>
            </div>
            <div class="d-flex mt-6">
              <div class="item-box ">
                <div>{{ $t('profile.address') }}</div>
                <div class="d-flex"><div>Unit 123, 1/F, Building 123, Hong Kong </div><v-btn icon color="primary" class="ml-2" small><v-icon >mdi-pencil</v-icon></v-btn></div>
              </div>
            </div>
          </div>
          <div class="px-8 pb-8 bot-div">
           <router-link class="no-dec" :to="{ name: 'MAHome'}"><v-btn depressed class="o-btn-action rounded-pill mt-2 mr-5 mb-2" color="#413E56" dark>{{$t('reset')}}</v-btn></router-link> 
           <router-link class="no-dec" :to="{ name: 'MAHome'}"><v-btn depressed class="o-btn-action rounded-pill mt-2 mb-2" color="primary" dark>{{$t('save')}}</v-btn></router-link>  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'

// @ is an alias to /src


export default {
  name: 'MAProfile',
  components: {
    BoldLine
  },
  data: function () {
    return {
      agree: false,
      selected:0,
      dialog: false,
      record:true, //  true: 6-2-1,  false: 6-1
      infoError:true, // true: red callout, false:purple callout(6-2-1)
      menu:false,menu_1:false,menu_2:false,
      items : [
        { title: 'Application Submitted', remark: ' ', active : true, },
        { title: 'Department Feedback', remark: ' ', active : true, }, // true: 6-3-2
        { title: 'Verifiy Documents', remark: ' ', active : false, },
        { title: 'Seek Approval', remark: ' ', active : false, },
        { title: 'Licence Ready', remark: ' ', active : false, },
        { title: 'Licence Issued', remark: ' ', active : false, },
      ],
      items_current:1, // 1: 6-3-2
      payment_items:[
        {type:'New Liquor Licence 2021-2022',date:'2021-01-01 13:00',amount:'1,999.00'}
      ],
      
    }
  },
  methods:{
    checkShouldShowApply: function (){
      if(!(this.partOne.selected==undefined) && !(this.partTwo[this.partOne.selected].selected==undefined)){
        return true;
      }else if (this.partOne.selected==1){
        return true;
      }
      return false;
    },
    statusToClass:function(status){
      if(status =='Approved'){
        return 'approved';
      }else if(status == 'Application Submitted'){
        return 'submitted'
      }
    },
  },
  activated(){
    this.$emit('updateCurrent',2);
    this.dialog = true;
  },
}
</script>

<style scoped lang="scss">

.bot-div{
  display: flex;
  flex-wrap: wrap-reverse;
}


.o-table{
  width:calc(100% - 150px);
  margin-left:110px;
  
  .o-tabs-card{
    margin-right:80px;
    white-space: normal !important;
  }
}

.item-box{
  >div{
    &:first-child{
      color:#7A7A7A;
      font-size:1.125em;
    }
    &:nth-child(2){
      color:$ols-t-dark;
      font-weight:600;
      font-size:1.25em;
    }
  }
  &:not(:last-child){
    margin-right:80px;
  }
}

.main-container {
    width:100%;
    height:100%;
    flex-direction: row;
    align-items: flex-start;
}

.o-table{
  width:calc(100% - 150px);
  margin-left:90px;
  padding-left:20px;
  .o-tabs-card{
    margin-right:80px;
    white-space: normal !important;
  }
}

.landing-body{
  padding: 35px clamp(20px, 5%, 110px);
  background:white;
}

.simple-table{
  display: flex;
  align-items: center;
  margin:18px 0px;
  >p{
    margin:0px;
    &:first-child{
      min-width:500px;
    }
  }
}

.om{
  margin:32px 0px 0px;
}

.header{
  padding:56px 110px;
  min-height:170px;
}

//md and down
@media screen and (max-width: 1263px) {

.main-container {
    width:100%;
    height:100%;
    flex-direction: column;
}

.landing-body{
  width: 100vw;
  min-height:420px;
}


.o-table {
  width:100%;
  margin:-16px 0px 8px clamp(0px, calc(5% - 20px), 90px);
}


.o-tabs-card{
    white-space: normal !important;
  }

  

}

</style>
