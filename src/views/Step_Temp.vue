<template>
  <div class="main-container">
    
    <div class="router-div">
        <router-view/>
    </div>
  </div>
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
// @ is an alias to /src


export default {
  name: 'Amendment',
  components: {
    BoldLine
  },
  data: () => ({
      steps:[
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
    this.$root.$emit('updateNav'); 
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
