<template>
    <div :style="{backgroundColor:options.color, height:options.height, width:options.width}" :class="spacing" ></div>
</template>
<style scoped lang="scss">

</style>
<script>
export default {
    name: 'BoldLine',
    props: {
        options: {
            color:String,
            height:String,
            width:String
        },
        spacing:String,
    },
    data: () => ({

    }),
  }
</script>