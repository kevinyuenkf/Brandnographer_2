<template>
    <div class="d-flex flex-column" >
        <div class="tf-div ml-2 mt-1">
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field class="tf-multiple time" v-bind="attrs" v-on="on" maxlength=2 outlined v-model="value[0]" :ref="refID +'_0'" :error="shouldShow"></v-text-field>
                </template>
                <v-list flat>
                    <v-list-item-group color="primary">
                        <v-list-item v-for="(item,i) in items" :key="i"  @click="true">
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
             </v-menu>
            <div class="connect">:</div>
            <v-text-field class="tf-multiple time"  maxlength=2 outlined v-model="value[1]" :ref="refID +'_1'" :error="shouldShow"></v-text-field>
        </div>
        <div v-show="shouldShow" class="msg-div">{{msg}}</div>
    </div>
</template>
<style lang="scss">
.tf-div{
 display: flex;
 align-items: baseline;
 flex-wrap: wrap;
}

.tf-time{
    margin-right:8px !important;
}

.msg-div{
    align-self: flex-start;
    margin:-20px 0px 0px 10px ;
    font-size:12px;
    color:#FF5252;
}
.connect{
    margin-right:8px;
}
@media screen and (max-width: 1263px) {
.tf-time{
    margin-right:4px !important;
}

.connect{
    margin-right:4px;
}
}
</style>
<script>
export default {
    name: 'TimeTextfield',
    props: {
        refID:String,
        shouldShow:Boolean,
        msg:String,
    },
    data: () => ({
        value:[],
        items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
    methods:{
    }
  }
</script>