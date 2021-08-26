<template>
    <v-expansion-panel class="ols-expansion-panel" :class="'p-style-' + this.type">
        <v-expansion-panel-header disable-icon-rotate @click="active=!active">
            <div class="header-div " :class="'h-style-' + this.type">
                <h2 v-if="type==0">{{order}}.</h2>
                <h2>{{title}}</h2>
            </div>
          <template v-slot:actions>
            <v-icon :id="'my-icon-'+order" color="primary">
              {{active?'mdi-minus':'mdi-plus'}}
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content >
          <div class="expand-content-div">
            <slot></slot>
          </div>
        </v-expansion-panel-content>
        <BoldLine v-if="type==0" :options="{color:'#DBDBDB',height:'2px',width:'100%'}"></BoldLine>
        <BoldLine v-if="type==1" :options="{color:'#CEC3F0',height:'3px',width:'100%'}"></BoldLine>
    </v-expansion-panel>
</template>
<style scoped lang="scss">


.ols-expansion-panel{
    box-shadow: none;
    background-color: transparent !important;
    &::before{
        box-shadow: none;
    }
    &:not(:first-child)::after{
        border:0px !important;
    }
    font-size:1em;
}

.v-expansion-panel--active:not(:first-child), .v-expansion-panel--active + .v-expansion-panel{
    margin-top:0px !important;
}

.p-style-0{
    button{
        font-size:1em;
        padding:25px 18px 25px 0px !important;
    }
}

.p-style-1{
    button{
        padding:44px 18px 44px 0px !important;
    }
}

.header-div{
    display: flex;
    align-items: baseline;
}

.h-style-0{
    h2{
        font-size:1.375em;
        line-height:1.45em;
        color:$ols-t-dark;
        margin:0px;
        &:first-child{
            font-size:1.45em;
            color:$ols-primary;
            min-width:60px;
        }
    }
}

.h-style-1{
    h2{
        font-size:1.75em;
        line-height:1.4em;
        color:$ols-primary;
        margin:0px;
    }
}

.expand-content-div{
    margin:0px -6px 0px -24px;
}

.v-expansion-panel--active > .v-expansion-panel-header {
    min-height:48px;
}


@media screen and (max-width: 1263px) {


.p-style-0{
    button{
        font-size:1em;
        padding:25px 18px 25px 0px !important;
    }
}

.p-style-1{
    button{
        padding:40px 18px 40px 0px !important;
    }
}
.h-style-0{
    h2{
        font-size:1.1875em;
        line-height:1.425em;
        color:$ols-t-dark;
        margin:0px;
        &:first-child{
            font-size:1.75em;
            color:$ols-primary;
            min-width:60px;
        }
    }
}

.h-style-1{
    h2{
        font-size:1.25em;
        line-height:1.425em;
        color:$ols-primary;
        margin:0px;
    }
}

}

</style>
<script>
import BoldLine from '../misc/bold-line'
export default {
    name: 'OLSExpansion',
    components: {
      BoldLine
    },
    props: {
        type:Number, //0:Normal, 1:Bigger
        order:Number,
        title:String,
    },
    data: function () {
        return {
            active:false,
        }
    }
  }
</script>