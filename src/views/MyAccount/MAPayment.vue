<template>
  <div >
    <div class="content-div content-div-1">
      <div class="hidden-md-and-down header" >
        <div class="d-flex justify-center flex-column">
          <div class="d-flex justify-end mt-n2">
            <h5 class="ma-0 fw-400" style="color:white">{{$t('profile.user')}}Brandnographer2</h5>
          </div>
          <div class="d-flex mt-n3">
            <BoldLine :options="{color:this.$vuetify.theme.themes.light.secondary,height:'auto',width:'6px'}" :spacing="'x-stretch'"></BoldLine>
            <h2>{{ $t('payment.payment')}}</h2>
          </div>
        </div>
      </div>
      <div class="body">
        <p>{{ $t('payment.a_1') }}</p>
        <p>{{ $t('payment.a_2') }}</p>
        <h2>{{ $t('payment.a_3') }}</h2>
          
      </div>
      <div class='o-table mb-2 '>
            <div class="o-tabs-card mt-6 mb-12" v-if="selected==0">
              <div class="top-header">
                <h3>{{ $t('payment.bar')}}</h3>
                <h5>{{$t('payment.ref_no')}} llps1234_2345555-12122</h5>
              </div>
              <div class="sec-header">
                <h6>{{ $t('payment.a_4') }}</h6>
                <h6>{{ $t('payment.a_5') }}</h6>
                <h6>{{ $t('payment.a_6') }}</h6>
              </div>
              <div class="content-container" v-for="(item,i) in payment_items" :key="i">
                <div class="content">
                  <div>{{ $t(item.type)}}</div>
                  <div class="d-flex align-center">
                    <div>{{$t(item.date)}}</div>
                  </div>
                  <div>
                    <h6>{{$t(item.amount)}}</h6>
                  </div>
                  <div>
                    <v-btn depressed class="o-btn-action rounded-pill mt-4 small ml-4" color="primary">{{ $t('payment.a_7') }}</v-btn>
                  </div>
                </div>
              </div>
              <div class="px-8 pb-8"> </div>
            </div>
      </div>
      <div class="body py-0"> 
        <router-link class="no-dec" :to="{ name: 'MAHome'}"><v-btn depressed class="o-btn-action rounded-pill mt-2 mr-5 mb-8" color="#413E56" dark>{{ $t('payment.a_8') }}</v-btn></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'

// @ is an alias to /src


export default {
  name: 'MAPayment',
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
        { title: 'application_submitted', remark: ' ', active : true, },
        { title: 'department_feedback', remark: ' ', active : true, }, // true: 6-3-2
        { title: 'documents_verified', remark: ' ', active : false, },
        { title: 'seek_approval', remark: ' ', active : false, },
        { title: 'licence_ready', remark: ' ', active : false, },
        { title: 'licence_issued', remark: ' ', active : false, },
      ],
      items_current:1, // 1: 6-3-2
      payment_items:[
        {type:'payment.new_lqiuor_licence_2021_2022',date:'2021-01-01 13:00',amount:'1,999.00'}
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
    this.$emit('updateCurrent',1);
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
