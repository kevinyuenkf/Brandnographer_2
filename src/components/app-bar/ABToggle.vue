<template>
  <div class="py-2 px-3 rounded" v-ripple v-bind:class="{toggled:isToggled}">
      <h3>{{$t(title)}}</h3>
      <div></div>
  </div>
</template>
<style scoped lang="scss">
div{
  color:$ols-t-dark;
  transition-duration:0.1s;
  cursor: pointer;
  h3{
    font-size: 1.125rem;
    font-weight: 400;
  }
  .toggled{
    h3{
      margin-top:8px;
      font-weight:600;
    }
    color:$ols-primary;
    div{
      margin-top:4px;
      width:100%;
      height:0px;
      border-radius: 2px;
      border-bottom: 4px solid $ols-primary;
    }
  }
  &:hover{
    opacity: 0.5;
  }
}
</style>
<script>
export default {
    name: 'ABToggle',
    props: {
        title : String,
        isToggled : false,
    }
  }
</script>