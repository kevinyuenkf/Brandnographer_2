<template>
    <div class="d-flex flex-column mb-4" >
        <div class="tf-div">
            <div v-for="(item,i) in amount"  :key="i" class="d-flex align-baseline">
                <v-text-field class="tf-multiple"  maxlength=1 outlined v-model="value[i]" :ref="refID" @input="focusNextItem(i)" @focus="selectItem(i)" :error="shouldShow" :disabled="disabled"></v-text-field>
                <div class="connect" v-if="checkIfConnect(i)" :style="!unconnect?'':'color:transparent;margin:0px 5px;'">-</div>
            </div>    
        </div>
        <div v-show="shouldShow" class="msg-div">{{msg}}</div>
    </div>
</template>
<style lang="scss">
.tf-div{
 display: flex;
 flex-wrap: wrap;
}

.tf-multiple{
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
.tf-multiple{
    margin-right:4px !important;
}

.connect{
    margin-right:4px;
}
}
</style>
<script>
export default {
    name: 'MultipleTextfield',
    props: {
        disabled:false,
        unconnect:false,
        refID:String,
        shouldShow:Boolean,
        msg:String,
        amount: Number,
        connect:Array,
        inValue:Array,
    },
    data: function () {
        return {
            value: this.inValue
        }
    },
    methods:{
        focusNextItem : function (i){
            this.$emit('onInputDone',this.value,i);
            if(i+1>=this.amount || this.value[i]==null || this.value[i]==''){
                return;
            }
            const target = this.$refs[this.refID][i+1];
            target.$refs.input.select();
        },
        selectItem : function (i){
            const target = this.$refs[this.refID][i];
            target.$refs.input.select();
        },
        checkIfConnect : function (i){
            if(this.connect.length <= 0 ){
                return false;
            }else{
                var v = false;
                this.connect.forEach((el) => {
                    if(i==el){
                        v = true;
                    }
                })
                return v;
            }
            
        }
    }
  }
</script>