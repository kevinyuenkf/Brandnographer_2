<template>
  <div class="main-container">
        <AccMenuLarge class="side-menu-large hidden-md-and-down" :toggle="current" :tabs="btns" @itemOnclick="routeSubviewTo"></AccMenuLarge>
        <AccMenuSmall class="hidden-lg-and-up" :user="'User :  Brandnographer2'" :toggle="current" :tabs="btns" :btns="btns" @itemOnclick="routeSubviewTo"></AccMenuSmall>      
        <div class="router-div">
          <router-view @updateCurrent="updateCurrent"/>
        </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import AccMenuLarge from '../../components/acc-menu/AccMenuLarge'
import AccMenuSmall from '../../components/acc-menu/AccMenuSmall'
// @ is an alias to /src


export default {
  name: 'MAHome',
  components: {
    BoldLine,
    AccMenuLarge,
    AccMenuSmall,
  },
  data: () => ({
      btns:[
          {title:'My Account',path:'MAHome'} ,
          {title:'Payment',path:'MAPayment'} ,
          {title:'Profile',path:'MAProfile'}
      ],
      current:0,
  }),
  methods: {
    routeSubviewTo: function (inValue,index){
        this.current = index;
        this.$router.push({name: inValue})
    },
    updateCurrent: function(inValue){
      this.current = inValue;
    }
  },
  mounted(){
    this.$root.$emit('updateNav'); 
    for(let [i,item] of this.btns.entries()){
      if(this.$route.name == item.path){
        this.current = i;
      }
    }
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
