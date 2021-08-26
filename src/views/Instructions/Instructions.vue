<template>
  <div class="main-container">
        <SideMenuLarge class="side-menu-large hidden-md-and-down" :toggle="current" :title="$t('application_instructions')" :btns="btns" @itemOnclick="routeSubviewTo"></SideMenuLarge>
        <SideMenuSmall class="hidden-lg-and-up" :toggle="current" :title="$t('application_instructions')" :btns="btns" @itemOnclick="routeSubviewTo"></SideMenuSmall>      
        <div class="router-div">
          <router-view/>
        </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import SideMenuLarge from '../../components/side-menu/SideMenuLarge'
import SideMenuSmall from '../../components/side-menu/SideMenuSmall'
// @ is an alias to /src


export default {
  name: 'Instruction',
  components: {
    BoldLine,
    SideMenuLarge,
    SideMenuSmall,
  },
  data: () => ({
      btns:[
          {title: 'application_overview',path:'InOverview'} ,
          {title:'application_demo',path:'InDemo'} ,
          {title:'application_procedures',path:'InProcedures'} ,
          {title:'application_guideline',path:'InGuideline'} ,
          {title:'application_form',path:'InForm'} ,
          {title:'application_policy',path:'InPolicy'} ,
      ],
      current:0,
  }),
  methods: {
    routeSubviewTo: function (inValue,index){
        this.current = index;
        this.$router.push({name: inValue})
    }
  },
  mounted(){
    for(let [i,item] of this.btns.entries()){
      if(this.$route.name == item.path){
        this.current = i;
      }
    }
    this.$root.$emit('updateNav',1); 
  }
}
</script>

<style scoped lang="scss">

.main-container {
    width:100%;
    height:100%;
    flex-direction: row;
    align-items: flex-start;
}

//md and down
@media screen and (max-width: 1263px) {

.main-container {
    width:100%;
    height:100%;
    flex-direction: column;
}

}

</style>
