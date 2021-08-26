<template>
<v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
        <v-btn class="fontsize-btn " text v-bind="attrs" v-on="on" v-if="dataset.isFontsize">
            <span class="rem-1-125">A</span><span class="rem-0-875">A</span>
            <v-icon v-text="'mdi-menu-down'" class="ml-0" color="primary" dense ></v-icon>
        </v-btn>
        <v-btn text v-bind="attrs" v-on="on" v-if="!dataset.isFontsize">
            <span class="rem-1-125">{{dataset.text}}</span>
            <v-icon v-text="'mdi-menu-down'" dense color="primary"></v-icon>
        </v-btn>
    </template>
    <v-list flat>
      <!-- <v-subheader>{{dataset.subheader}}</v-subheader> -->
      <v-list-item-group v-model="dataset.selectedItem" color="primary">
        <v-list-item v-for="(item,i) in dataset.items" :key="i"  @click="$emit('itemOnclick',i)">
           <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
</v-menu>
</template>
<style scoped lang="scss">
.fontsize-btn{
    span{
        &:last-of-type{
            margin-top:2px;
            margin-left:-2px;
        }
    }
}
</style>
<script>
export default {
    name: 'ABButton',
    props: {
        dataset: Object,
    },
    data: () => ({

    }),
  }
</script>