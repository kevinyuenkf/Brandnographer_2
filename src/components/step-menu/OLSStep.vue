<template>
    <v-btn class="step-btn" :class="'state-'+state" :disabled="!editable" @click="$emit('itemOnclick',order)">
      <div class="step-btn-slot">
        <div class="circle">
          <p v-if="state!=2">{{order}}</p>
          <v-icon v-if="state==2" dense >mdi-check</v-icon>
        </div>
        <div class="vertical_line"></div>
        <div class="label">{{$t(title)}}</div>
      </div>
    </v-btn>
</template>
<style scoped lang="scss">
.step-btn{
  width:100%;
  height:auto !important;
  flex: 1 0 !important;
  box-shadow: none !important;
  text-transform: none;
  padding:20px 20px !important;
  background:transparent !important;
  white-space:normal !important;
  font-size:1em;
}

.step-btn-slot{
  width:100%;
  height:auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left:-20px;
  font-size:1em;
}

.circle{
  width:39px;
  height:39px;
  min-width:39px;
  background:$ols-primary;
  z-index: 2;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  p{
    color:white;
    margin:0px;
    font-size:1.125em;
  }
}

.label{
  letter-spacing: normal;
  font-size:1.1875em;
  margin:-3px 0px 0px 14px;
  max-width:210px;
  font-weight: 400;
  text-align: left;

}

button{
  &.theme--light.v-btn.v-btn--disabled{
    background-color:transparent !important;
    color:inherit !important;
  }
  &.theme--light.v-btn.v-btn--disabled .v-icon, .theme--light.v-btn.v-btn--disabled .v-btn__loading{
    color:white !important;
  }
  &.v-btn > .v-btn__content .v-icon{
    color:white !important;
  }
}

.state-0{
  .circle{
      background:#F2F2F2;
      border: 3px solid $ols-t-lightGrey-darken;
      p{
        color:$ols-t-lightGrey-darken;
        margin:0px;
        font-size:1.125em;
      }
  }
}

.state-1,.state-2{
  .label{
    color:$ols-primary;
    font-weight: 600 !important;
  }
}

@media screen and (max-width: 1263px) {
  .label{
    max-width:100%;
  }
}

@media screen and (max-width: 600px) {
  .label{
    max-width:260px;
  }
  .step-btn{
    padding:20px 0 !important;
  }
  .step-btn-slot{
    margin-left:0;
  }
  .step-div:not(:last-of-type) .vertical_line {
    left: 17px !important;
  }
}

@media screen and (max-width: 440px) {
  .label{
    max-width:220px;
  }
}

@media screen and (max-width: 440px) {
  .label{
    max-width:180px;
  }
}
.step-div:not(:last-of-type) .vertical_line {
  border-left: 4px solid #b0b0b0;
  height: 44px;
  left: 8px;
  top: 39px;
  z-index: 0;
  position: absolute;
}


.step-div:not(:last-of-type) .state-2 .vertical_line{
  border-left: 4px solid #4e45d1;
}

</style>
<script>
export default {
    name: 'OLSStep',
    props: {
        order: Number,
        title: String,
        editable : false,
        state: 0, //0: Not Focusing, 1:Focusing, 2:Completed
    },
    data: function () {
      return {

      }
    },
  }
</script>
